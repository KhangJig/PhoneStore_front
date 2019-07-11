import React, { Component } from 'react'
import { Modal, Input, Form, Button } from 'antd'

import RegisterFormInput from '../forms/RegisterForm'

class RegisterModal extends Component {
    render() {
        return (
            <Modal
                title="Register"
                visible={this.props.visible}
                onOk={this.props.handleSubmit}
                onCancel={this.props.handleCancel}
                okText="Register"
                // footer={[
                    // <Button onClick={this.props.handleCancel}>
                    //     Cancel
                    // </Button>,
                    // <Button type="primary" form="formCreateUser" key="submit" htmlType="submit">
                    //     Submit
                    // </Button>
                // ]}
            >
                <RegisterFormInput  {...this.props} />
            </Modal>
        )
    }
}

export default RegisterModal