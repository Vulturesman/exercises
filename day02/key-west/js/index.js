let theButton = document.getElementById('theButton');
let theText = document.querySelectorAll('.top-5__header');    
theButton.onclick = function () { 
    for(let x of theText) {
        x.classList.toggle('top-5__header--colorized');
    }
}; 

/* theButton is a ID in html on a button
 class .top-5__header is a class of h2 element 
 on click - the text will change from CSS to top header colorized. When refreshed, back to "default"
 */ 