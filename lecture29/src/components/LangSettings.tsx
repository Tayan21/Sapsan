



import React from 'react';

const LangSettings = (props: any) => {
    return (
        <>
          <button onClick={props.changeLang}>Change language</button>
          <h3>Language: {props.lang}</h3>  
        </>
    );
};

export default LangSettings;