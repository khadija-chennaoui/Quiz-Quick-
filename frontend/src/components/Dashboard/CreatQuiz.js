            {/* <div className='flex items-center justify-center h-screen'>
                <button className="relative inline-flex items-center justify-center p-1 mb-9  text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="relative px-8  transition-all ease-in duration-75 py-8  bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Purple to pink
                    </span>
                </button>
            </div> */}



import React, { useState, useEffect } from "react";
import axios from "axios";
import AddQuestion from './AddQuestion';
import { FaUserTimes } from "react-icons/fa";
const style_th = "px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-[#D5A7CF] border-b border-gray-200";
const style_td = "px-5 py-5 text-sm bg-white border-b border-gray-200";

const CreatQuiz = () => {
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
            {/* <Add /> */}

            
<AddQuestion/>

            {/* <button class="relative inline-flex items-center justify-center mt-8 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Purple to pink
                </span>
            </button> */}

            {/* modal */}
            <div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-1">
                <div className="container max-w-full px-4 mx-auto sm:px-8">
                    <div className="py-8">
                        <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th scope="col" className={style_th}>
                                                Question
                                            </th>
                                            <th scope="col" className={style_th}>
                                                Quiz
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

export default CreatQuiz


