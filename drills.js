//morning drills.

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
// all calls
console.log(makeList(1,2,3));
console.log(addToList([1,2,3],4));

console.log(accessFirstItem([1,2,3]));
console.log(accessThirdItem([1,2,3]));


console.log(accessLastItem([1,3,2,5,6,1,6,1,333]));
