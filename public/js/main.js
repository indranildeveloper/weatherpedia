const cityName = document.getElementById("cityName");
const cityErr = document.getElementById("city_name");
const submitBtn = document.getElementById("submitBtn");
const temp_real_value = document.querySelector(".temp_real_value");
const tempStatus = document.getElementById("temp_status");

let img = document.createElement("img");

const getInfo = async (event) => {
  event.preventDefault();

  let cityVal = cityName.value;

  if (cityVal === "") {
    cityErr.innerText = `Please Write a Proper City Name Before Search!`;
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=5a9a6d3f9ce134dabfbef287b4beffbc`;
      let response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      console.log(arrData);
      console.log(cityVal);
      const weatherIcon = arrData[0].weather[0].icon;

      cityErr.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp_real_value.innerText = arrData[0].main.temp;
      // tempStatus.innerText = arrData[0].weather[0].main;
      tempStatus.appendChild(img);

      // Setting the Icon
      img.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    } catch (error) {
      cityErr.innerText = `Please Write a City Name Properly!`;
    }
  }
};

submitBtn.addEventListener("click", getInfo);
