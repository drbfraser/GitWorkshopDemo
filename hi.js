const f = (v, val) => {
    return v + val;
};

let x = 0;
while (x === 0) {
    x = f(x, 1);
    x = f(x, -1);
    console.log(x);
}

console.log('done');
