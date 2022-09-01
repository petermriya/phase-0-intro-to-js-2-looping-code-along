const names = ['Peter', 'Brian', 'Sam'];
function writeCards(names, _gift = 'suprise'){
    let array = [];
    for(let i = 0; i<names.length;i++){
        array.push('Thank you, ${names[i]}, for the wonderful ${gift})')
    }
    return array;
}
const countDown = (num) => {
    while(num >= 0){
        console.log(num);
        num --;
    }
}