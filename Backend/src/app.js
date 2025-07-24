import express from "express";
import { createServer } from "node:http";  //connecting the socket and the experess server
import { Server } from "socket.io";  // Importing socket.io server
import mongoose from "mongoose";  
import cors from "cors";   //et CORS - allows frontend to talk to backend

const app = express();  // Create an Express application
const server = createServer(app);  // Wrap Express app in HTTP server - like putting the restaurant in a building
const io = new Server(server);  // Create a new Socket.IO server - like the waiter in the restaurant

app.set("port", (process.env.PORT || 8000));  // Set the port for the Express app, defaulting to 8000 if not set
app.get("/", (req, res) => {
  return res.json({"hello": "World"})  // Send back JSON response with "hello": "World"
});

const start = async () => {  // Function to start the server and connect to MongoDB
  const connectionDB = await mongoose.connect("mongodb+srv://rkjsr2005:EgnDi0JfJhOAGlB0@cluster0.yebyv7r.mongodb.net/", {});  // Connect to MongoDB
  console.log(`MONGODB connected: ${connectionDB.connection.host}`);  // Log the MongoDB connection host
  server.listen(app.get("port"), () => {
      console.log("Server is running on port 8000"); 
  });

};
start();
