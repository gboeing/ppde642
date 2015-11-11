# Working with web APIs

### Overview:

Today we'll learn how to work with web APIs. Socrata is a common vendor of open data portals for cities around the world. The Twitter
API gives us a nice intro to working with massive social media data.

### Readings:

- Read the Socrata [getting started](https://dev.socrata.com/consumers/getting-started.html) page
- Look over some of the resources that companies and public agencies have put together for third-party software developers:
  - BART: http://api.bart.gov/docs/overview/index.aspx
  - Twitter: https://dev.twitter.com/overview/documentation
  - Google Maps: https://developers.google.com/maps/get-started/

### Getting Started:

- Install the TwitterAPI python module by running *pip install TwitterAPI* from a command prompt.
- Sign up for a Twitter API key:
  - Log into Twitter or create an account: http://twitter.com
  - Register a new app development project: https://dev.twitter.com/apps/new (The form is geared toward people making smartphone or web apps, but you still have to fill it out... You can call the app an in-class demo and give the URL of your own Twitter page, for example)
  - Submit the form, go to the "Keys and Access Tokens" tab, and click on "Create my access token" at the bottom of the page
  - Copy these four codes into the keys.py, replacing the demo credentials: (a) consumer key, (b) consumer secret, (c) access token, (d) access token secret

### Class Session:

1. Run through the API demo IPython notebook to learn how to work with the Twitter API.
2. Run through the San Francisco open data portal demo IPython notebook to learn how to work with Socrata data portals.

### Exercise:

Create an IPython notebook that connects to a web API and downloads a spatial data set (preferably with lat-long coordinates). 
Clean and process the data in this notebook, if needed. 
Then create a new CartoDB map to visualize the spatial data. Embed your map in a Wordpress blog post and 
provide a brief write-up of your data and what it reveals or any insights gleaned from it.

Use the techniques we have learned in class over the past week. 
Consider using the Twitter API, the SF open data [portal](https://data.sfgov.org/), the Berkeley open data [portal](https://data.cityofberkeley.info/), 
or any other city with open data that you can access programmatically with Python. Consider possible final project ideas as you explore these open data sets.
