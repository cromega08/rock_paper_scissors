const computer_choice = document.getElementById("c_choice"),
    result = document.getElementById("result"),
    choices = [...document.getElementsByClassName("options")]

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        let user_choised = e.target.value,
            [choised_tag, computer_choised] = oponent()
        computer_choice.setAttribute("class", "computer_image")
        computer_choice.innerHTML = choised_tag
        result.innerHTML = comparition(user_choised, computer_choised)
    });
});

function oponent() {
    let chose = Math.floor(Math.random() * choices.length),
        output, output_value;
    switch (chose) {
        case 0: output = "<img class = 'game_images' src='/imgs/fist.png' alt='Rock'>";
                output_value = "Rock"; break;
        case 1: output = "<img class='game_images' src='/imgs/open-hand.png' alt='Paper'>";
                output_value = "Paper"; break;
        case 2: output = "<img class = 'game_images' src='/imgs/peace.png' alt='Rock'>";
                output_value = "Scissors"; break;
        default: break;
    }
    return [output, output_value];
}

function comparition(user, computer) {
    let user_win = [user === "Rock" && computer === "Scissors", user === "Scissors" && computer === "Paper", user === "Paper" && computer === "Rock"];
    if (user === computer) {return "Draw"}
    if (user_win.some(element => element === true)) {return "You Win"}
    else {return "You Lose"}
}