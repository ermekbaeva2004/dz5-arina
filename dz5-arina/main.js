const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur");


function convert(elem, target,target2, isTrue,isTrue2) {
  elem.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();

    request.addEventListener("load", () => {
      const response = JSON.parse(request.response);
      if (isTrue) {
			target.value = (+elem.value / response.eur).toFixed(2);
			target2.value = (+elem.value / response.usd).toFixed(2);
		} else if (isTrue2) {
			target.value = (+elem.value * response.eur).toFixed(2);
			target2.value = (+elem.value * response.eur / response.usd).toFixed(2);
		}
		else {
			target.value = (+elem.value * response.usd).toFixed(2);
			target2.value = (+elem.value * response.usd / response.eur ).toFixed(2);
      }

		 elem.value === "" ? (target.value = "") : null;
		 elem.value === "" ? (target2.value = "") : null;
    });
  });
}

convert(som,eur,usd,true);
convert(eur,som,usd,false,true);
convert(usd,som,eur);