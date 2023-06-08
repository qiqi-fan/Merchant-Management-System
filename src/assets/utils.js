export function debounce(func,delay=200){
    let timer;
    return function (){
        if(timer!==null) clearTimeout(timer)
        timer = setTimeout(()=>{
            func.apply(this,arguments)
        },delay)
    }
}