########################################################################
# PPDE642 Dockerfile
# License: MIT, see full license in LICENSE.txt
# Web: https://github.com/gboeing/ppde642
########################################################################

FROM jupyter/base-notebook
LABEL maintainer="Geoff Boeing <boeing@usc.edu>"
LABEL url="https://github.com/gboeing/ppde642"
LABEL description="USC PPDE642 course image"

COPY --chmod=0755 requirements.txt /tmp

# install packages in one RUN to keep image tidy
RUN mamba update --yes -c conda-forge --strict-channel-priority --no-banner -n base mamba && \
    mamba install --update-all --force-reinstall --yes -c conda-forge --strict-channel-priority --no-banner --file /tmp/requirements.txt && \
    rm -f -r -v /opt/conda/share/jupyter/kernels/python3 && \
    python -m ipykernel install --sys-prefix --name ppde642 --display-name "Python (ppde642)" && \
    mamba clean --all --yes --quiet --no-banner && \
    mamba info --all && \
    mamba list && \
    jupyter kernelspec list && \
    ipython -c "from nltk.corpus import brown; print(brown.words())" && \
    ipython -c "import torch; print(torch.__version__, torch.cuda.is_available())" && \
    ipython -c "from transformers import pipeline; print(pipeline('sentiment-analysis')('I love you'))" && \
    ipython -c "import osmnx; print('OSMnx version', osmnx.__version__)"

# copy default jupyterlab settings, then set jupyter working directory to map to mounted volume
COPY --chmod=0755 overrides.json /opt/conda/share/jupyter/lab/settings/
WORKDIR /home/jovyan/work

# set default command to launch when container is run
CMD ["jupyter", "lab", "--ip='0.0.0.0'", "--port=8888", "--no-browser", "--NotebookApp.token=''", "--NotebookApp.password=''"]
