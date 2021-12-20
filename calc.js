const calc = {
    suma: suma = (a, b) => {
        console.log(parseInt(a, 10))
        if(isNaN(parseInt(a, 10)) || isNaN(parseInt (b, 10))){
            return NaN;
        } else {
            return a+b;
        }
    },
    resta: resta = (a, b) => {
        if(isNaN(parseInt(a, 10)) || isNaN(parseInt (b, 10))){
            return NaN;
        } else {
            return a-b;
        }
    },
    divide: divide = (a, b) => {
        if(parseInt (b, 10) == 0){
            throw new Error ('ERROR');
        } else if (isNaN(parseInt(a, 10)) || isNaN(parseInt (b, 10))) {
            return NaN;
        } else {
            return (a/b);
        }
    }
}

module.exports = calc;