window.onload = () => {
    let usersEndPoint = 'https://jsonplaceholder.typicode.com/users';
fetch(usersEndPoint, {
    method: 'get'
})
.then((response) => {
    console.log(response)
    if(response.status === 200){
        console.log('yep');
        return response.json()
    }
})

.then(usersList => {
    // console.log(usersList)   
    document.body.innerHTML = usersList.map( user => {
        //   onclick="showDetailsById(${user.id})"
        return `<div data-user-id="${user.id} " >
        <h2>${user.name}<small> Id -${user.id}</small></h2>
        </div>`
    }).join('');

let users = document.querySelectorAll('[data-user-id]');
users.forEach( user =>{
    user.addEventListener('click', (event) =>{
    //  console.log('I am an event', event.target);
     let userDiv = event.target;
    //  console.log("Parent Node - ", parentNode);
    //DIV
     if( userDiv.tagName.toLowerCase() == 'div'){    
     }
      while(userDiv.tagName.toLowerCase() != 'div'){
          userDiv = userDiv.parentNode;
     }
     // Div Element[data-user-id]
     console.log(userDiv.dataset);
     let userId = user.dataset.userId;
     showDetailsById(userId);
    }, false)
})

})
.catch((error) => {
    console.log(`Error - ${error.message}`)
})



function showDetailsById(userId){
    console.log(`${usersEndPoint}/${userId}`)
    fetch(`${usersEndPoint}/${userId}`, {
        method: 'get'
    })
    .then((response) => {
        if(response.status === 200){
            return response.json()
        }
    })
   .then(usersDetail => {
      console.log(usersDetail)
      document.body.innerHTML = `
      <div>
        <h2>${usersDetail.name}</h2>
        <h3>Phone - ${usersDetail.phone}</h3>
        <h3>${usersDetail.website}</h3>
        <h3>${usersDetail.email}</h3>
        
      </div>
      `
   })
   .catch( (error) =>{
       console.log(`Error ${error.message}`)
   })
}
}