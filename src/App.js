import React,{Component} from "react";
import {Button,Container,Row} from 'react-bootstrap';
import quizBox from './quizBox';
import Quizitem from './components/Quizitem';
import Results from './components/Results';
import './App.css';
class App extends Component{
  state={
    qBank:[],
    responses:0,
    score:0,
    finish:false
  };
  

  getQuestions = () => {
    quizBox().then((question) => {
      this.setState({
        qBank:question
      });
    });
  };
  
  checkanswer=(answer,correctanswer) => {
    if(answer===correctanswer){
      this.setState({
        score: this.state.score + 1
      })
    }
    
    this.setState({
      responses:this.state.responses < 5 ? this.state.responses+1:5
    })
    
  };

  playAgain= () => { 
    this.getQuestions();
    this.setState({
      score:0,
      responses:0,
      finish:false
    });
  }

  componentDidMount(){
    this.getQuestions();
  }

  render(){
    return(
      <Container fluid className='align-items-center  justify-content-center min-vh-100 App'>
        <Row className="justify-content-center">
            <h1 className='text-white'>Quiz Master</h1>
        </Row>
        
        {this.state.qBank.length > 0 && this.state.responses<=5 && this.state.finish===false && (
          <Row className='justify-content-left m-1  p-1'>
            <Row className='justify-content-left m-3 rounded border border-dark  p-2'>
          {this.state.qBank.map(({question,answers,correct,qid}) => <Quizitem question={question} key={qid} answers={answers} selectedAnswer={(answer)=>this.checkanswer(answer,correct)}/>)}
            </Row>

            <Row className="justify-content-center m-3 p-4 w-100">
              <Button  variant="light" size='lg' className='rounded-pill pl-3 pr-3 w-25 font-weight-bold shadow' onClick={()=>this.setState({finish:true})}> Submit </Button>
            </Row>
          </Row>) 
       }
       {this.state.finish?(<Results score={this.state.score} responses={this.state.responses} playagain={this.playAgain}/>):null}
        
      </Container>
    );
  }
}

export default App;
