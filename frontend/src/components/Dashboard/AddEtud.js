import React, { useState, useEffect } from "react";
import axios from "axios";
import Add from './Add';
import { FaUserTimes } from "react-icons/fa";
const style_th = "px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-[#D5A7CF] border-b border-gray-200";
const style_td = "px-5 py-5 text-sm bg-white border-b border-gray-200";

const AddEtud = () => {
    const [etud, setEtud] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4040/Auth/all")
            .then((res) => {
                setEtud(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const Deleted = (e, id) => {
        e.preventDefault();
        axios.delete(`http://localhost:4040/Auth/delet/${id}`)
            .then((res) => {
                if (res.data) {
                    alert('Etudiant deleted')
                    console.log(res.data)
                }
                window.location.reload();
            })
    };
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
                                                Nom
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
                                        {etud.map((item, i) => (
                                            <tr key={i}>
                                                <td className={style_td}>
                                                    <div className="flex items-center">
                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {item.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className={style_td}>
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item.email}
                                                    </p>
                                                </td>

                                                <td className={style_td}>
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item.phone}
                                                    </p>
                                                </td>
                                                <td className={style_td}>
                                                    <div className="flex items-center">
                                                        <div className="ml-3">
                                                            <button
                                                                onClick={(e) => {
                                                                    Deleted(e, item._id);
                                                                }}
                                                                className=" hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded"
                                                            >
                                                                <FaUserTimes />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
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


