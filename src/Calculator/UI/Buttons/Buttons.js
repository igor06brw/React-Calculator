import React from 'react';
import Button from './Button/Button'

const Buttons = (props) => {
    return (
        <div>
            <Button data-target={1} classOfButton="btn">1</Button>  
            <Button data-target={2} classOfButton="btn">2</Button>  
            <Button data-target={3} classOfButton="btn">3</Button>  
            <Button data-target={4} classOfButton="btn">4</Button>  
            <Button data-target={5} classOfButton="btn">5</Button>  
            <Button data-target={6} classOfButton="btn">6</Button>
            <Button data-target={7} classOfButton="btn">7</Button> 
            <Button data-target={8} classOfButton="btn">8</Button>   
            <Button data-target={9} classOfButton="btn">9</Button> 
            <Button data-target={0} classOfButton="btn">0</Button> 
            <Button data-target={"AC"} classOfButton="btn">AC</Button> 
            <Button data-target={"+"} classOfButton="btn">+</Button> 
            <Button data-target={"-"} classOfButton="btn">-</Button> 
            <Button data-target={"="} classOfButton="btn">=</Button> 
            <Button data-target={"/"} classOfButton="btn">/</Button> 
        </div>
    );
}

export default Buttons;
