//morning drills.


//PART 1
//1 take 3 items and put them in an array
function makeList(...items){
  const [item1,item2,item3] = items;
  return items;
}


//2 make a functon that lets you add one item, to an existing array without using .push();
function addToList(list,item){
 return myArray = [...list,item];
  
}
//3 access first or third item in array
function accessFirstItem(array){
return array[0];

}
function accessThirdItem(array){
return array[2];
}
//Array Length and access Last item

function findLength(array){
  return array.length
}
function accessLastItem(array){
  return array[findLength(array)-1];
}



//PART 2


//PART 3
// Redo the "max and min (without sort or Math.max/min)" drill but this time use a while loop instead of a for loop
// Redo "Compute the average" exercise but use the Array.forEach() method instead of a for loop
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
function max(array){
  let arrayIndexer = 0;
  let arrayMax= array[0];
    while(arrayIndexer<array.length){
      if(arrayMax<array[arrayIndexer]){
        arrayMax=array[arrayIndexer]
      }
      arrayIndexer++;
    }
    return arrayMax;
}

function min(array){
  let arrayIndexer = 0;
    let arrayMin= array[0];
      while(arrayIndexer<array.length){
        if(arrayMin>array[arrayIndexer]){
          arrayMin=array[arrayIndexer]
        }
        arrayIndexer++;
      }
      return arrayMin;
}

function arrAvg(array){
  let avgSum=0;
  array.forEach(x=>avgSum+=x);
  return avgSum/array.length;


}

function fizzBuzz(num){
  let answerStr =''
  let fizzBuzzCounter=1
  while(fizzBuzzCounter<=num){
    if (fizzBuzzCounter%15===0) {answerStr+='FizzBuzz\n'}
    else if (fizzBuzzCounter%5===0) {answerStr+='Fizz\n'}
    else if (fizzBuzzCounter%3===0) {answerStr+='Buzz\n'}
    else{answerStr+=`${fizzBuzzCounter} \n`}
    
    fizzBuzzCounter++;
  }
  return answerStr;
}

// var func2 = function( .. ) {
//   return condition1 ? value1
//        : condition2 ? value2
//        : condition3 ? value3
//        :              value4
// }


// ALL FUNCTION CALLS
// console.log(makeList(1,2,3));
// console.log(addToList([1,2,3],4));

// console.log(accessFirstItem([1,2,3]));
// console.log(accessThirdItem([1,2,3]));


// console.log(accessLastItem([1,3,2,5,6,1,6,1,333]));

//part 3
// console.log(max([2,3,4,4344134,5,6,23]));
// console.log(min([2,3,-24,4,4344134,5,6,23]));
console.log(arrAvg([1,2,3,4,5]));
// console.log(fizzBuzz(16));


