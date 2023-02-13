import React from 'react'
import axios from "axios"

function Books() {

const input = JSON.stringify("Dracula");
const options =  {
  method: 'GET',
  url: 'https://www.googleapis.com/books/v1/volumes?q=' + input + 'lite&key=AIzaSyC0YC5pzrMGPGFPPY7JJ_3t60E3hFwtC8k',
};
axios.request(options).then(function (response) {
	console.log(response.data);
    console.log(response.author);
}).catch(function (error) {
	console.error(error);
});

// function getInput (event) {
//     const input = event.target.value;
// }

// function getInput (event) {
//     event.PreventDefault()

// }
  return (

<div>
            {/* <h1>Search here</h1>
              <form onSubmit={getInput}>
                            <div class="form-group"></div>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
          <button onClick={getInput}>Search</button>
          </form>

        </div> */}
                <button onClick={Books}>Click Me!</button>
        </div>
  )
}

export default Books;