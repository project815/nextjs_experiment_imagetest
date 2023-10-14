import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useRouter } from "next/router";
import { FirebaseError } from "firebase/app";

type FieldType = {
  email: string;
  password: string;
  remember: string;
};

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values: FieldType) => {
    console.log("Success:", values);
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      console.log(credential.user);
      await updateProfile(credential.user, { displayName: values.email });
      router.push("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error.code, error.message);
        setIsModalOpen(true);
        onFinishFailed(error.message);
      }
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    setError(errorInfo);
  };

  return (
    <div className="flex justify-center items-center">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 300 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="default" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Modal
        title={<div className="text-red-300">{error}</div>}
        open={isModalOpen}
        onOk={handleOk}
      ></Modal>
    </div>
  );
}
