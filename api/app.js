const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/info', (req, res) => {
    const response = {
	email: "sekinatoyelami@gmail.com",
	current_datetime: new Date().toISOString(),
	github_url: "https://github.com/Giftbatolu/hng-backend-stage_0"
    }
    res.status(200).json(response);
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
