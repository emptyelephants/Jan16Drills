function repeat(fn,n){
  for(let reps = 0;reps <n;reps++){
    fn();
  }
}
function hello(){
  console.log(`hello!`);
}
function goodbye(){
  console.log(`goodbye!`);
}

// repeat(hello,0);
// repeat(goodbye,13);



// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});


// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr,fn){
  let filteredArray=[];
  for(let i =0;i<arr.length;i++){
    if(fn(arr[i])===true){
     filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

//console.log(filteredNames) // => ['Rich', 'Ray']



function hazardWarningCreator(typeOfWarning){
  let warningCounter=0;
  return function(location){
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${warningCounter >1 ? 'times today!' : 'time today!'}`);
  

  }
}

const rocksWarning = hazardWarningCreator('Rocks on road');
const lavaWarning = hazardWarningCreator('Lava on road');

// rocksWarning('Main st. and Pacific ave.')
// rocksWarning('Main st. and Pacific ave.')
// rocksWarning('Main st. and Pacific ave.')

// lavaWarning('Garnett ave.')
// lavaWarning('Garnett ave.')

let turtleMovements =[[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]

function turtleMove(arr){
  let totalSteps =  arr.filter(x=>x[0]>=0&&x[1]>=0).map(x=>x[0]+x[1]);
  totalSteps.forEach(x=>console.log(`Turtle moved ${x} steps this time.`))
}
//turtleMove(turtleMovements)
//try to acount for total movements, later.//

let codeString = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'

function reduceDecoder(str){
  let rawString = str.split(" ");
  let ansString=rawString.reduce(function(currentString,words){ 
    if(words.length===3){
      return currentString+=' ';
    }
    else{
      return currentString+words[words.length-1].toUpperCase();
    }
    
  },'');
 return ansString;

}


console.log(reduceDecoder(codeString));






