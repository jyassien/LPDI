### Project title: Live Plant Disease Identification (LPDI)

## Project description:

This project aims to build a web app for real-time identification of plant diseases through live
camera input. By analyzing an image of a plant, the app will detect visual indicators of disease,
such as color changes, brown spots, and distorted patterns caused by conditions like blight,
mildew, or rust. The user will receive instant feedback with highlighted areas on the image
showing identified disease spots, along with the name of the detected disease, or a message
indicating "Healthy" if no issues are detected.    

### Classification
Current list of classification by the model includes: [
"Early Blight",
"Healthy",
"Late Blight",
"Leaf Miner",
"Magnesium Deficiency",
"Nitrogen Deficiency",
"Pottassium Deficiency",
"Spotted Wilt_Virus",
]
 
### Project structure:    
- Client/: Consists of UI built upon React framework    
- express/: Consists of training data, model fine tuning notebooks, and summary of different models tests.     
- Flask: app.py handls api calls to the server.      

## How to start the app:        

1. Server:             
`cd LPDI`                
run `app.py`        

2. Client:            
`cd LPDI/client`        
run `npm start`        

3. express app (Not required)        
`cd LPDI/express`       
run `npm start`        