Today we will be learning pandas - a powerful python data analysis library - by way of [Juan Shishido's] (https://github.com/dlab-berkeley/introduction-to-pandas) excellent intro to pandas IPython notebook. Juan was a CP255 student last year and now runs this workshop at the D-Lab.

# pandas

Materials for teaching the introductory pandas workshop at UC Berkeley's D-Lab.

## Set Up

For this workshop we'll be using a Jupyter notebook. (An IPython notebook will be provided for attendees who are not yet on IPython 3.0.0 or above.)

The best learning experience happens when you can edit and run code. So, please have pandas, Matplotlib, and Jupyter or IPython (and the notebooks) installed. There are several options for getting your environment set up.

1. [BCE Summer 2015](http://bce.berkeley.edu/install.html)
2. [Anaconda](http://continuum.io/downloads)
3. A package manager such as [pip](https://pip.pypa.io/en/stable/installing.html)

Both BCE and the Anaconda distribution will install everything you need for this workshop. If you decide to use `pip`, you can do the following:

```
# install pandas and Matplotlib
$ pip install pandas matplotlib

# install Jupyter
$ pip install --upgrade jupyter
```

Once those are installed, you can get the necessary files for this workshop by doing the following:

```
# clone the repository
$ git clone https://github.com/dlab-berkeley/introduction-to-pandas.git

# navigate to the repo
$ cd introduction-to-pandas

# start the interactive session
$ jupyter notebook

# alternatively
$ ipython notebook
```

## Outline

For this workshop, we'll go through an example using European unemployment data. We'll load, view, and modify the data as well as calculate some descriptive statistics. The idea is to get a sense of what it would be like to use pandas as part of your workflow.

We plan to cover:

* pandas data structures
* loading data
* subsetting and filtering
* calculating summary statistics
* dealing with missing values
* merging data sets
* creating new variables
* basic plotting
* exporting data
