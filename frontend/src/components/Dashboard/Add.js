import React, { useState, useEffect } from "react";
const style_input = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
const style_label = "block text-gray-700 text-lg font-semibold mb-2 ";

const Add = () => {
    const [showModal, setShowModal] = useState(false);

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
                                                />
                                            </div>

                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                            <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="Cancel"
                                                onClick={() => setShowModal(false)}>Close</button>
                                            <button
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="submit"
                                            >
                                                Save Changes
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
