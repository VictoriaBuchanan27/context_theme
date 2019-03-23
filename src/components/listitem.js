import React from 'react';

export default(props)=>{
    return <li style={{backgroundColor:props.theme.backgroundColor, color: props.theme.color}}>{props.data}</li>
}