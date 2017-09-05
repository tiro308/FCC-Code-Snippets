//async vanilla JS: https://www.youtube.com/watch?v=h0ZUpPiV1ac
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", true);
xhttp.send();

//async jQuery Ansatz
// $(document.ready(function(){
//     function getQuote(){
//         var quote;
//     }
// }));