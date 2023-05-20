var fac = 1;
var cont = 1;
while (true) {
    cont++;
    fac*=cont;
    if (cont==10) {
        break;
    }
}
console.log(fac);