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
            <div className="traffic mx-auto bg-dark"></div>
            <div className="main-box mx-auto text-center bg-dark rounded-5 p-1">
                {colors.map(({ id, color }) => (
                    <div
                        key={id}
                        className={`light ${color} ${on === id ? "lit" : ""}`}
                        onClick={() => setOn(id)}
                    ></div>
                ))}
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
