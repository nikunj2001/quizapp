import React from 'react';
import {Row,Button} from 'react-bootstrap';

const Results = (props) =>{
    return(
        <Row className=' justify-content-center align-item-center m-4 rounded border border-dark p-3'>
            <Row className='w-100 justify-content-center'>
            <h2 className='font-weight-bold text-white '>Results</h2>
            </Row>
            <Row className='w-100 justify-content-center bg-success rounded m-2'>
            <h4 className='text-white'>You got {props.score}/{props.responses}</h4>
            </Row>
            <Button onClick={props.playagain}>Play again</Button>
            
        </Row>
    );
}

export default Results;
