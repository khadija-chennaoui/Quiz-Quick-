import React, { useEffect, useState } from "react";
import axios from 'axios'
import imge from "../../assets/images/quiz.png"
const style_input = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
const style_label = "block text-gray-700 text-lg font-semibold mb-2 ";

export const AddQuiz = () => {
    const [afficheall, setAfficheAll] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4040/quiz/allQuiz")
            .then((res) => {
                setAfficheAll(res.data)
            })
            .catch((err) => { console.log(err) })
    })
    const [showModal, setShowModal] = useState(false);
    const [quiz, setQuiz] = useState({})
    function handleChange(e) {
        const val = e.target.value;
        setQuiz({
            ...quiz,
            [e.target.name]: val,
        });
    }
    const handleQuiz = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4040/quiz/addQuiz`, quiz)
            .then((res) => {
                console.log(res)
                setQuiz({
                    ...quiz == "",
                });
            }
            )
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        < >
            <button
                className="bg-[#571269] text-white active:bg-[#A60C7B] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mt-8 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Ajouter Quiz
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
                                                <label className={style_label} htmlFor="title">
                                                    Titre
                                                </label>
                                                <input
                                                    name="title"
                                                    className={style_input}
                                                    type="text"
                                                    placeholder="Titre"
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
                                                type="submit" onClick={handleQuiz}
                                            >
                                                Enregister
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            <div className="grid w-full gap-6 md:grid-cols-2 mt-7">

                {afficheall.map((item, i) => (

                    <a
                        href="#"
                        className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src={imge}
                            alt="img"
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.title}
                            </h5>
                        </div>
                    </a>
                ))}

            </div>
        </>

    )
}
