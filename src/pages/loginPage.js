import React, { Component } from 'react'
import {Form, Button, Input, Icon } from 'antd'

import RegisterModal from '../modal/registerModal'


class LoginPage extends Component {

    submitLoginForm = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.handleSubmitLoginForm(values)
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Form onSubmit={this.submitLoginForm} className='login-box'>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>

                <div style={{textAlign:'right'}}>
                    <Button onClick={this.props.showModal}>
                        Register
                    </Button>
                    <Button loading={this.props.isLoadingLogin} type="primary" htmlType="submit" style={{marginLeft: '20px'}}>
                        Login
                    </Button>
                    <RegisterModal
                        {...this.props}
                        {...this.state}
                    />
                </div>
            </Form>
        );
    }
}
const LoginForm = Form.create({ name: 'login_form' })(LoginPage);
export default LoginForm