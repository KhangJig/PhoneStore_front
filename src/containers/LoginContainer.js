import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withCookies } from 'react-cookie'
import LoginPage from '../pages/loginPage'
import { requestLogin } from '../actions/LoginAction'
import { ACCESS_COOKIE_NAME } from '../config'
import { Redirect } from 'react-router-dom'

class LoginContainer extends Component {

    state = {
        visible: false,
        color:"yellow"
    }

    handleSubmitLoginForm = (e) => {
        this.props.requestLogin(e, this.props)
    }

    showModal = () => {
        this.setState({
            visible: true,
        })
    }

    handleOk = (e) => {
        this.setState({
            visible: false,
        })
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        })
    }


    handleSubmit = (e) => {
        console.log('sdsadasd')
    }



    render() {
        if (this.props.cookies.cookies[ACCESS_COOKIE_NAME]) {
            return <Redirect to={`/pokemons${this.props.location.search}`} />
        }
        return (
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>

                <LoginPage
                    {...this.props}
                    {...this.state}
                    handleSubmitLoginForm={(e) => this.handleSubmitLoginForm(e)}

                    showModal={() => this.showModal()}
                    handleCancel={() => this.handleCancel()}
                    handleSubmit={() => this.handleSubmit()}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        ...state.loginReducer
    })
}

const mapDispatchToProps = dispatch => ({
    requestLogin: (data, props) => dispatch(requestLogin(data, props))
})

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))