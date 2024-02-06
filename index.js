
function writeCards(names, eventName) {
    const messages=[];
    for (let i=0; i<names.length; i++){
        const message =(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        messages.push(message)
        debugger;
    }
        
    
    return messages;}
    const names=["Charlie", "Samip", "Ali"];
    const eventName="birthday";
    const result= writeCards(["Charlie", "Samip", "Ali"], "birthday");
    console.log(result)


    function countDown(startingNumber) {
        let countdown =10;
        while (countdown >=0){
            console.log(countdown--);
        }

    }