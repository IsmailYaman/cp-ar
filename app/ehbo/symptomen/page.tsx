import Header from "@/app/components/header";
import Navbar from "@/app/components/navbar";
import { symptomen } from "@/app/data/data";

import React from "react";

const Symptomen = () => {
    const symptoom = symptomen;
    return (
        <div className="flex flex-col h-screen">
            <Header title="Eeste hulp bij hartaanvallen" />
            <div className="w-96 mx-auto flex-grow">
                <div className="pt-5">
                    <h2 className="text-2xl">{symptoom.title1}</h2>
                    <ul className="list-disc pl-5 mb-5">
                        {symptoom.description1.map((factor, index) => (
                            <li key={index} className="pt-2.5">
                                {factor}
                            </li>
                        ))}
                    </ul>
                    <p className="pt-2.5">{symptoom.description2}</p>
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default Symptomen;
