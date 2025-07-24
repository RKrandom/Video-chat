import express from "express";
import { createServer } from "node:http";  //connecting the socket and the experess server
import { Server } from "socket.io";  // Importing socket.io server
import mongoose from "mongoose";  

import { connectToSocket } from "./controllers/SocketManager.js";
import cors from "cors";   //et CORS - allows frontend to talk to backend

const app = express();  // Create an Express application
const server = createServer(app);  // Wrap Express app in HTTP server - like putting the restaurant in a building
const io = connectToSocket(server);  // Create a new Socket.IO server - like the waiter in the restaurant

app.set("port", (process.env.PORT || 8000));  // Set the port for the Express app, defaulting to 8000 if not set
app.use(cors());  // Use CORS middleware to allow cross-origin requests. So as we get ip error is handeled by cors
app.use(express.json({limit: "40kb"}))
app.use(express.urlencoded({extended: true,  limit: "40kb"}));  // Parse incoming requests with JSON and URL-encoded payloads

const start = async () => {  // Function to start the server and connect to MongoDB
  const connectionDB = await mongoose.connect("mongodb+srv://rkjsr2005:EgnDi0JfJhOAGlB0@cluster0.yebyv7r.mongodb.net/", {});  // Connect to MongoDB
  console.log(`MONGODB connected: ${connectionDB.connection.host}`);  // Log the MongoDB connection host
  server.listen(app.get("port"), () => {
      console.log("Server is running on port 8000"); 
  });

};
start();
