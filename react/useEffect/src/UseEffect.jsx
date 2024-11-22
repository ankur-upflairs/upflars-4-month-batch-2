import React,{useState,useEffect} from 'react'

function UseEffectHook() {
    const [todo,setTodo] = useState([])
    //hooks always with use
    //hooks always used at top of component
    //useEffect is used for side effects
    //useEffect is used for api calls

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()
            console.log(data)
            setTodo(data)
        }
        fetchData()
    },[])//dependency array 
  return (
    <div>
        <ol>
      {todo.map((item)=><li>{item.title}</li>)}
        </ol>
    </div>
  )
}

export default UseEffectHook
