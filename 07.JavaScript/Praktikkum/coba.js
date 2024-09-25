function process(dollar, convert) { 
    const result = convert(dollar);
    return result;
}
const dollar = 2;

function toRupiah( number) {
    return number * 10000;
}
function toPeso( number) {
    return number * 2000;
}
console.log(process(dollar,toPeso)); // 1500000