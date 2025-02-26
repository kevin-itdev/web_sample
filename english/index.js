var topic = [
"Terrifying mid-flight incident",
"Japan prepares for potential North Korean satellite launch",
"Cheetah cubs tragic loss",
"Discovering Ecuador, A hidden gem",
"The benefits and importance of bees"
];


var description = [
"Man",
"Japan takes precautions as it faces a potential satellite launch by North Korea, heightening security concerns.\nsource: japantimes.co.jp",
"Tragic loss of cheetah cubs highlights challenges in reintroduction efforts.\nsource: bbc.com",
"Uncover the captivating charm and hidden treasures of Quito, Ecuador's overlooked capital, where history, culture, and culinary delights await exploration.\nsource: cnn.com",
"Bees ensure the continuation of biodiversity but also support global food security and sustain the delicate balance of our natural environment.\nsource: usatoday.com"
];

var dates = [
"10th June",
"30th May",
"26th May",
"23rd May",
"21st May",
];

 
var table0 = document.getElementById("idTest");
var row0 = table0.insertRow();
row0.innerHTML = `
<div class="idTest2">
  <p class="pText" style="text-align: left;">Hello World!</p>   
</div>`;


var table1 = document.getElementById("myTable1");

for (var i = 0; i < 3; i++) {
  var row = table1.insertRow();
  row.innerHTML = `
      <div class="idTest2">
       

          <div style="margin-left: 0.625rem; margin-right: 1.875rem;">
          	<p class="pText" style="text-align: left;"><strong>${dates[i]}</strong></p>      
                                 
          </div>
         
          <div>  
            <p class="pText" style="text-align: left;"><strong><u>${topic[i]}</u></strong></p>                 
            <p class="pText" style="text-align: left;">${description[i]}</p>
          
         </div>


     </div>
    `;
}


var table2 = document.getElementById("myTable2");

for (var i = 3; i < 5; i++) {
  var row = table2.insertRow();
  var cell = row.insertCell();
  cell.innerHTML = `
      <div class="col">
        <div class="cell">

          <div style="margin-left: 0.625rem; margin-right: 1.875rem;">
          	<p class="pText" style="text-align: left;"><strong>${dates[i]}</strong></p>      
            <img src=".\\english/image/${topic[i]}.png" alt="${topic[i]}">                       
          </div>
         
          <div>  
            <p class="pText" style="text-align: left;"><strong><u>${topic[i]}</u></strong></p>                 
            <p class="pText" style="text-align: left;">${description[i]}</p>
            <p class="pText" style="text-align: left; margin-top: 1.563rem;">
              Download <a href=".\\english/pdf/${topic[i]}.pdf" target="_blank">pdf</a> + 
              <a href=".\\english/audio/${topic[i]}.mp3" target="_blank">audio</a>    
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
            <img src=".\\english/image/${topic[i]}.png" alt="${topic[i]}">                       
          </div>
         
          <div>  
            <p class="pText" style="text-align: left;"><strong><u>${topic[i]}</u></strong></p>                 
            <p class="pText" style="text-align: left;">${description[i]}</p>
            <p class="pText" style="text-align: left; margin-top: 1.563rem;">
              Download <a href=".\\english/pdf/${topic[i]}.pdf" target="_blank">pdf</a> + 
              <a href=".\\english/audio/${topic[i]}.mp3" target="_blank">audio</a>    
            </p>           
         </div>

       </div>
     </div>
    `;
}

