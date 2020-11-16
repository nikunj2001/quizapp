import React from 'react';
import {Container} from 'react-bootstrap';
import Proptypes from 'prop-types';
// import './customCheckbox.css';

const Roundedradio=(props)=>{
    
    return(
        <Container>
           <div className='custom-radio-button' onClick={()=> {props.onChange(props.value)}}>
                <div className={`radio-outer-circle ${props.value!==props.selected && 'unselected'}`}>
                    <div className={`radio-inner-circle ${props.value!==props.selected && 'unselected-circle'}`}></div>
                </div>
                <h5 className='text-value text-white'>{props.answer}</h5>
            </div>
        </Container>
    );
}

Roundedradio.prototype={
    answer:Proptypes.node.isRequired,
    value:Proptypes.number.isRequired,
    onChange:Proptypes.func.isRequired,
    selected:Proptypes.number.isRequired

}

export default Roundedradio;