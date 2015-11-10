# Intro to pandas: Python for data analysis

### Overview:

Today we'll do an overview of pandas - a powerful Python data analysis library that expands Python's capabilities into 
and even beyond the territory of R and Stata. We'll learn about loading data, the basics of pandas data structures,
how to subset and filter data sets, how to calculate summary statistics, how to deal with missing values, how to merge data
sets, how to create new variables, how to create basic visual plots, and how to export data.

### Readings:

Chapters 2, 4, and 5 of Wes McKinney's [Python for Data Analysis](http://shop.oreilly.com/product/0636920023784.do)

### Class Session:

Run through the IPython notebook.

### Exercise:

1. Create a new, clean IPython notebook to contain your homework submission. Download the items.csv and save it to your working directory - aka, the same directory your notebook is in.
2. Using the items.csv file and the pandas techniques we've learned:
   1. Clean the price, bedrooms and sqft fields and make each a float type
   2. Calculate the mean, minimum, and maximum rent price, bedrooms and square footage
   3. Create a subset dataframe with listings between $200 and $10,000, and excluding listings with missing values on bedrooms or square footage
   4. Calculate the mean, minimum, and maximum rent price, bedrooms, and square footage on this filtered subset
   5. Create histogram plots of the full dataset and the filtered dataset, for price, bedrooms and sqft

Use comments to document all of your logic throughout the notebook. Make sure your entire notebook runs properly and without any errors. Click Kernel > Restart > Clear all outputs and restart. This clears your memory and re-initializes your notebook. Then click Cell > Run all and make sure everything behaves properly.
