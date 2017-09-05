(function(){
  var input = true; //prompt("eingabe");
  showUsers();
  //console.log(input);
  //nichtRechtMacher(input);
  function nichtRechtMacher(input){
    if(isNaN(parseFloat(input)))
    throw new TypeError("nein, input soll ne Zahl sein.");
    if(input < 10)
      throw new Error("Zahl ist mir zu klein!");
    if(input > 10)
      throw new Error("Zahl ist mir zu groß!");
  }
})();

function openDatabaseConnection(){
  console.log("Datenbankverbindung geöffnet");
}
function closeDatabaseConnection(){
  console.log("Datenbankverbindung geschlossen");
}
function getUserByName(name){
  if(typeof name !=="string"){
    throw new TypeError("Zeichenkette erwartet!");
  }
}

function accessDatabase(){
  openDatabaseConnection();
  try{
  getUserByName(22);
  }catch(error){
    console.log(error);
    throw new Error("Fehler bei der Kommunikation mit der DB.")
  }  
  //code wird dank try/catch weiter ausgeführt trotz error
  //AUSSER es wird im catch ein weiterer Error gethrowt
  //DESHALB finally
  finally{
  closeDatabaseConnection();
  }
}

//errors weitergeben an den Aufrufer von accessDatabase
function  showUsers(){
  try{
    accessDatabase();
  } catch(error){
    document.getElementById("demo").textContent =error.message;
  }
}