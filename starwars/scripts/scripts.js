url ="https://swapi.dev/api/planets/1";
async function getPlanet(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    doStuff(data);
    }
  else{
    console.log("Help");
  }
  }
getPlanet(url);

function doStuff(data) {
  results = data;
  var button = document.getElementById("button");
  button.addEventListener('click',random);
  var planet = document.getElementById("info");
  function random(){
    let planetData = ["gravity", "climate", "diameter", "orbital period", "population"];
    let item = planetData[Math.floor(Math.random() * planetData.length)];
    if (item == "gravity"){
      const ranData = data.gravity;
      planet.innerHTML = "Gravity: " + ranData;
    } else if (item == "climate") {
      const ranData = data.climate;
      planet.innerHTML = "Climate: " + ranData;
    } else if (item == "diameter") {
      const ranData = data.diameter;
      planet.innerHTML = "Diameter: " + ranData;
    } else if (item == "orbital period"){
      const ranData = data.orbital_period;
      planet.innerHTML = "Orbital Period: " + ranData;
    } else if (item == "population"){
      const ranData = data.population;
      planet.innerHTML = "Population: " + ranData;
    }
  }
}



