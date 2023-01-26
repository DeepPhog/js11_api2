var maxmin = document.getElementById("maxmin")
var names = document.getElementById("name")
var desc = document.getElementById("desc")
var temp = document.getElementById("temp")
var btn = document.getElementById("btn")
var lon = 0
var lat = 0
btn.onclick = async function Search() {
    temp.innerHTML = ""
    var input = document.getElementById("input").value
    await fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + input + "&appid=69b7f4b7ec8639f8a5ba4e43b6ef4ca4")
        .then(response => response.json())
        .then(data => data.forEach(list => {
            lon = list.lon
            lat = list.lat
        }))
    await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&appid=b710601c679e127cbbcd4c2b3f21a9bc")
        .then(response => response.json())
        .then(data => {
            names.innerHTML = data.name + ", " + data.sys.country
            temp.innerHTML = Math.round(data.main.temp) + " ° C"
            maxmin.innerHTML = Math.round(data.main.temp_min) + "°C  /  " + Math.round(data.main.temp_max) + "°C"
            data.weather.forEach(list => {
                desc.innerHTML = list.main

            })
        })
}