# Fix broken environment

Open a terminal window (or Anaconda command prompt if on Windows), change directories to the ppd599 folder on your desktop, and run the following commands, one at a time:

```
git pull
conda deactivate
conda env remove -n ppd599
conda clean --all --yes
conda env create --file environment.yml --force
conda activate ppd599
python -m ipykernel install --sys-prefix --name ppd599 --display-name "Python (ppd599)"
conda activate ppd599
jupyter lab
```

Then try to run the lecture notebook again, and see if you run into that bug.
