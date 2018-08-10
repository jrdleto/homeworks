function add(l, r){
    this.postMessage(l+r);
}
function sub(l, r){
    this.postMessage( l - r);
}

self.addEventListener('message', function(e){
    switch(e.data.type){
        case 'add':
            add.apply(this, e.data.num);
        break;
        case 'sub':
            sub.apply(this, e.data.num);
        break;
    }
})

