//exercicio de método assíncrono

console.log('1');
t();
console.log('3');
function t(){
    setTimeout(function(){
        console.log('2');
    }, 10);
}