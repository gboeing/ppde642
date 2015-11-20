
This zip file contains a number of documents containing materials related to the table which you have downloaded.  These include: 
	1.  aff_download_readme.txt (this file)
	2.  <table_id>.csv (data file)
	3.  <table_id>_ann.csv (annotation file, if applicable) 
	4.  <table_id>.txt (notes file)
	5.  <table_id>_metadata.csv (metadata file)

Naming convention: 	

	The table file name is based on the Table Id.  
	For Geographic Comparison Tables (GCT) and Geographic Ranking Tables (GRT), the table file name is based on Table ID and Stub.


Document descriptions:

     Data file:
        file name: <table_id>.csv 
        Includes the tabular data for the table.

     Annotation file:        
        file name: <table_id>_ann.csv
        This file contains cell annotations, which could be simple jam values, flag symbols, or codes of more complex cell annotations that replace the values in the data file.  This file has a parallel structure to the data file, but it includes only those lines that correspond to the lines from the data file that have annotations. If there are no lines to be included in the annotation file, then the whole annotation file is omitted.  A cell annotation starts with '$' or 'ECONF$', and the string that follows the '$' char is the jamming string or flag symbol.  For example, '$1000+' is a simple cell annotation that would replace the content of the cell with the string '1000+'.  A cell annotation that does not start with '$', such as 'ECONF$', is a code that is described in the notes file (see below).

     Notes file:
        file name: <table_id>.txt
        This file contains the head notes, footnotes and the description of the cell annotations occurring in the data file (simple jamming cell annotations are excluded).

     Metadata file:        
	file name: <table_id>_metadata.csv
        This file contains the header information (transposed), without the data associated with the table.        