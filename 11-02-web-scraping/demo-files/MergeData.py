# Purpose: Merges two datasets on pid to combine lat-long data with rental listing data
import pandas, os
from time import strftime

# load the two datasets
rents = pandas.read_csv('temp-rentals.csv', usecols=['pid', 'neighborhood', 'title', 'price', 'date', 'sqft', 'bedrooms', 'link', 'sourcepage'])
latlong = pandas.read_csv('temp-latlong.csv', usecols=['pid', 'latitude', 'longitude'])

# drop duplicates from each dataset, then combine them into one
rents = rents.drop_duplicates(subset='pid')
latlong = latlong.drop_duplicates(subset='pid')
combined = pandas.merge(rents, latlong, on='pid', how='left')

# save the combined dataset to csv and give filename a timestamp
filename = 'craigslist-' + strftime('%Y-%m-%d-%H-%M-%S') + '.csv'
combined.to_csv(filename, index=False)

# delete the temp files
os.remove('temp-rentals.csv')
os.remove('temp-latlong.csv')