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
    

    
    



    // CALCULATION 
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
            if(result === Infinity || result === -Infinity) {
                result = '';
                console.log('Cannot divide by 0!');
            }
            this.setState({prevValue: result.toString(), currentValue: '', isDecimal: false})
        }
        if(operator === '*') {
            result = Number(prevValue) * Number(currentValue);
            this.setState({prevValue: result.toString(), currentValue: '', isDecimal: false})
        }
    }
    onCalculate(prevValue, operator, currentValue) {
        if(prevValue === '' && operator.length > 0) {
            this.setState({ prevValue: currentValue, currentValue: '', operator: operator, isDecimal: false }) 
        }
        if(operator.length >= 1) {
            this.setState({ operator: operator })
        }
        if(prevValue.length > 0 && operator.length > 0 && currentValue.length > 0) {
            this.onOperator(prevValue, this.state.operator, currentValue)
        }
    }

    // EQUAL
    onEqual = (prevValue, operator, equal, currentValue) => {
        if( prevValue.length > 0 && equal.length > 0 && operator.length > 0 && currentValue.length > 0) {
            this.onOperator(prevValue, this.state.operator, currentValue)
            this.setState({operator: ''});
        }
        // if(prevValue.length > 0) {
        //     this.setState({ prevValue: currentValue, currentValue: '', operator: '', isDecimal: false })
        // }
    }

    






    //  NUMBER
    assignDigit(e) {
        let tempString = this.state.currentValue;
        tempString += e;
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
        this.onCalculate(this.state.prevValue, operator, this.state.currentValue);
    }
    onEqualHandler = (sign) => {
        this.onEqual(this.state.prevValue, this.state.operator, sign, this.state.currentValue)
    }






    render() {
        return (
            <div className="calculator">
                <Results results={this.state}/>
                <Buttons clicked={this.onNumberHandler} operator={this.onOperatorHandler} equal={this.onEqualHandler}/>
            </div>
        );
    }
}

export default Calculator;
