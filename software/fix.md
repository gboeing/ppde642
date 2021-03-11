
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
