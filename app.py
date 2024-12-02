import numpy as np
from flask import Flask, request, render_template, jsonify
from flask_cors import CORS
import pickle
import torch
from PIL import Image
import numpy as np
import io

app = Flask(__name__)
CORS(app)


device = torch.device('cpu')

# Load the model, use device CPU
model = pickle.load(open("./model_ft_trained.pkl", "rb"))

# model = torch.load('model_ft_trained.pth', map_location=device)

# model.load_state_dict(model)
# model.to(device)

print(">>>> Model successfully loaded on CPU!")

# Possible predictions
labels = [
    "Early Blight",
    "Healthy",
    "Late Blight",
    "Leaf Miner",
    "Magnesium Deficiency",
    "Nitrogen Deficiency",
    "Pottassium Deficiency",
    "Spotted Wilt_Virus",
]

def preprocess_image(image):
    image = image.resize((224, 224))  
    image = np.array(image).astype(np.float32) / 255.0
    image = np.transpose(image, (2, 0, 1)) 
    image = torch.tensor(image).unsqueeze(0)  
    return image



@app.route("/")
def home():
    print("API: endpoint is Working.")
    return 'Home Page'


@app.route("/predict", methods=["POST"])
def predict():

    try:
        if 'image' not in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        print(">>>>>> 1. Processing the image. ")
        # Prepare the image
        file = request.files['image']
        image = Image.open(io.BytesIO(file.read()))
        processed_image = preprocess_image(image).to(device)

        print(">>>>>> 2. Predicting the image. ")
        # Prediction
        with torch.no_grad():
            outputs = model(processed_image)
            _, predicted = torch.max(outputs, 1)

        print(">>>>>> 3. Getting the label. ")
        # Get the label (class) value
        predicted_label = labels[predicted.item()]
        return jsonify({"prediction": f"{predicted_label}"})


    except Exception as e:
        return jsonify({"error": str(e)}), 500



if __name__ == "__main__":
    app.run(debug=True)