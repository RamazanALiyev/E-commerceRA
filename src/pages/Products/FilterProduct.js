import React from "react";
import {useSelector} from "react-redux";
import "./_filterProducts.scss";
import PaginatedItems from "./Pagination";

function FilterProduct(filterName) {
  const products = useSelector((state) => state.products.products);
    const filteritems = useSelector((state) => state.filter.filter);






  const renderPages = () => {
    return (
      <div className="FilterProduct">
        <p className="findProduct">{ filteritems.length  && filteritems.length} Məhsul tapıldı</p>
        <div className="filterProduct">
          <PaginatedItems
            itemsPerPage={filteritems.length  && filteritems.length > 0 ? 9 : 1}
            products={products} newFilter={filteritems}
          />
        </div>
      </div>
    );
  };

  return renderPages();
}

export default FilterProduct;
