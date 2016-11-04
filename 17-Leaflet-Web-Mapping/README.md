# Web mapping with Leaflet

### Overview:

Today we'll learn about web mapping with Leaflet, a javascript library for making self-hosted interactive
web maps. It provides more flexibility than CartoDB, but you'll need to keep your data file sizes small enough
that they're easily downloaded by the viewer of your web page.

### Readings:

- http://www.citylab.com/design/2015/06/who-owns-the-digital-map-of-the-world/396119
- http://leafletjs.com/reference.html


### Class Session:

- Run through the lecture example to set up a simple point data map
- Convert a pandas dataframe to geojson for easy web mapping
- Run through the example Berkeley 311 map
- Run through the example chloropleth map of census tracts

### More Resources:

- http://geojson.io/
- http://leafletjs.com/

### Exercise:

First, create a dataset.js geojson file like we did in class. You can either:

1. Use http://geojson.io/ like we did in class to create a simple, manual data set of spatial features, based on something that interests you. If you go this route, create at least 50 points and have at least 2 attributes for each.
2. Or, if you're feeling ambitious, create a geojson data set from a pandas dataframe, such as data you're working on for the final project. Keep your final geojson file under 2-3 mb.

Now that you have your geojson data set, create a new leaflet map and Wordpress blog post:

1. Review Sam’s examples from class and my berkeley-311-map.html example to create a leaflet map HTML file (call it ex9map.html). Link to the cloudflare leaflet js and css files like I do on lines 6 and 7 of berkeley-311-map.html – don’t use the same links on those lines as we used in class.
2. Add your 2+ attributes to the pop-up when your points are clicked. Optionally: consider styling your points differently based on some attribute (for example, if your data falls into 3 categories based on some column/attribute value, consider coloring your points by category like my example).

Lastly, create a Wordpress blog post and embed your leaflet map:

1. Use an FTP client such as FileZilla (just like we did at the beginning of the semester) to connect to your OCF site. Inside your public_html folder, create a new folder called leaflet. Upload your ex9map.html and dataset.js into this new leaflet folder. Then visit https://www.ocf.berkeley.edu/~your-user-name/leaflet/ex9map.html in your web browser to make sure everything looks/loads right.
2. Create a new Wordpress blog post. Write a short paragraph explaining your map.
3. Switch from the Wordpress "visual" to the "text" editor tab and add an iframe snippet (just like we used to embed CartoDB maps) linking to your ex9map.html file. The iframe code snippet will look like: <iframe src='https://www.ocf.berkeley.edu/~your-user-name/leaflet/ex9map.html' width='100%' height='400' scrolling='no'></iframe>
