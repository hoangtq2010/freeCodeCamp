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
        // truy c???p value c???a key theo c??ch object[key[stt_key]]
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
    .split(/\s+|_+/)        //[ 'this', 'is', 'spinal', 'tap' ] b??? h???t d???u "-" "_"
    .join("-")              //this-is-spinal-tap
}

spinalCase('thisIsSpinalTap');


// Pig Latin
function translatePigLatin(str) {
  var re = /^[^aeiou]+/     //tr??? nh???ng ch??? ueoai, + ki???u l?? l???y ?????n ph???n nguy??n ??m
  var char = str.match(re)  
  //match: hi???n th??? ph??? ??m [ 'c', index: 0, input: 'consonant', groups: undefined ]
  
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

// Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  var i = 1, j = 1, tmp = 0
  var sum = 2
  while (tmp <= num) {
    tmp = i + j
    i = j
    j = tmp
    if ( tmp %2 != 0 && tmp <= num) {
      sum += tmp
      }
  } 
  return sum;
}
sumFibs(4); //->1+1+3=5

// Smallest Common Multiple
function smallestCommons(arr) {
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  let sum = max

  for (let i = max; i >= min; i--) {
    if (sum % i !== 0) {
      sum += max
      i = max
    }
  }
  return sum;
}
smallestCommons([1,5]); //-> 60 chia het 1,2,3,4,5

// Drop it
function dropElements(arr, func) {
  for ( var i = 0; i <= arr.length; i++) {
    if (func(arr[i])){
      console.log(i)
      return arr.slice(i)
    }
  }
    return arr.slice(arr.length)
}
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) //-> [3,4]

// Steamroller
function steamrollArray(arr) {
  let newArr = [].concat(...arr)    //[1, [2], [3, [[4]]]] -> [ 1, 2, 3, [ [ 4 ] ] ]
  return newArr.some(i => Array.isArray(i)) ? steamrollArray(newArr) : newArr
}

steamrollArray([1, [2], [3, [[4]]]]); // -> [ 1, 2, 3, 4 ]

