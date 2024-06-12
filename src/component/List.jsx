import { useContext } from "react"
import { DataContext } from "./Data"


const List = () => {

  const api = useContext(DataContext)


  return (

    <>
      <div className="search col-lg-12 flex justify-center mt-5">
        <i className="fa-light fa-magnifying-glass"></i>
        <input style={{ padding: ".5vh 0 .5vh .5vh" }} className="col-lg-2" type="text" placeholder="Ara" />
      </div>

      <div style={{ marginTop: "4vh" }} className="col-lg-12 flex justify-center"></div>

      <div className="tablo col-lg-12 flex flex-col align-center ">
        <div className="basliklar flex justify-center col-lg-12  gap-1">
          <div className="baslik flex justify-center  col-lg-1">MAGAZA NO</div>
          <div className="baslik flex justify-center  col-lg-2">MAGAZA ADI</div>
          <div className="baslik flex justify-center  col-lg-2">E-MAİL</div>
          <div className="baslik flex justify-center  col-lg-2">TELEFON</div>
          <div className="baslik flex justify-center  col-lg-1">AYARLAR</div>
        </div>

        <div>
          {api ? api.map((item) => (

            <div className=" informations flex  justify-center col-lg-12 gap-1 ">
              <div className=" info flex justify-center  col-lg-1">{item.id}</div>
              <div className=" info flex justify-center  col-lg-2">{item.title}</div>
              <div className=" info flex justify-center  col-lg-2">{item.category.name}</div>
              <div className=" info flex justify-center  col-lg-2">{item.creationAt}</div>
              <div className=" info flex justify-center  col-lg-1">⁙⁙</div>
            </div>


          )) : 'yükleniyor'}
        </div>







      </div>





    </>

  )
}

export default List