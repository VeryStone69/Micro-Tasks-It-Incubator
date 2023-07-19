import React, {ChangeEvent} from 'react';

type InputPropsType ={
    title: string
    setTitle:(title:string)=>void
}

export const Input = (props:InputPropsType) => {
    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        props.setTitle(event.currentTarget.value)
    }
    return (
        <div>
            <input value={props.title} onChange={onChangeInputHandler}/>
        </div>
    );
};

