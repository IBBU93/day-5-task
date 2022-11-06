//1. print odd numbers in an array 
let arrayNumber = [5, 12, 32, 11, 15, 17, 19, 37, 33, 57, 55, 99, 101]
let resultarray=(function(arrayNumber) {
      return(arrayNumber.filter((item) => {
        return iterm % 2 !== 0
      }))
})(arrayNumber);
 console.log("all odd numbers in an array:" + resultarray)


 // 2. convert all the strings to title caps in a string array

 let array =["akshay","is", "a" , "smart" , "devoloper"]

 let resultStringArray =(function(stringArray) {

  return (stringArray.map((item) => {
    return item.touppercase()

  }))

 }) (stringArray);
 console.log("all upper case string in an array;"+resultStringArray)

 //3. sum of all  numbers in an array 

 let resultSumArray = (function(arrayNumber) {
  return (arrayNumber.reduce((currenttotal, item)=>{
    return currentTotal+item

    },0 ))
  })(arrayNumber)
  
  console.log("sum of number in an array:" + resultSumArray)


  //4.return all the prime number in an array

  let resultPrimeArray =(function(arrayNumber){
    return (arrayNumber.filter((iteerm)=>{
      for(i=2 ;i<iterm; i++) {
        if (item % i===0)
        return false
      }
      return true
    }))
  })(arrayNumber);
  console.log("prime number in an array;"+ resultPrimeArray)

  //5. return all the palindromes in an array 

  let resultPaliondromesArray =(function(arrayNumber){
    return (arrayNumber.filter((item) => {
      let temp = item+""
      if ((temp.split('').reverse().join(''))===item +"")
      return true 
      return false
    }))

  })(arrayNumber);
  console.log("paliondrome number in an array:"+resultPaliondromesArray)
  
  //6.return medion of two sorted arrays of same size

  let arr1 = [1,2,3,4,5,8,10]
  let arr2 =[8,9,10,12,16]

  let resulyMedian = function(arr1 ,arr2) {
    let result = []
    let lenarr1 = arr1.length
    let lenarr2 = arr2.length
    if (lenarr1 % 2 === 0){
      console.log("median of array 1 :"+arr1[lenarr1 / 2])
     } else {
      console.log("median of array 2:"+arr2[lenarr2/2])
     }
     if (lenarr2%2 ===0){
      console.log("median of array 2:" + arr[lenarr2/2])
     } else {
      console.log("median of array 2:"+ arr2 [(lenarr2/1)/2])

     }
     return
     } (arr1,arr2)

     // 7.remove duplicates from an array 

     let arraywithdup = [22,22,11,10,11,56,10,1,2,6,7,56,3,9]

     let resultarraywodup =((arraywithdup,index)=>{
      return [...new set (arraywithdup)]

     })(arraywithdup)
     console.log("array without duplicates" + resultarraywodup)

     //8.Rotate an array by k time
  
 
 let arrforrotation = [0,1,5,6,7,9]
  let resultarrayshifted = ((array,k)=>{
    for (let i =0 ; i<k; i++){
      let temp = array.shift()
      array.push(temp)
    }
    return array

  })(arrforrotation,3)
  console.log("array roatated k time;"+resultarrayshifted)