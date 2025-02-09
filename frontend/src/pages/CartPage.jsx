import React, { useState } from "react";
import Header from "../components/header/Header";
import { Button, Card, Modal, Table } from "antd";
import CreateBill from "../components/cart/CreateBill";

function CartPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <React.Fragment>
      <Header />
      <div className="px-6">
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
        />
        
        <div className="cart-total flex justify-end">
          <Card className="w-72 ">
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
            <Button
              size="large"
              onClick={showModal}
              type="primary"
              className="w-full font-bold mt-2"
            >
              Siparişi Oluştur
            </Button>
          </Card>
        </div>
      </div>
      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </React.Fragment>
  );
}

export default CartPage;
