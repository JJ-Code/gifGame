
//Define Giphy Key 
const url = "https://api.giphy.com/v1/gifs/search?q="
const inputField = document.querySelector("#giphy-input");
const apiKey = "&api_key=39a3e436bae449eebf5904e0af9ad67c&limit=8";
const submit = document.querySelector("#submit-giphy");
let gifContainter = document.querySelector("#giphy-view");


// Game play variables
let wins = 0;
let losses = 0;
let userScore = 0;
let computerScore = Math.floor(Math.random() * 102) + 19;
let gameCard = [];



// grab Gif from API
const getGif = async () => {
  event.preventDefault();
  reset();
  gameCard = [];
  gifContainter.innerHTML = "";
  const giphyWord = inputField.value.trim().toLowerCase();
  const urlToFetch = `${url}${giphyWord}${apiKey}`;
  //console.log(urlToFetch)
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
        inputField.value = '';

        // console.log(gifObj);
      }

    } else {
      throw new Error("Request Failed!");
    } //end of else 
  } // end of try


  catch (error) {
    console.log(error.message)
  } //end of catch

  randomNumGenerator(gameCard);
  makeCard(gameCard);

  console.log(gameCard);
} //end of grab gif 

//listener 
const onSubmit = () => {
submit.addEventListener("click", getGif);
}


//random Num Generator
const randomNumGenerator = (array) => {
  for (i = 0; i < array.length; i++) {
    array[i].pts = Math.floor(Math.random() * 12) + 1;
    console.log(array[i].id + ": " + array[i].pts);
  }
}

//Make Game board - Step 2
const gameBoard = () => {
  document.querySelector(".computer-score").innerHTML = computerScore;
  document.querySelector(".user-score").innerHTML = userScore;
  document.querySelector(".win-score").innerHTML = wins;
  document.querySelector(".loss-score").innerHTML = losses;
  // console.log(computerScore)
};
gameBoard();



const makeCard = (array) => {
  for (let i = 0; i < array.length; i++) {
    const giphyDiv = document.createElement("div");
    giphyDiv.classList.add("col-lg-3", "giphyDiv");
    const giphyImage = document.createElement("img");
    giphyImage.src = array[i].url;
    giphyImage.setAttribute("data-id", array[i].id);
    giphyImage.classList.add("giphyImage");
    giphyDiv.appendChild(giphyImage);
    document.getElementById("giphy-view").appendChild(giphyDiv);
  } //end of forloop 

} //end of makeCard


const reset = () => {
  userScore = 0;
  computerScore = Math.floor(Math.random() * 102) + 19;
  randomNumGenerator(gameCard);
  document.querySelector(".computer-score").innerHTML = computerScore;
  document.querySelector(".user-score").innerHTML = userScore;
};


//If a user wins
const win = () => {
  wins++;
  alert("You win!");
  document.querySelector(".win-score").innerHTML = wins;
  reset();

};
//If a user does not win
const loss = () => {
  losses++;
  alert("You did not win, loser!");
  document.querySelector(".loss-score").innerHTML = losses;
  reset();
};


//This makes the gifPic images clickabe and updaes the user score.
const gamePlay = () => {

  gifContainter.addEventListener('click', function (event) {
    console.log(event.target.dataset.id);
    
      console.log(gameCard)
      const idPic = event.target.dataset.id; //mouse object location in array
      console.log(idPic);
      console.log("clicked")
      
      const foundPic = gameCard.findIndex(gifPic => {
        console.log(gifPic.id === idPic)
        return gifPic.id === idPic

      });
      //add scores 
      userScore += gameCard[foundPic].pts

      document.querySelector(".user-score").innerHTML = userScore;
      if (userScore == computerScore) {
        win();
      } else if (userScore > computerScore) {
        loss();
      }
      console.log(userScore);
  }); //end of click


} //END of Gameplay

//activate submit 
onSubmit();
//play game
gamePlay();


const jumpto =(anchor)=>{
  window.location.href = "#" + anchor;
}