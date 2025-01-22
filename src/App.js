import React from "react";
import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="home px-6 flex justify-between gap-10">
         <div className="categories flex-1 overflow-auto max-h-[calc(100vh-112px)]">
                 <Categories />
         </div> 
         <div className="products flex-[8]">
             <div>
                <Products />
             </div>
         </div>
         <div>
             <div>
                 cart totals
             </div>
         </div>
      </div>
    </React.Fragment>
  );
}

export default App;
