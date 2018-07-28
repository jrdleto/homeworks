function dynamic(){
    let div1 = document.createElement('img');
        div1.src = "https://pbs.twimg.com/profile_images/952185199143485441/BedrMf-P_400x400.jpg"
       
        inner.appendChild(div1);
 
    let promise = new Promise(function(resolve, reject){
        setTimeout( function something() {
        inner.removeChild(div1);
        resolve();
        
       }, 2000)
   });
  promise.then( () => {
    document.getElementById('birthday').textContent = day.value;
            document.getElementById('living').textContent = city.value;
            document.getElementById('month1').textContent = month.value;
            document.getElementById('year1').textContent = year.value;
            document.getElementById('about1').textContent = about.value;
            let img = document.createElement('img');
           img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEZhF-yF8_aWKl8Noz-Wa1bh4QnAWbt9Ilb3UsvkujpkLTc5D"
           
          inner.appendChild(img);
  })
  .catch((error) =>{
      console.log(error.message);
  })
}
