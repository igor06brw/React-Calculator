import React from 'react';
import Button from './Button/Button'
import "./Buttons.css"

const Buttons = (props) => {
    console.log(props)
    return (
        <div className="btns" >
            <Button data-target={7} classOfButton="btn" click={() => props.clicked(7)}>7</Button> 
            <Button data-target={8} classOfButton="btn" click={() => props.clicked(8)}>8</Button>   
            <Button data-target={9} classOfButton="btn" click={() => props.clicked(9)}>9</Button> 
            <Button data-target={"add"} classOfButton="btn operator" click={() => props.operator("+")}>+</Button> 
            <Button data-target={4} classOfButton="btn" click={() => props.clicked(4)}>4</Button>  
            <Button data-target={5} classOfButton="btn" click={() => props.clicked(5)}>5</Button>  
            <Button data-target={6} classOfButton="btn" click={() => props.clicked(6)}>6</Button>
            <Button data-target={"substract"} classOfButton="btn operator" click={() => props.operator("-")}>-</Button> 
            <Button data-target={1} classOfButton="btn" click={() => props.clicked(1)}>1</Button>  
            <Button data-target={2} classOfButton="btn" click={() => props.clicked(2)}>2</Button>  
            <Button data-target={3} classOfButton="btn" click={() => props.clicked(3)}>3</Button>  
            <Button data-target={"multiply"} classOfButton="btn operator" click={() => props.operator("*")}>*</Button> 
            <Button data-target={0} classOfButton="btn" click={() => props.clicked(0)}>0</Button> 
            <Button data-target={"decimal"} classOfButton="btn" click={() => props.clicked(".")}>.</Button> 
            <Button data-target={"AC"} classOfButton="btn clear" click={() => props.clicked("AC")}>AC</Button> 
            <Button data-target={"divide"} classOfButton="btn operator" click={() => props.operator("/")}>/</Button>
            <Button data-target={"equal"} classOfButton="btn equal" click={() => props.clicked("=")}>=</Button> 
        </div>
    );
}

export default Buttons;
