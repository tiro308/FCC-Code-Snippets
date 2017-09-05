// Durations are in minutes
 
var tasks = [
 
  {
 
    'name'     : 'web coden',
 
    'duration' : 120
 
  },
 
  {
 
    'name'     : 'Work out',
 
    'duration' : 60
 
  },
 
  {
 
    'name'     : 'Procrastinieren auf youtube',
 
    'duration' : 240
 
  }
 
];

//---using foreach
// var task_names = [];
// tasks.forEach(function (banane) { //name egal, ist Objekt[i]
 
//     task_names.push(banane.name);
//     console.log(banane); 
     
// });

//---using map
// var task_names = tasks.map(function (task, index, array) {
 
//     return task.name; 
 
// });
//knappere map mit arrow function
var task_names = tasks.map((task) => task.name );
console.log(task_names);
