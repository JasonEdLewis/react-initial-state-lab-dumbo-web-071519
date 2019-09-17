// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            secondsLeft: this.props.initialCount
        }
        }
        countDown (){
        const newtime = this.state.secondsLeft -1 
        this.setState({
            secondsLeft: newtime
        
        } )
    }  
    timeLeft(){
    this.countDown();
        if(this.state.secondsLeft !== 0){
        return <div>There are {this.state.secondsLeft}seconds left!</div>
        }
        else{
            return <div>Boom!</div>
        }
    }
    ticToc =()=>{
    setInterval(this.timeLeft(), 2000)
    }

    render(){
        return ( 
            this.ticToc()
        )
    }
}
