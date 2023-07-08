function updateLimaTime() {
  let limaElement = document.querySelector("#lima");
  let limaDateElement = limaElement.querySelector(".date");
  let limaTimeElement = limaElement.querySelector(".time");
  let limaTime = moment().tz("America/Lima");

  limaDateElement.innerHTML = limaTime.format("MMMM Do YYYY");
  limaTimeElement.innerHTML = limaTime.format("h:mm:ss [<small>]A[</small>]");
}

updateLimaTime();
setInterval(updateLimaTime, 1000);

function updateOsloTime() {
  let osloElement = document.querySelector("#oslo");
  let osloDateElement = osloElement.querySelector(".date");
  let osloTimeElement = osloElement.querySelector(".time");
  let osloTime = moment().tz("Europe/Oslo");

  osloDateElement.innerHTML = osloTime.format("MMMM Do YYYY");
  osloTimeElement.innerHTML = osloTime.format("h:mm:ss [<small>]A[</small>]");
}

updateOsloTime();
setInterval(updateOsloTime, 1000);
