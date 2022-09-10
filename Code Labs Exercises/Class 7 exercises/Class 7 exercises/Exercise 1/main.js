// Write a function redundantReturn that takes in a 
// string a parameter named str. This function should 
// return another function that returns a message using 
// the str variable. Print that message to the developer console.


function redundantReturn(str){
    
  function strReturn () {

      console.log("Function Returned String:", str);
  }
  strReturn();
}
redundantReturn("You completed Ex. 1!");