console.log(window)
console.log(document)
setTimeout(
    ()=>{
        document.getElementById("count").innerHTML=3
        setTimeout(()=>{
            document.getElementById("count").innerHTML=2
            setTimeout(()=>{
                document.getElementById("count").innerHTML=1
                setTimeout(()=>{
                    document.getElementById("count").innerHTML="Happy birthday malar"
                    setTimeout(()=>{
                        

                    },1000)

                },1000)

            },1000)
        },1000)
    },1000)
