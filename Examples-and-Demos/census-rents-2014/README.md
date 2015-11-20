# The Landscape of U.S. Rents

### Overview:

See the interactive map of U.S. rents in action: http://geoffboeing.com/2015/11/landscape-us-rents/

Which U.S. cities are the most expensive for rental housing? Where are rents rising fastest? 
I analyzed, mapped, and visualized the American Community Survey (ACS)'s latest batch 
of 1-year data. The 2014 rent 1-year data was released in September. I downloaded 
the 2010 and 2014 ACS median contract rent data and the annual estimates of resident 
population from 2010-2014 from the Census Bureau's American FactFinder web site.

These data sets cover every U.S. metropolitan and micropolitan area for which the ACS 
gathers rent data. Some metro area names and IDs changed between 2010 and 2014, in which 
instances I had to map them to one another. I then parsed out the principle city and 
state, and geocoded them to latitude-longitude for mapping (see Ipython Notebook).

I did all the analysis and static mapping in Python with pandas and basemap. I made the 
interactive map with Leaflet.