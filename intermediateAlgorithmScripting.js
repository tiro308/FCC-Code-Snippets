//*************************** Spinal Tap Case  *******************************
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.toLowerCase();
  var regex = / /g;
  for (var j = 0; j < str.length; j++) {
    str = str.replace(regex, "-");
  }
  return str;
}
 
spinalCase('This Is Spinal Tap');
/*
//*************************** Convert HTML Entities  *******************************
function convertHTML(str) {
  // &colon;&rpar;
  var character = ["&", "<", ">", "'", '"'];
  var htmlCharacter = ["&amp;", "&lt;", "&gt;", "&apos;", "&quot;"];
  var foundPos;

  for (var i = 0; i < character.length; i++) {
    foundPos = 0;
    //while(str.indexOf(character[i], foundPos) > -1 ){
    //  foundPos = str.indexOf(character[i]);
    //  str = replacer(str);
    //} 
    for (var j = 0; j < str.length; j++) {
      if(str.indexOf(character[i], foundPos) > -1 ){
        foundPos = str.indexOf(character[i])+1;
        str = str.replace(character[i] , htmlCharacter[i]);
      }
    } 
  }

  return str;
}

convertHTML("<>");
//*************************** Sorted Union  *******************************
function uniteUnique(arr) {
  var newArr= [];
  var args = [].concat.apply([], arguments);
  //ist das nächste element noch nicht im arr? rein!
  //loop durch jedes element args
  var currentVal;
  var found;
  for (var i = 0; i < args.length; i++) {
    currentVal=args[i];
    found= false;
    //loop durch newArr und teste ob currentVal drin ist
    for (var j = 0; j < newArr.length; j++) {
      if(currentVal===newArr[j])
        found= true;  
    }
    //wenn nicht found Val ins neue Arr
    if(found== false)
      newArr.push(currentVal);
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//*************************** Boo Who  *******************************
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  console.log(typeof(bool));
  if(typeof(bool) === "boolean"){
    return true;
  }
  else{
    return false;
  }
}

booWho("a");

//*************************** Missing Letters  *******************************

function fearNotLetter(str) {
  var missingLetters = [];
  for (var i = 1; i < str.length; i++) {
    if(str[i].charCodeAt()!==str[i-1].charCodeAt()+1){
      missingLetters= String.fromCharCode(str[i-1].charCodeAt()+1);
    }
  }
  if(missingLetters.length===0){
    return undefined;
  }
  return missingLetters;
}

fearNotLetter("abce");

//*************************** DNA Pairing  *******************************


//*************************** Pig Latin  *******************************
function translatePigLatin(str) {         // regex /\d+/g gibt Anzahl der Ziffern, /a* Stern ist can 0*
  //checken ob ein oder mehrere consonants
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if(/[bcdfgjklmnpqrstvwxz]/i.test(str[i]) && /[bcdfgjklmnpqrstvwxz]/i.test(str[0])){
      count++;
    }
    else{
      break;
    }
  }
  console.log(count);
  //wenn keine Konsonanten + way
  if(count===0){
    return str+"way";
  }
  //Anzahl an Konsonanten vorne abschneiden und hinten ranhängen + "ay"
  var prefix = "";
  prefix = str.substr(0,count);
  str = str.substring(count);
  str = str + prefix + "ay";
  return str;
}

translatePigLatin("consonant");

//*************************** Search and Replace  *******************************
function myReplace(str, before, after) {

  //checken ob before großgeschrieben
  console.log(hasLowerCase(before));
  if(!hasLowerCase(before)){
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  function hasLowerCase(word) {
    return word[0].toUpperCase() != word[0];
  }
  console.log(after);
  var replaced = str.replace(before,after);
  console.log(replaced);
  
  return replaced;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "banane");

//*************************** Wherefore art thou  *******************************
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  console.log(Object.keys(source).length);
  console.log(Object.keys(collection[0]));
  console.log(collection[2].hasOwnProperty(source));
  console.log(collection[2].last);
  var flag =[];
  for (var i = 0; i < Object.keys(collection).length; i++) {
    //if(collection[i].hasOwnProperty(Object.keys(source)) ){
      for (var name in source) {
        if (collection[i].hasOwnProperty(name) && flag[i]!==true) {
          if(collection[i][name] == source[name] && Object.keys(collection[i]).length >= Object.keys(source).length){
            arr.push(collection[i]);
            flag[i]=true;
          }
        }
      }
    //}
  }

  for (var j = 0; j < arr.length; j++) {
    // wenn ein element in source vorkommt dass nicht in arr ist - delete
    for (var ele in source) {
      if (arr[j].hasOwnProperty(ele)===false) {
        arr.splice(j, j+1);
      }
    }  
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });

//*************************** Roman Numeral Converter  *******************************
function convertToRoman(num) {
  var roman=["M","CM","D","CD","C","XC","L","XL","X","IX","V", "IV","I"];
  var number=[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var fin="";
  for(var i=0;number.length>i;i++){
    while(number[i]<=num){
      fin+= roman[i];
      num-=number[i];
    }
  }
 return fin;
}

convertToRoman(99);

//*************************** Diff Two Arrays *******************************
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var a=[], b= [],c ;
  //search 1st arr for difference
  a.push(findDifference(arr1,arr2));
  //search 2nd arr for difference
  b.push(findDifference(arr2,arr1));
  c = a.concat(b);
  console.log(typeof c);
  var merged = [].concat.apply([], c);
  return merged;
}

function findDifference(arr1, arr2){
  var foundArr = [];
  arr1.forEach(function(item) {
    console.log(  arr2.indexOf(item) == -1);
    if(arr2.indexOf(item) == -1){
        foundArr.push(item);
    }
  });
  return foundArr;
}

diffArray([1, 2, 3, 4, 5, 11], [1, 2, 3, 5, 6]);

//*************************** Sum All Numbers in a Range *******************************
function sumAll(arr) {
  var count, begin, end;
  
  if(arr[0]<arr[1]){
    begin=arr[0];
    end=arr[1];
  }
  else{
    begin=arr[1];
    end=arr[0];
  }
  count=begin;
  for(var i =begin;i<end;i++){
    begin++;
    count+=begin;
  }
  console.log("begin" + begin + "end" + end);
  
  return count;
}

sumAll([1, 4]);

//mit reduce statt for schleife
var total = [0, 1, 2, 3].reduce(function(sum, value) {
  console.log("sum"+sum + "value" + value);
  return sum + value;
  
}, 0);
console.log(total);
*/