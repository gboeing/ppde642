# Data visualization with Python

### Overview:

Today we'll learn how to visualize data using pandas and matplotlib. We'll dissect matplotlib to take full advantage
of its capabilities to make attractive, publication-ready graphics. We'll break down the components and styling of 
bar charts, line charts, scatter plots, and pie charts. You'll learn the gist of dissecting matplotlib and bending 
it to your will. Once you've learned how to do all of this, other Python visualization libraries are quite easy to pick up.

### Readings:

- Chapter 8 in [Python for Data Analysis](http://shop.oreilly.com/product/0636920023784.do)
- Matplotlib documentation: http://matplotlib.org/api/index.html
- Matplotlib examples: http://matplotlib.org/examples/index.html
- Matplotlib gallery: http://matplotlib.org/gallery.html

### Getting Started:

- Install the TwitterAPI python module by running *pip install TwitterAPI* from a command prompt.
- Sign up for a Twitter API key:
  - Log into Twitter or create an account: http://twitter.com
  - Register a new app development project: https://dev.twitter.com/apps/new (The form is geared toward people making smartphone or web apps, but you still have to fill it out... You can call the app an in-class demo and give the URL of your own Twitter page, for example)
  - Submit the form, go to the "Keys and Access Tokens" tab, and click on "Create my access token" at the bottom of the page
  - Copy these four codes into the keys.py, replacing the demo credentials: (a) consumer key, (b) consumer secret, (c) access token, (d) access token secret

### Class Session:

Run through the IPython notebook.

### More Resources:

There are other nice Python data visualization libraries out there, such as:
- seaborn: https://web.stanford.edu/~mwaskom/software/seaborn/
- bokeh: http://bokeh.pydata.org/en/latest/

### Exercise:

Step one: get your hands on a data set. You can download one as a file, connect to an API to download data, or use some 
data set you’re working with elsewhere in life. Whatever you’d like – but perhaps consider a data set that helps you move 
toward the final project.

Step two: create a new IPython notebook and use pandas to load your data set and clean/process it as needed. Using the 
techniques we learned in class and read about in McKinney's Python for Data Analysis chapter 8, visualize interesting 
aspects of your data set. Create at least 4 (in total) visualizations using at least 3 different visualization types 
(such as bar charts, line charts, scatter plots, or anything else). You can use matplotlib like we learned in class, 
or explore other Python visualization libraries like seaborn or bokeh. Each visualization should be followed by a markdown 
cell that explains what you are visualizing and why it is interesting.
