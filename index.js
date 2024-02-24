function writeCards(namesArray, eventName) {
    let messagesArray = []
    for (let i=0; i <namesArray.length; i++){
    let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
    messagesArray.push(message);
   
    debugger;
}
return messagesArray;
}
writeCards((["Guadalupe", "Ollie", "Aki"]), birthday)

function countDown() {
    let countdown = 10;
    while (countdown >=0){
        console.log(countdown--)
    }
}
countDown(10);
