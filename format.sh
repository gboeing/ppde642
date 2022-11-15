#!/bin/bash
set -e
nbqa isort ./modules/*/*.ipynb --nbqa-mutate --line-length 100 --sl
# nbqa black ./modules/*/*.ipynb --nbqa-mutate --line-length 100
# nbqa flake8 ./modules/*/*.ipynb --max-line-length 140
jupyter nbconvert --ClearOutputPreprocessor.enabled=True --inplace ./modules/*/*.ipynb
