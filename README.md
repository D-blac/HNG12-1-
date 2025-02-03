# 📊 Number Classification API

This API classifies numbers based on interesting mathematical properties and provides a fun fact about the number. It was built for the **HNG12 Stage 1 Backend Task** using **Node.js**.

## 🚀 Deployed URL
[View API](https://number-classification-api.onrender.com/api/classify-number?number=371)

---

## 📥 API Endpoint
- **Base URL:** http://localhost:7777/api/classify-number?number=371
- **Method:** `GET`
- **Query Parameter:**
  - `number` (required): The integer you want to classify.

### ✅ Example Request:

GET http://localhost:7777/api/classify-number?number=371
# Response
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371."
}
# Error Response
{
    "number": "abc",
    "error": true
}

## Features
**Check if a number is:**
**Prime**
**Perfect**
**Armstrong Number**
**Odd/Even**
**Calculate the digit sum of the number.**
**Fetch a fun fact from Numbers API.**


## Technologies Used
Node.js & Express for the server
Axios for API requests
CORS enabled for cross-origin support
Deployed on Render


## Deployment
Clone the repository:

**git clone https://github.com/your-username/number-classification-api.git**

Install dependencies:
npm install

Run the server locally:
npm start


**Author: D-Black**