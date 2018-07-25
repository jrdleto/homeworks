let divElement = document.createElement("div");
document.body.appendChild(divElement)
divElement.textContent = "Dynamic Text..."
divElement.classList.add("box");
// console.log(divElement);
let liElement = document.createElement('li');
liElement.innerText = "Li Element";
// liElement.append(" append String");
let strongElement = document.createElement("strong");
strongElement.textContent = " I am strong element";
// liElement.prepend(strongElement);
// liElement.append(strongElement);
// myList.insertBefore(liElement, myList.children[2]);
liElement.style.fontSize = "20px";
myList.children[1].after(liElement);
let clonedLiElement = liElement.cloneNode(true);
myList.children[1].after(clonedLiElement);
// myList.children[1].replaceWith(liElement);

// myList.children[myList.children.length - 1].remove();

let removeElement = myList.children[myList.children.length - 1];
// myList.removeChild(removeElement);
console.log(removeElement.textContent);