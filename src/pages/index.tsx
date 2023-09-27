import { Button, Input, Modal, Tooltip } from "antd";
import { useEffect, useState } from "react";
import {
  InfoCircleOutlined,
  UserOutlined,
  KeyOutlined,
} from "@ant-design/icons";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [id, setID] = useState("");
  const [password, setPassword] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [isLoading, setLoading] = useState();
  const init = async () => {
    setTimeout(() => {});
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    console.log(`id : ${id}`);
    console.log(`password : ${password}`);
  }, [id, password]);

  return (
    <>
      {/* <button onClick={}></button> */}
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          placeholder="Enter your username"
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
          onChange={(value) => setID(value.target.value)}
        />
        <Input
          placeholder="Enter your username"
          prefix={<KeyOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
          onChange={(value) => setPassword(value.target.value)}
        />
      </Modal>
    </>
  );
}
