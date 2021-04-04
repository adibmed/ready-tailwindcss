function generate(prefix, prop, init, n, unit) {
    for(let i = 0; i <= n; i++)
    {
        console.log(`.${prop}-${i}\n { \n ${prop}: ${i}}`)
    }
}