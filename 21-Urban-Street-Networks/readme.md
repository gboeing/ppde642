# Urban street network analysis with Python and OSMnx

Read this full overview of [OSMnx: Python for Street Networks](http://geoffboeing.com/2016/11/osmnx-python-street-networks/).

[OSMnx](https://github.com/gboeing/osmnx) is a Python library that lets you download spatial geometries and construct, 
project, visualize, and analyze street networks from OpenStreetMap's API. Users can construct walkable, drivable, or 
bikable urban networks with a single line of Python code. 

OSMnx lets you download spatial "place boundary" geometries from OpenStreetMap, save them to shapefiles, project them, 
and plot them.

OSMnx lets you download street network data and build topologically-corrected street networks, project to UTM and plot 
the networks, and save the street network as SVGs, GraphML files, or shapefiles for later use. The street networks are 
directed and preserve one-way directionality.

OSMnx allows users to save street networks to disk as shapefiles to work with in GIS software, as GraphML files to work 
with in Gephi or NetworkX, and as SVG files to work with in Illustrator. It also allows you to save place boundary 
geometries as shapefiles. 

OSMnx allows you to calculate origin-destination routes along the network and quickly visualize them. You can easily 
visualize one-way streets, cul de sacs, high/low connectivity intersections, etc. OSMnx provides built-in capabilities 
to quickly calculate spatial network metrics like intersection density, average intersection degree, edge density, 
average street segment length, etc.
