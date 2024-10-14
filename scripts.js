<script>
document.querySelector("#quiz-form").addEventListener("submit", function(event){
    event.preventDefault();
    const answer1 = document.querySelector("#answer1").value;
    const answer2 = document.querySelector("#answer2").value;
    const answer3 = document.querySelector("#answer3").value;

    fetch('',{
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: `Answer1: ${answer1}, Answer2: ${answer2}, Answer3: ${answer3} `,
        }),
    });
});
</script>
