//create an arry
arr = [1,2,3,4,5]
console.log(arr)

//Access an element
arr = [1,2,3,4,5]
console.log(arr[2])

//Change an element
arr = [1,2,3,4,5]
arr[1] = 6
console.log(arr)

//Find length
function sun(){
    var arr=[1,2,3,4,5]
    return arr.length
}
console.log(sun())

//Add an element(push)
var arr=[1,2,3,4,5]
arr.push(6)
console.log(arr)

//Remove the last element(pop)
var arr=[1,2,3,4,5]
arr.pop()
console.log(arr)

//Loop through an array
var arr=[1,2,3,4,5]
for(i=0;i<arr.length;i++){
    console.log(arr[i])
}

//Check if an element exists
function exist(n){
    arr=[3,6,7,8,93,7,3]
    for (ind=0;ind<arr.length-1;ind++){
        if(ind==n){
            console.log(n)
        }
    }
}
exist(3)

//Copy an array
var arr=[1,2,3,4,5]

var a=arr
console.log(a)

//Convert array to string
var arr=[1,2,3,4,5]
console.log(arr.join())












