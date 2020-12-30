**Advanced Urban Analytics**

USC PPD599 / Spring 2020 / 4 units




# Instructor Info

[Prof. Geoff Boeing](https://geoffboeing.com)

Email: boeing at usc dot edu

Office hours: Thurs xx:xx-xx:xx, Zoom ([you must sign-up in advance online](https://www.wejoinin.com/sheets/vqcmr/))

Classroom location and meeting times are [available online](https://classes.usc.edu/)





# Course Description

This course provides you with a modern toolkit and skills for analyzing urban data. It will teach Python, spatial analysis, network analysis, spatial models, and introductory applied machine learning. The course takes a computational social science approach to working with data. It uses Python and Jupyter notebooks to cover coding and statistical methods that students can reproduce and experiment with in real-time in the classroom.

Students will be expected to:

  - Complete and be prepared to discuss all assigned readings
  - Attend the lecture
  - Complete and submit assigned homework
  - Present a mini-lecture on an applied method

The course has prerequisites: students are expected to have taken PPD534 or an equivalent introductory course on basic Python, stats, and spatial concepts. These prerequisites will not be covered from the ground-up as you are expected to be already familiar with them. This course requires patience and practice: learning to code will take lots of trial-and-error, self-direction, repetition, and experimentation on your part. You will get out of it what you are willing to put into it. Please note that this syllabus is a living document and may be updated by the instructor during the semester as needed.




# Learning Objectives

  - Understand the nature and applications of urban analytics and urban science
  - Write code to organize, analyze, and visualize urban data
  - Model and analyze urban networks
  - Train and interpret urban models




# Questions and Assistance

I am available if you need help throughout the semester and am happy to answer your questions. By email, you should expect a reply typically within approximately one working day. Office hours info is provided at the beginning of the syllabus.

Given the nature of this course, I do expect a few things of you before you seek assistance with coding/data questions:

  1. Close all open programs, restart your computer, then try your task again
  2. Search google and stackoverflow for the topic/problem (for example, the name of the function you're struggling with or the error message you are seeing)
  3. Go back through the relevant lecture materials to look for any insights
  4. Go back through the assigned reading materials to look for any insights

If the above steps haven't solved your problem, send an email (or attend office hours) and include the following information:

  1. A detailed description of what you're trying to do, why, and how
  2. A complete [minimal reproducible example](https://stackoverflow.com/help/minimal-reproducible-example) of your code so far (never send screenshots of code)
  3. What you've already tried to do to solve your problem and what you have learned from it (specifically, explain the results of steps 1-4 above, including relevant links from stackoverflow etc)

I do not ask for this to be pedantic. Rather, I need it to be able to help you solve your problem.




# Materials

Coursework will be based on free open-source software. You will need a laptop (non-Chromebook) to install and run the course software.

Copyrighted course reading materials are available via blackboard for enrolled students to download. The course lectures assume that you have read the assigned readings prior to the class session and are now reasonably fluent in their contents and ready to discuss/debate them in class.




# Assignments and Evaluation

Per USC guidelines, for each course unit the university expects 2 hours of out-of-class student work per week. This is a 4 unit course. Therefore, you should expect an average of 8 hours of out-of-class work each week: please budget your time accordingly. See the schedule below for assignment due dates and see the "assignments" folder for instructions. Active participation is expected (and graded) in the classroom.

Final grades will be assigned according to the following, for a total of 1000 points:

  - 500 points: 4 analytics assignments × 125 points each
  - 100 points: mini-lecture
  - 100 points: final presentation
  - 200 points: final project
  - 100 points: active participation in classroom

Assignments must be submitted via Blackboard by 23:59 pacific time on their due date. Late assignment submissions will be deducted 20% per day. Late final project submissions will not be accepted or graded. It is your responsibility to ensure that all submissions have gone through, so please visually confirm successful submission in the system.




# Schedule

## Module 1

**Introduction**

We introduce the course, the syllabus, the semester's expectations and schedule, and set up the computing environment for coursework. Then we introduce the foundational tools underlying much of the modern data science world: package management, version control, and computational notebooks.

Readings to be completed prior to class:

  - Boeing and Arribas-Bel. 2020. GIS and Computational Notebooks. In: The Geographic Information Science & Technology Body of Knowledge, edited by J.P. Wilson.
  - If you're on Windows, read [this guide](http://dosprompt.info/)'s "basics" and "folders" sections. If you're on Mac, read [this guide](https://computers.tutsplus.com/tutorials/navigating-the-terminal-a-gentle-introduction--mac-3855).
  - Conda [user guide](https://docs.conda.io/projects/conda/en/latest/user-guide/index.html)



## Module 2

**Urban analytics and urban science**

We introduce the fields of urban analytics and urban science, consider how they relate to one another in the study and practice of city planning, and explore various critiques and open challenges.

Readings to be completed prior to class:

  - Townsend.
  - Kontokosta. 2018. Urban Informatics in the Science and Practice of Planning. Journal of Planning Education and Research. https://doi.org/10.1177/0739456X18793716



## Module 3

**Python for urban data science**

We do a quick refresher on the Python language and its use in (urban) data science. This course presumes prior experience, so we quickly review the basics then introduce more advanced methods.

Readings to be completed prior to class:

  - McKinney. 2017. Python for Data Analysis, 2nd Ed. O'Reilly. (Ch 5-8)
  - *Optional but important*: if any of the preceding reading feels unfamiliar, first read Ch 1-4
  - *Optional if you haven't used JupyterLab before*: [JupyterLab](https://jupyterlab.readthedocs.io/) user guide sections on the interface and notebooks



## Module 4

**Data preparation and visualization**

We cover data wrangling and manipulation to prepare a dataset for analysis and also introduce computational visualization techniques to find patterns in data.

Readings to be completed prior to class:

  - McKinney. 2017. Python for Data Analysis, 2nd Ed. O'Reilly. (Ch 9-10)

Assignment 1 due the following Wednesday.



## Module 5

**Geocoding and APIs**

We introduce working with APIs, geocoding, reverse geocoding, and data collection from data portals.

Readings to be completed prior to class:

  - McKinney. 2017. Python for Data Analysis, 2nd Ed. O'Reilly. (Ch 9-10)



## Module 6

**Spatial data**

We introduce methods for working with spatial data including mapping.

Readings to be completed prior to class:

  - geopandas user guide: https://geopandas.org/

Assignment 2 due the following Wednesday.



## Module 7

**Urban network analysis I**

We introduce the theory and methods of computational spatial network analysis, including spatially-embedded graphs and libraries to model and analyze urban infrastructure networks. We explore questions of planarity, topology, and representation in models.

Readings to be completed prior to class:

  - O'Sullivan. 2014. Spatial Network Analysis. In: Handbook of Regional Science, edited by Fischer and Nijkamp.
  - OSMnx docs: https://osmnx.readthedocs.io/



## Module 8

**Urban network analysis II**

We build on the theory and methods introduced in the prior module to explore applications of spatial network analysis in the science and practice of urban planning, including routing, accessibility, and network design.

  - Boeing. 2020. Off the Grid... and Back Again? The Recent Evolution of American Street Network Planning and Design. Journal of the American Planning Association. [Direct link](https://doi.org/10.1080/01944363.2020.1819382). [USC link](https://www-doi-org.libproxy2.usc.edu/10.1080/01944363.2020.1819382).
  - pandana docs: https://udst.github.io/pandana/

Assignment 3 due the following Wednesday.



## Module 9

**Spatial analysis**

We cover a coding approach to spatial analysis, including spatial clustering, spatial autocorrelation, spatial diffusion and spillover, and visualization such as point and choropleth mapping.

Readings to be completed prior to class:

  - pysal docs: https://pysal.org/pysal/api.html



## Module 10

**Spatial regression**

We introduce explicitly spatial models in the regression framework, including GWR and spatial-lag and spatial-error models, to predict and explain urban phenomena while accounting for ubiquitous spatial heterogeneity and diffusion.

Readings to be completed prior to class:

  - Watch 3 Blue 1 Brown's Essence of linear algebra video series.
  - Anselin and Rey. 2014. Modern Spatial Econometrics in Practice.

Assignment 4 due the following Wednesday.



## Module 11

**Machine learning I: supervised learning**

We introduce, from an applied perspective, machine learning and a class of algorithms known as supervised learning classifiers, including logistic regression, support vector machines, decision trees, random forests, k-nearest neighbors, perceptrons, and naive Bayes.

Readings to be completed prior to class:

  - Wu et al. 2008. Top 10 algorithms in data mining. Knowledge and Information Systems, 14, 1-37.
  - Raschka. 2015. Python Machine Learning. (Ch 1-3)



## Module 12

**Machine learning II: natural language processing**

We introduce, from an applied perspective, machine learning in the context of natural language processing to extract meaning and sentiment from large bodies of text.

Readings to be completed prior to class:

  - Raschka. 2015. Python Machine Learning. (Ch 8)
  - NLTK docs: https://www.nltk.org/



## Module 13

**Machine learning III: cluster analysis and dimensionality reduction**

We introduce, from an applied perspective, machine learning in the context of clustering algorithms, cluster analysis, and dimensionality reduction to identify groups and structure in data, and to work with data in low-dimension embeddings.

Readings to be completed prior to class:

  - Raschka. 2015. Python Machine Learning. (Ch 5, 11)



## Module 14

**Workshop**

We have a collective hands-on workshop applying the methods we have learned throughout the semester to the individual final projects.



## Module 15

**Final Presentations**

Present your final projects to the group and engage in a discussion around each.



## Exam Week

**Final Projects Due**




# Academic Conduct and Support

## Accommodations and Extensions

Any student requesting academic accommodations based on a disability or ongoing mental health concern is required to register with Disability Services and Programs (DSP) each semester. A letter of verification for approved accommodations can be obtained from DSP. Please be sure the letter is delivered to the instructor as early in the semester as possible, as the accommodation can only be implemented upon receipt of the letter. Visit DSP's [web site](https://dsp.usc.edu/) for more details. For further support, I encourage you to contact USC Support and Advocacy (uscsupport@usc.edu). To maintain fairness and equality for all students, extensions to due dates are only granted in accordance with these official accommodation letters. If you need to request a *one-time emergency* extension to an assignment (e.g., due to a major illness or to a death in the family) you must do the following proactively *prior to its due date*: 1) provide written documentation, such as an official doctor's note, explaining that you are unable to complete the assignment by its due date and 2) work out an extension with the instructor.

## Academic Conduct

Plagiarism, presenting someone else's ideas as your own, either verbatim or recast in your own words, is a serious academic offense with serious consequences. Please familiarize yourself with the discussion of plagiarism in SCampus in Part B, Section 11, "Behavior Violating University Standards" https://policy.usc.edu/scampus-part-b. Other forms of academic dishonesty are equally unacceptable. See additional information in SCampus and university policies on scientific misconduct, https://policy.usc.edu/scientific-misconduct.

## Support Systems

Counseling and Mental Health - (213) 740-9355 – 24/7 on call, https://studenthealth.usc.edu/counseling Free and confidential mental health treatment for students, including short-term psychotherapy, group counseling, stress fitness workshops, and crisis intervention.

National Suicide Prevention Lifeline - 1 (800) 273-8255 – 24/7 on call, https://suicidepreventionlifeline.org Free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week.

Relationship and Sexual Violence Prevention Services (RSVP) - (213) 740-9355(WELL), press "0" after hours – 24/7 on call, https://studenthealth.usc.edu/sexual-assault Free and confidential therapy services, workshops, and training for situations related to gender-based harm.

Office of Equity and Diversity (OED) - (213) 740-5086 | Title IX – (213) 821-8298 https://equity.usc.edu, https://titleix.usc.edu Information about how to get help or help someone affected by harassment or discrimination, rights of protected classes, reporting options, and additional resources for students, faculty, staff, visitors, and applicants.

Reporting Incidents of Bias or Harassment - (213) 740-5086 or (213) 821-8298, https://usc-advocate.symplicity.com/care_report Avenue to report incidents of bias, hate crimes, and microaggressions to the Office of Equity and Diversity |Title IX for appropriate investigation, supportive measures, and response.

The Office of Disability Services and Programs - (213) 740-0776, https://dsp.usc.edu Support and accommodations for students with disabilities. Services include assistance in providing readers/notetakers/interpreters, special accommodations for test taking needs, assistance with architectural barriers, assistive technology, and support for individual needs.

USC Campus Support and Intervention - (213) 821-4710, https://campussupport.usc.edu Assists students and families in resolving complex personal, financial, and academic issues adversely affecting their success as a student.

Diversity at USC - (213) 740-2101, https://diversity.usc.edu Information on events, programs and training, the Provost's Diversity and Inclusion Council, Diversity Liaisons for each academic school, chronology, participation, and various resources for students.

USC Emergency - UPC: (213) 740-4321, HSC: (323) 442-1000 – 24/7 on call, https://dps.usc.edu, https://emergency.usc.edu Emergency assistance and avenue to report a crime. Latest updates regarding safety, including ways in which instruction will be continued if an officially declared emergency makes travel to campus infeasible.

USC Department of Public Safety - UPC: (213) 740-6000, HSC: (323) 442-120 – 24/7 on call, https://dps.usc.edu Non-emergency assistance or information.
