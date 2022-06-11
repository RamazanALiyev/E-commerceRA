import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../components/home-components/Mostsellerproducts/Product";
import { Link } from "react-router-dom";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div key={index} className="eachProduct">
            <Link to={`${item.id}`}>
              <Product
                phone={item}
              />
            </Link>
          </div>
        ))
        
        }
    </>
  );
}

function PaginatedItems({ itemsPerPage, newFilter }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(newFilter.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(newFilter.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, newFilter]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % newFilter.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="anyItems">
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        className="paginationDots"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
export default PaginatedItems;
