import React from 'react';
import { IContext, MyContext } from './App';

const Block = ({children}:any) => {
    const {theme} = React.useContext(MyContext) as IContext
    return (
        <div className={theme}>
            {children}
        </div>
    );
};

export default Block;    