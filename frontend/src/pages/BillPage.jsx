import React, { useState } from "react";
import Header from "../components/header/Header";
import { Button, Card, Table } from "antd";
import PrintBill from "../components/bills/PrintBill";

function BillPage() {
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
        <h1 className="text-4xl font-bol text-center mb-4">Faturalar</h1>
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
        />
        
        <div className="cart-total flex justify-end">
          <Card className="w-72 ">
            <Button
              size="large"
              onClick={showModal}
              type="primary"
              className="w-full font-bold mt-2"
            >
              Yazdır
            </Button>
          </Card>
        </div>
      </div>
      <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </React.Fragment>
  );
}

export default BillPage;
