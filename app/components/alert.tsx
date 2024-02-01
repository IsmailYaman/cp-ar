"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Alert = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Check sessionStorage to see if the alert has been closed already in this session
        const isAlertClosed =
            sessionStorage.getItem("isAlertClosed") === "true";
        // If isAlertClosed is true, set isVisible to false
        if (isAlertClosed) {
            setIsVisible(false);
        }
    }, []); // The empty array ensures this effect runs only once after initial render

    // Function to hide the alert and set the state in sessionStorage
    const handleClose = () => {
        setIsVisible(false);
        // Save the state to sessionStorage when the user closes the alert
        sessionStorage.setItem("isAlertClosed", "true");
    };

    // Only render the alert if isVisible is true
    if (!isVisible) return null;

    return (
        <div role="alert" className="alert">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info shrink-0 w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
            </svg>
            <span>Deze applicatie is ontwikkeld voor mobile gebruik.</span>
            <div>
                <button
                    onClick={handleClose}
                    className="btn btn-sm btn-primary"
                >
                    {/* Ensure the Image component uses the correct `layout` prop for Next.js */}
                    <Image
                        src="/img/close.svg"
                        alt="Close"
                        width={20}
                        height={20}
                        layout="fixed"
                    />
                </button>
            </div>
        </div>
    );
};

export default Alert;
