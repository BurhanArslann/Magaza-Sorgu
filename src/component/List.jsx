import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "./Data";
import { onBackgroundMessage } from "firebase/messaging/sw";

const List = () => {
  const [searchWord, setSearchWord] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
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

  return (
    <>
      <div className="search col-lg-12 flex justify-center mt-5">
        <i className="fa-light fa-magnifying-glass"></i>
        <input
          style={{ padding: ".5vh 0 .5vh .5vh" }}
          className="col-lg-2"
          type="text"
          placeholder="Ara"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </div>


      <div className="tablo col-lg-12 flex flex-col align-center mt-2">

        <div  className="list-info flex justify-between items-center col-lg-12 col-sm-10 col-md-10 ">
          <div className="sonuc"><p><span style={{color:"black",fontWeight:"900"}}>{filteredData.length}</span> SONUÇ BULUNDU</p>
          </div>
          <div className="satir-sayisi"><label htmlFor="rowsPerPage">Satır sayısı: </label>



            <select
              id="rowsPerPage"
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
              className="ml-2 satir-sayisi"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>

        <div className="basliklar flex justify-center col-lg-12 gap-1">
          <div className="baslik flex justify-center col-lg-1 col-sm-2">MAGAZA NO</div>
          <div className="baslik flex justify-center col-lg-2 col-sm-2">MAGAZA ADI</div>
          <div className="baslik flex justify-center col-lg-2 col-sm-2">E-MAİL</div>
          <div className="baslik flex justify-center col-lg-2 col-sm-2">TELEFON</div>
          <div className="baslik flex justify-center col-lg-1 col-sm-2">AYARLAR</div>
        </div>

        <div style={{ paddingBottom: "5vh" }}>

          {filteredData.length > 0 ? (
            filteredData.slice(0, rowsPerPage).map((item) => (
              <div key={item.id} className="informations flex justify-center col-lg-12 gap-1">
                <div className="info flex justify-center items-center col-lg-1 col-sm-2">{item.id}</div>
                <div className="info flex justify-center items-center col-lg-2 col-sm-2">{item.title}</div>
                <div className="info flex justify-center items-center col-lg-2 col-sm-2">{item.category.name}</div>
                <div className="info flex justify-center items-center col-lg-2 col-sm-2">{item.creationAt}</div>
                <div className="info flex justify-center items-center col-lg-1 col-sm-2">⁙⁙</div>
              </div>
            ))
          ) : (
            <svg className="animate-bounce w-6 h-6">
              <img src="/assets/spin.svg" alt="" />
            </svg>
          )}
        </div>
      </div>
    </>
  );
};

export default List;
