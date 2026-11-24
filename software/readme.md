# Course software

You need a laptop for this course, but all the required software is free and open-source.

## Get to know your terminal

Your computer comes with a "terminal" app that lets you type commands for your computer to run (on Windows, the terminal is called "command prompt"). Before you complete the initial software setup below, make sure you have read Module 1's assigned readings on how to use the terminal.

## Google Colab

To open a notebook in the cloud, click the Colab button in this repo's root readme file. Sign into your USC account to use your USC Google Drive for file storage. Save your work to Drive.

Colab uses its own Python environment. Install any missing packages in the active runtime and make the course data available at the paths used by the notebook. Use the local setup below to run the course environment on your computer.

## Initial software setup

At the beginning of the semester, you need to do a one-time setup process to install and configure the course software on your computer. The two important pieces of software that you need to install are uv and Git. uv is a package manager we will use to set up your Python environment. Git is a tool that lets you pull in the latest versions of the course files each week.

Install and configure the software by following the steps below.

### Step 1: Git

Download and install [git](https://git-scm.com/downloads). Then, on your computer, open a terminal window, change directories to your desktop, and clone the course repo to your desktop by running the following command in your terminal:

```
git clone https://github.com/gboeing/ppde642.git
```

You now have a `ppde642` folder on your desktop containing the course repo.

### Step 2: uv

Install [uv](https://docs.astral.sh/uv/getting-started/installation/). Then open a new terminal, change directories to the `ppde642` folder on your desktop, and run the following commands, one at a time:

```
git pull
uv sync
```

You now have an environment with all the packages needed for this course.

## How to run Jupyter

First make sure you've completed the "initial software setup" instructions above.

When you come into class each day, before the lecture begins, do the following steps (takes <1 minute):

1. Make sure you have the latest data from the course's Google Drive data folder
1. Open a terminal, change directories to the `ppde642` folder on your desktop that you created in the initial software setup
1. Run `git pull` to bring your local clone of the course repo up to date with the remote
1. Run `uv run jupyter lab` to start your Jupyter server
1. In your web browser, visit http://localhost:8888

When you're all done using Jupyter at the end of a session, in the menu click File > Shut Down. Do not just close your browser tab or terminal window without stopping Jupyter first. Note that you can only type commands into a terminal window when its cursor is blinking. Otherwise it's busy.

## Troubleshooting

If you run into software problems down the road, close all open programs, restart your computer, then try your task again. If the problem persists, uninstall uv, uninstall Git, restart your computer, then re-do the "initial software setup" instructions above. For further troubleshooting, Google and StackOverflow are your friends!
