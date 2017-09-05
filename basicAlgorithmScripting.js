function rot13(str) { // LBH QVQ VG!
  var list="ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //foreach element aus str.
  var arr=str.split(" ");
  var newStr= "";
  
  for(var i=0; i<arr.length;i++){
    if(i>0) newStr+=" ";
    for(var j=0;j<arr[i].length;j++){
      //arr[i][j]=list.charAt(((list.indexOf(arr[i][j]))+13));
      if(list.indexOf(arr[i][j]) >-1){
        var tmp=list.charAt(((list.indexOf(arr[i][j]))+13));
        newStr +=tmp;
        // console.log(list.charAt((list.indexOf(arr[i][j])+13)));
      }
      else{
        newStr+=arr[i][j];
      }
    }
  }
  console.log(newStr);
  
  return newStr;
}

// Change the inputs below to test
rot13("SERR CVMMN!");

/*
//---- where do I belong
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr.sort(sorter);
  return arr.indexOf(num);
}

function sorter(a ,b){
  if(a<b){
    return -1;
  }
  if(a>b){
    return 1;
  }
  return 0;
}

getIndexToIns([5, 3, 20, 3], 18);

//----seek and detroy
function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments[0]);
  var numbers=Array.prototype.slice.call(arguments, 1);
  //console.log(args);
  var newArr=args.filter(containCheck,numbers);
  return newArr;
}

function containCheck(value,numbers){
  return this.indexOf(value) == -1;
}

destroyer([1, 2, 3, 1, 2, 3], 5, 2, 3);

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArr=arr.filter(check);
  return newArr;
}

function check(value){
  var toFilter=[false, null, 0, "", undefined,NaN];
  console.log(toFilter.indexOf(value)==-1);
  if(Number.isNaN(value)===true){
    return false;
  }
  return toFilter.indexOf(value)==-1;
}

bouncer([false, null, 0, "", undefined,NaN])

//----Mutations
function mutation(arr) {
  var check=true;
  //to lower
  for (var index = 0; index < arr.length; index++) {
    arr[index]=arr[index].toLowerCase();
  }
  var word=arr[0];
  var hasLetter=arr[1].split("");  
  //check every letter
  for (var index = 0; index < hasLetter.length; index++) {
    if(word.indexOf(hasLetter[index])==-1){
      check=false;
    }
  }

  return check;
}

mutation(["hELlo", "hEy"]);

//---- Slasher Flick
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var arrNew=arr.slice(howMany,arr.length);
  //var arrNew=arr.splice(0,howMany);
  return arrNew;
}

slasher([1, 2, 3, 4, 5], 2);
//----truncate String
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var begin=0;
  var end=size;
  var newArr=[];
  for(var i=0; i<(arr.length/size);i++){
    newArr[i]=arr.slice(begin,end);
    begin=end;
    end+=size;
  }
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);

//----truncate a string
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var tmp="";
  var dots="...";
  if(num<=3)
    dots="";
  //console.log(str.slice(0, num));
  if(str.length==num ||str.length<num)
    tmp=str;
  if(str.length>num){
    tmp=str.slice(0, num-dots.length);
    tmp+="...";
  }
    console.log(tmp);
    return tmp;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

//--- repeat a string
function repeatStringNumTimes(str, num) {
  // repeat after me
  var tmp="";
  for(var i=num;i>0;i--){
    tmp+=str;
  }
  return str;
}

repeatStringNumTimes("abc", 3);

//---confirm the ending
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  console.log(target.length);

  console.log(str.substring(str.length, str.length-target.length));
  if(str.substring(str.length, str.length-target.length)===target)
    return true;
  else
    return false;
}

console.log(confirmEnding("Bastian", "ian"));

//---largest Number in array
function largestOfFour(arr) {
  // You can do this!
  var largestArr=[0,0,0,0];
  for(var i=0;i<arr.length;i++){
    console.log(arr[i].length);
      for(var j=0;j<arr[i].length;j++){
        if(arr[i][j]>largestArr[i]){
        largestArr[i]=arr[i][j];
        }
      }
  }
  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//-----Title Case a Sentence
function titleCase(str) {
  str=str.toLowerCase();
  var arr=str.split(" ");
  for(var i = 0; i < arr.length; i++){
    arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  arr=arr.join(" ");
  return arr;
}
titleCase("I'm a little tea pot");

function titleCase(str) {
  // Step 1. Lowercase the string
  str = str.toLowerCase();
  // str = "I'm a little tea pot".toLowerCase();
  // str = "i'm a little tea pot";
  
  // Step 2. Split the string into an array of strings
  str = str.split(' ');
  // str = "i'm a little tea pot".split(' ');
  // str = ["i'm", "a", "little", "tea", "pot"];
  console.log(str[2].slice(1));
  console.log(str.__proto__.prototype);

  // Step 3. Create the FOR loop
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  //  Here str.length = 5
  //   1st iteration: str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
  //                  str[0] = "i'm".charAt(0).toUpperCase()  + "i'm".slice(1);
  //                  str[0] = "I"                            + "'m";
  //                  str[0] = "I'm";
  //   2nd iteration: str[1] = str[1].charAt(0).toUpperCase() + str[1].slice(1);
  //                  str[1] = "a".charAt(0).toUpperCase()    + "a".slice(1);
  //                  str[1] = "A"                            + "";
  //                  str[1] = "A";
  //   3rd iteration: str[2] = str[2].charAt(0).toUpperCase()   + str[2].slice(1);
  //                  str[2] = "little".charAt(0).toUpperCase() + "little".slice(1);
  //                  str[2] = "L"                              + "ittle";
  //                  str[2] = "Little";
  //   4th iteration: str[3] = str[3].charAt(0).toUpperCase() + str[3].slice(1);
  //                  str[3] = "tea".charAt(0).toUpperCase()  + "tea".slice(1);
  //                  str[3] = "T"                            + "ea";
  //                  str[3] = "Tea";
  //   5th iteration: str[4] = str[4].charAt(0).toUpperCase() + str[4].slice(1);
  //                  str[4] = "pot".charAt(0).toUpperCase() + "pot".slice(1);
  //                  str[4] = "P"                           + "ot";
  //                  str[4] = "Pot";                                                         
  //   End of the FOR Loop
  }
  
  // Step 4. Return the output
  return console.log(str.join(' ')); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
}

titleCase("I'm a little tea pot");

function titleCase(str) {
  str.toLowerCase();
  var arr=str.split(" ");
  var tmp=[];
  //str.replace(0, "FUCK");
  for(var i = 0; i < arr.length; i++){
    tmp[i]=arr[i].toLowerCase().replaceAt(0, arr[i].charAt(0).toUpperCase());
  }
  for (var index = 0; index < str.length; index++) {
    str[index].charAt(0).toUpperCase();
    console.log(str[index].charAt(0).toUpperCase());
    //str.toUpperCase();
    //console.log(str.charAT(0));
  } 
  str.join(" ");
  return tmp.join(" ");
}

titleCase("I'm a liTtle tea pot");


//longest word
function findLongestWord(str) {
  var arr=str.split(" ");
  var word=0;
  for (var index = 0; index < arr.length; index++) {
    if(arr[index].length>word){
      word=arr[index].length;
      //console.log(word);
    }
  }
  //console.log(arr);
  return arr.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//-----check for palindrome
function palindrome(str) {
  // Good luck! 
  str=str.toLowerCase();
  str=str.replace(/\W/g, "");
  str=str.replace(/_/g, "");
  var reverse=str.split("").reverse().join("");
  if(reverse===str) return true;
  else
    return false;
}

palindrome("0_0 (: /-\ :) 0-0");


function reverseString(str) {
  arr=[];
  arr=str.split("");
  arr.reverse();
  str=arr.join("");
  return str;
}

//console.log(reverseString("hello"));

//-----factorialize

function factorialize(num) {
  arr=[];
  arr.length=num;
  var n=1;
  //console.log(arr.length);
  for(i=arr.length; i>0;i--){
    arr[i-1]=i;
    //console.log(arr);
  }
  for(i=0;i<arr.length;i++){
      n*=arr[i];
  }
  if (n===0) n=1;
//console.log(n);
  return n;
}

factorialize(10); */