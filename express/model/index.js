const tf = require("@tensorflow/tfjs"); // library designed to run in the browser or on Node.js
const tf_node = require("@tensorflow/tfjs-node"); // library for running TensorFlow.js in Node.js
const onnxruntime = require("onnxruntime-node");
const multer = require("multer");
const path = require("path");
const sharp = require("sharp"); // A popular image manipulation library
const fs = require("fs");
const onnxModel = "server/model/model_ft_final.onnx";
const testImage_EarlyBlight =
  "server/data/tomato/Variant_A/test/Early_blight/IMG20220323100545_1.jpg";

const lables = [
  "Early_blight",
  "Healthy",
  "Late_blight",
  "Leaf_Miner",
  "Magnesium_Deficiency",
  "Nitrogen_Deficiency",
  "Pottassium_Deficiency",
  "Spotted_Wilt_Virus",
];

async function predictWithModel(modelPath, imgPath) {
  try {
    session.run();
    // Load the ONNX model
    const session = await onnx.InferenceSession.create(modelPath);

    // Process the image
    const imageBuffer = await sharp(imgPath).resize(224, 224).toBuffer();

    // Convert image buffer to a Float32Array tensor
    const tensor = new onnx.Tensor(
      "float32",
      new Float32Array(imageBuffer),
      [1, 3, 224, 224]
    );

    // Create input feeds for the model
    const feeds = { input: tensor }; // Assuming 'input' is the name of the input node

    // Run the model
    const output = await session.run(feeds);

    // Get the prediction: Assume output is the classification result
    const prediction = output.output.data;

    // Get the predicted class (the one with the highest score)
    const predictedClass = prediction.indexOf(Math.max(...prediction));

    // Return the class label
    return classNames[predictedClass];
  } catch (error) {
    console.error("Error in predicting the class:", error);
    throw new Error("Error in making prediction with the ONNX model");
  }
}

predictWithModel(onnxModel, testImage_EarlyBlight)
  .then((predictedLabel) => {
    console.log("Predicted class label:", predictedLabel);
  })
  .catch((error) => {
    console.error(error);
  });

// async function preprocessImage(imagePath) {
//   const imageBuffer = await fs.promises.readFile(imagePath);

//   // Resize the image and normalize it (using ImageNet mean and std)
//   const imageTensor = await sharp(imageBuffer)
//     .resize(224, 224)
//     .raw() // Raw pixel data
//     .toBuffer();

//   const float32Array = new Float32Array(224 * 224 * 3);
//   for (let i = 0; i < imageTensor.length; i++) {
//     const pixelValue = imageTensor[i] / 255.0; // Normalize to [0, 1]
//     const channel = i % 3; // 0, 1, 2 for R, G, B
//     const index = Math.floor(i / 3) * 224 * 3 + Math.floor(i / 3) * 3 + channel;
//     float32Array[index] = pixelValue;
//   }

//   return float32Array;
// }

// const runModel = async () => {
//   const session = await onnxruntime.InferenceSession.create(
//     "./model/model_ft_final.onnx"
//   );
//   console.log("session: ", session);
//   console.log("Model inputs:", session.inputNames); // Prints the input names

//   const inputName = session.inputNames[0]; // Use the first input name

//   const inputTensor = new onnxruntime.Tensor(
//     "float32",
//     await preprocessImage(
//       path.join(
//         __dirname,
//         "/data/tomato/Variant_A/test/Magnesium_Deficiency/IMG20220325112011.jpg"
//       )
//     ),
//     [1, 3, 224, 224]
//   );
//   const feeds = {
//     [inputName]: inputTensor, // Use dynamic input name
//   };
//   // const results = await session.run({ input_name: inputTensor });
//   const results = await session.run(feeds);

//   const output = results.output_name;
//   console.log(">>> output: ", output);

//   console.log("Model Called");
// };

// runModel().catch(console.error);

const test = () => {
  console.log(">>>>>>>>>>>>>> Testing");
};

module.exports = test;
// module.exports = runModel;
