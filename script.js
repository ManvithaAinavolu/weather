var inputvalue=document.querySelector('#cityinput');
var btn=document.querySelector('#add');
var city=document.querySelector('#cityoutput');
var desc=document.querySelector('#description');
var temp=document.querySelector('#temp');
var wind=document.querySelector('#wind');
var apik ="5dc192f00954dc7db608658a5230b5a6";

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => {
        if (!res.ok) {
            throw new Error('City not found');
        }
        return res.json();
    })
    .then(data => {
        var nameval=data['name'];
        var descrip=data['weather'][0]['description'];
        var temperature=data['main']['temp'];
        var wnspeed=data['wind']['speed'];
        city.innerHTML=`Weather of <span>${nameval}</span>`;
        temp.innerHTML = `Temperature: <span>${convertion(temperature)} C</span>`;
        desc.innerHTML = `Sky Conditions: <span>${descrip}</span>`;
        wind.innerHTML = `Wind Speed: <span>${wnspeed} km/h</span>`;
    })  
    .catch(err => {
        alert(err.message); // Display error message to the user
    });
});
