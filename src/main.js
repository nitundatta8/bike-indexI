import './styles.css';
import $ from "jquery";

$(document).ready (() => {
  $('#bikeInfo').click (() => {
   let city = $("#location").val();
   $("#location").val('');

    let request = new XMLHttpRequest();
    const url = `https://bikeindex.org:443/api/v3/search?location=${city}&distance=10&appid=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      $('#showBikeCount').text(`You are searching in ${city} and there are ${response.bikes.length} stolen bikes.`);
      // $('#showRedColorCount').text(`You are searching in ${city} and there are ${response.bikes.frame_colors} stolen red bikes.`);
      // $('#showBlueColorCount').text(`You are searching in ${city} and there are ${response.main.temp} stolen blue bikes.`);
    }

  })
})