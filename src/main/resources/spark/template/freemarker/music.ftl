<#assign content>

<h1> <br> ${title} <br></h1>
<br>
<p>

  <div class="music">
    This page is to outline my project aiming to classify the musical genre of audio clips using Deep Learning approaches.
    The project was divided into three main tasks:
  </div>
  <br>
<br>
  <h2>
    1. Dataset and Feature Extraction
  </h2>
  <div class="music2">
    Dataset used was the GTZAN Genre Collection dataset, which is popular for music audio clip tasks. Properties:
    <ul>
      <li>
        1000 audio clips in .wav format each 30 seconds in length, split into 60 intervals (60000 data points total)
      </li>
      <li>
        .wav files were inputs and labels were 1 of 10 predetermined genres
      </li>
      <li>
        Brought .wav files to a vector space using librosa library
      </li>
      <li>
        80/20 split between training/testing (randomized order)
      </li>
      <li>
        Feature extraction options were MFCC and Chromograms, which each used the audio clips' pitch, bass, and intensity to generate metrics and separate labeled clips into vector spaces (shown below)
      </li>
    </ul>
    <img src="spark/template/freemarker/img/preprocess.png" class="center" >
    (Figure 1: Clusters based on feature extraction. Note that the color clusters are more visible with MFCC, meaning the genres could better be separated by features)
  </div>

  <br>
    <h2>
      2. Convolutional Neural Networks
    </h2>
    <div class="music2">
      Following research, testing, and optimization, our CNN consisted of:
      <ul>
      <li>Dense layer of size 512 with ReLU activation</li>
      <li>Batch Normalization</li>
      <li>LeakyReLU with alpha of 0.2</li>
      <li>Reshape layer of (4, 4, 32)</li>
      <li>Convolution layer with 64 filters of size 2 by 2 and stride of 1 and “same” padding with ReLU activation</li>
      <li>Convolution layer with 128 filters of size 2 by 2 and stride of 1 and “same” padding with ReLU activation</li>
      <li>Convolution layer with 128 filters of size 2 by 2 and stride of 1 and “same” padding with ReLU activation</li>
      <li>Flatten layer</li>
      <li>Dropout layer of 0.5</li>
      <li>Dense layer of size 150 with ReLU activation</li>
      <li>Dense layer of size 64 with ReLU activation</li>
      <li>Dense layer of size 10 with softmax activation</li>

      </ul>

      We logged the results of this, as well as the results with various hyperparameters.

      <img src="spark/template/freemarker/img/cnn.png" class="center" >
      (Figure 2: CNN results. Compared to our Feed-Forward results ranging from 30%-60%, this is slightly better performing)
    </div>
    <br>
      <h2>
        3. Recurrent Neural Networks
      </h2>
      <div class="music2">
        Following research, testing, and optimization, our RNN consisted of:
        <ul>
        <li>Dense layer of size 256 with leaky ReLU activation of dropout 0.2</li>
        <li>LSTM layer of size 128 with dropout of 0.05 and recurrent dropout of 0.5</li>
        <li>LSTM layer of size 32 with dropout of 0.05 and recurrent dropout of 0.5</li>
        <li>Dense layer of size 10 with softmax activation</li>

        </ul>

        We logged the results of this, as well as the results with various hyperparameters.

        <img src="spark/template/freemarker/img/rnn.png" class="center" >
        (Figure 3: RNN results. Compared to our Feed-Forward results ranging from 30%-60%, this is significantly better performing)

    </div>
    <br>
    <h2>
      Overview
    </h2>
    <div class="music2">
      I found this project to be very insightful and was actually very surprised at how strong the results were. The biggest challenge of the project felt like preprocessing. Understanding how to vectorize the .wav files for
      each audio clip using Librosa was a large portion of the project, since I had to weigh factors such as size of audio clips, number of data points, and segmentation of clips. Ultimately, the model was able to get accuracies above 85%
      when performing best. <br> <br> The project is usable on audio files from Spotify and SoundCloud, and can certainly be applied in these companies' algorithms to sort through genres of various musicians without having to manually identify
      everything. This kind of Deep Learning approach to music management can save lots of time and effort by these companies should they adopt this strategy in the future, since the accuracy is quite reliable and can be improved further. <br>
      <img src="spark/template/freemarker/img/music.png" class="center2" >
  </div>


</p>

</#assign>
<#include "main.ftl">
