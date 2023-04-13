import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Background from '../../assets/images/bg.png'
export default function Login() {
    const Navigate = useNavigate({})
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
        axios.post(`http://localhost:4040/Auth/login`, user)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('role', res.data.role)
                if (res.data.token && res.data.role == '641786171c80cfc547eb06d1') {
                    Navigate('/dash')
                }
                if (res.data.token && res.data.role == '64178667a135c9e70380a2ab') {
                    Navigate('/PageEtudiants')
                }
                if (!res.data.token && !res.data.role) {
                    alert(res.data.errmsg)
                }
            }
            )
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="h-screen flex items-center justify-center ">
                <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#A60C7B] to-[#571269] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-2xl font-semibold">
                                        Welcom To Login In Quiz Quick
                                    </h1>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative">
                                            <input
                                                autoComplete="off"
                                                name="email"
                                                type="text"
                                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                placeholder="Email address"
                                                onChange={handleChange}
                                            />
                                            <label
                                                htmlFor="email"
                                                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                            >
                                                Email Address
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                autoComplete="off"
                                                name="password"
                                                type="password"
                                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                placeholder="Password"
                                                onChange={handleChange} />
                                            <label
                                                htmlFor="password"
                                                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                            >
                                                Password
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <button className="bg-[#A60C7B] text-white rounded-md px-2 py-1" onClick={handleLogin}>
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}