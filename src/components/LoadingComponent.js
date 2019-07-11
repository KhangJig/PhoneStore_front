import React, { Component } from 'react'
import {Icon} from 'antd'

class LoadingComponent extends Component {

    render() {
        return (
            <div style={{width: "100%"}}>
                <Icon className="element-center-flex" style={{fontSize: this.props.size}} type="loading" /> 
            </div>
        )
    }
}

export default LoadingComponent