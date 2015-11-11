# Web scraping with Python

### Overview:

A web scraper is a small computer program that accesses web pages, finds specified data elements on the page, 
extracts them (and transforms them if necessary), and compiles this data into a coherent data set.
A web scraper can be run iteratively over many web pages to collect data spread across thousands or millions of pages,
allowing you to construct large, robust data sets out of otherwise messy text that would only appear in your web browser.
Today we will learn about web scraping using Python's *scrapy* web scraping library.

### Readings:

- [HTML tutorial](http://www.w3schools.com/html/html_intro.asp) - just the sections HTML introduction, HTML basics, HTML elements, and HTML attributes
- [XPath tutorial](http://www.w3schools.com/xsl/xpath_intro.asp) 
- [Scrapy at a glance](http://doc.scrapy.org/en/latest/intro/overview.html)

### Getting Started:

- Install scrapy with: conda install scrapy
- Install service_identity package with: pip install service_identity
- Verify scrapy in command prompt with: scrapy version

### Class Session:

1. In a command prompt or terminal window, change directory to the root and create a new project with the command: scrapy startproject craigslistRent
2. Go to craigslist page and identify the elements of data you want from it
  1. Right click the page and choose "view source" to see where these data elements are in the HTML
  2. Review http://www.w3schools.com/xpath/default.asp to figure out how to access your desired data elements in the HTML using XPath
3. Edit items.py to reflect the desired data elements
4. Create a new spider python file to scrape the rental listings page
  1. Give your spider a name, like indexSpider
  2. Add the URLs to crawl
  3. Add the data cleaning functions
  4. Add the parse function that selects data elements with XPath
5. Test with: scrapy crawl indexSpider
6. Run the scraper: scrapy crawl indexSpider -o temp-rentals.csv -t csv
  1. indexSpider is the name you provided for your spider
  2. -o temp-rentals.csv tells it to output to a file called temp-rentals.csv
  3. -t csv tells it to format the data output to this file as comma-separated values
  4. Remember that each time it runs, it appends, not overwrites the output file
7. The previous step should have created a file called temp-rentals.csv with your data in it. Next we need to create a spider that follows each link to the listing's page to acquire lat-long data
8. Create a new spider python file to get lat-long from the individual listings’ pages
  1. Give your spider a name, like latlongSpider
  2. Add the URLs to crawl dynamically by reading them from rents.csv
  3. Add the parse function that selects data elements with XPath and cleans up the data
9. Run the scraper: scrapy crawl latlongSpider -o temp-latlong.csv -t csv
10. The previous step should have created a file called temp-latlong.csv with your lat-long data in it. Finally, use pandas and the MergeData.py script to merge the rental listings from temp-rentals.csv with the lat-long data in temp-latlong.csv. Your final combined output is in craigslist-timestamp.csv.
