//1.  Use unique sort to sort the following array and return in ascending order.
let arr = [1, 5, 2, 5, 5, 2]; // [1,2,5]

// sample answer
function uniqueSort(arr) {
  let breadcrumbs = {};
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!breadcrumbs[arr[i]]) {
      breadcrumbs[arr[i]] = true;
      newArr.push(arr[i]);
    }
  }
  return newArr.sort((a, b) => a - b);
}

console.log(uniqueSort(arr.slice()));

// ********************

//2.
