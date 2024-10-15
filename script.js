document.getElementById("quizForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const webhookUrl = "https://discord.com/api/webhooks/1268893038793719859/_ktjZVX-uHx8UVoYu7GAdrpkRLpbysF11nl120aBoWKRwdsY06g_9dAq1HYG7yeWvqwk";

    // Collect all form data
    const answers = {
        discordName: document.getElementById("discordName").value,
        tradeName: document.getElementById("tradeName").value,
        question1: document.getElementById("question1").value,
        question2: document.getElementById("question2").value,
        question3: document.getElementById("question3").value,
        question4: document.getElementById("question4").value,
        question5: document.getElementById("question5").value,
        question6: document.getElementById("question6").value,
        question7: document.getElementById("question7").value,
        question8: document.getElementById("question8").value,
        question9: document.getElementById("question9").value,
        question10: document.getElementById("question10").value,
        question11: document.getElementById("question11").value,
        question12: document.getElementById("question12").value,
        question13: document.getElementById("question13").value
    };

    // Prepare the payload with all quiz data
    const payload = {
        content: `
**Discord Name**: ${answers.discordName}
**Trade Name**: ${answers.tradeName}

**Quiz Answers:**
1. **In my nation, only royalty is permitted. What realm am I in?** - ${answers.question1}
2. **I will remain indestructible even when everything will be gone. What am I?** - ${answers.question2}
3. **I have no weakness. Did I also mention rich?** - ${answers.question3}
4. **Okay, I warrant the giant title, but am not the biggest monster right?** - ${answers.question4}
5. **Am a literal sniper. Why is my weakness a sword?** - ${answers.question5}
6. **Am I richer than Opulina? Do I need to ask Adam?** - ${answers.question6}
7. **Why did no one care about me being elven until the gods showed up?** - ${answers.question7}
8. **In front of the elves, I might as well not be seen?** - ${answers.question8}
9. **I am the route to an aquatic treasure; I am old but strong, and I may be discovered in a crowded city.** - ${answers.question9}
10. **Not everyone helped me open, but I give everyone something.** - ${answers.question10}
11. **You don’t have to work out; just give me a few bucks, and I’ll help you get stronger.** - ${answers.question11}
12. **Through their fall, my prize I claim, From each defeat, I earn my fame. What reward comes from this endless spree, As pigs fall down, one, two, then three?** - ${answers.question12}
13. **With leather gloves in hand, I take my time, Piece by piece, a silent rhyme. What is this gift, made by design, Forged from my hands, a craft divine?** - ${answers.question13}
        `
    };

    // Send data to Discord webhook
    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(response => {
        if (response.ok) {
            alert("Your answers have been submitted successfully!");
        } else {
            alert("There was an error submitting your answers. Please try again.");
        }
    }).catch(error => {
        console.error("Error:", error);
        alert("An error occurred while submitting your answers. Please try again later.");
    });
});
