#!/bin/bash
pandoc ../readme.md --pdf-engine=pdflatex --output=syllabus.pdf --include-in-header=header.tex
