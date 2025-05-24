import React, { useEffect, useState } from "react"


const FetchData = ()=>{
let [data, setData] = useState(null)


function getData(){

    fetch("	https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>{setData(data)})
.catch(error=>{console.log(error.message);
})
}

useEffect(()=>{
getData()

},[])

console.log(data);

    return (
        <>
        <ol>

        {data && data.map((item,i)=>{
            return <div key={i}>
                <li>{item.title}</li>
                <p>{item.body}</p>
            </div>
        })}
        </ol>
        
        </>
    )
}

export default FetchData