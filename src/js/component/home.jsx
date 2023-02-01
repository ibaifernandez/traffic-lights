import React from "react";
import { useState } from "react";

const Home = () => {
    const [on, setOn] = useState("");

    const colors = [
        {
            id: "red",
            color: "bg-danger",
            lit: "off",
        },
        {
            id: "yellow",
            color: "bg-warning",
            lit: "off",
        },
        {
            id: "green",
            color: "bg-success",
            lit: "off",
        },
    ];

    const alternar = () => {
        let i = 0;
        const repeat = () => {
            console.log(colors[i]);
            i++;
            if (i === colors.length) {
                i = 0;
            }
        };
        setInterval(repeat, 1000);
    };

    return (
        <>
<<<<<<< HEAD
            <div className="traffic mx-auto bg-dark"></div>
            <div className="main-box mx-auto text-center bg-dark rounded-5 p-1">
                {colors.map(({ id, color }) => (
                    <div
                        key={id}
                        className={`light ${color} ${on === id ? "lit" : ""}`}
                        onClick={() => setOn(id)}
                    ></div>
                ))}
=======
            <img className="d-block my-3 mx-auto" src={favicon} />
            <div className="text-center mx">
                <span className="fs-6">
                    If Font Awesome are active you should see a hand here 👉🏽{" "}
                </span>
                <i className="far fa-hand ms-3"></i>
                <span className="mx-3 fs-3">Hello React!</span>
                <i className="far fa-hand me-3"></i>
                <span className="fs-6">
                    👈🏽 If Font Awesome are active you should see a hand here{" "}
                </span>
>>>>>>> parent of 2d74d1a (Checking that Font Awesome Icons are duly installed)
            </div>
            <button
                className="p-3 mt-3 d-flex mx-auto text-center"
                onClick={() => alternar()}
            >
                Alternate colors
            </button>
        </>
    );
};
export default Home;
