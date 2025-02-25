var topic = [
"Las mejores ciudades del mundo",
"Leo Messi podría regresar al Barça",
];
       
var description = [
  "El informe de The Economist destaca las condiciones de vida en las ciudades tras la pandemia, revelando las más habitables y las menos.",
  "Leo Messi podría jugar cedido en el FC Barcelona antes de unirse al Inter Miami, según informes de L'Equipe."
];

var dates = [
  "23 de junio",
  "31 de mayo"
];
    
    
    
var table1 = document.getElementById("myTable1");

for (var i = 0; i < 1; i++) {
  var row = table1.insertRow();
  var cell = row.insertCell();
  cell.innerHTML = `
      <div class="col">
        <div class="cell">

          <div style="margin-left: 0.625rem; margin-right: 1.875rem;">
          	<p class="pText" style="text-align: left;"><strong>${dates[i]}</strong></p>      
            <img src="../español/imagen/${topic[i]}.png" alt="${topic[i]}">                       
          </div>
         
          <div>  
            <p class="pText" style="text-align: left;"><strong><u>${topic[i]}</u></strong></p>                 
            <p class="pText" style="text-align: left;">${description[i]}</p>
            <p class="pText" style="text-align: left; margin-top: 1.563rem;">
              Descargar <a href="../español/pdf/${topic[i]}.pdf" target="_blank">pdf</a> + 
              <a href="../español/audio/${topic[i]}.mp3" target="_blank">audio</a>    
            </p>           
         </div>

       </div>
     </div>
    `;
}


var table2 = document.getElementById("myTable2");

for (var i = 1; i < 2; i++) {
  var row = table2.insertRow();
  var cell = row.insertCell();
  cell.innerHTML = `
      <div class="col">
        <div class="cell">

          <div style="margin-left: 0.625rem; margin-right: 1.875rem;">
          	<p class="pText" style="text-align: left;"><strong>${dates[i]}</strong></p>      
            <img src="../español/imagen/${topic[i]}.png" alt="${topic[i]}">                       
          </div>
         
          <div>  
            <p class="pText" style="text-align: left;"><strong><u>${topic[i]}</u></strong></p>                 
            <p class="pText" style="text-align: left;">${description[i]}</p>
            <p class="pText" style="text-align: left; margin-top: 1.563rem;">
              Descargar <a href="../español/pdf/${topic[i]}.pdf" target="_blank">pdf</a> + 
              <a href="../español/audio/${topic[i]}.mp3" target="_blank">audio</a>    
            </p>           
         </div>

       </div>
     </div>
    `;
}



var table3 = document.getElementById("myTable3");

for (var i = 5; i < 5; i++) {
  var row = table3.insertRow();
  var cell = row.insertCell();
  cell.innerHTML = `
      <div class="col">
        <div class="cell">

          <div style="margin-left: 0.625rem; margin-right: 1.875rem;">
          	<p class="pText" style="text-align: left;"><strong>${dates[i]}</strong></p>      
            <img src="../español/imagen/${topic[i]}.png" alt="${topic[i]}">                       
          </div>
         
          <div>  
            <p class="pText" style="text-align: left;"><strong><u>${topic[i]}</u></strong></p>                 
            <p class="pText" style="text-align: left;">${description[i]}</p>
            <p class="pText" style="text-align: left; margin-top: 1.563rem;">
              Descargar <a href="../español/pdf/${topic[i]}.pdf" target="_blank">pdf</a> + 
              <a href="../español/audio/${topic[i]}.mp3" target="_blank">audio</a>    
            </p>           
         </div>

       </div>
     </div>
    `;
}

    