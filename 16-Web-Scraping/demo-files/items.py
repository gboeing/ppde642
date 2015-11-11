# Define here the models for your scraped items

from scrapy.item import Item, Field

class CraigslistRentItem(Item):
	pid = Field()
	price = Field()
	neighborhood = Field()
	bedrooms = Field()
	sqft = Field()
	date = Field()
	title = Field()
	link = Field()
	sourcepage = Field()
	latitude = Field()
	longitude = Field()