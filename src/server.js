// import express
import express from 'express';
// import routes
import movieRoutes from './routes/movieRoutes.js';
//app
const app = express();

//API route
app.use("/movies", movieRoutes);
//port
const PORT = 5001;
//server
const server = app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});