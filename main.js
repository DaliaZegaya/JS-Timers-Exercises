// function printTimer () {
//     setInterval (()=>{
//         timer_id.innerText+= "timer "
//     },4000)
// }
// printTimer()

// function printCounter() {
//     setInterval (()=>{
//         counter_id.innerText+= "counter "
//     },6000)
// }
// printCounter()

// var loveId;
// function printLove() {
//     loveId= setInterval (()=>{
//     document.getElementById("love_id").innerText+= "I Love Timers "
//     },5000)
// }
// printLove ()
// function stopLove () {
//     clearInterval (loveId)
// }

var stopId;
var namesArray= ["BATEL", "DANIEL", "OR", "YONATAN"]
function printName () {
    stopId= setInterval(()=>{
        for (var i=0; i<namesArray.length; i++) {
        names_id.innerHTML+= namesArray[i]}
    },4000)

}
printName ()
function stopNames() {
    clearInterval (stopId)
}

