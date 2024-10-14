document.getElementById("quizForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const webhookUrl = "https://discord.com/api/webhooks/1268893038793719859/_ktjZVX-uHx8UVoYu7GAdrpkRLpbysF11nl120aBoWKRwdsY06g_9dAq1HYG7yeWvqwk";
    
    // Collect the answers, including Discord and Trade name
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
        question8: document.getElementById("question8").value
    };

    // Prepare the payload with all questions, Discord name, and Trade name
    const payload = {
        content: `
**Discord Name**: ${answers.discordName}
**Trade Name**: ${answers.tradeName}

**Quiz Answers:**
1. **In my nation, only royalty is permitted. What realme am I in?** - ${answers.question1}
2. **I will remain indestructible even when everything will be gone. What am I?** - ${answers.question2}
3. **I have no weakness. Did I also mention rich?** - ${answers.question3}
4. **What color is the sky on a clear day?** - ${answers.question4}
5. **What is the largest mammal on Earth?** - ${answers.question5}
6. **What element does 'O' represent on the periodic table?** - ${answers.question6}
7. **How many continents are there on Earth?** - ${answers.question7}
8. **What is the tallest mountain in the world?** - ${answers.question8}
        `
    };

    // Log to the console for debugging purposes
    console.log("Submitting payload: ", payload);

    // Send the data to the Discord webhook
    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(response => {
        if (response.ok) {
            console.log("Response OK, answers submitted.");
            alert("Your answers have been submitted!");
        } else {
            console.error("Error response from Discord webhook:", response);
            alert("There was an error submitting your answers.");
        }
    }).catch(error => {
        console.error("Fetch error:", error);
        alert("Error: " + error.message);
    });
});
