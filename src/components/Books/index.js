import React from 'react'
import axios from "axios"

function Books() {

const options =  {
  method: 'GET',
  url: 'https://hapi-books.p.rapidapi.com/nominees/romance/2020',
  headers: {
    'X-RapidAPI-Key': '4b0f065569mshd328a2a1a34d744p1e6b38jsnff01d51dcc7e',
    'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
  }
};
axios.request(options).then(function (response) {
	console.log(response.data);
    console.log(response.author);
}).catch(function (error) {
	console.error(error);
});
  return (
    <div><button onClick={Books}>Click Me!</button></div>
  )
}

export default Books;