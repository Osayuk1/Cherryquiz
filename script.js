document.getElementById("quizForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const webhookUrl = "https://discord.com/api/webhooks/1268893038793719859/_ktjZVX-uHx8UVoYu7GAdrpkRLpbysF11nl120aBoWKRwdsY06g_9dAq1HYG7yeWvqwk";

    const answers = {
        discordName: document.getElementById("discordName").value,
        tradeName: document.getElementById("tradeName").value,
        question1: document.getElementById("question1").value,
        question2: document.getElementById("question2").value,
        question3: document.getElementById("question3").value
    };

    const payload = {
        content: `Discord Name: ${answers.discordName}\nTrade Name: ${answers.tradeName}\n\nQuiz Answers:\n1. ${answers.question1}\n2. ${answers.question2}\n3. ${answers.question3}`
    };

    console.log("Submitting payload: ", payload);  // Check if payload is constructed

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
        console.error("Fetch error:", error);  // Log any errors to the console
        alert("Error: " + error.message);
    });
});
