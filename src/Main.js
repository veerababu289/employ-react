import React, {useState,useEffect} from 'react'
import './App.css'
import Editt from './Editt'


const Main = (props) => {
  const [data,setData] = useState({
    id:"",
    empname: "",
    hrchyname:""
  })
  var a=[]
  a=props.sendmain;
  
  const [dataarr,setDataarr] = useState([])

  const handler = (e) => {
    setData({...data, [e.target.name]:[e.target.value]})
    props.res(dataarr)
  }

let {id, empname, hrchyname} = data;
const addemploy1 = (e) => {
  e.preventDefault()
  setDataarr([...dataarr, pname,{id, empname, hrchyname}])
   console.log(data)
  setData({id:"", empname:"", hrchyname:""})
  props.res(dataarr)
}





const delete2= (i) => { 
 let newdataarr = [...dataarr]
 newdataarr.splice(i,1)
 setDataarr(newdataarr)
 props.res(dataarr)
}

const sort3 = (e) => {
  e.preventDefault()
  setDataarr ([...dataarr].sort((a,b) => a.id - b.id))
  props.res(dataarr)
}

useEffect(()=>{
  props.res(dataarr)
})
if(a.length !==0)
{
  setDataarr(a)
}
console.log(a,'got it')
console.log(dataarr,'got it')
  return (
    <div>
      <form className='form'>
        <center>
          <h1>Employment Table</h1>
         
        <input type="text" name="id"  value={id} placeholder='id' onChange= {handler} /> 
        <input type="text" name="empname"  value={empname} placeholder="Empname" onChange= {handler} />
        <input type="text" name="hrchyname"  value= {hrchyname} placeholder="Hrchyname" onChange= {handler} /> <br/><br/>
        <button onClick= {addemploy1} >Add Employ</button> <br/><br/>
        <button onClick= {sort3}>Sort</button>
        </center>
      </form>
       <center>
        
      <table border= {1} cellPadding = {10} >
        <tbody>
        <tr>
          <th> ID </th>
          <th>Employ Name</th>
          <th>Heirarchy Name</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
       {
        
        dataarr.map(
          (info,index) => 
          
              <tr key={index}>
              
                <td >{info.id}</td>
                <td>{info.empname}</td>
                <td>{info.hrchyname}</td>
                
                <td><button onClick ={ () =>{delete2(index)}} >delete</button></td>
                <td><button onClick={props.edittt}  >Edit</button></td>
              </tr>   
        )
      
       }
        </tbody>
      </table>

     {/* {
      a.length!==0?<>
       

      <table border= {1} cellPadding = {10} >
        <tbody>
        <tr>
          <th> ID </th>
          <th>Employ Name</th>
          <th>Heirarchy Name</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
       {
      
        a.map(
          (info,index) => 
          
              <tr key={index}>
              
                <td >{info.id}</td>
                <td>{info.empname}</td>
                <td>{info.hrchyname}</td>
                
                <td><button onClick ={ () =>{delete2(index)}} >delete</button></td>
                <td><button onClick={props.edittt}  >Edit</button></td>
              </tr>   
        )
       }
        </tbody>
      </table>
      </>:<></>
} */}

      </center>
      
    </div>
  )
}
export default Main