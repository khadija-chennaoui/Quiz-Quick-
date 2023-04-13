import React, { useState, useEffect } from "react";
import axios from "axios";
import AddQuestion from './AddQuestion';
// import { FaUserTimes } from "react-icons/fa";
const style_th = "px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-[#D5A7CF] border-b border-gray-200";
const style_td = "px-5 py-5 text-sm bg-white border-b border-gray-200";

const CreatQuiz = () => {
    const [quest, setQuest] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4040/question/allQuestion")
            .then((res) => {
                setQuest(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <AddQuestion />
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
                                                Reponce
                                            </th>
                                            <th scope="col" className={style_th}>
                                                Quiz
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {quest.map((item, i) => (
                                            <tr key={i}>
                                                <td className={style_td}>
                                                    <div className="flex items-center">
                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {item.question}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className={style_td}>
                                                    <div className="flex items-center">
                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {item.reponse ? 'True' : 'False'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className={style_td}>
                                                    <div className="flex items-center">
                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {item.quiz_id}
                                                            </p>
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


