/*
    <Rock, Paper, Scissors: A implementation of the classic game with the same name>
    Copyright (C) <2022>  <Cromega>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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
        case 2: output = "<img class = 'game_images' src='/imgs/peace.png' alt='Scissors'>";
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
