# Spatial cluster analysis with Python

### Overview:

Data reduction in statistics and machine learning: factor analysis, principle components analysis, cluster analysis

- in statistics, several observed variables might represent a single latent variable (reduce number of dimensions)
- in spatial analysis, several lat-long points may represent a single "place" (reduce number of examples)

Cluster analysis algorithms

- k-means partitions the data space into Voronoi tessellations. Translation: you give it a desired number of clusters and it will partition them into equal-sized clusters (minimizes variance and fails at density-based clustering).
- DBSCAN discovers clusters as dense areas in space, surrounded by sparser areas. Points in the sparse areas are usually considered noise (needs there to be drop-offs in density to detect cluster borders).
- OPTICS is similar to DBSCAN, but lets you find clusters of varying density.
- many more...

DBSCAN is appropriate for geospatial data, and we'll focus on it today using scikit-learn.

### Readings:

- http://scikit-learn.org/stable/modules/clustering.html
- http://scikit-learn.org/stable/modules/clustering.html#dbscan

### Getting Started:

- Install geopy. From a command prompt, run pip install geopy
- Install shapely
  - Mac or Linux: from a command prompt, run pip install shapely
  - Windows: install using these [Windows binaries](http://www.lfd.uci.edu/~gohlke/pythonlibs/#shapely)

### Class Session:

Run through the IPython notebook.

### More Resources:

If you're interested in cluster analysis and want to explore further, advanced topics include:
- [R-trees](https://en.wikipedia.org/wiki/R-tree)
- [k-d trees](https://en.wikipedia.org/wiki/K-d_tree)
- [OPTICS](https://en.wikipedia.org/wiki/OPTICS_algorithm)
- [ELKI](http://elki.dbs.ifi.lmu.de/), a Java-based tool, lets you use DBSCAN explicitly with lat-long distances

### Exercise:

Step one: get your hands on a data set. You can download one as a file, connect to an API to download data, or use some 
data set you’re working with elsewhere in life. Whatever you’d like – but perhaps consider a data set that helps you move 
toward the final project.

Step two: create a new IPython notebook and use pandas to load your data set (and clean/process it if needed). Using the 
techniques we learned in class, use cluster analysis to discover clusters in your spatial data. Visualize your clusters. 
Include a markdown cell that explains why you clustered your data the way you did and what it reveals.
