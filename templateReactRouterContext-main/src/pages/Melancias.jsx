import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function Melancias() {
    const navigate = useNavigate()
    function navegar(){
        let nome = prompt( "username")
        if(nome == 'william'){
          navigate('/final')
        }
          
        else {alert ("errou , ultima tentativa:")}
    }
  return (
   
    <div> 
        <Navbar/>
        <h1>melancias</h1>
    <button onClick={navegar} >Navegar para Final</button>
    </div>
  )}

export default Melancias