function num_to_string(a){
    var str = String(a);
    var digits = {
         1: 'one',2: 'two',3: 'three',4: 'four',5: 'five',6: 'six',7: 'seven',8: 'eight', 9: 'nine',
        10: 'ten', 20: 'twenty',30: 'thirty',40: 'fourty',50: 'fifty',60: 'sixty',70: 'seventy',80: 'eighty',
        90: 'nighnty', 100: 'hundred', 1000: 'thousand'
    }
    // str.split('').forEach(function(s){

    // })
    var result = ''
        if(str.length == 3){

            result += digits[Number(str[0])]   
        }else if(str.length == 2){
            var n = Number(str[0])
            result += digits[n]
        }else if(str.length == 1){
            var n = Number(str[0])
            result += digits[n]
        }
        return result;
}
console.log(num_to_string(1));