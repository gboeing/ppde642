**Advanced Urban Analytics**

USC PPDE642 / Spring 2027 / 4 units

# Instructor Info

[Prof. Geoff Boeing](https://geoffboeing.com)

Email: boeing at usc dot edu

Office hours: Wednesday, 13:00, in RGL 301F

Classroom location and meeting times are [listed online](https://classes.usc.edu/)

# Course Description

This course provides you with a modern toolkit and skills for urban data science, covering both professional and scholarly use cases. It teaches coding for spatial analysis, network analysis, spatial models, and applied machine learning. The course takes a computational social science approach to working with data. It uses Python and Jupyter notebooks to demonstrate coding and statistical methods that you can reproduce and experiment with in real-time in the classroom.

Students will be expected to:

- Attend the lecture and be prepared to discuss the prep material
- Complete and submit 4 analytics assignments
- Prepare a short conference paper or professional portfolio

This course has prerequisites: students are expected to have taken [PPD534](https://github.com/gboeing/ppd534) or an equivalent introductory course on Python, stats, and spatial concepts. These prerequisites will not be covered from the ground-up as you are expected to be already familiar with them. This course requires patience and practice: learning to code will take lots of trial-and-error, self-direction, repetition, and experimentation on your part. You will get out of it what you are willing to put into it. Please note that this syllabus is a living document and may be updated by the instructor during the semester as needed.

# Learning Objectives

- Understand the evolution and applications of urban analytics and urban science
- Write code with and without AI to collect, organize, analyze, and visualize urban data
- Model and analyze urban networks and flows
- Train and interpret various kinds of urban models

# Questions and Assistance

I am available if you need help throughout the semester and am happy to answer your questions. Please ask course-related questions in our course's Slack channel: you should expect a reply typically within two working days. If you have a sensitive personal matter to discuss, please ask by email. Office hours info is provided at the beginning of the syllabus.

## How to ask a technical question

Given the nature of this course, we do expect a few things of you before you seek assistance with coding/data questions:

1. Close all open programs, restart your computer, then try your task again
2. Search Google and StackOverflow for the topic/problem (for example, the name of the function you're struggling with or the error message you are seeing), and ask AI for suggestions
3. Go back through the relevant lecture materials to look for any insights
4. Go back through the assigned reading materials to look for any insights

If the above steps haven't solved your problem, post on Slack (or attend office hours) and include the following information:

1. A detailed description of what you're trying to do, why, and how
2. A complete [minimal reproducible example](https://matthewrocklin.com/blog/work/2018/02/28/minimal-bug-reports) of your code so far (never send screenshots of code/tracebacks)
3. What you've already tried to do to solve your problem and what you have learned from it so far (specifically, explain the results of steps 1-4 above)

We do not ask for this to be pedantic. Rather, we need it to be able to help you solve your issue and avoid the [XY Problem](https://en.wikipedia.org/wiki/XY_problem).

# Materials

Coursework will be based on free open-source software. Copyrighted course reading materials are available via Brightspace for enrolled students to download. The course lectures assume that you have read the assigned readings prior to the class session and are now reasonably fluent in their contents and ready to discuss/debate them in class. Lectures are supplemental to the assigned reading and are of little value if you haven't taken the time to prepare in advance. So, before class, make sure you have completed the assigned reading, taken thorough notes, and prepared any questions you may have about the material.

# Coursework

The following sections outline the work you agree to do by enrolling in this course. Per USC guidelines, for each course unit the university expects 2 hours of out-of-class student work per week. This is a 4 unit course. Therefore, you should expect an average of 8 hours of out-of-class work each week. Please budget your time accordingly. See the schedule below for learning assessment due dates and see the "assessments" folder for instructions.

## Attendance Policy

This is an in-person course. If you need to miss a class session, do not notify the instructor: attendance is not taken, so there are no "excused" versus "unexcused" absences, nor are there accommodations for missing in-class activities. It is the student's responsibility to request notes, etc from others who were in attendance. Likewise there is no accommodation for travel: it's the student's responsibility to know the school schedule before they book travel and to adjust travel dates as needed. Students are expected to manage their schedules such that they can keep all of their commitments, including attending class.

## Submission Policy

Submissions are due by 23:59:00 Pacific Time on their stated due dates (see schedule below). Submit everything via Brightspace's submission system. Please submit early to avoid any last-minute headaches such as slow uploads, connectivity problems, or temporary system outages. If you have any technical issues when submitting, contact USC IT for resolution well before it is due. It is solely the student's responsibility to ensure that all submissions have gone through on time and contain the complete, working, correct, and expected files. Double-check and verify correct and successful submission, and fix it if necessary, before the deadline. You are graded solely on what you submit on Brightspace prior to the deadline. The timestamp in the submission system is our only official record: if it says you're late, you're late. Submissions outside of Brightspace (e.g., by email or on Google Drive) will not be accepted or graded. If your data set is too large for the submission system, you may upload *only your data set* to the USC Google Drive and provide a link to it in the first cell of your submitted Jupyter notebook that uses it.

## Late Policy and Extensions

The professional world demands punctuality, which we practice in this course through relatively strict deadlines. Remember that assignment due dates are final deadlines, not indicators of when you're supposed to work on them. You are given several days to complete assignments that take, at most, a few hours. Procrastinate at your own peril. However, sometimes things come up and we could use a little grace. Each assessment comes with a 12-hour, no-questions-asked grace period following its deadline during which it will be accepted as though on-time (does not apply to exams or final projects). You can submit after that for a 25% penalty until the submission system closes completely 24 hours after the original deadline. You must get an OSAS accommodation for additional extensions.

## Grading Policy

You can expect the grade you earned to be posted within two weeks of each assessment's due date. Grades are earned solely based on how well submissions fulfill the instructions and demonstrate your proficiency in the material. Effort and time spent do not factor in to grades. If your demonstrated proficiency is not where you want it to be, start coming to office hours, refocus your effort onto more effective study strategies, and optionally consider tutoring services. Posted grades are final and non-negotiable. This policy exists to protect you and ensure equitable outcomes for both you and your classmates. Professors don't arbitrarily hand out grades, and thus they should never arbitrarily alter them either. Accordingly, no grade disputes regarding the grader's expert judgment and standards will be considered. However, if we have made a clerical error in inputting your grade (e.g., you earned a certain number of points but we summed them incorrectly when tabulating the final grade), please provide specific documentation of that clerical error and we'll be happy to correct it.

Final grade weighting (there is no extra credit):

- 60%: four analytics assignments
- 10%: final presentation
- 30%: final project

Final grade percentage ranges and meaning:

- 90 ≤ A (high pass)
- 80 ≤ B < 90 (pass)
- 70 ≤ C < 80 (low pass)
- 60 ≤ D < 70 (fail)
- F < 60 (fail)

# Schedule

## Module 1

**Jan 10 - Introduction**

We introduce the course, the syllabus, the semester's expectations and schedule, and set up the computing environment for coursework. Then we introduce the foundational tools underlying much of the modern data science world: package management, version control, and computational notebooks.

Readings to be completed prior to class:

- Boeing and Arribas-Bel. 2021. GIS and Computational Notebooks. In: The Geographic Information Science & Technology Body of Knowledge, edited by J.P. Wilson. [Direct link](https://doi.org/10.22224/gistbok/2021.1.2).
- If you're on Windows, read [this guide](http://dosprompt.info/)'s "basics" and "folders" sections. If you're on Mac, read [this guide](https://computers.tutsplus.com/tutorials/navigating-the-terminal-a-gentle-introduction--mac-3855).
- uv [project guide](https://docs.astral.sh/uv/guides/projects/)

## Module 2

**Jan 17 - Urban analytics and urban science**

We introduce ourselves (see Google Doc) and the fields of urban analytics and urban science, consider how they relate to one another in the study and practice of city planning, and explore various critiques and open challenges.

Readings to be completed prior to class:

- Kontokosta. 2018. Urban Informatics in the Science and Practice of Planning. Journal of Planning Education and Research. [Direct link](https://doi.org/10.1177/0739456X18793716). [USC link](https://libproxy.usc.edu/login?url=https://doi.org/10.1177/0739456X18793716).
- Kitchin. 2020. Urban Science: Prospect and Critique. The Routledge Companion to Smart Cities. [Direct link](https://www.taylorfrancis.com/chapters/edit/10.4324/9781315178387-4/urban-science-rob-kitchin). [USC link](https://libproxy.usc.edu/login?url=https://www.taylorfrancis.com/chapters/edit/10.4324/9781315178387-4/urban-science-rob-kitchin).
- Mattern. 2013. Methodolatry and the Art of Measure: The New Wave of Urban Data Science. Places. [Direct link](https://doi.org/10.22269/131105).

## Module 3

**Jan 24 - Python for urban data science**

We do a quick refresher on Python and pandas for (urban) data science. This course presumes prior experience, so we quickly review the basics then introduce more advanced methods.

Readings to be completed prior to class:

- McKinney. 2017. Python for Data Analysis, 2nd Ed. (Ch 5-8)
- _Optional but important_: if any of the preceding reading feels unfamiliar, first read Ch 1-4
- _Optional if you haven't used JupyterLab before_: [JupyterLab](https://jupyterlab.readthedocs.io/) user guide "interface" and "notebooks" sections

## Module 4

**Jan 31 - Data cleaning and exploration**

We explore advanced data wrangling, cleaning, and feature engineering to prepare data for analysis and then discuss exploratory descriptive statistics and visualization techniques to explore patterns in the data.

Readings to be completed prior to class:

- McKinney. 2017. Python for Data Analysis, 2nd Ed. (Ch 9-10)
- _Optional linear algebra refresher, if needed_: Kolter and Do. 2008. Linear Algebra Review and Reference.

Assignment 1 due the following Tuesday.

## Module 5

**Feb 7 - APIs and scraping**

We introduce working with APIs, geocoding, and scraping.

Readings to be completed prior to class:

- Wu. 2020. Web Scraping Basics. Towards Data Science. [Direct link](https://towardsdatascience.com/web-scraping-basics-82f8b5acd45c).
- Park. 2019. How Do APIs Work? Tray.io. [Direct link](https://tray.io/blog/how-do-apis-work).

## Module 6

**Feb 14 - Spatial data**

We explore advanced methods for working with spatial data.

Readings to be completed prior to class:

- GeoPandas [user guide](https://geopandas.org/)
- Shapely [user manual](https://shapely.readthedocs.io/)
- _Optional_ Introduction to [PostGIS](https://postgis.net/workshops/postgis-intro/)

Assignment 2 due the following Tuesday.

## Module 7

**Feb 21 - Urban network analysis I**

We introduce the theory and methods of computational spatial network analysis, including spatially-embedded graphs and libraries to model and analyze urban infrastructure networks and the flows upon them.

Readings to be completed prior to class:

- O'Sullivan. 2014. Spatial Network Analysis. Handbook of Regional Science, edited by Fischer and Nijkamp. [Direct link](https://doi.org/10.1007/978-3-642-23430-9_67). [USC link](https://libproxy.usc.edu/login?url=https://doi.org/10.1007/978-3-642-23430-9_67).
- NetworkX [tutorial](https://networkx.org/documentation/stable/tutorial.html)
- OSMnx [documentation](https://osmnx.readthedocs.io/)

## Module 8

**Feb 28 - Urban network analysis II**

We build on the theory and methods introduced in the prior module to explore applications of spatial network analysis in the science and practice of urban planning, including routing, accessibility, and network design.

- Boeing. 2021. Off the Grid... and Back Again? The Recent Evolution of American Street Network Planning and Design. Journal of the American Planning Association. [Direct link](https://doi.org/10.1080/01944363.2020.1819382). [USC link](https://libproxy.usc.edu/login?url=https://doi.org/10.1080/01944363.2020.1819382).
- Boeing et al. 2022. Using Open Data and Open-Source Software to Develop Spatial Indicators of Urban Design and Transport Features for Achieving Healthy and Sustainable Cities. The Lancet Global Health. [Direct link](<https://doi.org/10.1016/S2214-109X(22)00072-9>).

Assignment 3 due March 12.

## Module 9

**Mar 6 - Spatial analysis**

We cover a coding approach to exploratory spatial data analysis, including weights matrices, global and local spatial autocorrelation, spatial interpolation, and spatial clustering.

Readings to be completed prior to class:

- Burt et al. 2009. Elementary Statistics for Geographers, 3rd Ed. (ch 14.1-14.3)
- PySAL [documentation](https://pysal.org/)
- _Optional_ 3Blue1Brown's (excellent) Essence of Linear Algebra [video series](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)

## Spring Break

**Mar 13 - No class**

## Module 10

**Mar 20 - Spatial models**

We introduce explicitly spatial models in the regression framework, including spatial fixed effects, spatial regimes, spatial lag, spatial error, and geographically-weighted regression, to predict and explain urban phenomena while accounting for spatial heterogeneity and diffusion.

Readings to be completed prior to class:

- Burt et al. 2009. Elementary Statistics for Geographers, 3rd Ed. (ch 12-13 and 14.4-14.6)
- Antonakis et al. 2010. On Making Causal Claims. The Leadership Quarterly. [Direct link](https://doi.org/10.1016/j.leaqua.2010.10.010). [USC link](https://libproxy.usc.edu/login?url=https://doi.org/10.1016/j.leaqua.2010.10.010).

Assignment 4 due April 2.

## Module 11

**Mar 27 - Supervised learning**

We introduce, from an applied perspective, machine learning theory and methods. We explore a class of algorithms known as supervised learning classifiers, including logistic regression, support vector machines, decision trees, random forests, k-nearest neighbors, perceptrons, and naive Bayes.

Readings to be completed prior to class:

- Raschka. 2019. Python Machine Learning, 3rd Ed. (Ch 1, 3, 4, 6)
- _Optional_ Raschka. 2020. Model Evaluation, Model Selection, and Algorithm Selection in Machine Learning. [Direct link](https://arxiv.org/abs/1811.12808v2).
- _Optional_ Troy. 2017. Machine Learning Intuition: Cost Function Optimization (and the two following posts in this series. [Direct link](https://chelseatroy.com/2017/02/07/machine-learning-intuition-cost-function-optimization/).

Mini-lectures, part 1: if you are doing a supervised learning topic, you must submit prior to our class session.

## Module 12

**Apr 3 - Unsupervised learning**

We introduce, from an applied perspective, unsupervised learning through cluster analysis and dimensionality reduction to discover structure in data and to work with data in low-dimension embeddings.

Readings to be completed prior to class:

- Raschka. 2019. Python Machine Learning, 3rd Ed. (Ch 5, 11)
- Domingos. 2012. A Few Useful Things to Know about Machine Learning. Communications of the ACM.
- _Optional_ Boeing. 2019. Urban Spatial Order: Street Network Orientation, Configuration, and Entropy. Applied Network Science. [Direct link](https://doi.org/10.1007/s41109-019-0189-1).

Mini-lectures, part 2: if you are doing an unsupervised learning topic, you must submit prior to our class session.

## Module 13

**Apr 10 - Natural language processing**

We introduce, from an applied perspective, natural language processing, deep learning, and transformer models to identify topics and themes in urban text data.

Readings to be completed prior to class:

- Brinkley and Stahmer. 2021. What is in a plan? Using natural language processing to read 461 California city general plans. Journal of Planning Education and Research. [Direct link](https://doi.org/10.1177/0739456X21995890).
- Hovy and Prabhumoye. 2021. Five sources of bias in natural language processing. Language and Linguistics Compass. [Direct link](https://doi.org/10.1111/lnc3.12432).

## Module 14

**Apr 17 - Computer vision**

We introduce, from an applied perspective, computer vision techniques to analyze urban environments using satellite imagery and street view data.

Readings to be completed prior to class:

- PyTorch: Learn the Basics. [Direct link](https://pytorch.org/tutorials/beginner/basics/intro.html).

## Module 15

**Apr 24 - Final Presentations**

Present your final projects to the group and engage in a discussion around each.

## Exam Week

**Final Projects** due Apr 30.

# Academic Conduct and Support

## Accommodations

USC welcomes students with disabilities into all of the University's educational programs. The Office of Student Accessibility Services (OSAS) is responsible for the determination of appropriate accommodations for students who encounter disability-related barriers. Once a student has completed the OSAS process (registration, initial appointment, and submitted documentation) and accommodations are determined to be reasonable and appropriate, a Letter of Accommodation (LOA) will be available to generate for each course. The LOA must be given to each course instructor by the student and followed up with a discussion. This should be done as early in the semester as possible as accommodations are not retroactive. More information can be found at https://osas.usc.edu/. You may contact OSAS at (213) 740-0776 or osasfrontdesk@usc.edu.

To maintain fairness and equity for all students, exceptions to syllabus policies are only granted in accordance with official LOAs and there are no retroactive accommodations negotiable after deadlines. Course content and classroom discussion may deal with topics that you find difficult or upsetting but are relevant to the course's core learning outcomes. It is your responsibility to review the syllabus to be aware of upcoming content so you can prepare for it adequately. Contact OSAS for an LOA if you believe you require an accommodation.

## Plagiarism and AI

Review the student handbook for expectations on academic integrity and understand what constitutes [plagiarism](https://apastyle.apa.org/style-grammar-guidelines/citations/plagiarism). Do not reproduce any words, images, code, or other content created by another author (including AI) without quote marks and citation. If you instead refer to their ideas in your own words, you must cite them to make it clear whose ideas you're referring to. We recommend APA style citations (but any common citation style will suffice), to include page numbers for direct quotations in your notes (also helpful for exam prep). The USC Library and the USC Writing Center provide guides and resources if you have any questions.

Content generated from AI or similar tools including ChatGPT and Google Translate may be submitted in this course (except where expressly prohibited) in accordance with the preceding plagiarism guidelines. You are solely responsible for any submitted content: false claims and fake references, regardless of their origin, are academic integrity violations, so review all content carefully before submission.

## Academic Conduct

Recording a university class in any form (including photography, video, and audio) is forbidden without the express permission of the instructor and announcement to the class, or unless conducted pursuant to an OSAS accommodation. Recording can inhibit free discussion in the future, and thus infringe on the academic freedom of other students as well as the instructor. Distribution or use of notes, recordings, exams, or other intellectual property based on university classes or lectures for purposes other than individual or group study is forbidden without the express permission of the instructor. This includes but is not limited to providing materials for distribution by services publishing course materials. This restriction on unauthorized use also applies to all information which had been distributed to students or in any way had been displayed for use in relationship to the class, whether obtained in class, via email, on the internet, or via any other media. Refer to the USC Student Handbook for further details.

The University of Southern California is foremost a learning community committed to fostering successful scholars and researchers dedicated to the pursuit of knowledge and the transmission of ideas. Academic misconduct is contrary to this fundamental mission and includes any act of dishonesty in the submission of academic work (either in draft or final form), as well as cheating, plagiarism, fabrication (e.g., falsifying data), knowingly assisting others in acts of academic dishonesty, and any act that gains or is intended to gain an unfair academic advantage. Students are expected to uphold the highest standards of academic integrity in all coursework.

This course follows the expectations for academic integrity as stated in the USC Student Handbook. All students are expected to submit assignments that are original work and prepared specifically for the course/section in this academic term. Students may not submit work written by others or "recycle" work prepared for other courses without obtaining written permission from the instructor(s). Students suspected of academic misconduct will be reported to the Office of Academic Integrity. Academic dishonesty has a far-reaching impact and is considered a serious offense against the university. Violations will result in a grade penalty, such as a failing grade on the assignment or in the course, and disciplinary action from the university, such as suspension or expulsion. For more information about academic integrity see the Student Handbook, the Office of Academic Integrity's website, and university policies on Research and Scholarship Misconduct.

## Classroom Norms

Our classroom adheres to four central norms of professionalism:

  - We respect others' opinions, but defer to facts.
  - We give honest criticism, but keep it constructive and courteous.
  - We alone are responsible for our own actions.
  - We adhere to the syllabus, so the squeaky wheel does not gain an advantage over their peers.

## Support Systems

Student Financial Aid and Satisfactory Academic Progress: To be eligible for certain kinds of financial aid, students are required to maintain Satisfactory Academic Progress (SAP) toward their degree objectives. Visit the Financial Aid Office webpage for undergraduate- and graduate-level SAP eligibility requirements and the appeals process.

Counseling and Mental Health - (213) 740-9355 - 24/7 on call. Free and confidential mental health treatment for students, including short-term psychotherapy, group counseling, stress fitness workshops, and crisis intervention.

988 Suicide and Crisis Lifeline - 988 for both calls and text messages - 24/7 on call. The 988 Suicide and Crisis Lifeline (formerly known as the National Suicide Prevention Lifeline) provides free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week, across the United States. The Lifeline consists of a national network of over 200 local crisis centers, combining custom local care and resources with national standards and best practices. The new, shorter phone number makes it easier for people to remember and access mental health crisis services (though the previous 1 (800) 273-8255 number will continue to function indefinitely) and represents a continued commitment to those in crisis.

CARE-SC: Confidential Advocacy, Resources, and Education Support Center - (213) 740-9355(WELL) - 24/7/365 on call. Confidential advocates, prevention educators, and professional counseling teams work to promote a universal culture of consent, and prevent and respond to gender- and power-based harm. Services available to all USC students at no cost.

Office of Civil Rights Compliance - (213) 740-5086. Information about how to get help or help someone affected by harassment, discrimination, retaliation on the basis of a protected characteristic, rights of protected classes, reporting options, and additional resources for students, faculty, staff, visitors, and applicants.

USC Campus Support and Intervention - (213) 740-0411, uscsupport@usc.edu. Assists students and families in resolving complex personal, financial, and academic issues adversely affecting their success as a student.

USC Emergency Information - https://emergency.usc.edu/. Latest updates regarding safety, including ways in which instruction will be continued if an officially declared emergency makes travel to campus infeasible.

USC Department of Public Safety - For 24 hour emergency assistance or to report a crime: UPC: (213) 740-4321, HSC: (323)-442-1000. For 24 hour non-emergency assistance or information: UPC: (213) 740-6000, HSC: 323-442-1200.

Office of the Ombuds - (213) 821-9556 (UPC) / (323) 442-0382 (HSC). A safe and confidential place to share your USC-related issues with a University Ombuds who will work with you to explore options or paths to manage your concern.

Occupational Therapy Faculty Practice - (323) 442-2850 or otfp@med.usc.edu. Lifestyle Redesign services for USC students to support health promoting habits and routines that enhance quality of life and academic performance.

The Office of Sustainability promotes numerous ways for all Trojans to study, work, and live sustainably at USC. Students can access tools, resources, and opportunities on their website and in the Sustainability Hub in the Student Union Building, Suite 101.

USC Report and Response provides a front door to reporting concerns, including an ability to report anonymously, which violate university policies or go against our Unifying Values and helps connect you with the support you need. The website provides a list of confidential resources, supporting offices, and policies that are available to our university community. The Resources page includes information regarding the university’s response in the event of immigration enforcement activity on campus or involving a student or employee.  Additional questions may be directed to the Office of Professionalism and Ethics (OPE) and ope@usc.edu or in reviewing the Office of Professionalism and Ethics website.
