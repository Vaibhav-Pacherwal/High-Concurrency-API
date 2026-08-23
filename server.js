import os from "os";
import express from "express";
import connectDB from "./db.config.js";
import dotenv from "dotenv";
import cluster from "cluster";
dotenv.config();

if(cluster.isPrimary) {

    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();

} else {

    const app = express();

    const PORT = process.env.PORT;

    const main = async () => {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Worker ${process.pid} is running`);
        });
    }

    main();

    app.get("/hello", (req, res) => {
        res.json({
            message: "Hello users, let's get started!"
        })
    });
    
}