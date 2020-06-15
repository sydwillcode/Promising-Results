// slowMath.add(6,2)
// .then(res => {
//     console.log(res)
//     return slowMath.multiply(res, 2);
// })
// .then(res => {
//     console.log(res)
//     return slowMath.divide(res, 4)
// })
// .then(res => {
//     console.log(res)
//     return slowMath.subtract(res, 3)
// })
// .then(res => {
//     console.log(res)
//     return slowMath.add(res, 98)
// })
// .then(res => {
//     console.log(res)
//     return slowMath.remainder(res, 2)
// })
// .then(res => {
//     console.log(res)
//     return slowMath.multiply(res, 50)
// })
// .then(res => {
//     console.log(res)
//     return slowMath.remainder(res, 40)
// })
// .then(res => {
//     console.log(res)
//     return slowMath.add(res, 32)
// })
// .then(res => {
//     console.log(`The result is ${res}!`)
// })
// .catch(err => console.log(err))

let doMath = async () => {
    try {
        let wait = await slowMath.add(6,2);
        console.log(wait);
        wait = await slowMath.multiply(wait, 2);
        console.log(wait);        
        wait = await slowMath.divide(wait, 4);
        console.log(wait);
        wait = await slowMath.subtract(wait, 3);
        console.log(wait);
        wait = await slowMath.add(wait, 98);
        console.log(wait);
        wait = await slowMath.remainder(wait, 2);
        console.log(wait);
        wait = await slowMath.multiply(wait, 50);
        console.log(wait);
        wait = await slowMath.remainder(wait, 40);
        console.log(wait);
        wait = await slowMath.add(wait, 32);
        console.log(wait);
        console.log(`The result is ${wait}!`)
    } catch (err){
        console.log(err)
    }
}

doMath()