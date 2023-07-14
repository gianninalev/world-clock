function updateTime() {
  let limaElement = document.querySelector("#lima");
  let limaDateElement = limaElement.querySelector(".date");
  let limaTimeElement = limaElement.querySelector(".time");
  let limaTime = moment().tz("America/Lima");

  limaDateElement.innerHTML = limaTime.format("MMMM Do YYYY");
  limaTimeElement.innerHTML = limaTime.format("h:mm:ss [<small>]A[</small>]");
}

{
  let osloElement = document.querySelector("#oslo");
  let osloDateElement = osloElement.querySelector(".date");
  let osloTimeElement = osloElement.querySelector(".time");
  let osloTime = moment().tz("Europe/Oslo");

  osloDateElement.innerHTML = osloTime.format("MMMM Do YYYY");
  osloTimeElement.innerHTML = osloTime.format("h:mm:ss [<small>]A[</small>]");
}

function updateSelectedCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` 
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss "
        )}<small> ${cityTime.format("A")}</small>
      </div>
      </div>
      <a href="/">All cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateSelectedCity);
