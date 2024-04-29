---
title: "Patch-Based Convolutional Encoder: A Deep Learning Algorithm for Spectral Classification Balancing the Local and Global Information"
collection: publications
permalink: /publication/2022-08-27-paper-title-number-1
excerpt: 'This paper is about a deep learning model balancing the global and local information of vibratonal spetrum.'
date: 2024-02-07
venue: 'February 7'
paperurl: 'https://pubs.acs.org/doi/10.1021/acs.analchem.3c03889'
citation: 'Anal. Chem. 2024, 96, 7, 2866–2873'
---
## Abstract
Molecular vibrational spectroscopies, including infrared absorption and Raman scattering, provide molecular fingerprint information and are powerful tools for qualitative and quantitative analysis. They benefit from the recent development of deep-learning-based algorithms to improve the spectral, spatial, and temporal resolutions. Although a variety of deep-learning-based algorithms, including those to simultaneously extract the global and local spectral features, have been developed for spectral classification, the classification accuracy is still far from satisfactory when the difference becomes very subtle. Here, we developed a lightweight algorithm named patch-based convolutional encoder (PACE), which effectively improved the accuracy of spectral classification by extracting spectral features while balancing local and global information. The local information was captured well by segmenting the spectrum into patches with an appropriate patch size. The global information was extracted by constructing the correlation between different patches with depthwise separable convolutions. In the five open-source spectral data sets, PACE achieved a state-of-the-art performance. The more difficult the classification, the better the performance of PACE, compared with that of residual neural network (ResNet), vision transformer (ViT), and other commonly used deep learning algorithms. PACE helped improve the accuracy to 92.1% in Raman identification of pathogen-derived extracellular vesicles at different physiological states, which is much better than those of ResNet (85.1%) and ViT (86.0%). In general, the precise recognition and extraction of subtle differences offered by PACE are expected to facilitate vibrational spectroscopy to be a powerful tool toward revealing the relevant chemical reaction mechanisms in surface science or realizing the early diagnosis in life science.


[Download paper here](https://pubs.acs.org/doi/10.1021/acs.analchem.3c03889)

Recommended citation: Anal. Chem. 2024, 96, 7, 2866–2873