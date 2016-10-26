# Geocoding and reverse geocoding with Python

### Overview:

Today we'll learn how to geocode addresses to latitude/longitude, explore locations with the 
Google Places API, reverse geocode latitude/longitude to an address, and reverse geocode 
latitude/longitude to block FIPS code.

### Readings:

- Google Maps geocoding API: https://developers.google.com/maps/documentation/geocoding/intro
- Google Places API: https://developers.google.com/places/
- Google Maps reverse geocoding API: https://developers.google.com/maps/documentation/geocoding/intro#ReverseGeocoding
- FCC Census Block Conversions API: https://www.fcc.gov/developers/census-block-conversions-api

### Getting Started:

You'll need a Google API key to use the Google Places API Web Service:

1. Go to https://console.developers.google.com/project and sign in
1. Create a new project and call it cp255, then click create
1. On the screen with all the APIs listed, click "Google Places API Web Service" under Google Maps APIs, then click the Enable API button
1. Go to Credentials and click create credentials, choose API Key
1. Copy your API key when it is displayed, then create keys.py with the line google_maps_api_key='YOUR-KEY-HERE'

### Example API calls:

- Google Maps geocoding API: http://maps.googleapis.com/maps/api/geocode/json?address=350+5th+Ave,+New+York,+NY+10118&sensor=false
- Google Places API: https://maps.googleapis.com/maps/api/place/search/json?keyword=coffee&location=37.8683811,-122.2589063&radius=1000&sensor=false&key=YOUR-KEY-HERE
- Google Maps reverse geocoding API: https://maps.googleapis.com/maps/api/geocode/json?latlng=34.537094,-82.630303
- FCC Census Block Conversions API: http://data.fcc.gov/api/block/find?format=json&latitude=37.861055&longitude=-122.256463

### Class Session:

Run through the IPython notebook.
