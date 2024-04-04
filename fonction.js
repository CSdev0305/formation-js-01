function direBonjour(){
    return 'Bonjour tout le monde';
}
let message = direBonjour;
// console.log(message())
const direHello = (callBack)=>{
    console.log(callBack());
    return "Hello tout le monde";
}


console.log(direHello(direBonjour))

export default direBonjour
