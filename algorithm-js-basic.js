//Truncate a String
function truncateString(str, num) {
    let newStr = "";
    if(num < str.length){
      newStr = str.slice(0,num) + "...";
    }else{
      return newStr = str;
    }
    return newStr;
  }
  
truncateString("A-tisket a-tasket A green and yellow basket", 8); //-> "A-tisket" have length = 8


//Finders Keepers
function findElement(arr, func) {
let num = 0;
for(let i = 0; i < arr.length ; i++){
    num = arr[i]
    if(func(num)){
    return num ;
    }
}  
}

findElement([1, 2, 3, 4], num => num % 2 === 0); //Tim so dau tien % 2 === 0


//Boo who
function booWho(bool) {
if(bool === true || bool === false){
    return true;
}
return false;
}

booWho(null); //-> false // 1 -> false


//Title Case a Sentence
function titleCase(str) {
  str = str.split(" ");
  for(let i = 0; i < str.length; i++){    
    str[i] = str[i].toLowerCase().split("");
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join("") ;
  };
  
  return str.join(" ");
}

titleCase("I'm a little tea pot");


function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());;
}

titleCase("I'm a little tea pot"); //-> I'm A Little Tea Pot



//Slice(copy) and Splice(delete,add)
function frankenSplice(arr1, arr2, n) {
  let space = arr2.slice();   //copy arr2 ko lam anh huong den arr2
  space.splice(n,0,...arr1);  //dung splise nhung ko delete arr2 
  return space;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); // -> [4,1,2,3,5,6]



//Where do I Belong
function getIndexToIns(arr, num) {
  let newArr = arr.sort( (a,b) => a -b );
  for(let i = 0; i < newArr.length; i++){
    if(num <= newArr[i]){
       return i;
    }
  }
  return newArr.length;
}

getIndexToIns([40, 60], 50); //-> return index num in arr after sort is 1


//Mutations
/*Return true if the string in the first element of the array contains 
all of the letters of the string in the second element of the array. */
function mutation(arr) {
  let arr0 = arr[0].toLowerCase();
  let arr1 = arr[1].toLowerCase();
  for(let i = 0; i < arr1.length; i++){
    if(arr0.indexOf(arr1[i]) < 0){
      return false;
    }
  }
  return true;
}
mutation(["hello", "hey"]); //-> false

//Chunky Monkey
/*Write a function that splits an array (first argument) 
into groups the length of size (second argument) 
and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let y = 0;
  while(y < arr.length){
    newArr.push(arr.slice(y,y+size));
    y += size;
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // -> [["a","b"] , ["c", "d"]]


function urlSlug(title) {
  return title
    .toLowerCase()  // winter is  coming
    .trim()         //winter is  coming
    .split(/\s+/)   //[ 'winter', 'is', '', 'coming' ] => [ 'winter', 'is', 'coming' ]
    .join("-")      //winter-is-coming

}
console.log(urlSlug(" Winter Is  Coming"))


//Sum All Numbers in a Range
function sumAll(arr) {
  let sum = 0
  // arr.sort((a, b) => a -b)
  // for (let i = arr[0]; i <= arr[1]; i++) {
  //   sum += i
  // }
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i
  }
  return sum;
}


sumAll([1, 4]);


// Diff Two Arrays
function diffArray(arr1, arr2) {
  var newArr = [];
  arr1.filter(i => {
    if (arr2.includes(i) == false){
      newArr.push(i)
    }      
  })
  arr2.filter(i => {
    if (arr1.includes(i) == false){
      newArr.push(i)
    }      
  })
  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); //4


// Seek and Destroy
function destroyer(arr, ...arg) {
  let newArr = []
  newArr = arr.filter(i => !arg.includes(i))
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Wherefore art thou
function whatIsInAName(collection, source) {
  var keySource = Object.keys(source)
  
  return collection.filter(obj => {
    for (var j = 0 ;j < keySource.length; j++) {
      if ( !obj.hasOwnProperty(keySource[j]) || obj[keySource[j]] !== source[keySource[j]]) {
        // truy cập value của key theo cách object[key[stt_key]]
        return false
      }
    }
    return true
  })
}
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }],
 { "apple": 1, "cookie": 2 })
//return [{ "apple": 1, "bat": 2, "cookie": 2 }]



function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");  //this Is Spinal Tap
  return str
    .toLowerCase()          //this is spinal tap
    .split(/\s+|_+/)        //[ 'this', 'is', 'spinal', 'tap' ] bỏ hết dấu "-" "_"
    .join("-")              //this-is-spinal-tap
}

spinalCase('thisIsSpinalTap');


// Pig Latin
function translatePigLatin(str) {
  var re = /^[^aeiou]+/     //trừ những chữ ueoai, + kiểu là lấy đến phần nguyên âm
  var char = str.match(re)  
  //match: hiển thị phụ âm [ 'c', index: 0, input: 'consonant', groups: undefined ]
  
  if (char != null){
    str = str.replace(re, "") + char +'ay' 
  } else {
    str = str + 'way'
  }
  return str;
}

translatePigLatin("consonant"); //=> onsonantcay

//DNA Pairing
function pairElement(str) {
  let obj = {
    G : 'C',
    C : 'G',
    A : 'T',
    T : 'A'
  }
  let newArr = str.split("")
  return newArr.map( char => {
    return [char, obj[char]]
  })
}
pairElement("GCG");//-> [["G", "C"], ["C","G"], ["G", "C"]]

//Missing letters
function fearNotLetter(str) {
  var abc = "abcdefghijklmnopqrstuvwxyz"
  if  (str[0] != abc[0]) {
    var number = abc.indexOf(str[0])
    abc = abc.slice(number)
  }
  for (var i = 0; i < str.length; i++) {
    if (str[i] != abc[i]) {
      return abc[i]
    }
  }
}
fearNotLetter("stvwx"); //=> u
fearNotLetter("abce");  //=> d

// Sorted Union
function uniteUnique(arr, ...arg) {
  let newArr = []
  newArr = arr.concat(arg.flat())
  return [...new Set(newArr)]
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); //-> [1,3,2,5,4]

//Convert HTML Entities
function convertHTML(str) {
  let obj = {
    '&' : '&amp;',
    '<' : '&lt;',
    '>' : '&gt;',
    '"'  : '&quot;',
    "'" : '&apos;'
  }
  return str.replace(/[&<>"']/g, element => obj[element]);
}
convertHTML("Dolce & Gabbana");//->Dolce &amp; Gabbana