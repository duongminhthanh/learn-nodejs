// import express
const express = require('express');
//app
const app = express();
//port
const PORT = 5001;
//server
const server = app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});