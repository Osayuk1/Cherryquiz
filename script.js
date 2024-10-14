document.getElementById("quizForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const webhookUrl = "https://discord.com/api/webhooks/1268893038793719859/_ktjZVX-uHx8UVoYu7GAdrpkRLpbysF11nl120aBoWKRwdsY06g_9dAq1HYG7yeWvqwk";
    
    // Collect the answers, including Discord and Trade name
    const answers = {
        discordName: document.getElementById("discordName").value,
        tradeName: document.getElementById("tradeName").value,
        question1: document.getElementById("question1").value,
        question2: document.getElementById("question2").value,
        question3: document.getElementById("question3").value
    };

    // Prepare the payload with Discord name and Trade name included in the quiz answers
    const payload = {
        content: `
**Discord Name**: ${answers.discordName}
**Trade Name**: ${answers.tradeName}

**Quiz Answers:**
1. **What is the capital of France?** - ${answers.question1}
2. **What is 5 + 3?** - ${answers.question2}
3. **Who wrote 'Hamlet'?** - ${answers.question3}
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
