import React from 'react';

type ButtonInputPropsType = {
    name: string
    callBack:()=>void
}

export const ButtonInput = (props:ButtonInputPropsType) => {

    return (
        <div>
            <button onClick={props.callBack}>{props.name}</button>
        </div>
    );
};
