const func = async (worker) => {
    console.log('START WORKER', worker);
    const f = (v, val) => {
        return v + val;
    };

    let x = 0;
    while (x === 0) {
        x = f(x, 1);
        x = f(x, -1);
        await new Promise(resolve => setTimeout(resolve, 0));
    }

    console.log('DONE WORKER', worker);
    return 1;
};

const promises = Array.from({ length: 1000 }).map((_, i) => {
    return func(i);
});

Promise.all(promises).then(() => {
    console.log('All done');
});
