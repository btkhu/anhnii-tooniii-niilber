var sum = 0;
for (var i = 2; i <= 1000; i++) {
    if (anhniiTooMon(i) === true) {
        sum = sum + i;
    }
}

function anhniiTooMon(too) {
    var anhniiTooMon = true;
    for (var x = 2; x < too; x++) { 
        if (too % x === 0) {
            anhniiTooMon = false;
            break;
        }
    }

    return anhniiTooMon;
}
console.log('1-1000 hurtelh anhnii toonuudiin niilber bol ' + sum);
