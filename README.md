### Project title: Live Plant Disease Identification (LPDI)

## Project description:

This project aims to build a web app for real-time identification of plant diseases through live
camera input. By analyzing an image of a plant, the app will detect visual indicators of disease,
such as color changes, brown spots, and distorted patterns caused by conditions like blight,
mildew, or rust. The user will receive instant feedback showing name of identified disease, or a message
indicating "Healthy" if no issues are detected.    

### Classification
Current list of classification by the model include: [        
"Early Blight",        
"Healthy",        
"Late Blight",        
"Leaf Miner",        
"Magnesium Deficiency",        
"Nitrogen Deficiency",        
"Pottassium Deficiency",        
"Spotted Wilt_Virus",        
]           
          
### Model     `LPDI/express/model/`    
The final model is finetuned with ConvNet based off resnet18 vision model.                          
Finetuned final Model    : `LPDI/express/model/model_ft_trained.pth`                
Model training Notebook  : `LPDI/express/model/pytorch/resnet18_Finetune_Final.ipynb`                     
Summary of evaluation    : `LPDI/express/model/model_summaries/ResNet_final_Finetuned_ConvNet_summary.pdf`     

Different model and approach I've experimented with is located at: `/LPDI/express/model/unsloth` and `LPDI/express/model/pytorch/qwen_test.ipynb`. After a lot trials and testing, the accuracy was lower than I anticipated. I've decided not to use it for this project.    

### Training data:    
The main dataset I used for this project is located at: `LPDI/express/data/tomato`    

        
### Project folder structure:    
- Client/: Consists of UI built upon React framework    
- express/: Consists of training data, model fine tuning notebooks, and summary of different models and approaches test result.     
- Flask: app.py handls api calls to the server.      

## How to start the app:        

1. Server:             
`cd LPDI`                
run `app.py`            // The api will be active at `http://127.0.0.1:5000/`     This must be true for the client side to function properly.              

2. Client:            
`cd LPDI/client`        
run `npm start`        // The app will start at `http://localhost:3000/`             

3. model: The app makes prediction using the `model_ft_trained.pkl` model file located at root the level.      

4. express app (Not required)        
`cd LPDI/express`       
run `npm start`


### Excpected result:

https://github.com/user-attachments/assets/50c5ec79-a57a-46d1-85ec-4ac74e461fc8

