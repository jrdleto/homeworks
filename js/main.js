let date = new Date(2018, 3, 30); // primary start-date;

function addDay(){
  {
      let divi = document.createElement('div');
      divi.id = "addDay"; // we create div with id addDay


for(let i = 0; i < 1; i++) { 

  let childDiv = document.createElement('div');
  childDiv.className = "boxNameK";
  divi.appendChild(childDiv); 
  
  childDiv.style.backgroundColor = "green";
//  Creating only one div per one call with different id to connect via date 
if(date.getDate() == 30) {
  childDiv.textContent = date.toLocaleDateString("en-au", {year: "numeric", month: "short",day: "numeric"}).replace(/\s/g,' ');
  date.setDate(date.getDate()+2);
  // getting primary date function, if day is 30 then we write date, month day and year only
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
  // checking days,if its Monday,Wednesday and Saturday we are adding two days, if its Friday adding only one
}
for(let i = 0; i < 7; i++){
  let anotherChild = document.createElement('div');
  anotherChild.className = "boxName";
  anotherChild.classList.add(`boxName${i}`)
  divi.appendChild(anotherChild);
  anotherChild.textContent = '0';

//  per calling one function add, we are creating 7 div's with different class cause we need it in later average function
}
document.querySelector('#map'); 
map.appendChild(divi);
  } 
  check();  // per calling function we are checking contents textcontent to write relevant background color
  yes(); // this yes function calls event1 function after every call we make which will assign every element event listener
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
     // everything is same like on addDays example. we are checking on days if its Monday,Wednesday and Friday we are removing 2 getDates()=weekDays 
    }
  };

function check(){ //function which we called in addDay-s function which is checking content on every call
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
      event.target.textContent = input
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
// function which updates statistic of Total students, Missed Lessons, Total Days and Average mark
function update(){
     
       let x = document.getElementsByClassName('name')   
       let something = x.length - 1;
       let vau = document.getElementsByClassName('totalStudents');
       vau[0].textContent = something; 
             // sum all boxs with class add and minus 1 cause first windows is empty and write number of students in total students
       let stats = document.getElementsByClassName('boxNameK');
       let statsLength = stats.length;
       let days = document.getElementsByClassName('totalDays');;
       days[0].innerHTML = statsLength;
            // Same, but about Total Days
       let element = document.getElementsByClassName('boxName');
       let sum = 0; 
       for(let i = 0; i < element.length; i++){
       if(element[i].textContent == '0'){
          sum = sum + 1;
        }
      }
       let finalResult = document.getElementsByClassName('missed');
       finalResult[0].innerHTML = sum;
       // checking all contents with 0 content, and sum them. The result that we got is number of missed lessons 

       let anotherSum = 0;
       for(let i = 0; i < element.length; i++){
         anotherSum = anotherSum + Number(element[i].textContent);
       }
       
       anotherResult = (anotherSum / element.length).toFixed(2);
       let final = document.getElementsByClassName('averageMark');
       final[0].innerHTML = anotherResult;
      // We need anotherSum which checks all elements contents, which adds values to each other
       
    let array = [];
    let content = document.getElementsByClassName('boxNameK')
    for( i = 0; i < 7; i++){
    let innerSum = Array.from(
        document.getElementsByClassName(`boxName${i}`)
    ).reduce(
        (acc,el) => acc + parseFloat(el.innerText),
        0
    );
// We create empty array,then we choose one column and it's content and with method Array.from getting
//all the values, for each average lane.
    array.push(innerSum);
    }
    let average = document.getElementsByClassName('average');
    for(let i = 1; i < average.length; i++){
        if(average[i].firstChild){
            average[i].removeChild(average[i].firstChild)   
        }
    }
    console.log(average.length);
    for(let i = 1; i < 8; i++){ // i equals 1 cause,first content is 'Average'
        average[i].appendChild(document.createTextNode((parseFloat(array[i-0])/content.length).toFixed(1))); 
        //Same here. Each average string has its text content,which we create with dom call createTextNode
        // array[i-1] cause we want to start writing results from second string, if we write [i-0] 
       // second `boxname`-s result will be written in first average string and etc. 
      }
    }
 