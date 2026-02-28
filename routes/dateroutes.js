import express from "express";
import DateIdea from "../models/DateIdea.js";

const router = express.Router();

// Get random idea
router.get("/random", async (req, res) => {
    const { budget, type } = req.query;

    try {
        const ideas = await DateIdea.find({ budget, type });

        if (ideas.length === 0) {
            return res.status(404).json({ message: "No ideas found" });
        }

        const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
        res.json(randomIdea);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add new idea
router.post("/add", async (req, res) => {
    try {
        const newIdea = new DateIdea(req.body);
        await newIdea.save();
        res.status(201).json(newIdea);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all ideas
router.get("/all", async (req, res) => {
    try {
        const ideas = await DateIdea.find();
        res.json(ideas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;