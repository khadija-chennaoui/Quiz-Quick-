import React from "react";
import { NavLink } from "react-router-dom";
import { FaSlidersH, FaUserGraduate, FaRegNewspaper, FaRegClipboard } from "react-icons/fa";
const Sidbar = () => {
    return (
        <>
            <div className="h-full bg-white dark:bg-gray-700">
                <div className="flex items-center justify-start pt-6 ml-8">
                    <p className="text-xl font-bold text-[#571269]">Dashboard</p>
                </div>
                <nav className="mt-6">
                    <div>
                        <NavLink
                            className="hover:border-[#571269] flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                            to="statistic"
                        >
                            <span className="text-left">
                                <FaSlidersH />
                            </span>
                            <span className="mx-4 text-sm font-normal">Statistic</span>
                        </NavLink>
                        <NavLink
                            className="hover:border-[#571269] flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4  dark:text-white"
                            to="AddEtud"
                        >
                            <span className="text-left">
                                <FaUserGraduate />
                            </span>
                            <span className="mx-4 text-sm font-normal">Etudant(e)</span>
                        </NavLink>
                        <NavLink
                            to="AddQuiz"
                            className="hover:border-[#571269] flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                        >
                            <span className="text-left">
                                <FaRegNewspaper />
                            </span>
                            <span className="mx-4 text-sm font-normal">Quiz</span>
                        </NavLink>
                        <NavLink
                            className="hover:border-[#571269] flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                            to="formation"
                        >
                            <span className="text-left">
                                <FaRegClipboard />
                            </span>
                            <span className="mx-4 text-sm font-normal">Results</span>
                        </NavLink>
                        {/* <NavLink
                            className="hover:border-lime-500 flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                            to="assigniement"
                        >
                            <span className="text-left">
                                <RiShoppingCart2Line />
                            </span>
                            <span className="mx-4 text-sm font-normal">Assigniement</span>
                        </NavLink> */}
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Sidbar;
