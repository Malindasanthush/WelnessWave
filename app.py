from flask import Flask, request, render_template
import pickle
import numpy as np

# Load the model
with open('newGymModel.pkl', 'rb') as file:
    model = pickle.load(file)

# Create the Flask app
app = Flask(__name__)

# Route for the home page
@app.route('/')
def home():
    return render_template('index.html')

# Route for the prediction
@app.route('/predict', methods=['POST'])
def predict():
    height = float(request.form['height'])
    weight = float(request.form['weight'])
    gender = int(request.form['gender'])

    # Calculate BMI
    bmi = weight / (height / 100) ** 2

    # Prepare the input for the model
    input_features = np.array([[bmi, gender]])

    # Make a prediction
    prediction = model.predict(input_features)

    # Render the result
    return render_template('index.html', result=f'If you follow that workoutplan,Predicted time to reach/maintain normal BMI: {prediction[0]:.2f} weeks')

if __name__ == '__main__':
    app.run(debug=True)

