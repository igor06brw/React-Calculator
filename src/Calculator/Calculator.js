import React, { Component } from 'react';
import Buttons from './UI/Buttons/Buttons';
import Results from './UI/Results/Results'
import './Calculator.css'

class Calculator extends Component {
    state = {
        currentValue: '',
        prevValue: '',
        operator: '',
        isDecimal: false
    }

    componentDidUpdate() {
        console.log(this.state, 'RESULT');
    }
    
    onOperator(prevValue, operator, currentValue) {
        let result;
        if(operator === '+') {
            result = Number(prevValue) + Number(currentValue);
            this.setState({prevValue: result.toString(), currentValue: '', isDecimal: false})
        }
        if(operator === '-') {
            result = Number(prevValue) - Number(currentValue);
            this.setState({prevValue: result.toString(), currentValue: '', isDecimal: false})
        }
        if(operator === '/') {
            result = Number(prevValue) / Number(currentValue);
            this.setState({prevValue: result.toString(), currentValue: '', isDecimal: false})
        }
        if(operator === '*') {
            result = Number(prevValue) * Number(currentValue);
            this.setState({prevValue: result.toString(), currentValue: '', isDecimal: false})
        }
    }


    onCalculate(prevValue, operator, currentValue) {
        if(prevValue === '') {
            console.log('first type')
            this.setState({prevValue: currentValue, currentValue: '', isDecimal: false}) 
        }
        if(prevValue.length > 0 && operator.length > 0 && currentValue.length > 0) {
            console.log('do math!')
            this.onOperator(prevValue, operator, currentValue)
        } else {
            console.log('return nothing');
        }
        console.log(prevValue, 0 < prevValue.length)
        console.log(operator, 0 < operator.length)
        console.log(currentValue, 0 < currentValue.length)
    }

    //  NUMBER
    assignDigit(e) {
        let tempString = this.state.currentValue;
        tempString += e;
        console.log(tempString)
        this.setState({currentValue: tempString});
    } 
    assignValue(number) {
        if (number === '.') { 
            this.assignDecimal(number)
        } else {
            this.assignDigit(number)
        }

    }
    assignDecimal(decimal) {
        if(!this.state.isDecimal) {
            this.setState({isDecimal: true});
            this.assignDigit(decimal)
        } else {
            return null;
        }
    }




    // BUTTONS
    onNumberHandler = (value) => {
        this.assignValue(value)
        console.log(this.state);
    }
    onOperatorHandler = (operator) => {
        this.setState({operator: operator})
        this.onCalculate(this.state.prevValue, operator, this.state.currentValue);
    }
    render() {
        return (
            <div className="calculator">
                <Results />
                <Buttons clicked={this.onNumberHandler} operator={this.onOperatorHandler}/>
            </div>
        );
    }
}

export default Calculator;
