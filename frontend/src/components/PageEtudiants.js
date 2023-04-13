import React from "react";
import { Link } from "react-router-dom";

const PageEtudiants = () => {
    return (
        <div className="bg-gray-100 h-screen">
            <div className="container mx-auto py-20">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Bienvenue sur le Quiz
                </h1>
                <p className="text-xl mb-8 text-center">
                    Testez vos connaissances avec nos quiz interactifs.
                </p>
                <div className="flex justify-center">
                    <Link
                        to="/quiz"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Commencer le quiz
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PageEtudiants;
