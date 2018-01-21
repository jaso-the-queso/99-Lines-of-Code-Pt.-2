// Array of friends
let friends = ["Katie", "Stephen", "Vicka", "Nick", "Tyler"];

// Button variables and how they connect to the body
document.addEventListener("DOMContentLoaded", function () {
    let body = document.body;
    let button = document.createElement('button');
    let buttonText = document.createTextNode('Sing!');
    button.appendChild(buttonText);
    body.appendChild(button);
    // Button function
    button.addEventListener("click", function () {
        /* Each loop produces a div with the class name 
        'friend'. Inside each div is an h3, and inside of every h3 is 
        text that loops through 'friends[i]' which is marked by the variable h3Text*/
        for (let i = 0; i < friends.length; i++) {
            let div = document.createElement('div');
            let h3 = document.createElement('h3');
            let h3Text = document.createTextNode(friends[i]);
            div.className = "friend";
            h3.appendChild(h3Text);
            div.appendChild(h3);
            body.appendChild(div);
            /* This loop is responsible for printing the song into the html file.
            once the button is pushed, 99 lines of code will appear inder each heading
            */
            for (let j = 99; j > 0; j--) {
                let p = document.createElement('p');
                let line = (j + " lines of code in the file");
                let pText = document.createTextNode(line);
                p.appendChild(pText);
                body.appendChild(p);
            }
        }
    })
})
