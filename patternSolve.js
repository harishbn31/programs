// function numberPattern(a){
//     let s = ''
//     for (i = 1; i <= a; i++){
//         for (j = 1; j <= i; j++) {
//             s += j
//         }
//         s += '\n'
//     }
//     return s
// }
function numberPattern(a){
    let s = ''
    for (let i = 1; i <= a; i++){
        // s += i;
        let j = 0;
        let k = i;
        while( k<= j){
            s+= k+' '
            k++
        }
        if (i !== a) {
            s += '\n'
        }
    }
    return s
}
console.log(numberPattern(5));