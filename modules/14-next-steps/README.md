# Next Steps

You've made it to the end of the semester. Where do you go from here as you continue along your path in urban analytics and geospatial data science? Today we'll talk about some best practices and next steps to take.


## More skills

People often ask me "what should I do to keep learning more after this course ends?" Here are some suggestions.

My first and best piece of advice is code a lot. Work on your own projects. Contribute to others' open source projects. Code is an ultimate example of "learning by doing" and your skill level will reflect the hours you've put into struggling (often miserably) with it.

Other skills you should learn:
  - cloud computing, such as with AWS
  - working with databases, especially Postgres/PostGIS
  - more machine learning, such as the resources [gathered here](https://github.com/hangtwenty/dive-into-machine-learning)
  - bayesian stats, such as the resources [here](https://camdavidsonpilon.github.io/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers/) and [here](https://github.com/markdregan/Bayesian-Modelling-in-Python)

Consider learning a little web development, particularly the core skills of HTML, CSS, and JavaScript. They can help you present your analytics as an interactive app online, as well as become a stronger web scraper. Check out Leaflet and Carto for web mapping. As you already know Python, consider also learning a Python web development framework like Django or Flask.


## Better code

Rule of three: if a piece of code appears three or more times, extract it into its own reusable function.

Notebooks are useful for interactive analytics and seeing results, but most "workhorse" code can be extracted into a reusable module.

Use a **code formatter**. Common Python formatters are [black](https://pypi.org/project/black/) and [isort](https://pycqa.github.io/isort/). A typical approach is to use these tools as git [commit hooks](https://githooks.com/).

**Lint** your code. Common Python linters include [flake8](https://flake8.pycqa.org/) for code quality and [pydocstyle](www.pydocstyle.org/) for docstrings (see below).

**Unit tests** are automated tests of individual pieces of your code. They test your individual functionality for bugs as you change bits of the codebase around them. Consider pairing your unit tests with a test coverage tool like [codecov](https://codecov.io).

**Continuous integration**: [CI](https://docs.github.com/en/actions/guides/about-continuous-integration) is the standard workflow for continuously testing and merging your new features and fixes into your mainline branch. It can integrate code format checks, linters, unit tests, and coverage reports prior to merge. Commit often, push often, merge often. See the [OSMnx repo](https://github.com/gboeing/osmnx) for an example.


## Documentation

Good documentation is central to open science and essential for reusability, for both yourself and others. There are right and wrong ways to create documentation, but good documentation is clear, precise, and up-to-date.

**Comment** your code. Before worrying about formal documentation, ensure your code is well-commented. Every logical block of operations needs a summary explanation, so you (and others) can remember what you're doing. Perfect code is so self-explanatory that it requires minimal comments. But we don't write perfect code, so pepper it with plenty of comments.

Use **docstrings** to automatically document your modules and functions. Numpy-style docstring [standards](https://numpydoc.readthedocs.io/en/latest/format.html#docstring-standard) are common. See the [OSMnx repo](https://github.com/gboeing/osmnx) for an example. Consider a service like [readthedocs](https://osmnx.readthedocs.io/) for building and hosting your automated documentation.


## Meaningful analytics

**Read a lot**. Understand current knowledge, how different perspectives relate to one another, and their intellectual lineage and trajectory. Understand state-of-the-art methods and their strengths and trade-offs. Understand the big problems, real-world challenges, and applied/practice context of your discipline. Then you can identify a knowledge gap with real-world importance and the appropriate methods to contribute new knowledge to advance theory.

**Ask meaningful questions**. A good research question is motivated by real-world impact and engagement, not by "no one's done this before."

**Let the methods follow the question**. Don't try to shoehorn a question into the method you want to use just because it's trendy or you're familiar with it. Pick the right tool for the job, and if it doesn't exist, create it and share it with the world.

Make sure your work is
  - reproducible: methods are sufficiently well described so they can be repeated by others
  - replicable: others get approximately the same results when they reproduce your methods
  - well-documented: see documentation notes above

Open science: share your code and data and avoid point-and-click software. Contribute to the open commons!


## Communicate well

Cutting edge analytics are meaningless if you cannot **communicate** your findings and articulate an evidence-based **argument**. Whether it's a professional report or a scholarly article, all strong technical writing shares common elements.

Don't overstate things: you'll lose your readers' trust. Present your results clearly and honestly and avoid over-interpreting them. There's rarely a clear answer and there's almost never a definitive answer. You've contributed some new evidence and marginal knowledge. Embrace that confidently.

Write like a lawyer, not like a detective. Don't list your results in the order that you discovered them. Instead, structure them strategically around your argument to persuade us of its validity.

Rewrite and revise heavily. Get feedback from peers.

**We all hate reading scholarly papers for good reason**. They are over-written by preening academics trying to flaunt their genius with inscrutable language. They overflow with weak verbs, passive voice, and long circuitous sentences. To communicate effectively with a broad audience, follow a few simple guidelines (adapted from Belcher) as you write, revise, and edit:

### Practice brevity

Write directly and succinctly. Don't use two words when one will do. Excise redundant information. Break up long winding sentences into short direct ones. Don't say "very." Avoid most adverbs ending in "-ly." Example: "avoid adverbs unless really necessary." Better: "avoid adverbs unless necessary."

### Show, don't tell

Be assertive and precise to make it clear what you mean. Prefer specific words to general ones. Prefer nouns to pronouns. Prefer verbs to nouns. Avoid nominalizations (verbs converted into nouns). Example: "a 1% increase in fuel prices caused a 0.2% *reduction* in VMT." Better: "a 1% increase in fuel prices *reduced* VMT by 0.2%." Write positively: avoid using "not" to obscure your meaning. That is, tell us what did happen rather than what didn't.

### Use active language

Use the active voice: tell us who is kicking whom. Avoid the passive voice unless the subject is unknown/unimportant. Example: "this pattern is illustrated by figure 2." Better: "figure 2 illustrates this pattern." Prefer strong verbs to weak ones. Limit your use of to be, to do, to have, to make, to provide, to get, to seem, etc.

### Use fewer prepositions

Too many prepositions signal a circuitous sentence and often indicate other issues listed above. Prefer simpler nouns/verbs to prepositions for more direct writing. Example "in the case of a number of 20th century cities, the extent of new freeways grew rapidly." Better: "Planners rapidly extended new freeways in many 20th century cities."

## Structure your writing effectively

Before you draft a paper to share the results of an analytics project, make sure you can articulate your interrelated research question, argument, and significance. The **question** is simply what your project sets out to answer. The **argument** is your paper's single "big idea" in 1-2 sentences, motivated by an existing knowledge gap, and around which you organize your paper and your evidence to persuade the reader. One paper, one idea. The **significance** is the "so what?" Why should we read your paper? What will we do differently in research or practice now that we've read it?

  - **Introduction**: your audience doesn't care about your work and you have three paragraphs to change their mind
     - introduce your topic and its overall context and importance (persuade us to care)
     - introduce your research question and argument
     - summarize your methods, findings, and significance
  - **Background**: what is currently known and unknown
     - explain the context of your study
     - review relevant previous work to establish what is currently known
     - identify what important open question remains (gap in the literature or unmet need in practice)
  - **Methods**: what did you do and how did you do it
     - state your research question and hypotheses
     - data subsection: describe your data collection, variables, and any relevant processing
     - analysis subsection: describe your analysis with enough detail that an expert could replicate it
  - **Findings**: what did your analysis reveal
     - organize your results around your argument but present them objectively with limited interpretation
     - include supporting tables/figures
     - do not mix in any methods
  - **Discussion**: answer your question, advance your argument, and demonstrate significance
     - return to research question and interpret (don't repeat) your findings as evidence for/against it
     - tell a story: link your findings together to persuasively advance your argument
     - significance: discuss specific implications for research and practice ("so what")
     - acknowledge study's limitations and alternative interpretations of your evidence
  - **Conclusion**: succinctly wrap up
     - summarize your topic, question, and argument
     - summarize what you did, what you found, what it means, and why it matters

Sometimes the introduction and background are merged into a single section. Sometimes the discussion and conclusion are merged into a single section. But this is the basic structure of an effective paper, be it a technical report or a scholarly article. The structure represents a loose symmetry. The introduction and conclusion roughly mirror each other by explaining the topic's importance, the research question, how you answered it and what you found, and its meaning/significance in the real world. The background and discussion roughly mirror each other by explaining what is known about the topic before (to motivate your specific study) and after your study (to advance our knowledge and impact the real world). The methods and findings sections roughly mirror each other by laying out what you did and then presenting what you found when you did so.

In general, people struggle most with writing an effective introduction and discussion. Perversely, these are also the most critical sections of your paper for persuading your readers (including peer reviewers). A strong **introduction** in four paragraphs:

  1. Lay out the topic's context and background using anecdotes or facts to illustrate its importance. Show, don't tell. Orient the reader toward your paper's subject, motivate why this should interest us in the first place, and establish your perspective on approaching it.
  1. What is the problem and its significance? What is the open research question that follows from it and what argument do you develop over the course of this paper? Why is it important from a real-world planning or policy perspective?
  1. How did you answer your question and what did you find? Summarize your data and methods in 1-2 sentences. Then summarize your findings specifically and precisely in 1-2 sentences, citing specific takeaways like "a 1% increase in fuel prices decreases VMT by 0.2%". Conclude with 1 sentence on "who cares?" That is, how do these findings impact real-world policy? What should a practitioner do differently after reading this study? Why is the world better off for having discovered what you have discovered?
  1. Optional roadmap: signpost the organization of the remaining sections so the reader knows what's coming and how you've laid things out.

An **abstract** (when required) is written last and summarizes everything into a succinct paragraph. Consider using a five-sentence structure:
  1. what we currently know and don't know
  1. what is your research question
  1. how did you answer that question
  1. what did you find
  1. significance: how are these findings important and useful
