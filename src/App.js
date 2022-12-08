import api from "./services/api";
import {useEffect, useState} from "react"
import Card from "./components/card";

function App() {
  const [data,setData]= useState([]);

  async function getData(){
    await api.get("products").then((response)=>{
      setData(response.data)
    })
  }

  useEffect(()=>{
    getData();
  },[]);

  
  return (
    <div>
        {data.map((resp)=>(
          <Card key={resp.id} data={resp} id={resp.id}/>
        ))}
    </div>
  );
}

export default App;
