
import express from "express"
import { config } from "./config/config.js";
import { connectdb } from "./config/db.js"




const app = express();

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Hii server start"

    })
})
connectdb();
app.listen(config.PORT, () => {
    console.log("server start at:", `http://localhost:${config.PORT}/`);
})