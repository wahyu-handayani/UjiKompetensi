isi=([...data])=>{
    let min;
    for(let i=0;i<=data.length;i++){
        for(let j=i;j<=data.length;j++){
            if (data[i]>data[j]){
                min=data[j];
                data[j]=data[i];
                data[i]=min;
            }
        }
    }
    // console.log(data)
    if (data.length%2==1){
        let i=Math.round(data.length/2)-1
        return data[i]
    }else{
        let i=Math.round(data.length/2)-1
        return (data[i]+data[i-1])/2;
    }
}
console.log(isi([23,52,71,90,17,29,94,75,63]))