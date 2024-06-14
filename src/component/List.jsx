import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "./Data";

const List = () => {
  const [searchWord, setSearchWord] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const api = useContext(DataContext);

  useEffect(() => {
    if (api) {
      setFilteredData(
        api.filter((item) =>
          item.id.toString().toLowerCase().includes(searchWord.toLowerCase()) ||
          item.title.toLowerCase().includes(searchWord.toLowerCase()) ||
          item.category.name.toLowerCase().includes(searchWord.toLowerCase()) ||
          item.creationAt.toLowerCase().includes(searchWord.toLowerCase())
        )
      );
    }
  }, [searchWord, api]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Get current page data
  const currentPageData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when items per page change
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxButtonsToShow = 5;
    const halfMaxButtonsToShow = Math.floor(maxButtonsToShow / 2);
    let startPage = Math.max(1, currentPage - halfMaxButtonsToShow);
    let endPage = Math.min(totalPages, currentPage + halfMaxButtonsToShow);

    if (currentPage <= halfMaxButtonsToShow) {
      endPage = Math.min(totalPages, maxButtonsToShow);
    } else if (currentPage + halfMaxButtonsToShow >= totalPages) {
      startPage = Math.max(1, totalPages - maxButtonsToShow + 1);
    }

    if (startPage > 1) {
      buttons.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`mx-1 px-3 py-1 ${currentPage === 1 ? "pink text-white" : "bg-gray-200"
            }`}
        >
          1
        </button>
      );
      if (startPage > 2) {
        buttons.push(<span key="ellipsis-start" className="mx-1">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`radius mx-1 px-3 py-1 ${currentPage === i ? "pink text-white" : "bg-gray-200"
            }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(<span key="ellipsis-end" className="mx-1">...</span>);
      }
      buttons.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`mx-1 px-3 py-1 ${currentPage === totalPages ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <>
      <div className="search col-lg-7 flex justify-center gap-4 mt-5">
       
        <p  className="sonuc text-center ml-5"><span style={{fontWeight:"bolder",color:"black"}}>{filteredData.length}</span> sonuç bulundu.</p>
        <input
          style={{ padding: ".5vh 0 .5vh .5vh" }}
          className="col-lg-4"
          type="text"
          placeholder="Ara"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </div>

      <div className="satir-sayisi flex justify-end col-lg-11 items-center gap-2">
          <label htmlFor="itemsPerPage">Sayfa başına göster:</label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border px-2 py-1"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>

        
    


      </div>

      <div className="tablo col-lg-12 flex flex-col align-center ">
        <div className="basliklar flex justify-center col-lg-12 gap-1">
          <div className="baslik flex justify-center col-lg-1">MAGAZA NO</div>
          <div className="baslik flex justify-center col-lg-2">MAGAZA ADI</div>
          <div className="baslik flex justify-center col-lg-2">E-MAİL</div>
          <div className="baslik flex justify-center col-lg-2">TELEFON</div>
          <div className="baslik flex justify-center col-lg-1">AYARLAR</div>
        </div>

        <div>
          {currentPageData.length > 0 ? (
            currentPageData.map((item) => (
              <div key={item.id} className="informations flex justify-center col-lg-12 gap-1">
                <div className="info flex justify-center col-lg-1">{item.id}</div>
                <div className="info flex justify-center col-lg-2">{item.title}</div>
                <div className="info flex justify-center col-lg-2">{item.category.name}</div>
                <div className="info flex justify-center col-lg-2">{item.creationAt}</div>
                <div className="info flex justify-center col-lg-1">⁙⁙</div>
              </div>
            ))
          ) : (
            <svg className="animate-bounce w-6 h-6">
              <img src="/assets/spin.svg" alt="" />
            </svg>
          )}
        </div>
      </div>
      <div className="pagination flex justify-center mt-4 pb-5">
        {renderPaginationButtons()}
      </div>
    </>
  );
};

export default List;
