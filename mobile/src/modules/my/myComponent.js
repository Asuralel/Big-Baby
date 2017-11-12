import React from 'react'
import {Route} from 'react-router'

import MyHome from "./MyHome"
class MyComponent extends React.Component{
    render(){
        console.log(666)
        return (
            <div className="MyHomeBox">
                {this.props.children}
            </div>
        )
    }
} 
export default MyComponent
