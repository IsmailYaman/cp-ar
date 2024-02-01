import Header from "@/app/components/header";
import Navbar from "@/app/components/navbar";
import { symptomen } from "@/app/data/data";

import React from "react";

const Symptomen = () => {
    const symptoom = symptomen;
    return (
        <div className="flex flex-col mt-20 mb-24 h-screen">
            <Header title="Eeste hulp bij hartaanvallen" />
            <div className="w-96 mx-auto pb-5">
                <div className="py-10">
                    <h1 className="text-3xl">{symptoom.title1}</h1>
                    <ul className="list-disc pl-5 mb-5">
                        {symptoom.description1.map((factor, index) => (
                            <li key={index} className="pt-4 font-bold">
                                {factor}
                            </li>
                        ))}
                    </ul>
                    <p className="pt-4">{symptoom.description2}</p>
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default Symptomen;
