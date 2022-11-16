{
    let num = 239;
    let hex = "";
    let letters = ["A", "B", "C", "D", "E", "F"];
    if (num != 0)
    {
        while(num>1)
        {
            let remainder = num % 16;
            if (remainder >= 10)
            {
               hex += letters[remainder%10];
            }
            else
            {
              hex += remainder;
            }
            num = Math.floor(num/16);
        }
        if (num == 1)
        {
            hex+=num;
        }
        let hex2 = ""
        for (let j = hex.length-1; j>=0; j--)
        {
         hex2 += hex[j];
        }
         console.log(num, hex2);
    }
    else
    {
        console.log(num);
    }
}