import { Schema } from "mongoose";

const meetingSchema = new Schema(
    {
        user_Id: { type: String, required: true },
        meeting_code: { type: String, required: true, unique: true },
        date: { type: Date, default: Date.now, required: true },
        }
)

const meeting = mongoose.model("meeting", meetingSchema);

export { meeting };  // Exporting the meeting model for use in other files
//export default -> used when only one thing to be exported
//export -> used when multiple things to be exported