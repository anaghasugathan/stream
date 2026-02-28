import mongoose from "mongoose";

const dateIdeaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        enum: ["low", "medium", "high"],
        required: true
    },
    type: {
        type: String,
        enum: ["indoor", "outdoor", "adventure", "romantic", "fun"],
        required: true
    }
}, { timestamps: true });

const DateIdea = mongoose.model("DateIdea", dateIdeaSchema);

export default DateIdea;