import React, {useState} from 'react';
import Display from './Display';




function Dashboard(){
    const ball = ()=>{
        if(balls < 3){
            setBalls(balls+1)
        }else 
            setBalls(0)
    }
    const foul = ()=>{
        if(pitch < 2){
            setPitch(pitch+1)
            console.log(pitch)
        }
    }
    const strike = ()=>{
        if(pitch < 2){
            setPitch(pitch+1)
            console.log(pitch)
        }else if (pitch === 2){
            setPitch(0)
            console.log(pitch)    
        }
    }
    const hit = ()=> {
        setPitch(0);
        setBalls(0);
    }
    const [balls, setBalls]= useState(0)
    const [pitch, setPitch]= useState(0)
    return (
        <div>
            <Display balls={balls} pitch={pitch}/>
            <h1>Dashboard</h1>
            <button onClick={()=>{strike()}}> strike </button>
            <button onClick={()=>{ball()}}>ball</button>
            <button onClick={()=>{foul()}}>foul</button>
            <button onClick={()=>{hit()}}>Hit</button>
        </div>
    )
}
export default Dashboard;