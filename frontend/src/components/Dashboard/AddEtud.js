import React from 'react'
import { BsFillTrashFill } from "react-icons/bs";
import Add from './Add';
const style_th = "px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200";
const style_td = "px-5 py-5 text-sm bg-white border-b border-gray-200";
const AddEtud = () => {
  return (
      <div>
          <Add /> {/* modal */}
          <div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-1">
              
              <div className="container max-w-full px-4 mx-auto sm:px-8">
                  <div className="py-8">
                      <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                              <table className="min-w-full leading-normal">
                                  <thead>
                                      <tr>
                                          <th scope="col" className={style_th}>
                                              Name
                                          </th>
                                          <th scope="col" className={style_th}>
                                              Email
                                          </th>
                                          <th scope="col" className={style_th}>
                                              Téléphone
                                          </th>
                                          <th scope="col" className={style_th}>
                                              Delete
                                          </th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                          <tr>
                                              <td className={style_td}>
                                                  <div className="flex items-center">
                                                      <div className="ml-3">
                                                          <p className="text-gray-900 whitespace-no-wrap">
                                                              Khadija Chennaoui
                                                          </p>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td className={style_td}>
                                                  <p className="text-gray-900 whitespace-no-wrap">
                                                    Khadija@gmail.com
                                                  </p>
                                              </td>

                                              <td className={style_td}>
                                                  <p className="text-gray-900 whitespace-no-wrap">
                                                      0661009823
                                                  </p>
                                              </td>
                                              <td className={style_td}>
                                                  <div className="flex items-center">
                                                      <div className="ml-3">
                                                          <button
                                                              className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                                                          >
                                                              <BsFillTrashFill />
                                                          </button>
                                                      </div>
                                                  </div>
                                              </td>
                                          </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default AddEtud



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import AddEmployer from "./AddEmployer";
// import { BsFillTrashFill } from "react-icons/bs";
// import { ToastContainer, toast } from "react-toastify";

// const style_th = "px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200";
// const style_td = "px-5 py-5 text-sm bg-white border-b border-gray-200";

// const TableEmployer = () => {
//     const [employer, setEmployer] = useState([]);
//     useEffect(() => {
//         axios
//             .get("http://localhost:4000/emplyer/all")
//             .then((res) => {
//                 setEmployer(res.data)
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     const Deleted = (e, id) => {
//         e.preventDefault();
//         axios.delete(`http://localhost:4000/emplyer/delet/${id}`)
//             .then((res) => {
//                 if (res.data) {
//                     toast.success("Employer deleted", {
//                         position: toast.POSITION.TOP_RIGHT,
//                     });
//                 }
//             });
//     };

//     return (
//         <>
//             <AddEmployer /> {/* modal */}
//             <div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-1">
//                 <div className="container max-w-full px-4 mx-auto sm:px-8">
//                     <div className="py-8">
//                         <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
//                             <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
//                                 <table className="min-w-full leading-normal">
//                                     <thead>
//                                         <tr>
//                                             <th scope="col" className={style_th}>
//                                                 Name
//                                             </th>
//                                             <th scope="col" className={style_th}>
//                                                 Email
//                                             </th>
//                                             <th scope="col" className={style_th}>
//                                                 Organisme
//                                             </th>
//                                             <th scope="col" className={style_th}>
//                                                 Delete
//                                             </th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {employer.map((item, i) => (
//                                             <tr key={i}>
//                                                 {console.log(item)}
//                                                 <td className={style_td}>
//                                                     <div className="flex items-center">
//                                                         <div className="ml-3">
//                                                             <p className="text-gray-900 whitespace-no-wrap">
//                                                                 {item.name}
//                                                             </p>
//                                                         </div>
//                                                     </div>
//                                                 </td>
//                                                 <td className={style_td}>
//                                                     <p className="text-gray-900 whitespace-no-wrap">
//                                                         {item.email}
//                                                     </p>
//                                                 </td>

//                                                 <td className={style_td}>
//                                                     <p className="text-gray-900 whitespace-no-wrap">
//                                                         {(item.organisme_id.length !== 0) ? (item.organisme_id[0].name) : '---'}
//                                                     </p>
//                                                 </td>
//                                                 <td className={style_td}>
//                                                     <div className="flex items-center">
//                                                         <div className="ml-3">
//                                                             <button
//                                                                 onClick={(e) => {
//                                                                     Deleted(e, item._id);
//                                                                 }}
//                                                                 className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
//                                                             >
//                                                                 <BsFillTrashFill />
//                                                                 <ToastContainer autoClose={200} />
//                                                             </button>
//                                                         </div>
//                                                     </div>
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default TableEmployer;
