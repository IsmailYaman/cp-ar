"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Alert = () => {
    const [isVisible, setIsVisible] = useState(() => {
        const isAlertClosed = sessionStorage.getItem("isAlertClosed");
        return isAlertClosed ? false : true;
    });

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem("isAlertClosed", "true");
    };

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
                    <Image
                        src="/img/close.svg"
                        width={20}
                        height={20}
                        alt="Close"
                    />
                </button>
            </div>
        </div>
    );
};

export default Alert;
