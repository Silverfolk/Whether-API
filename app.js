let apikey="527ed1d4aac67d322f452f60a65c9968";
var a ="";
function fetchWeather(city){
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=527ed1d4aac67d322f452f60a65c9968"
          
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          console.log(response);
          return response.json();
        })
        .then(function (data){
            displayWeather(data)
        });
}

function displayWeather(data,event){
    const { name } = data;
    
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector("#city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector("#description").innerText = description;
      document.querySelector("#temp").innerText = temp + "°C";
      document.querySelector("#humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector("#wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
        
        
        
}

function search(){
    fetchWeather(document.querySelector("#wheather-search").value);
    console.log(document.querySelector("#wheather-search").value);
};

document.querySelector("#btn").addEventListener("click",search);

document
.querySelector("#wheather-search")
.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    search();
  }
});


fetchWeather("mumbai");
