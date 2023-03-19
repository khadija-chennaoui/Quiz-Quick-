import React, { useState } from "react";
import { useForm } from "react-hook-form";

function QuizForm() {
    const [questions, setQuestions] = useState([]);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        setQuestions((prevQuestions) => [...prevQuestions, data]);
    };

    const renderQuestion = (question) => {
        if (question.type === "short-answer") {
            return (
                <div>
                    <label htmlFor={question.id}>Question:</label>
                    <input
                        id={question.id}
                        name={`questions[${question.id}].text`}
                        defaultValue={question.text}
                        ref={register()}
                    />
                    <label htmlFor={`${question.id}.max_length`}>Max length:</label>
                    <input
                        id={`${question.id}.max_length`}
                        name={`questions[${question.id}].max_length`}
                        defaultValue={question.max_length}
                        ref={register()}
                    />
                </div>
            );
        } else if (question.type === "multiple-choice") {
            return (
                <div>
                    <label htmlFor={question.id}>Question:</label>
                    <input
                        id={question.id}
                        name={`questions[${question.id}].text`}
                        defaultValue={question.text}
                        ref={register()}
                    />
                    <div>
                        {question.options.map((option, index) => (
                            <div key={index}>
                                <input
                                    name={`questions[${question.id}].options[${index}].text`}
                                    defaultValue={option.text}
                                    ref={register()}
                                />
                                <input
                                    type="radio"
                                    name={`questions[${question.id}].correct_answer`}
                                    value={index}
                                    defaultChecked={option.correct_answer}
                                    ref={register()}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="quiz_name">Quiz name:</label>
                <input id="quiz_name" name="quiz_name" ref={register()} />
            </div>
            {questions.map((question, index) => (
                <div key={index}>{renderQuestion(question)}</div>
            ))}
            <div>
                <label htmlFor="add_question_type">Add question:</label>
                <select
                    id="add_question_type"
                    name="add_question_type"
                    ref={register()}
                >
                    <option value="short-answer">Short answer</option>
                    <option value="multiple-choice">Multiple choice</option>
                </select>
                <button type="submit">Add question</button>
            </div>
            <button type="submit">Submit quiz</button>
        </form>
    );
}