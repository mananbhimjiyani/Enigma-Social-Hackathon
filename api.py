import tensorflow as tf
from tensorflow import keras
from keras.utils import *
from keras.models import load_model
from keras.utils import load_img
from flask import Flask, request, jsonify
import numpy as np
from flask_cors import CORS
import io
from PIL import Image
from keras.preprocessing import image
from keras.applications.inception_v3 import preprocess_input
import requests

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

dl_model=load_model('model.h5')
model2=load_model('model2.h5')
model3=load_model('model3.h5')

@app.route('/predict', methods=['POST'])
def predict():
    # Get the input data from the request
    data = request.get_json()
    inp = np.array([[data['age'], data['BMI'], data['glucose'], data['insulin'], data['HOMA'], data['Leptin'], data['adiponectin'], data['resistin'], data['MCP-1']]])

    # Make a prediction using the model
    out = dl_model.predict(inp)
    o = out[0]

    # Return the prediction as a JSON response
    if o < 0.5:
        return jsonify({'prediction': 'negative'})
    else:
        return jsonify({'prediction': 'positive'})
    
@app.route('/predict_radiological', methods=['POST'])
def predict_radiological():
    # Get the input data from the request
    data = request.get_json()
    inp = np.array([[data['radius_mean'], data['texture_mean'], data['perimeter_mean'], data['area_mean'], data['smoothness_mean'], data['compactness_mean'], data['concavity_mean'], data['concave_points_mean'], data['symmetry_mean'], data['fractal_dimension_mean']]])

    # Make a prediction using the model
    out = model2.predict(inp)
    o = out[0]

    # Return the prediction as a JSON response
    if o < 0.5:
        return jsonify({'prediction': 'negative'})
    else:
        return jsonify({'prediction': 'positive'})

@app.route('/predict_ultrasonic', methods=['POST'])
def predict_ultrasonic():
    # Get the input data from the request
    data = request.get_json()

    # Get the image URL from the input data
    img_url = data.get('imgLink')

    # Download the image from the URL
    response = requests.get(img_url)
    img = Image.open(io.BytesIO(response.content))

    # Preprocess the image
    img = img.resize((224, 224))  # Adjust the size as needed
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)

    # Make a prediction using the model
    out = model3.predict(img_array)
    o = out[0]

    # Return the prediction as a JSON response
    if o < 0.5:
        return jsonify({'prediction': 'negative'})
    else:
        return jsonify({'prediction': 'positive'})
    
if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=8080)
    
