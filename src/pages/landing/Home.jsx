
import React from "react";
import { Button, Typography, Space } from "antd";
import { CameraOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Home = () => {
  const handleCapture = () => {
    // Tambahkan logika untuk mengambil gambar di sini
    console.log("Tombol ambil gambar diklik");
  };

  return (
    <section className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center px-6 py-28 text-center">
      <Space direction="vertical" size="large" align="center">
        {/* Header Teks */}
        <div className="space-y-2">
          <Title level={2} style={{ margin: 0 }}>
            Selamat Datang
          </Title>
        </div>

        {/* Tombol Ant Design dengan Icon Kamera */}
        <Button
          type="primary"
          size="large"
          icon={<CameraOutlined style={{ color: "#ffffff" }} />}
          onClick={handleCapture}
          style={{ backgroundColor: "#228b22", borderColor: "#228b22" }}
          className="h-auto py-3 px-6 text-base rounded-lg flex items-center gap-x-2"
        >
          Ambil Gambar
        </Button>
      </Space>
    </section>
  );
};

export default Home;

