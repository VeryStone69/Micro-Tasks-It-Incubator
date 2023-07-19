import React from 'react';

type BodyType = {
    titleForBody: string
}

export const Body = (props:BodyType) => {
    return (
        <div>{props.titleForBody}</div>
    )
}