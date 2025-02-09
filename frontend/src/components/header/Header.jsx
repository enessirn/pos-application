import React from "react";
import { SearchOutlined, HomeOutlined, LineChartOutlined, UserOutlined, CopyOutlined, ShoppingCartOutlined, LogoutOutlined } from "@ant-design/icons";
import {Link} from "react-router-dom"
import { Badge, Input } from "antd";
function Header() {
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10">
        <div className="logo">
          <Link to="/">
            <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
          </Link>
        </div>
        <div className="header-search flex-1 flex justify-center ">
          <Input
            className="max-w-[800px] "
            size="large"
            placeholder="Ürün Ara"
            prefix={<SearchOutlined />}
          />
        </div>
        <div className="menu-links flex gap-7 left-0 justify-between items-center md:static fixed z-50 bottom-0 md:w-auto w-screen bg-white md:bg-transparent md:border-t-0 border-t md:px-0 px-12 py-1">
          <a href={"/"} className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Home</span>
          </a>
          <Badge count={5} className="hidden md:flex" >
          <Link to="/cart" className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <ShoppingCartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Sepet</span>
          </Link>
          </Badge>
          <Link to="/bills" className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <CopyOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Faturalar</span>
          </Link>
          <Link to="/customers" className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <UserOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Müşteriler</span>
          </Link>
          <Link to="/statistic"   className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <LineChartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Istatikler</span>
          </Link>
          <Link to="/" className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <LogoutOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Çıkış</span>
          </Link>
        </div>
        <Badge count={5} className="md:hidden flex" >
          <Link to="/cart" className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <ShoppingCartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Sepet</span>
          </Link>
          </Badge>
      </header>
    </div>
  );
}

export default Header;
