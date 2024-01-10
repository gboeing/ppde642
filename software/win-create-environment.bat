SET ENV="ppde642"
CALL %USERPROFILE%\miniforge3\Scripts\activate.bat && ^
conda activate base && ^
mamba env remove -n %ENV% --yes && ^
mamba clean --all --yes --quiet --no-banner && ^
mamba env create --file ../environment.yml --force && ^
conda activate %ENV% && ^
python -m ipykernel install --sys-prefix --name %ENV% --display-name "Python (%ENV%)" && ^
mamba clean --all --yes --quiet --no-banner && ^
mamba list --no-banner && ^
jupyter kernelspec list && ^
ipython -c "from nltk.corpus import brown; print(brown.words())" && ^
ipython -c "import torch; print(torch.__version__, torch.cuda.is_available())" && ^
ipython -c "from transformers import pipeline; print(pipeline('sentiment-analysis')('I love you'))" && ^
ipython -c "import osmnx; print('osmnx version', osmnx.__version__)"
