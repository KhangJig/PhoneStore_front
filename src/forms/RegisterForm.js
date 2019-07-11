import React, { Component } from 'react'
import { Row, Col, Input, Select, Form, DatePicker } from 'antd';

const Option = Select.Option

class RegisterForm extends Component {

    componentWillReceiveProps(nextProps) {
        if (!nextProps.visible && this.props.visible) {
            this.props.form.resetFields()
        }
    }

    submitAddUserForm = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.handleSubmit(values)
                this.props.form.resetFields()
            }
        });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    handleReset = () => {
        this.props.form.resetFields();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form id="formCreateUser" onSubmit={this.submitAddUserForm}>
                <Row gutter={24}>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 8 }}>
                        <Form.Item label={`User Name `}>
                            {getFieldDecorator('username', {
                                rules: [{
                                    required: true,
                                    message: 'Enter UserName!',
                                }],
                            })(
                                <Input placeholder="username" />
                            )}
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        )
    }
}

const RegisterFormInput = Form.create({ name: 'RegisterForm' })(RegisterForm);
export default RegisterFormInput