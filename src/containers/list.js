import React from 'react';
import ListItem from '../components/listitem';
import ThemeContext from '../context/theme';

export default class List extends React.Component{

    static contextType =ThemeContext;

    state={
        data: [1,2,3,4,5 ]
    }
    render(){
       return(
           <ul>
            {
            this.state.data.map((e,i)=>{
            return <ListItem data={e} theme={this.props.theme} key={e}/>
           })
            }
           </ul>
       ) 
    }
    
}