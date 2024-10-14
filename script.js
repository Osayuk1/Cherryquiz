document.getElementById("quizForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const webhookUrl = "https://discord.com/api/webhooks/1268893038793719859/_ktjZVX-uHx8UVoYu7GAdrpkRLpbysF11nl120aBoWKRwdsY06g_9dAq1HYG7yeWvqwk";
    
    const answers = {
        question1: document.getElementById("question1").value,
        question2: document.getElementById("question2").value,
        question3: document.getElementById("question3").value
    };

    const payload = {
        content: `Quiz Answers:\n1. ${answers.question1}\n2. ${answers.question2}\n3. ${answers.question3}`
    };

    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(response => {
        if (response.ok) {
            alert("Your answers have been submitted!");
        } else {
            alert("There was an error submitting your answers.");
        }
    }).catch(error => {
        alert("Error: " + error.message);
    });
});
