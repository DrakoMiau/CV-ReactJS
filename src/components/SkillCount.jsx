import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function SkillCount({maxValue, className}) {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        if (counter < maxValue) {
            const intervalId = setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, 10);
            return () => clearInterval(intervalId);
        }
    }, [counter, maxValue]);

    return (
        <div className="relative mb-3">
            <div className="outer">
                <div className="inner">
                    <div className="number">{counter}%</div>
                </div>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
            >
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="#282C51" />
                        <stop offset="100%" stopColor="#47A4C0" />
                    </linearGradient>
                </defs>
                <circle cx="40" cy="40" r="35" strokeLinecap="round" className={className}/>
            </svg>
        </div>
    );
}

export default SkillCount;
