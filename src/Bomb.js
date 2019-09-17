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
        })
        return this.state.secondsLeft
        }
        message (){
            countDown()
            if(this.state.secondsLeft !== 0){
                return `${this.state.secondsLeft} seconds left before I go boom!`
            }
            else{
                return 'Boom!!'
        }
    }
            const ticToc = (){ setInterval(function(){
                return message()

            },1000)
        }
        
    render(){
        return ( 
            
        )
    }
}
