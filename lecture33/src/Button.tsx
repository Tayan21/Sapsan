import React from 'react';
import { IContext, MyContext } from './App';

const Button = () => {
    const {handleClick} = React.useContext(MyContext) as IContext
    return (
        <div>
            <button onClick={handleClick}>Switch Theme</button>
        </div>
    );
};

export default Button;