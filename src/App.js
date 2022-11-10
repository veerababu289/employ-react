import React, {useEffect, useState} from 'react'
import Editt from './Editt'
import Main from './Main'

const App = (props) => {

const [trr,setTrr] = useState("true")
const [data,setData] = useState("")
const [sendmain,setsendmain]=useState([])

const backdata = (rdata) => {
   setsendmain(rdata);
   setTrr("true")
}

const edit4 = () => {
    setTrr("false")
}


const result = (data) =>{
  const a = data
  setData(a)
}
  return (
    <div>
      {trr==="true" ?  <Main sendmain={sendmain} edittt= {edit4} res= {result}  />  : 
      <center><div><Editt backdata={backdata} flowdata = {data}/> </div></center> }
    </div>
  )
}
export default App


