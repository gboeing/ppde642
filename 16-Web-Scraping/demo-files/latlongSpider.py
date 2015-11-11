#import the python modules you'll need
from datetime import datetime, timedelta, date
from scrapy.spider import Spider
from scrapy.selector import Selector
from craigslistRent.items import CraigslistRentItem
from scrapy import log
import pandas, re

class MySpider(Spider):
	
	#name of your spider
	name = 'latlongSpider'
	allowed_domains = ['craigslist.org']
	
	try:
		#load the links from the rents dataset
		df = pandas.read_csv('temp-rentals.csv')
		start_urls = df['link'].tolist()
		
	except:
		print 'temp-rentals.csv does not exist'
		pass
	
	def parse(self, response):
		
		#lat-long data is stored in the div with id=map
		selection = Selector(response)
		maps = selection.xpath("//div[@class='mapAndAttrs']/div[@class='mapbox']/div[@id='map']")
		
		#create a new item to contain your scraped data elements
		item = CraigslistRentItem()
		
		for map in maps:

			#extract the lat and long data elements
			item['latitude'] = map.xpath('@data-latitude').extract()
			item['longitude'] = map.xpath('@data-longitude').extract()
			
			#extract the pid from the url - we'll use this to match lat-long to the rest of the dataset
			url = response.url
			
			#use a regular expression to extract pid from the string of numbers in the .html filename
			pids = re.findall(r'/([0-9]+)\.html', url)
			for pid in pids:
				item['pid'] = [pid]	
					
		return item