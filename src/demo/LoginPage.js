import React from "react";
import {Form, Card, Input, Button} from "antd";

const FormItem = Form.Item;

class LoginPage extends React.Component {

    render() {
        const getFieldDecorator = this.props.form;
        return (
            <div>
                <Card title="登录行内表单">
                    <Form>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: 'Jack',
                                    rules: []
                                })(
                                    <Input placeholder="账号"/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            <Input placeholder="密码"/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(LoginPage);