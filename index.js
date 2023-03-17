const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
// const cors = require("cors")
const port = process.env.PORT || 5000
const mpesaRoutes = require("./routes/mpesa")
dotenv.config()
// const corsOption = {


//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204

// }
// app.use(cors(corsOption))
mongoose.connect(process.env.MONG0_URL)
    .then(() => {
        app.listen(port, () => {
            console.log(`Application is running on port ${port} and DB is connected`)
        })
    })
    .catch((err) => {
        console.log(err)
    })
app.use(express.json())
app.use("/api", mpesaRoutes);





