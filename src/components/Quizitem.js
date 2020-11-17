import React,{useState} from 'react';
import Roundedradio from './Roundedradio';


const Quizitem=(props)=>{
    const [selectedAns,setSelectedAns]=useState();
    const [selectedRadio,setSelectedRadio]=useState(0);

    const returnAnswer=(radio,ans)=>{
        setSelectedRadio(radio);
        setSelectedAns(ans);
        props.selectedAnswer(ans);
    };
    return(
        <div className='w-100 rounded p-4 border border-secondary text-light bg-dark mb-2'>
            <h4>{props.question}</h4>

            <Roundedradio value={1} selected={selectedRadio} onChange={(radio,ans) =>{returnAnswer(radio,ans)}} answer={props.answers[0]} key={0} />

            <Roundedradio value={2} selected={selectedRadio} onChange={(radio,ans) =>{returnAnswer(radio,ans)}} answer={props.answers[1]} key={1} />

            <Roundedradio value={3} selected={selectedRadio} onChange={(radio,ans) =>{returnAnswer(radio,ans)}} answer={props.answers[2]} key={2} />

            <Roundedradio value={4} selected={selectedRadio} onChange={(radio,ans) =>{returnAnswer(radio,ans)}} answer={props.answers[3]} key={3} />

           
            {/* <Answer answer={props.answers} key={Math.random()*1000} setSelectedAns={setSelectedAns} selectedAnswer={props.selectedAnswer}/> */}
            
        </div>
        
    );
}

export default Quizitem;