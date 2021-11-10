const fn = (arg) => {
    console.log(arg);
};

//setTimeout(fn, 2 * 100, "Hello after 2 sec ");
//setTimeout(fn, 4 * 100, "Hello after  4 sec");

// Every 1 sec

/*setInterval(() => {
    console.log("hello");
}, 1000);*/

// Print hello 5 times then the print done
/*let i = 0;
let t = setInterval(
    () => {
        console.log("Hello" + i + 1);
        i++;
        if (i === 5) {
            clearInterval(t);
            console.log("done" + i);
        }
    },
    1000,
    i
);*/

/*const delayFn = (delay) => {
    setTimeout(() => {
        console.log("Hello");
        delayFn(delay + 1);
    }, 1000 * delay);
};

delayFn(1);*/

const delayFn = (delay) => {
    setTimeout(() => {
        console.log("Hello " + 100 * delay);
        delayFn(delay + 1);
    }, 100 * delay);
};

delayFn(1);
