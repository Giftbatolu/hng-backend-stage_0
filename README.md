# hng-backend-stage_0

## Description
This project implements a public API that returns specifi personal information in JSON format.The API provides the following details:
- My registered email address for HNG12 slack workplace with is sekinatoyelami@gmail.com
- The current datetime as an ISO 8601 formatted timestamp.
- The GitHub URL of the project's codebase.

The API is built to handle CORS (Cross-Origin Resource Sharing) and ensures that all responses are provided in JSON format.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [API Endpoints](#api-endpoints)
- [Acknowledgments](#acknowledgments)

## Installation
To run this API locally, follow these steps:
- Clone the repository.
- Navigate to the project directory
- Install the necessary dependencies using npm install
- Start the local server using npm start

## Usage
To use the API, send a `GET` request to the following endpoint:
```
GET /
```

## Deployment
The API has been deployed to vercel. You can access it at:
[https://hng-backend-stage-0-theta.vercel.app](https://hng-backend-stage-0-theta.vercel.app)

## API Endpoints
### `/`

- **Method**: `GET`
- **Content-Type**: `application/json`
- **Response**:
    (200 ok)
    {
	"email": "your-email@example.com",
	"current_datetime": "2025-01-30T09:30:00Z",
	"github_url": "<https://github.com/yourusername/your-repo>"
}

## Acknowledgments
- Thanks to the HNG12 Slack workspace for providing the context for this task.
- Inspired by best practices for building and documenting public APIs.
