import React from 'react';
import { Form, Input, Button } from 'antd';


function CreateForm({ onSuccess }) {
    const onFinish = (values) => {
        onSuccess(values);
    };
    
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="Link Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Link Url"
                name="url"
                rules={[{ required: true, message: 'Please input your url!' }]}
            >
                <Input />
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}


export default CreateForm;