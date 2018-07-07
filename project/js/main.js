let date = new Date(2018, 3, 30);




function addDay(){
  {
      let divi = document.createElement('div');
      divi.id = "addDay";


for(let i = 0; i < 1; i++) {

  
  let childDiv = document.createElement('div');
  childDiv.className = "boxNameK";
  divi.appendChild(childDiv);
  
  childDiv.style.backgroundColor = "green";

  
if(date.getDate() == 30) {
  childDiv.textContent = date.toLocaleDateString("en-au", {year: "numeric", month: "short",day: "numeric"}).replace(/\s/g,' ');
  date.setDate(date.getDate()+2);
}
  else if(date.getDay() == '1') {
  childDiv.textContent = date.toLocaleDateString("en-au", {year: "numeric", month: "short",day: "numeric"}).replace(/\s/g,' ');
  date.setDate(date.getDate()+2);
}
 else if(date.getDay() == '3'){
    childDiv.textContent = date.toLocaleDateString("en-au", {year: "numeric", month: "short",day: "numeric"}).replace(/\s/g,' ');
   date.setDate(date.getDate()+2);
  }
  else if(date.getDay() == '5'){
    childDiv.textContent = date.toLocaleDateString("en-au", {year: "numeric", month: "short",day: "numeric"}).replace(/\s/g,' ');
   date.setDate(date.getDate()+1);
  }
    else if(date.getDay() == '6'){
    childDiv.textContent = date.toLocaleDateString("en-au", {year: "numeric", month: "short",day: "numeric"}).replace(/\s/g,'   ');
   date.setDate(date.getDate()+2);
  }
}
for(let i = 0; i < 7; i++){
  let anotherChild = document.createElement('div');
  anotherChild.className = "boxName";
  anotherChild.classList.add(`boxName${i}`)
//   anotherChild.classList.add(`number${i});
  divi.appendChild(anotherChild);
  anotherChild.textContent = '0';


}
document.querySelector('#map'); 
map.appendChild(divi);
  }
  yes(); 
  check();
}
function remove(){
    let element = document.getElementById("addDay");
     element.parentNode.removeChild(element.parentNode.lastChild);
  
  
  if(date.getDay() == '1') {
     date.setDate(date.getDate()-2);
    childDiv.textContent = date;
   
  }
   else if(date.getDay() == '3'){
     date.setDate(date.getDate()-2);
      childDiv.textContent = date;
     
    }
    else if(date.getDay() == '5'){
      date.setDate(date.getDate()-2);
      childDiv.textContent = date;
     
    }
      else if(date.getDay() == '6'){
        date.setDate(date.getDate()-1);
      childDiv.textContent = date;
     
    }
  };

function check(){
  let box = document.getElementsByClassName('boxName');
  for(let i = 0; i < box.length; i++){
    if(box[i].textContent == "0"){
      box[i].style.backgroundColor = "red";
    }
    else{
      box[i].style.backgroundColor = "green";
    }
  }
}

function event1(event){
    let input = prompt("enter");
    if(input > 5){
      event.target.textContent = 5 
    }
    else if(input <= 0){
      event.target.textContent = 0;
    }
    else{
      event.target.textContent = input;
      console.log(input);
      }
    if(event.target.textContent == "0"){
      event.target.style.backgroundColor = "red";
    }
    else{
      event.target.style.backgroundColor = "green";
    }     
  }

function yes(){

  let box = document.getElementsByClassName("boxName")  
  for (let i = 0; i < box.length; i++){
      box[i].addEventListener("click", event1)
  }
}

function update(){
     
       let x = document.getElementsByClassName('name')   
       let something = x.length - 1;
       let vau = document.getElementsByClassName('totalStudents');
      
       vau[0].textContent = something;
       let stats = document.getElementsByClassName('boxNameK');
       let statsLength = stats.length;
       let days = document.getElementsByClassName('totalDays');;
       days[0].innerHTML = statsLength;

       let element = document.getElementsByClassName('boxName');
       let sum = 0;
       for(let i = 0; i < element.length; i++){
       if(element[i].textContent == '0'){
          sum = sum + 1;
        }
      }
       let finalResult = document.getElementsByClassName('missed');
       finalResult[0].innerHTML = sum;


       let anotherSum = 0;
       for(let i = 0; i < element.length; i++){
         anotherSum = anotherSum + Number(element[i].textContent);
       }
       
       anotherResult = (anotherSum / element.length).toFixed(2);
       let final = document.getElementsByClassName('averageMark');
       final[0].innerHTML = anotherResult;
      
       
    let vat = [];
    let content = document.getElementsByClassName('boxNameK')
    for( i = 0; i < 8; i++){
    let innerSum = Array.from(
        document.getElementsByClassName(`boxName${i}`)
    ).reduce(
        (acc,el) => acc + parseFloat(el.innerText),
        0
    );

    vat.push(innerSum);
    }
    let average = document.getElementsByClassName('average');
    for(let i = 1; i < average.length; i++){
        if(average[i].firstChild){
            average[i].removeChild(average[i].firstChild)
        }
    }
    for(let i = 1; i < 8; i++){
        average[i].appendChild(document.createTextNode((parseFloat(vat[i-1])/content.length).toFixed(1)));
     }
    }
 
    
