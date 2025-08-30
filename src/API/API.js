


const API = () => {
    return(
<>
    <div onClick={async() => { 
       var res =  await fetch("http://localhost:8000/set" ,{
        credentials : "include" , 
       })
        var rel = await res.text()
        console.log(rel)
    }}>Hello World</div>
    <div onClick={async() => { 
       var res =  await fetch("http://localhost:8000/get" , {
        credentials : "include" , 
        method : "GET" , 
       })
        var rel = await res.text()
        console.log(rel)
    }}>Hello World 2</div>
</>
)
}

export default API