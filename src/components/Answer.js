import React,{useState} from 'react';
import {Container} from 'react-bootstrap';
import './customCheckbox.css';
import Roundedradio from './Roundedradio';

const Answer=(props)=>{

    const [selectedRadio,setSelectedRadio]=useState(0);
    const [Answer,setAnswer]=useState('');
    
    return(
        <Container>
            <Roundedradio value={1} selected={selectedRadio} onChange={(radio)=>{setSelectedRadio(radio);props.setSelectedAns(Answer)}} answer={props.answer[0]} key={0} setAnswer={setAnswer} />

            <Roundedradio value={2} selected={selectedRadio} onChange={setSelectedRadio} answer={props.answer[1]} key={1} setAnswer={setAnswer} />

            <Roundedradio value={3}  selected={selectedRadio} onChange={setSelectedRadio} answer={props.answer[2]} key={2} setAnswer={setAnswer}/>

            <Roundedradio value={4} selected={selectedRadio} onChange={setSelectedRadio} answer={props.answer[3]} key={3} setAnswer={setAnswer}/>
            
        </Container>
    );
}

export default Answer;


{/* <div className='custom-radio-button' onClick={()=> {props.onChange(true); console.log(props.value); console.log(props.selected)}} >
                <div className={`radio-outer-circle ${props.selected!==true && "unselected"}`}>
                    <div className={`radio-inner-circle ${props.selected!==true && 'unselected-circle'}`}></div>
                </div>
                <h5 className='text-value text-white'>{props.answer}</h5>
            </div> */}

            {/* <label className='d-inline-flex'>
                <div className='Opt'>
                    <input type="radio" name='radio'/>
                    <span className="checkmark"></span>
                </div>
               {props.answer}
            </label> */}