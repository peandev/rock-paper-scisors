import {Container, Row, Col, ButtonGroup, Button} from 'react-bootstrap';
import './App.css';
import { Component } from 'react';
import { randomSelect } from './assets/RPSLogic';
import History from './assets/History';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      history : [],
      cpuSelected : '',
      userSelected : '',
      result: '',
      showHistory: false
    }
   this.handleRock = this.handleRock.bind(this);
   this.handlePaper = this.handlePaper.bind(this);
   this.handleScisors = this.handleScisors.bind(this);
  }

   handleRock(){
    var cpuSelected = randomSelect();
    this.setState({userSelected: 'rock', cpuSelected: cpuSelected});
    setTimeout(()=>{
      this.getAWinner();
    },500);
   
  }
   handlePaper(){
    var cpuSelected = randomSelect();
    this.setState({userSelected: 'paper', cpuSelected: cpuSelected});
    setTimeout(()=>{
      this.getAWinner();
    },500);
  
  }
  handleScisors(){
    var cpuSelected = randomSelect();
    this.setState({userSelected: 'scisors', cpuSelected: cpuSelected});
    setTimeout(()=>{
      this.getAWinner();
    },500);
  
  }

   getAWinner(){
    
    var uSel = this.state.userSelected;
    var cSel = this.state.cpuSelected;
    console.log("User Selected: " + uSel);
    console.log("CPU Selected: " + cSel);
    if(uSel==='rock'){
      if(cSel==='rock'){
        this.setState(state=>({result: 'DRAW'}));
      } else if(cSel==='paper'){
        this.setState(state=>({result: 'CPU Wins'}));
      } else if(cSel==='scisors'){
        this.setState(state=>({result: 'You Win'}));
      }
      
    }
    if(uSel==='paper'){
      if(cSel==='rock'){
        this.setState(state=>({result: 'You Win'}));
      } else if(cSel==='paper'){
        this.setState(state=>({result: 'DRAW'}));
      } else if(cSel==='scisors'){
        this.setState(state=>({result: 'CPU Wins'}));
      }
     
    }
    if(uSel==='scisors'){
      if(cSel==='rock'){
        this.setState(state=>({result: 'CPU Wins'}));
      } else if(cSel==='paper'){
        this.setState(state=>({result: 'You Win'}));
      } else if(cSel==='scisors'){
        this.setState(state=>({result: 'DRAW'}));
      }
     
    }
    this.saveHistory();
  
  }

  saveHistory(){
    this.setState(state=>({showHistory: true}));
    var match = {
      userSelected: this.state.userSelected,
      cpuSelected: this.state.cpuSelected,
      result: this.state.result
    };
    this.setState(state => {
      const history = state.history.concat(match);
      
      return{
        history
      };
      
    });
  }


  render(){
  return (
    <div className="App-mainContainer">
      <h1>Rock, paper, scisors</h1>
    <Container>
    <Row>
      <Col></Col>
      <Col sm={8}>
      <h2>Recap:</h2> <h1><b>{this.state.result}  </b></h1>
      <h3>You: <b>{this.state.userSelected}</b> VS <b>{this.state.cpuSelected}</b>: CPU</h3>
      </Col>
      <Col></Col>
    </Row>
       <Row>
      <Col sm={8}>Choose wisely <br/> 
      <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={this.handleRock}>Rock</Button>
          <Button variant="secondary" onClick={this.handlePaper}>Paper</Button>
          <Button variant="secondary" onClick={this.handleScisors}>Scisors</Button>
      </ButtonGroup>
      </Col>
      <Col sm={4}><br/>
      {this.state.showHistory ? <History history={this.state.history}/> : null} </Col>
    </Row>
   
    </Container> 
    </div>
  );
}
}

export default App;
