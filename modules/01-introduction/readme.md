# Module 1: Introduction

In this module, we introduce the course, the syllabus, the semester's expectations and schedule, and set up the computing environment for coursework. Then we introduce the foundational tools underlying much of the modern data science world: package management, version control, and computational notebooks.

## Syllabus

The syllabus is in the [syllabus](../../syllabus) folder.

## Computing environment

Make sure that you have already completed the course's initial [software](../../software) setup before proceeding.

## Package management

A Python **module** is a file of Python code containing variables, classes, functions, etc. A Python **package** is a collection of modules, kind of like a folder of files and subfolders. A package can be thought of as a computer program.

**Package management** is the process of installing, uninstalling, configuring, and upgrading packages on a computer. A **package manager** is a software tool for package management, retrieving information and installing packages from a software repository. The most common Python package managers are `conda` and `pip`. These tools are typically used in the terminal.

### pip

`pip` installs Python packages from [PyPI](https://pypi.org/) in the form of wheels or source code. The latter often requires that you have library dependencies and compatible compilers already installed on your system to install the Python package. This often requires some expertise when installing complicated toolkits, such as the Python geospatial data science ecosystem. For this course, we use `uv`.

### uv

`uv` installs Python and creates a project environment in `.venv`. The project's `pyproject.toml` lists its dependencies, and `uv.lock` records the resolved package versions.

`uv` is also an **environment manager**. A project environment is an isolated environment containing a mutually compatible set of packages. This is essential in the data science realm where conflicting dependencies can lead to broken environments. Setting up an isolated environment helps keep everything nice and tidy.

From the course repo, these commands install the environment and start JupyterLab:

```
uv sync
uv run jupyter lab
```

Read the `uv` [documentation](https://docs.astral.sh/uv/) for more details.

## Urban data science in a computational notebook

During the course's initial software setup, you created an environment with all the required packages. The required packages are defined in the course's [project file](../../pyproject.toml). These are the tools we will use all semester.

All of the lectures and coursework will utilize Jupyter notebooks. These notebooks provide an interactive environment for working with code and have become standard in the data science world. [Read more](https://doi.org/10.22224/gistbok/2021.1.2).

## Version control

Distributed version control is central to modern analytics work in both research and practice. It allows (multiple) people to collaboratively develop source code while tracking changes. Today, git is the standard tool for version control and source code management. Sites like GitHub provide hosting for git repositories.

GitHub Docs provides an excellent [introduction](https://docs.github.com/en/get-started/using-git/about-git) to distributed version control with git, so I will not duplicate it here. Take some time to work through their lessons. You need to understand, at a minimum, how to:

- fork a repo
- clone a repo
- work with branches
- add/commit changes
- push and pull to/from a remote repo
- merge a feature branch into the main branch

Start with their guides on [Git](https://docs.github.com/en/get-started/using-git/about-git), [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow), [forking a repo](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo), and [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax), and then explore from there.
