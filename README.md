# Video-chat
A video calling and chatting app encrypted.

# What all are the packages we r installing in Backend?
npm i express mongoose
npm i bcrypt nodemon
npm i http-status
npm i socket.io
npm i crypto

LOGIN Flow (What you described is mostly REGISTER):
Client enters credentials → Route → Controller → CHECK if user EXISTS → 
If exists: Compare passwords → Success/Failure response
If not exists: "User not found" error

REGISTER Flow (What you actually described):
Client enters new user data → Route → Controller → CHECK if username already exists → 
If exists: "Username taken" error
If not exists: Hash password → Save to database → Success response

