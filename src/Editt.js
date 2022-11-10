import React, { useEffect } from 'react'
import './App.css'
import App from './App.js'
import { useState } from 'react'

const Editt = (props) => {
  // const abc = props.name
  
const [edi,setEdi] = useState({
  id:"",
  empname:"",
  hrchyname:""
})
const [cpage,setcpag]=useState(true)


const handler = (e) => {
  setEdi({...edi, [e.target.name]:[e.target.value]} )
}

const [data,setData]= useState(props.flowdata)
useEffect(() => 
{
  //console.log("ok",[data])
})
const edit5 = (i) => {
    let newdataarr = [...data]
    newdataarr.splice(i,0)
    newdataarr[i]= edi
    setData(newdataarr)  
}


const goback = (e) => {
  e.preventDefault()
   props.backdata(data)
   setcpag(false)
}
if(cpage==true)
{
  return (
    <div>
        <center>
          <h1>Edit Employ Table</h1>
        <form className="form">
        <input type="text" name="id" placeholder='id' value={edi.id} onChange={handler}  /> 
        <input type="text" name="empname" value={edi.empname}   placeholder="Empname"  onChange={handler} />
        <input type="text" name="hrchyname"  value={edi.hrchyname}   placeholder="Hrchyname"   onChange={handler} /> 
        <br/> <br/>
        <button onClick={goback}>Back</button>
        </form>
        </center>
        <center>
          <table border= {1} cellpadding = {10}>
            <tbody>
          <tr>
             <th> ID </th>
             <th>Employ Name</th>
             <th>Heirarchy Name</th>
          </tr>
       {
        data.map(
          (info,index) => 
              <tr >
                <td >{info.id}</td>
                <td>{info.empname}</td>
                <td>{info.hrchyname}</td>
                <td><button onClick={() => {edit5(index)}} >Edit</button></td>
              </tr>   
        )
       }
           </tbody>
          </table>
        
        </center>
    </div>
  )
     }
      else{
        return(<>
        <App/></>)
      }
}

export default Editt

