# Spatial Analysis and Cartography with Python

### Overview:

Today we'll learn about spatial analysis, data projection, and mapping with Python. 
We'll use [geopandas](http://geopandas.org/), which spatializes pandas dataframes, 
matplotlib's [basemap](http://matplotlib.org/basemap/) toolkit, and [OSMnx](http://geoffboeing.com/2016/11/osmnx-python-street-networks/). 

##### Some terminology:
- **geoid**: (that's *gee-oid*) the surface of the earth's gravity field, which approximates mean sea level
- **spheroid** or **ellipsoid** (interchangeable terms): a model that smoothly approximates the geoid
- **datum**: based on spheroid but incorporates local variations in the shape of the Earth. Used to describe a point on the Earth's surface, such as in latitude and longitude.
  - NAD83 (North American Datum 1983) uses the GRS80 spheroid
  - WGS84 (World Geodetic Survey 1984 datum) uses the WGS84 spheroid
  - The latitude and longitude coordinates of some point differ slightly based on the datum. GPS uses WGS84.
- **coordinate reference system** (CRS) or spatial reference system (SRS): a series of parameters that [define](http://spatialreference.org/) the coordinate system and spatial extent (aka, domain) of some dataset.
- **geographic coordinate system** (GCS): specifies a datum, spheroid, units of measure (such as meters), and a prime meridian
- **projected coordinate system** or map projection: projects a map of the Earth's 3-D spherical surface onto a flat surface that can be measured in units like meters. Here's a [list of projections](https://en.wikipedia.org/wiki/List_of_map_projections).
- **eastings** and **northings**: the x and y coordinates of a projected map, usually measured in meters
- **false origin**: the 0,0 origin point from which eastings and northings are measured on the map, usually the lower left corner rather than the center
- **PROJ.4**: a library to convert/project spatial data with consistent CRS [parameter names](https://github.com/OSGeo/proj.4/wiki/GenParms)

##### Common CRS parameters (and their PROJ.4 names):
- datum (datum)
- ellipse (ellps)
- projection (proj)
  - the name of the projected coordinate system, such as Albers Equal Area (aea) or Lambert Conformal Conic (lcc)
- standard parallels (lat_1, lat_2)
  - where the projection surface touches the globe - at the standard parallels, the projection shows no distortion
- central meridian and latitude of origin (lon_0, lat_0)
  - the origin of the projection's x and y coordinates (eastings and northings) - usually the center of the map projection
- false easting and false northing (x_0, y_0)
  - offsets to add to all your eastings and northings - usually used to make all the coordinates on the map positive numbers by starting 0,0 at the lower left corner rather than the center of the map (see false origin, above)

##### Common projection types:
- *equal area* projections: maintain area at the expense of shape, distance, and direction - such as the [Albers Equal Area](https://en.wikipedia.org/wiki/Albers_projection) projection
- *conformal* projections: maintain shapes at the expense of area, distance, and direction - such as the [Lambert Conformal Conic](https://en.wikipedia.org/wiki/Lambert_conformal_conic_projection) projection
- *equidistant* projections: preserve distance from one point or along all meridians and parallels
- *azimuthal* projections: maintain direction from one point to all other points - such as an [orthographic](https://en.wikipedia.org/wiki/Orthographic_projection_in_cartography) projection
- others compromise to minimize overall distortion or aim for aesthetic value - such as the [Robinson](https://en.wikipedia.org/wiki/Robinson_projection) projection

### Readings:

Look over the user guides for [geopandas](http://geopandas.org/) and [basemap](http://matplotlib.org/basemap/) to get a sense of what they do and how they work, and read
these overviews of the foundations of GIS:

- http://www.icsm.gov.au/mapping/overview.html
- http://www.icsm.gov.au/mapping/coordinates.html
- http://www.icsm.gov.au/mapping/datums1.html
- http://www.icsm.gov.au/mapping/about_projections.html

### Getting Started:

You'll need to install geopandas and basemap. If you don't know your python version or architecture, 
at a command prompt run "conda info" then look at the platform and python version lines.

1. geopandas:
    1. mac or linux: http://geopandas.org/install.html
    2. windows: http://geoffboeing.com/2014/09/using-geopandas-windows/
2. matplotlib's basemap add-on toolkit:
    1. mac or linux:
        1. First, conda install pillow
        2. Then conda install basemap. If it fails, install basemap from source. Instructions [here](http://matplotlib.org/basemap/users/installing.html#installation) and file [here](http://sourceforge.net/projects/matplotlib/files/matplotlib-toolkits/basemap-1.0.7/basemap-1.0.7.tar.gz/download) If you've never seen tar.gz files before, think of them as doubly-zipped files. First you unzip the .gz and you’ll get a folder with a .tar file inside. Then you unzip the .tar file and you'll get the basemap-1.0.7 folder that the instructions refer to generically as basemap-x.y.z.
    2. windows:
        1. First, conda install pillow
        2. Then conda install basemap. If it fails, install basemap from Gohlke's Python wheel for basemap. If that fails, use the windows installer – choose the one for your python version (such as 2.7) and architecture (32 or 64 bit): http://sourceforge.net/projects/matplotlib/files/matplotlib-toolkits/basemap-1.0.7/ (Links to an external site.) For example I downloaded and ran the file "basemap-1.0.7.win-amd64-py2.7.exe" because I have 64 bit python 2.7.

### Class Session:

Run through the IPython notebook.

### More Resources:

If you're interested in more fine-grained control over plotting your basemap, you can project a shapefile and convert each piece of geometry inside 
it into a patch for matplotlib to plot (individually customizable). I describe this in this notebook: [spatial-joins-plotting.ipynb](spatial-joins-plotting.ipynb)

### Exercise:


