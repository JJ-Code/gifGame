
//Define Giphy Key 
const url = "https://api.giphy.com/v1/gifs/search?q="
const inputField = document.querySelector('#giphy-input');
const apiKey = "&api_key=dc6zaTOxFJmzC&limit=12";
const submit = document.querySelector('#submit-giphy');
const responseField = document.querySelector('#responseField');

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
            console.log(jsonResponse)



            
        } else {
            throw new Error('Request Failed!');
        } //end of else
    } // end of try
    catch (error) {
        console.log(error.message)
    } //end of catch

}








submit.addEventListener('click', getGif);








  // Constructing a queryURL using the giphy name
//   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//       giphy + "&api_key=dc6zaTOxFJmzC&limit=12";

// submit.addEventListener('click', getGif);