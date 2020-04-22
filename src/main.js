import './styles.css';
import $ from "jquery";

$(document).ready (() => {
  $('#bikeInfo').click (() => {
   let city = $("#location").val();
   $("#location").val('');

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

    request.onreadystatechange = (() => {
      if (this.readystate === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    })

    request.open("GET", url, true);
    request.send();

    const getElements = ((response) => {
      $('#showRedBikeCount').text(`You are searching in ${city} and there are ${response.main.humidity} stolen red bikes.`);
      $('#showBlueBikeCount').text(`You are searching in ${city} and there are ${response.main.temp} stolen blue bikes.`);
    })

  })
})