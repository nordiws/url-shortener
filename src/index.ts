import express from "express";
import 'dotenv/config'
import { router } from "./routes/routes";
import { MongoConnection } from "./database/MongoConnection";

const PORT = process.env.PORT || 3000

//Initializing Express instance
const api = express()

//Initializing and connecting to database
const database = new MongoConnection()
database.connect()

//Configuring express
api.use(express.json())
api.use(express.urlencoded({ extended: true }))

//Configuring routes
api.use(router)

//Starting server
api.listen(PORT, () => console.log(`Server online! Listening at port ${PORT}`))
