import React, {ChangeEvent} from 'react';
import {useState} from 'react';

export type InputType = {
    message:string
}
export type InputPropsType = {
    addToMessage: (title:string)=>void
}

export const Fullinput = (props:InputPropsType) =>{
    let [title, setTitle] = useState("");

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addToMessage(title);
        setTitle("")
    }
    return(
        <>
            <div className={"App"}>
                <div>
                    <input value={title} onChange={onChangeInputHandler}/>
                    <button onClick={onClickButtonHandler}>+</button>
                </div>
            </div>
        </>
    )
}

