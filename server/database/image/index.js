import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    Images: [
        {
            location: { type: String, required: true }
        }
    ]
}, {
    timestamps: true
});

// Corrected export statement
export const ImageModel = mongoose.model("Images", ImageSchema);


