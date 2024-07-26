// throttling is used for performance optimization or rate limit the function call or function execution 

// button => click or onClick <=> api 

// click event happen again and again, but if we want to limit the rate 
// we can limit the rate  by using the throttling  

// ⬜ ⬜ ⬜ ⬜ ⬜ ⬜  (suppose we passed by the function click 500ms ) ⬜ ⬜ ⬜ ⬜ ⬜ ⬜  (another click passed br 500 ms ) ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ 
// FC 
// ^ delay this function call for a certain limit of time
// suppose we have 500 hundred milli seconds  

const expensive = () => {
    console.log("Expensive ")
}
window.addEventListener("resize" , "expensive")
// getting the api call and getting the data from  the server  

const betterExpensive = throttle((expensive, _limit) => {

})

const throttle = function(func, limit){
    let flag = true;
return function () {
if(flag){
    func(); 
    flag = false; 
    setTimeout(() => {
        flag =  true; 
    }, limit);
}
}
}