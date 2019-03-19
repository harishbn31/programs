const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter number:  \n', (n) => {
    // var s = ''
    // for(i=1;i<=n;i++){
    //   // for(j=1;j<=i;j++){
    //     console.log(s);
    //     for(j=1;j<=i;j++){
    //       if(Math.round(n/2) == j){
    //         s += '*'
    //         // console.log('*'.repeat(i))
    //       }
    //     }
        
    //   // }
    //   // console.log('\n')
    // }
      // var str = '';
      // for(var i=1; i<=n; i++){
       
      //     for(var k=1; k<=n-i; k++){
      //         str += "\t";
      //         // str += " ";
      //     }
      //     for(var j=1; j<=i; j++){
      //       str += "*\t\t";
      //   }
          
      //     console.log(str);
      //     str = "";
      // }
      // for(let i=1; i<= n; i++){
      //   let str = ' '.repeat(n-i);
      //   let str2 = '#'. repeat(i*2)
     
      //   console.log(str + str2 + str);
  // }
      let result = [];
      for(let i = 0; i < n; i++) {
        let spaces = " ".repeat(n - i);
        let block = "*".repeat(i * 2 + 1);
        result.push(`${spaces}${block}${spaces}`);
      }
      console.log(result.join("\n"));
      // return result.join("\n");
      const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
    rl.close();
  });
  