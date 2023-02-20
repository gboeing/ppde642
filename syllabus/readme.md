**Advanced Urban Analytics**

USC PPD599 / Spring 2023 / 4 units



# Instructor Info

[Prof. Geoff Boeing](https://geoffboeing.com)

Email: boeing at usc dot edu

Office hours: Wed 13:00-14:00, RGL 301A

Classroom location and meeting times are [listed online](https://classes.usc.edu/)



# Course Description

This course provides you with a modern toolkit and skills for urban data science, covering both professional and scholarly use cases. It teaches coding for spatial analysis, network analysis, spatial models, and applied machine learning. The course takes a computational social science approach to working with data. It uses Python and Jupyter notebooks to introduce coding and statistical methods that you can reproduce and experiment with in real-time in the classroom.

Students will be expected to:

  - Complete and be prepared to discuss all assigned readings
  - Attend the lecture
  - Complete and submit assignments
  - Present a mini-lecture on an applied method
  - Prepare a short conference paper and presentation

This course has prerequisites: students are expected to have taken [PPD534](https://github.com/gboeing/ppd534) or an equivalent introductory course on basic Python, stats, and spatial concepts. These prerequisites will not be covered from the ground-up as you are expected to be already familiar with them. This course requires patience and practice: learning to code will take lots of trial-and-error, self-direction, repetition, and experimentation on your part. You will get out of it what you are willing to put into it. Please note that this syllabus is a living document and may be updated by the instructor during the semester as needed.



# Learning Objectives

  - Understand the evolution and applications of urban analytics and urban science
  - Write efficient code to collect, organize, analyze, and visualize urban data
  - Model and analyze urban networks and flows
  - Train and interpret various kinds of urban models



# Questions and Assistance

I am available if you need help throughout the semester and am happy to answer your questions. Please ask course-related questions in our course's Slack channel: you should expect a reply typically within two working days. If you have a sensitive personal matter to discuss, please ask by email. Office hours info is provided at the beginning of the syllabus.

Given the nature of this course, I do expect a few things of you before you seek assistance with coding/data questions:

  1. Close all open programs, restart your computer, then try your task again
  2. Search Google and StackOverflow for the topic/problem (for example, the name of the function you're struggling with or the error message you are seeing)
  3. Go back through the relevant lecture materials to look for any insights
  4. Go back through the assigned reading materials to look for any insights

If the above steps haven't solved your problem, post on Slack (or attend office hours) and include the following information:

  1. A detailed description of what you're trying to do, why, and how
  2. A complete [minimal reproducible example](https://matthewrocklin.com/blog/work/2018/02/28/minimal-bug-reports) of your code so far (never send screenshots of code/tracebacks)
  3. What you've already tried to do to solve your problem and what you have learned from it so far (specifically, explain the results of steps 1-4 above, including relevant links from StackOverflow etc)

I do not ask for this to be pedantic. Rather, I need it to be able to help you solve your problem.



# Materials

Coursework will be based on free open-source software. You will need a laptop (non-Chromebook) to install and run the course software.

Copyrighted course reading materials are available via Blackboard for enrolled students to download. The course lectures assume that you have read the assigned readings prior to the class session and are now reasonably fluent in their contents and ready to discuss/debate them in class. Lectures are supplemental to the assigned reading and are of little value if you haven't taken the time to prepare in advance. So, before class, make sure you have completed the assigned reading, taken thorough notes, and prepared any questions you may have about the material.



# Assignments and Evaluation

The following sections outline the work you agree to do by enrolling in this course. Per USC guidelines, for each course unit the university expects 2 hours of out-of-class student work per week. This is a 4 unit course. Therefore, you should expect an average of 8 hours of out-of-class work each week: please budget your time accordingly. See the schedule below for assignment due dates and see the "assignments" folder for instructions. Active participation is expected (and graded) in the classroom.

Final grades will be weighted as follows:

  - 50%: four analytics assignments
  - 10%: mini-lecture
  - 10%: final presentation
  - 20%: final project
  - 10%: active participation in classroom and on Slack

See the schedule below for due dates. Submit everything via Blackboard by 23:59:00 pacific time on their due dates. I will grant you a 24 hour, no questions asked, grace period to submit late without penalty. The submission window closes completely after this grace period and no further submissions will be accepted or graded. Please submit early to avoid any last-minute headaches such as poor internet connections or system outages. If you have any technical issues when submitting, contact USC IT well before it is due. It is solely the student's responsibility to ensure that all submissions have gone through on time, so please visually confirm complete successful submission in the system. The timestamp in the submission system is our official record: if it says you're late, you're late.

Grades in this course reflect how you have demonstrated and communicated your understanding of and competency in the material. They account for your adherence to the assignments' instructions and your peers' performance given the same instructions and time. Grades do not necessarily reflect the amount of time or effort you put in, because I cannot observe you 24 hours a day to monitor your time and effort. If your demonstrated understanding of and competency in the material are not where you want them to be, start coming to office hours, refocus your effort onto more effective study strategies, and consider seeking tutoring. Grades are non-negotiable. You can expect them to be posted within two weeks of the assignment's due date.



# Schedule

## Module 1

**Jan 11 - Introduction**

We introduce the course, the syllabus, the semester's expectations and schedule, and set up the computing environment for coursework. Then we introduce the foundational tools underlying much of the modern data science world: package management, version control, and computational notebooks.

Readings to be completed prior to class:

  - Boeing and Arribas-Bel. 2021. GIS and Computational Notebooks. In: The Geographic Information Science & Technology Body of Knowledge, edited by J.P. Wilson. [Direct link](https://doi.org/10.22224/gistbok/2021.1.2).
  - If you're on Windows, read [this guide](http://dosprompt.info/)'s "basics" and "folders" sections. If you're on Mac, read [this guide](https://computers.tutsplus.com/tutorials/navigating-the-terminal-a-gentle-introduction--mac-3855).
  - Conda [user guide](https://docs.conda.io/projects/conda/en/latest/user-guide/index.html)



## Module 2

**Jan 18 - Urban analytics and urban science**

We introduce ourselves (see Google Doc) and the fields of urban analytics and urban science, consider how they relate to one another in the study and practice of city planning, and explore various critiques and open challenges.

Readings to be completed prior to class:

  - Kontokosta. 2018. Urban Informatics in the Science and Practice of Planning. Journal of Planning Education and Research. [Direct link](https://doi.org/10.1177/0739456X18793716). [USC link](https://libproxy.usc.edu/login?url=https://doi.org/10.1177/0739456X18793716).
  - Kitchin. 2020. Urban Science: Prospect and Critique. The Routledge Companion to Smart Cities. [Direct link](https://www.taylorfrancis.com/chapters/edit/10.4324/9781315178387-4/urban-science-rob-kitchin). [USC link](https://libproxy.usc.edu/login?url=https://www.taylorfrancis.com/chapters/edit/10.4324/9781315178387-4/urban-science-rob-kitchin).
  - Mattern. 2013. Methodolatry and the Art of Measure: The New Wave of Urban Data Science. Places. [Direct link](https://doi.org/10.22269/131105).



## Module 3

**Jan 25 - Python for urban data science**

We do a quick refresher on Python and pandas for (urban) data science. This course presumes prior experience, so we quickly review the basics then introduce more advanced methods.

Readings to be completed prior to class:

  - McKinney. 2017. Python for Data Analysis, 2nd Ed. (Ch 5-8)
  - *Optional but important*: if any of the preceding reading feels unfamiliar, first read Ch 1-4
  - *Optional if you haven't used JupyterLab before*: [JupyterLab](https://jupyterlab.readthedocs.io/) user guide "interface" and "notebooks" sections



## Module 4

**Feb 1 - Data cleaning and exploration**

We explore advanced data wrangling, cleaning, and feature engineering to prepare data for analysis and then discuss exploratory descriptive statistics and visualization techniques to explore patterns in the data.

Readings to be completed prior to class:

  - McKinney. 2017. Python for Data Analysis, 2nd Ed. (Ch 9-10)
  - *Optional linear algebra refresher, if needed*: Kolter and Do. 2008. Linear Algebra Review and Reference.

Assignment 1 due the following Tuesday.



## Module 5

**Feb 8 - APIs and scraping**

We introduce working with APIs, geocoding, and scraping.

Readings to be completed prior to class:

  - Wu. 2020. Web Scraping Basics. Towards Data Science. [Direct link](https://towardsdatascience.com/web-scraping-basics-82f8b5acd45c).
  - Park. 2019. How Do APIs Work? Tray.io. [Direct link](https://tray.io/blog/how-do-apis-work).



## Module 6

**Feb 15 - Spatial data**

We explore advanced methods for working with spatial data.

Readings to be completed prior to class:

  - GeoPandas [user guide](https://geopandas.org/)
  - Shapely [user manual](https://shapely.readthedocs.io/)
  - *Optional* Introduction to [PostGIS](https://postgis.net/workshops/postgis-intro/)

Assignment 2 due the following Tuesday.



## Module 7

**Feb 22 - Urban network analysis I**

We introduce the theory and methods of computational spatial network analysis, including spatially-embedded graphs and libraries to model and analyze urban infrastructure networks and the flows upon them.

Readings to be completed prior to class:

  - O'Sullivan. 2014. Spatial Network Analysis. Handbook of Regional Science, edited by Fischer and Nijkamp. [Direct link](https://doi.org/10.1007/978-3-642-23430-9_67). [USC link](https://libproxy.usc.edu/login?url=https://doi.org/10.1007/978-3-642-23430-9_67).
  - NetworkX [tutorial](https://networkx.org/documentation/stable/tutorial.html)
  - OSMnx [documentation](https://osmnx.readthedocs.io/)



## Module 8

**Mar 1 - Urban network analysis II**

We build on the theory and methods introduced in the prior module to explore applications of spatial network analysis in the science and practice of urban planning, including routing, accessibility, and network design.

  - Boeing. 2021. Off the Grid... and Back Again? The Recent Evolution of American Street Network Planning and Design. Journal of the American Planning Association. [Direct link](https://doi.org/10.1080/01944363.2020.1819382). [USC link](https://libproxy.usc.edu/login?url=https://doi.org/10.1080/01944363.2020.1819382).
  - Boeing et al. 2022. Using Open Data and Open-Source Software to Develop Spatial Indicators of Urban Design and Transport Features for Achieving Healthy and Sustainable Cities. The Lancet Global Health. [Direct link](https://doi.org/10.1016/S2214-109X(22)00072-9).

Assignment 3 due the following Tuesday.



## Module 9

**Mar 8 - Spatial analysis**

We cover a coding approach to exploratory spatial data analysis, including weights matrices, global and local spatial autocorrelation, spatial interpolation, and spatial clustering.

Readings to be completed prior to class:

  - Burt et al. 2009. Elementary Statistics for Geographers, 3rd Ed. (ch 14.1-14.3)
  - PySAL [documentation](https://pysal.org/)
  - *Optional* 3Blue1Brown's (excellent) Essence of Linear Algebra [video series](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)



## Spring Break

**Mar 15 - No class**



## Module 10

**Mar 22 - Spatial models**

We introduce explicitly spatial models in the regression framework, including spatial fixed effects, spatial regimes, spatial lag, spatial error, and geographically-weighted regression, to predict and explain urban phenomena while accounting for spatial heterogeneity and diffusion.

Readings to be completed prior to class:

  - Burt et al. 2009. Elementary Statistics for Geographers, 3rd Ed. (ch 12-13 and 14.4-14.6)
  - Antonakis et al. 2010. On Making Causal Claims. The Leadership Quarterly. [Direct link](https://doi.org/10.1016/j.leaqua.2010.10.010). [USC link](https://libproxy.usc.edu/login?url=https://doi.org/10.1016/j.leaqua.2010.10.010).

Assignment 4 due the following Tuesday.



## Module 11

**Mar 29 - Supervised learning**

We introduce, from an applied perspective, machine learning theory and methods. We explore a class of algorithms known as supervised learning classifiers, including logistic regression, support vector machines, decision trees, random forests, k-nearest neighbors, perceptrons, and naive Bayes.

Readings to be completed prior to class:

  - Raschka. 2019. Python Machine Learning, 3rd Ed. (Ch 1, 3, 4, 6)
  - *Optional* Raschka. 2020. Model Evaluation, Model Selection, and Algorithm Selection in Machine Learning. [Direct link](https://arxiv.org/abs/1811.12808v2).
  - *Optional* Troy. 2017. Machine Learning Intuition: Cost Function Optimization (and the two following posts in this series. [Direct link](https://chelseatroy.com/2017/02/07/machine-learning-intuition-cost-function-optimization/).

Mini-lectures, part 1: if you are doing a supervised learning topic, you must submit prior to our class session.



## Module 12

**Apr 5 - Unsupervised learning**

We introduce, from an applied perspective, unsupervised learning through cluster analysis and dimensionality reduction to discover structure in data and to work with data in low-dimension embeddings.

Readings to be completed prior to class:

  - Raschka. 2019. Python Machine Learning, 3rd Ed. (Ch 5, 11)
  - Domingos. 2012. A Few Useful Things to Know about Machine Learning. Communications of the ACM.
  - *Optional* Boeing. 2019. Urban Spatial Order: Street Network Orientation, Configuration, and Entropy. Applied Network Science. [Direct link](https://doi.org/10.1007/s41109-019-0189-1).

Mini-lectures, part 2: if you are doing an unsupervised learning topic, you must submit prior to our class session.



## Module 13

**Apr 12 - Natural language processing**

Guest lecture T.B.D.



## Module 14

**Apr 19 - Next steps**

We discuss professional coding practices and next steps in learning data science, and hold a collective hands-on workshop for individual final projects.

Readings to be completed prior to class:

  - Belcher. 2019. Writing Your Journal Article in Twelve Weeks, 2nd Ed. (Ch 11)



## Module 15

**Apr 26 - Final Presentations**

Present your final projects to the group and engage in a discussion around each.



## Exam Week

**Final Projects** due Apr 30.



# Academic Conduct and Support

## Accommodations and Extensions

USC welcomes students with disabilities into all of the University's educational programs. The Office of Student Accessibility Services (OSAS) is responsible for the determination of appropriate accommodations for students who encounter disability-related barriers. Once a student has completed the OSAS process (registration, initial appointment, and submitted documentation) and accommodations are determined to be reasonable and appropriate, a Letter of Accommodation (LOA) will be available to generate for each course. The LOA must be given to each course instructor by the student and followed up with a discussion. This should be done as early in the semester as possible as accommodations are not retroactive. More information can be found at OSAS's [web site](https://osas.usc.edu/). You may contact OSAS at (213) 740-0776 or via email at osasfrontdesk@usc.edu.

To maintain fairness and equality for all students, extensions to due dates are only granted in accordance with official LOAs. If you need to request a *one-time emergency* extension to an assignment (e.g., due to a major illness or to a death in the family) you must do the following proactively *prior to its due date*: 1) provide written documentation, such as an official doctor's note, explaining why you are unable to complete the assignment by its due date and 2) work out an extension with the instructor.

Course content may deal with topics you find difficult or upsetting. I cannot anticipate which specific readings and discussions might make you feel uncomfortable. Therefore, it is your responsibility review the syllabus to be aware of upcoming content so you can prepare for it adequately. Contact OSAS for an LOA if you require an accommodation.

## Academic Conduct

Recording a university class in any form is forbidden without the express permission of the instructor and announcement to the class, or unless conducted pursuant to an OSAS accommodation. Recording can inhibit free discussion in the future, and thus infringe on the academic freedom of other students as well as the instructor. Distribution or use of notes, recordings, exams, or other intellectual property based on university classes or lectures for purposes other than individual or group study is forbidden without the express permission of the instructor. This includes but is not limited to providing materials for distribution by services publishing course materials. This restriction on unauthorized use also applies to all information which had been distributed to students or in any way had been displayed for use in relationship to the class, whether obtained in class, via email, on the internet, or via any other media. Refer to the USC Student Handbook for further details.

Academic misconduct is any act of dishonesty in the submission of academic work (either in draft or final form). This course will follow the expectations for academic integrity as stated in the USC Student Handbook. All students are expected to submit assignments that are original work and prepared specifically for the course/section in this academic term. You may not submit work written by others or "recycle" work prepared for other courses without obtaining written permission from the instructor(s). Students suspected of engaging in academic misconduct will be reported to the Office of Academic Integrity. Other violations of academic misconduct include, but are not limited to, cheating, plagiarism, fabrication (e.g., falsifying data), knowingly assisting others in acts of academic dishonesty, and any act that gains or is intended to gain an unfair academic advantage. The impact of academic dishonesty is far-reaching and is considered a serious offense against the university and could result in outcomes such as failure on the assignment, failure in the course, suspension, or even expulsion from the university. For more information about academic integrity see the student handbook or the Office of Academic Integrity's website, and university policies on Research and Scholarship Misconduct.

## Support Systems

Counseling and Mental Health - (213) 740-9355 – 24/7 on call, Free and confidential mental health treatment for students, including short-term psychotherapy, group counseling, stress fitness workshops, and crisis intervention.

988 Suicide and Crisis Lifeline - 988 for both calls and text messages – 24/7 on call, The 988 Suicide and Crisis Lifeline (formerly known as the National Suicide Prevention Lifeline) provides free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week, across the United States. The Lifeline comprises a national network of over 200 local crisis centers, combining custom local care and resources with national standards and best practices.

Relationship and Sexual Violence Prevention Services (RSVP) - (213) 740-9355(WELL) – 24/7 on call, Free and confidential therapy services, workshops, and training for situations related to gender- and power-based harm (including sexual assault, intimate partner violence, and stalking).

Office for Equity, Equal Opportunity, and Title IX (EEO-TIX) - (213) 740-5086, Information about how to get help or help someone affected by harassment or discrimination, rights of protected classes, reporting options, and additional resources for students, faculty, staff, visitors, and applicants.

Reporting Incidents of Bias or Harassment - (213) 740-5086 or (213) 821-8298, Avenue to report incidents of bias, hate crimes, and microaggressions to the Office for Equity, Equal Opportunity, and Title for appropriate investigation, supportive measures, and response.

The Office of Student Accessibility Services (OSAS) - (213) 740-0776, OSAS ensures equal access for students with disabilities through providing academic accommodations and auxiliary aids in accordance with federal laws and university policy.

USC Campus Support and Intervention - (213) 740-0411, Assists students and families in resolving complex personal, financial, and academic issues adversely affecting their success as a student.

Diversity, Equity and Inclusion - (213) 740-2101, Information on events, programs and training, the Provost's Diversity and Inclusion Council, Diversity Liaisons for each academic school, chronology, participation, and various resources for students.

USC Emergency - UPC: (213) 740-4321, HSC: (323) 442-1000 – 24/7 on call, Emergency assistance and avenue to report a crime. Latest updates regarding safety, including ways in which instruction will be continued if an officially declared emergency makes travel to campus infeasible.

USC Department of Public Safety - UPC: (213) 740-6000, HSC: (323) 442-1200 – 24/7 on call, Non-emergency assistance or information.

Office of the Ombuds - (213) 821-9556 (UPC) / (323) 442-0382 (HSC), A safe and confidential place to share your USC-related issues with a University Ombuds who will work with you to explore options or paths to manage your concern.

Occupational Therapy Faculty Practice - (323) 442-2850 or otfp@med.usc.edu, Confidential Lifestyle Redesign services for USC students to support health promoting habits and routines that enhance quality of life and academic performance.
