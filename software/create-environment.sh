#!/bin/bash
set -e
ENV=ppde642
PACKAGE=osmnx
eval "$(conda shell.bash hook)"
conda activate base
mamba env remove -n $ENV --yes
mamba clean --all --yes --quiet --no-banner
mamba env create --file ../environment.yml --force
eval "$(conda shell.bash hook)"
conda activate $ENV
python -m ipykernel install --sys-prefix --name $ENV --display-name "Python ($ENV)"
mamba clean --all --yes --quiet --no-banner
mamba list --no-banner
jupyter kernelspec list
ipython -c "from nltk.corpus import brown; print(brown.words())"
ipython -c "from transformers import pipeline; print(pipeline('sentiment-analysis')('I love you'))"
ipython -c "import $PACKAGE; print('$PACKAGE version', $PACKAGE.__version__)"
