import { Button, Card, Form, Input, Modal, Select } from "antd";
import React from "react";

function CreateBill({ isModalOpen, setIsModalOpen }) {

  const onFinish = (values) => {
    console.log('Recevied values of forms', values)
  }
  return (
    <React.Fragment>
      <Modal
        onCancel={() => setIsModalOpen(false)}
        footer={false}
        title="Ödeme Modal"
        open={isModalOpen}

      >
        <Form layout="vertical"         onFinish={onFinish}>
          <Form.Item
            label="Müşteri Adı"
            name={"customerName"}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Bir Müşteri Adı Yazınız" />
          </Form.Item>
          <Form.Item
          name={"phoneNumber"}
          
            label="Telefon Numarası"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input maxLength={11} placeholder="Bir telefon numarası yazınız" />
          </Form.Item>
          <Form.Item
          name={"paymentMode"}
            label="Ödeme Yöntemi"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Select placeholder="Ödeme Yöntemi Seçiniz.">
              <Select.Option value="Nakit">Nakit</Select.Option>
              <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
            </Select>
          </Form.Item>
          <Card>
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>549.00₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV Toplam %8</span>
              <span className="text-red-600">+49.00₺</span>
            </div>
            <div className="flex justify-between">
              <b>Genel Toplam</b>
              <b>599.00₺</b>
            </div>
            <div className="flex justify-end">
              <Button
                size="middle"
                onClick={() => setIsModalOpen(true)}
                type="primary"
                className="mt-4"
                htmlType="submit"
              >
                Siparişi Oluştur
              </Button>
            </div>
          </Card>
        </Form>
      </Modal>
    </React.Fragment>
  );
}

export default CreateBill;
