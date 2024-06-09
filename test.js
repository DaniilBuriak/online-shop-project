function rgb(r, g, b) {
    // complete this function
    let input = [r, g, b];
    let answer=''
    let result = input.map((num) => {
        if (num<16&&num>=0){
            num='0'+num.toString(16);
        }
        if(num<0){
            num='00';
        }
        if (num>255){
            num='ff'
        }
        else{
            num=num.toString(16)
        }
        num=num+''
        return num.toUpperCase()
    });
    for(num of result){
        answer =answer+num;
    }
    console.log(answer);
}
rgb(0, 0, -20);
