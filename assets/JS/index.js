const titles =["PS5", "Hosepipe", "Shovel", "cutlery" , "pc" , "couch", "CallOfDuty", "Table", "Rake", "PS5controller", "samsungS23", "glasses"];
const descriptionarray =["R12,000", "R300", "R600", "R280", "R14,000", "R3000", "R999", "R4200", "R300" , "R1300", "R23,000","R700"];

const dynamic = document.querySelector('.container');  
for (var i = 0; i < titles.length; i++) {
  const fetch = document.querySelector('.container').innerHTML;  
  dynamic.innerHTML = `<div id="cards${i}" class="cards">
      <div class="cards-content">
        <h2>${titles[i]}</h2>
        <p>
          ${descriptionarray[i]}
        </p>
        <a class="showmore" href="#">ReadMore</a>
      </div>
    </div>` + fetch ; 
    const background = document.getElementById(`cards${i}`);
    background.style.backgroundImage = `url(../images/${titles[i]}.jpg)`;
} 

