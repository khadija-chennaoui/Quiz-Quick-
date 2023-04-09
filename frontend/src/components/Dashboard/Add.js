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
                className="bg-[#571269] text-white active:bg-[#A60C7B] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mt-8 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Ajouter étudiant(e)
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
                                                <label className={style_label} htmlFor="Name">
                                                    Name
                                                </label>
                                                <input
                                                    name="name"
                                                    className={style_input}
                                                    type="text"
                                                    placeholder="Name"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className={style_label} htmlFor="email">
                                                    Email
                                                </label>
                                                <input
                                                    name="email"
                                                    className={style_input}
                                                    type="email"
                                                    placeholder="Email"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className={style_label} htmlFor="phone">
                                                    Phone
                                                </label>
                                                <input
                                                    name="phone"
                                                    className={style_input}
                                                    type="phone"
                                                    placeholder="Phone"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className={style_label} htmlFor="password">
                                                    Password
                                                </label>
                                                <input
                                                    name="password"
                                                    className={style_input}
                                                    type="password"
                                                    placeholder="Password"
                                                    onChange={handleChange}
                                                />
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
