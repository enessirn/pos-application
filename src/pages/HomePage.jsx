import React from "react";
import CartTotals from "../components/cart/CartTotals";
import Products from "../components/products/Products";
import Categories from "../components/categories/Categories";
import  Header  from "../components/header/Header"
function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <div className="home px-6 flex justify-between gap-10 flex-col md:flex-row">
        <div className="categories md:flex-col flex-row  overflow-auto max-h-[calc(100vh-112px)] ">
          <Categories />
        </div>
        <div className="products flex-[8] overflow-y-auto pb-10 max-h-[calc(100vh-112px)]">
          <Products />
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border pb-20 md:pb-0">
          <CartTotals />
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
