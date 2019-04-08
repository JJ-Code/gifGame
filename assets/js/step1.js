//grab value from input form
// const grabVal = () => {
//     event.preventDefault();
//     let giphy = document.getElementById("giphy-input").value.toLowerCase();
//     console.log(giphy);

// };


// let grabVal = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let giphy = document.getElementById("giphy-input").value.toLowerCase();
//             console.log(giphy);
//             resolve(giphy)
//         }, 1000)
//     })
// }


// export default {
//     grabVal
// };


const try_14 = () => {
    let results = [ "a", "b", "c", "d", "e"]
    let base = 1

for (var i = 0; i < results.length; i++) {
        let counter = base++
        // const count2String = counter.toString()
    const log = `${results[i]}_${counter}`
    console.log(log)
    console.log(typeof(log))
}

}

const try_15 = () => {
    let results = ["a", "b", "c", "d", "e"]

    for (var i = 0; i < results.length; i++) {

        // const count2String = counter.toString()
        const log = `${results[i]}_${i}`
        console.log(log)
        console.log(typeof (log))
    }

}
