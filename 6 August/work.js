self.addEventListener('message', (event) =>{
    
    self.postMessage(`Thank you. You said: ${event.data}`);
    self.close();
}, false)