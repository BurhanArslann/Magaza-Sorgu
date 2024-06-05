const List = () =>{
   
    
    return(

        <>
    <div className="search col-lg-12 flex justify-center mt-5">
        <input className="col-lg-4" type="text" placeholder="arama" />
    </div>    
        
   <div style={{ marginTop: "4vh" }} className="col-lg-12 flex justify-center">

  <table className="col-lg-11">
    <thead>
      <tr className="border-b-2 border-gray-400">
        <th className="stn1 col-lg-1 text-center border border-gray-400">Mağaza No</th>
        <th className="p-4 text-center border border-gray-400">Mağaza Adı</th>
        <th className="p-4 text-center border border-gray-400">E - Mail</th>
        <th className="p-4 text-center border border-gray-400">Telefon</th>
        <th className="p-4 col-lg-1 text-center border border-gray-400">※</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-gray-100 border-b border-gray-300 bg- text-center">
        <td className="stn1 col-lg-1 text-center border-r-2 border-gray-400"></td>
        <td className=" text-center border-r-2 border-gray-400 py-4">Veri 2</td>
        <td className=" text-center border-r-2 border-gray-400 py-4">Veri 3</td>
        <td className=" text-center border-r-2 border-gray-400 py-4">Veri 4</td>
        <td className=" text-center border-r-2 border-gray-400 py-4">Veri 5</td>
      </tr>
      
    </tbody>
  </table>
</div>


        </>
        
    )
}

export default List