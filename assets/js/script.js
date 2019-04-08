//Define Giphy Key 
const url = "https://api.giphy.com/v1/gifs/search?q="
const inputField = document.querySelector('#giphy-input');
const apiKey = "&api_key=dc6zaTOxFJmzC&limit=8";
const submit = document.querySelector('#submit-giphy');

// Game play variables
const giphyView = document.querySelector('#giphy-view');
let wins = 0;
let losses = 0;
let userScore = 0;
let computerScore = Math.floor(Math.random() * 102) + 19;
const gameCard = [];

// grab Gif from API
const getGif = async () => {
    event.preventDefault();
    const giphyWord = inputField.value.trim().toLowerCase();
    const urlToFetch = `${url}${giphyWord}${apiKey}`;
    console.log(urlToFetch)
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            console.log(response);
            //code to excute with json response 
            const jsonResponse = await response.json();
            var results = jsonResponse.data;
            console.log(jsonResponse)
            console.log(results)
            for (let i = 0; i < results.length; i++) {
                const gifObj = {
                    url: results[i].images.original.url,
                    id: results[i].id,
                    pts: 0
                }

                gameCard.push(gifObj)

                // console.log(gifObj);
            }

        } else {
            throw new Error('Request Failed!');
        } //end of else
    } // end of try
    catch (error) {
        console.log(error.message)
    } //end of catch

    randomNumGenerator(gameCard);
    makeCard(gameCard);
    // console.log(gameCard);
} //end of grab gif 

//listener 
submit.addEventListener('click', getGif);

//random Num Generator
const randomNumGenerator = (array) => {
    for (i = 0; i < array.length; i++) {
        array[i].pts = Math.floor(Math.random() * 12) + 1;
        console.log(array[i].id + ': ' + array[i].pts);
    }
}


const gameBoard = () => {
    $('.computer-score').text(computerScore);
    $('.user-score').text(userScore);
    $('.win-score').text(wins);
    $('.loss-score').text(losses);
};

gameBoard();

const makeCard = (array) => {
    for (let i = 0; i < array.length; i++) {
        const giphyDiv = $('<div>');
        giphyDiv.addClass('col-lg-3 giphyDiv')
        const giphyImage = $('<img>');
        giphyImage.attr({
            'src': array[i].url,
            'data-id': array[i].id,
        });
        giphyImage.addClass('giphyImage');
        giphyDiv.append(giphyImage);
        $('#giphy-view').append(giphyDiv);


    }

} //end of makeCard


const reset = () => {
    userScore = 0;
    computerScore = Math.floor(Math.random() * 102) + 19;
    randomNumGenerator(gameCard);
    $('.computer-score').text(computerScore);
    $('.user-score').text(userScore);

};


//If a user wins
const win = () => {
    wins++;
    alert("You win!");
    $('.win-score').text(wins);
    reset();

};
//If a user does not win
const loss = () => {
    losses++;
    alert('You did not win, loser!');
    $('.loss-score').text(losses);
    reset();
};

//This makes the gifPic images clickabe and updaes the user score.
const gamePlay = (array) => {
    $('body').on('click', '.giphyImage', function () {
        const idPic = $(this).attr('data-id');
        console.log(idPic);
        console.log('clicked')
        const foundPic = array.findIndex(gifPic => {
            console.log(gifPic.id === idPic)
            return gifPic.id === idPic

        });
        console.log(foundPic)
        // const foundPic = array.findIndex(gifPic => {
        //     return gifPic.id === idPic

        // })
        // array[foundPic].pts example array[3].pts
        userScore = userScore + array[foundPic].pts
        console.log(array[foundPic].pts)
        console.log(foundPic)

        $('.user-score').text(userScore);
        if (userScore == computerScore) {
            win();
        } else if (userScore > computerScore) {
            loss();
        }
        console.log(userScore);

    });

}

gamePlay(gameCard);

// gamePlay(gameCard);