// Binary Agents
function binaryAgent(str) {
  str = str.split(" ") //
[ '01000001','01110010','01100101',...]
  return str.map(element => String.fromCharCode(parseInt(element, 2))).join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 
            01110100 00100000 01100010 01101111 01101110 
            01100110 01101001 01110010 01100101 01110011
            00100000 01100110 01110101 01101110 00100001 00111111"); //-> Aren't bonfires fun!?
// reverse( string to binary )
function binaryAgent(str) {
  let newstr = ""
  for (var i=0; i< str.length; i++) {
    // console.log(str[i])
    newstr += (str.charCodeAt(str[i])).toString(2) + " "
  }
  console.log(newstr)
  return newstr
}

binaryAgent("Aren't bonfires fun!?");

// Everything Be True
function truthCheck(collection, pre) {
  return collection.every(i => i[pre]);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"},..., {"user": "Po", "sex": "female"}], "sex");

// Arguments Optional
function addTogether() {
  var [first, second] = arguments
  console.log(second)   //1- undefined, 2- 7

  if(typeof (first) !== 'number') {
    return undefined
  } if ( second == undefined) {
    return (second) => addTogether(first, second)
  } if ( typeof (second) !== 'number') {
    return undefined
  }
  return first + second;
}
addTogether(2, 3) //5
addTogether(5)(7) //-> addTogether(5, 7) -> 12

//Make a Person
var Person = function(firstAndLast) {
  console.log(firstAndLast.split(" ")[1])
  this.getFullName = () => firstAndLast
  this.getFirstName = () => firstAndLast.split(" ")[0]
  this.getLastName = () => firstAndLast.split(" ")[1]
  this.setFirstName = (first) => firstAndLast = first + " " + firstAndLast.split(" ")[1]
  this.setLastName = (last) => firstAndLast = firstAndLast.split(" ")[0] + " " + last 
  this.setFullName = (name) => firstAndLast = name
};

var bob = new Person('Bob Ross');
bob.getFullName();

// Palindrome Checker
palindrome("eye") //->true
palindrome("nope") //-> false

function palindrome(str) {
  str = str.toLowerCase()
  str = str.match(/[A-Za-z0-9]/g)       //lo???i b??? t???t c??? ko ph???i ch??? v?? s???
  console.log(str)                      //[ 'n', 'o', 'p', 'e' ]
  console.log(str.join(''))             //nope
  console.log(str.reverse().join(''))   //epon

  return str.join('') == str.reverse().join('')
}

//Caesars Cipher
function rot13(str) {
  let text = ''
  let alphabet = {'A' : 'N','B' : 'O' ,'C' : 'P','D':'Q','E':'R',
                  'F' :'S','G':'T','H':'U','I':'V','J':'W','K':'X',
                  'L':'Y','M':'Z','N':'A','O':'B','P':'C','Q':'D',
                  'R':'E','S':'F','T':'G','U':'H','V':'I','W':'J','X':'K','Y':'L','Z':'M'}
  for (let key in str) {
    console.log(str[key])
    if (!alphabet[str[key]]) {
      text += str[key]
    } else {
      text += alphabet[str[key]]
    }
  }
  return text
}
rot13("SERR PBQR PNZC");

// Telephone Number Validator
/*555-555-5555      ->/^\d{3}-\d{3}-\d{4}$/
(555)555-5555       ->/^\(\d{3}\)\d{3}-\d{4}$/
(555) 555-5555      ->/^\(\d{3}\) \d{3}-\d{4}$/
555 555 5555        ->/^\d{3} \d{3} \d{4}$/
5555555555          ->/^\d{10}$/
1 555 555 5555      ->/^1 \d{3} \d{3} \d{4}$/
1 (555)555-5555      ->/^1 \(\d{3}\)\d{3}-\d{4}$/
1 (555) 555-5555    ->/^1 \(\d{3}\) \d{3}-\d{4}$/
1 555-555-5555      ->/^1 \d{3}-\d{3}-\d{4}$/          
const regArr = [..., ..., ...]
return regArr.some(pattern => pattern.test(str))     */

function telephoneCheck(str) {
  let regex = /^1? ?(( ?\d{3}[- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/
  return regex.test(str);   //so sanh regular expression and a string
}
telephoneCheck("555-555-5555");

// Roman Numeral ConverterPassed
function convertToRoman(num) {
  let result = ""
 const numRoman = {
   M : 1000, CM : 900, D : 500, CD : 400, C : 100, XC : 90,
   L : 50, XL: 40, X : 10, IX : 9, V : 5, IV : 4, I : 1 }
 for (let key in numRoman) {
   console.log(key) //Ch???y t??? M->I
   while (numRoman[key] <= num ) {
     result += key
     num -= numRoman[key]
   }
 }
 return result;
}

convertToRoman(36);


//Cash Register
function checkCashRegister(price, cash, cid) {
  const currencyMoney = { "PENNY" : 1,
    "NICKEL" : 5 , 
    "DIME" : 10, 
    "QUARTER" : 25,
    "ONE" : 100,
    "FIVE" : 500, 
    "TEN" : 1000 , 
    "TWENTY" : 2000,
    "ONEHUNDRED" : 10000} 

  //T??nh ti???n th???a
  let returnCash = cash *100 - price *100
  const returnCashCheck = returnCash
  let status = ''
  let change = []
  
  /*?????o ng?????c ng??n ?????ng ti???n ????? c?? th??? d??ng v??ng l???p while 
   l??p t??? tr??n xu???ng v?? d???ng l???i ??? gi?? tr??? nh??? h??n s??? ti???n tr??? */
  let filterCid = cid.filter(i => i[1] !== 0).reverse()
  let sumCid = 0
  
  //L???c lo???i gi?? ti???n ph???i tr??? t??? to ?????n nh???
  filterCid.forEach( element => {
    let type = element[0]
    let typeSum = element[1] * 100
    sumCid += typeSum
    let amount = 0
    while (returnCash >= currencyMoney[type] && typeSum > 0) {
      amount += currencyMoney[type]         //?????m gi?? tr??? ti???n ph???i tr???
      returnCash -= currencyMoney[type]     //s??? ti???n ph???i tr??? gi???m d???n ?????n 0
      typeSum -= currencyMoney[type]        //ti???n t??? t???ng ng??n x???p tr??? ??i
    }
    //?????y lo???i ti???n v?? s??? ti???n ph???i tr??? l???i v??o m???ng change[]
    if (amount !== 0) {
      change.push([type, amount / 100])
    }
  })
  
  //S??? ti???n ph???i tr??? v???n ch??a gi???m v??? 0
  if (returnCash > 0) {
    status = "INSUFFICIENT_FUNDS"
    change = []
  } 
  //S??? ti???n tr??? ????ng b???ng s??? ti???n c?? trong ng??n x???p v?? trong ng??n h???t ti???n
  else if (returnCash == 0 && returnCashCheck == sumCid) {
    status = "CLOSED"
    change = cid
  } else {
    status = "OPEN"
  }
  
  return { "status" : status, "change" : change};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
