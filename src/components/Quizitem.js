import React,{useState} from 'react';
import Answer from './Answer';



const Quizitem=(props)=>{
    const [selectedAns,setSelectedAns]=useState();
    
    return(
        <div className='w-100 rounded p-4 border border-secondary text-light bg-dark mb-2'>
            <h4>{props.question}</h4>
            <Answer answer={props.answers} key={Math.random()*1000} setSelectedAns={setSelectedAns} selectedAnswer={selectedAns}/>
            {console.log(selectedAns)}
        </div>
        
    );
}

export default Quizitem;