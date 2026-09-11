import React, { useRef, useState, useCallback } from "react";
import { Button, Typography, Space, Modal, Image } from "antd";
import { CameraOutlined, CloseCircleFilled } from "@ant-design/icons";
import Webcam from "react-webcam";

const { Title } = Typography;

const Home = () => {
  const webcamRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  // Fungsi untuk mengambil foto dari live stream
  const capturePhoto = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setCapturedImage(imageSrc);
      setIsModalOpen(false); // Tutup modal setelah jepret
    }
  }, [webcamRef]);

  // Fungsi untuk menghapus gambar yang sudah ditangkap
  const handleRemoveImage = () => {
    setCapturedImage(null);
  };

  return (
    <section className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center px-6 py-28 text-center">
      <Space direction="vertical" size="large" align="center">
        <Title level={2} style={{ margin: 0 }}>
          Selamat Datang
        </Title>

        {/* Tombol Membuka Live Preview */}
        <Button
          type="primary"
          size="large"
          icon={<CameraOutlined style={{ color: "#ffffff" }} />}
          onClick={() => setIsModalOpen(true)}
          style={{ backgroundColor: "#228b22", borderColor: "#228b22" }}
          className="h-auto py-3 px-6 text-base rounded-lg flex items-center gap-x-2"
        >
          {capturedImage ? "Perbarui Gambar" : "Ambil Gambar"}
        </Button>

        {/* Menampilkan hasil foto dengan tombol hapus (close) di kanan atas */}
        {capturedImage && (
          <div className="mt-4 flex flex-col items-center">
            <p className="mb-2 font-medium">Hasil Tangkapan:</p>
            <div className="relative inline-block">
              {/* Tombol Hapus / Close */}
              <button
                type="button"
                onClick={handleRemoveImage}
                aria-label="Hapus Gambar"
                className="absolute -top-3 -right-3 z-10 text-red-500 hover:text-red-600 transition-colors bg-white rounded-full flex items-center justify-center p-0.5 shadow-md"
              >
                <CloseCircleFilled style={{ fontSize: "17px" }} />
              </button>

              {/* Tampilan Gambar */}
              <Image width={250} src={capturedImage} alt="Captured" className="rounded-lg shadow" />
            </div>
          </div>
        )}
      </Space>

      {/* Pop-up Live Preview Kamera */}
      <Modal
        title="Kamera Live Preview"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        destroyOnClose={true}
        footer={null} // Menghilangkan footer default Ant Design
      >
        <div className="relative flex justify-center items-center overflow-hidden rounded-lg">
          {isModalOpen && (
            <>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width="100%"
                videoConstraints={{
                  facingMode: "user", // Gunakan "environment" untuk kamera belakang HP
                }}
              />
              {/* Tombol bulat putih di dalam live preview */}
              <button
                type="button"
                onClick={capturePhoto}
                aria-label="Jepret Foto"
                className="absolute bottom-4 flex h-14 w-14 items-center justify-center rounded-full border-4 border-gray-200 bg-white shadow-lg transition-transform active:scale-95 hover:bg-gray-100"
              >
                <div className="h-10 w-10 rounded-full border-2 border-gray-400 bg-white" />
              </button>
            </>
          )}
        </div>
      </Modal>
    </section>
  );
};

export default Home;