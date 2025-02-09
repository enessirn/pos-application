import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

function CartTotals() {
  return (
    <div className="cart h-full max-h-[calc(100vh-90px)] flex flex-col ">
      <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">
        Sepetteki Ürünler
      </h2>
      <ul className="cart-items overflow-y-auto px-2 flex flex-col gap-y-4 pt-2">
        <li className="cart-item flex flex-row justify-between items-center">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1200px-Red_Apple.jpg"
              alt="apllle"
              className="w-16 h-16 object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col ml-2">
            <b>elma</b>
            <span>12₺ x 2</span>
          </div>
          <div className="flex items-center justify-center">
            <Button
              className="!rounded-full w-full px-2"
              type="primary"
              size="middle"
              danger
              icon={<MinusCircleOutlined />}
            />
            <span className="font-bold text-xl px-2">1</span>
            <Button
              className="!rounded-full w-full px-2 !bg-green-600 hover:!bg-green-500"
              type="primary"
              size="middle"
              
              icon={<PlusCircleOutlined />}
            />
          </div>
        </li>
      </ul>
      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b>Ara toplam</b>
            <span>99₺</span>
          </div>
          <div className="flex justify-between p-2">
            <b>KDV %8</b>
            <span className="text-red-700"> +7.92₺</span>
          </div>
          <div className="border-b">
            <div className="flex justify-between p-2">
              <b className="text-xl text-gray-500">Genel toplam</b>
              <span className="text-xl">99₺</span>
            </div>
          </div>
          <div className="py-4">
            <Button
              className="w-full px-2"
              type="primary"
              size="large"
              icon={<SendOutlined />}
            >
              Sipariş Oluştur
            </Button>
            <Button
              className="w-full px-2 mt-2"
              type="primary"
              size="large"
              danger
              icon={<DeleteOutlined />}
            >
              Temizle
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTotals;
