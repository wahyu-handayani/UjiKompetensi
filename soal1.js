bil=(x)=>{
    let y=x.toString()
    let r=0
    for(let i=y.length;i>=1;i--){
        let m=Math.pow(10,i-1)
        res=m*y[r]
        console.log(res)
        r=r+1
    }
}
bil(15225151)





