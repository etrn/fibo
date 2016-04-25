alert('In console you can see fibonacci 100 numbers');
fib();
function fib() {
    var c = 1;
    var a = 0;
    var b = 1;
for ( var i = 2; i <= 100; i++)
{ 
    c = a + b;
    a = b;
    b = c;
    console.log (c);
}
}