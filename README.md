# hng-backend-stage_0

## Description
This project implements a public API that returns specifi personal information in JSON format.The API provides the following details:
- Registered email address for HNG12 slack workplace
- The current datetime as an ISO 8601 formatted timestamp.
- The GitHub URL of the project's codebase.

The API is built to handle CORS (Cross-Origin Resource Sharing) and ensures that all responses are provided in JSON format.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [API Endpoints](#api-endpoints)
- [Acknowledgments](#acknowledgments)
- [BackLink](#backlink)

## Installation
To run this API locally, follow these steps:
1. Clone the repository:
```
git clone https://github.com/Giftbatolu/hng-backend-stage_0.git
```
2. Install the necessary dependencies: 
```
npm install
```
3. Start the local server by running:
```
 npm start
```

## Usage
To use the API, send a `GET` request to the following endpoint:
```
GET /
```

## Deployment
The API has been deployed to vercel. You can access it at:

- [https://hng-backend-stage-0-theta.vercel.app](https://hng-backend-stage-0-theta.vercel.app)

## API Documentation

_ **Endpoint**: `/`
- **Method**: `GET`
- **Content-Type**: `application/json`
- **Response**: `JSON`

### Example Response
```
{
    "email": "sekinatoyelami@gmail.com",
    "current_datetime": "2025-01-30T00:24:02.611Z",
    "github_url": "https://github.com/Giftbatolu/hng-backend-stage_0"
}
```

## Acknowledgments
- Thanks to the HNG12 Slack workspace for providing the context for this task.
- Inspired by best practices for building and documenting public APIs.

## Backlink
- [HNG12 Nodejs Developer](https://hng.tech/hire/nodejs-developers)
