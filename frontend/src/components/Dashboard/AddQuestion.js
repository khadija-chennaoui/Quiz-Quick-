import React, { useState } from "react";
import axios from 'axios'
const style_input = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
const style_label = "block text-gray-700 text-lg font-semibold mb-2 ";

const Add = () => {
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState({})
    function handleChange(e) {
        const val = e.target.value;
        setUser({
            ...user,
            [e.target.name]: val,
        });
    }
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4040/Auth/register`, user)
            .then((res) => {
                console.log(res)
            }
            )
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>

            <button
                className="relative inline-flex items-center justify-center mt-8 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                type="button"
                onClick={() => setShowModal(true)}
            >

                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Ajouter Question
                </span>
            </button>

            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*body*/}
                                <div className="relative p-6  flex-auto">
                                    <form className="px-3" >
                                        <p
                                            id="err"
                                            className="bg-red-400 animate-pulse shadow appearance-none border rounded w-full py-2 px-4 mt-3 mb-5 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                                            hidden={true}
                                        ></p>
                                        <div className="flex flex-col ">
                                            <div className="mb-4">
                                                <label for="countries" className={style_label}>Sélectionnez un quiz</label>
                                                <select id="countries" className={style_input}>
                                                    <option>MongoDB</option>
                                                    <option>React js</option>
                                                    <option>Vue js</option>
                                                    <option>Data science</option>
                                                </select>
                                            </div>
                                            <div className="mb-4">
                                                <label className={style_label} htmlFor="question">
                                                    Question
                                                </label>
                                                <input
                                                    name="question"
                                                    className={style_input}
                                                    type="text"
                                                    placeholder="Créer question"
                                                    onChange={handleChange}
                                                />
                                                <div className="flex justify-between mt-8">
                                                    <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked />
                                                    <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        Vrai
                                                    </label>
                                                    <input id="country-option-1" type="radio" name="countries" value="USA" class=" w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked />
                                                    <label for="country-option-1" class=" block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        Faux
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                            <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="Cancel"
                                                onClick={() => setShowModal(false)}>Fermer</button>
                                            <button
                                                className="bg-[#571269] text-white active:bg-[#A60C7B] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="submit" onClick={handleLogin}
                                            >
                                                Enregister
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default Add;
