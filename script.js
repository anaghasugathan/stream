const ideas = {
    low: {
        indoor: ["Movie night at home 🎬", "Cook together 🍝", "Board games night 🎲"],
        outdoor: ["Beach walk 🌊", "Park picnic 🧺", "Street food date 🌮"],
        adventure: ["Cycling 🚴", "Nature walk 🌳"],
        romantic: ["Sunset watching 🌅", "Handwritten letter exchange 💌"],
        fun: ["Karaoke night 🎤", "DIY art session 🎨"]
    },
    medium: {
        indoor: ["Bowling 🎳", "Gaming arcade 🕹"],
        outdoor: ["Café hopping ☕", "Zoo visit 🦁"],
        adventure: ["Hiking 🥾", "Boating 🚤"],
        romantic: ["Candlelight dinner 🍽", "Rooftop dinner 🌃"],
        fun: ["Mini golf ⛳", "Photography walk 📸"]
    },
    high: {
        indoor: ["Luxury spa day 💆", "Private movie screening 🎥"],
        outdoor: ["Theme park 🎡", "Resort stay 🏖"],
        adventure: ["Paragliding 🪂", "Scuba diving 🤿"],
        romantic: ["Fine dining restaurant 🍷", "Surprise getaway trip ✈"],
        fun: ["Concert night 🎶", "Hot air balloon ride 🎈"]
    }
};

function generateIdea() {
    const budget = document.getElementById("budget").value;
    const type = document.getElementById("type").value;

    const selectedIdeas = ideas[budget][type];
    const randomIndex = Math.floor(Math.random() * selectedIdeas.length);

    document.getElementById("result").innerText = selectedIdeas[randomIndex];
}