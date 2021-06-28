var pageCounter = 1;
var button = document.getElementById('btn');
animalContainer = document.getElementById("animal info");

button.addEventListener('click',function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
    ourRequest.onload = function() {
        // To print in console
         // console.log(ourRequest.responseText); 
        var ourData = JSON.parse(ourRequest.responseText);
        line(ourData);
    }
    ourRequest.send();
    pageCounter++;
    if(pageCounter >3) {button.classList.add("hide-me");}
});

//function to create HTML line using the data
function line(data){
    var string = " ";

    for(i =0;i<data.length;i++){

        string +=  "<p>" + data[i].name + " is a " + data[i].species + "</p>";
    }   
    animalContainer.insertAdjacentHTML('beforeend',string);
}



