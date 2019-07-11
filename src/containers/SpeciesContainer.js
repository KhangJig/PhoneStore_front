import React, { Component } from 'react'
import { connect } from 'react-redux'
import {requestGetListAccount} from '../actions/UserAction'

class SpeciesContainer extends Component {

    state ={
        pageData : {
            offset : 0,
            limit : 3
        }
    }

    componentDidMount(){
        this.props.requestGetListAccount(this.state.pageData)
    }

    render() {
        console.log(this.props.listAccount)
        return (
            <div>
                SpeciesContainer
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        ...state.signUpReducer
    })
}

const mapDispatchToProps = dispatch => ({
    requestGetListAccount: (pageData) => dispatch(requestGetListAccount(pageData))
})

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesContainer)