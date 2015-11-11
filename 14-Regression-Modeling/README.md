# Regression modeling in Python

### Overview:

The first part of this notebook follows closely the introductory examples in the Statsmodels online documentation. 
We won't try to provide the theoretical basis for regression models here.  You can consult any number of online 
resources for this, including Wikipedia's explanation of 
[Ordinary Least Squares Regression](https://en.wikipedia.org/wiki/Ordinary_least_squares). 
We will be using the Statsmodels library for this ([documentation here](http://statsmodels.sourceforge.net/stable/index.html)).

The statistical model is assumed to be $Y = X\beta + \epsilon$, where $\epsilon\sim N\left(0,\sigma^{2}\Sigma\right)$

Depending on the assumption on $\Sigma$, Statsmodels have currently four classes available

- GLS : generalized least squares for arbitrary covariance $\Sigma$
- OLS : ordinary least squares for i.i.d. errors $\Sigma=\textbf{I}$
- WLS : weighted least squares for heteroskedastic errors $\text{diag}\left  (\Sigma\right)$
- GLSAR : feasible generalized least squares with autocorrelated AR(p) errors $\Sigma=\Sigma\left(\rho\right)$

We focus here on the simple Ordinary Least Squares (OLS) model that is the most widely used, but makes strong 
assumptions about the errors being indepentently and identically distributed (i.i.d.).  When these conditions 
are met, the OLS parameter estimates are the Best Linear Unbiased Estimates (BLUE).

More intuitively (perhaps), what linear regression using the OLS estimator attempts to do is find the vector 
of parameters ($\beta$), such that when you compute a linear function $X\beta$ you generate a predicted array 
of $\hat{y}$ that, compared to the observed $y$, the squared sum of each observation's 
error ($\epsilon_{i} = \hat{y}_{i} - y_{i}$) across all the observations ($\Sigma^{2}\epsilon_{i}$), is minimized.

### Readings:

Gentle introductions to multiple regression:

- http://www.biddle.com/documents/bcg_comp_chapter4.pdf
- http://onlinestatbook.com/2/regression/multiple_regression.html

### Class Session:

Run through the IPython notebook.

### Exercise:

Step one: get your hands on a data set. You can download one as a file, connect to an API to download data, 
or use some data set you're working with elsewhere in life. Whatever you'd like – but perhaps consider a 
data set that helps you move toward the final project.

Step two: create a new IPython notebook and use pandas to load your data set (and clean/process it if needed). 
Using the techniques we learned in class, use regression analysis to discover how multiple predictor variables 
are related to a dependent variable. Include a markdown cell that interprets the output of your regression and 
what it reveals.
