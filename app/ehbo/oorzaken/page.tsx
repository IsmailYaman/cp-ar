import Header from "@/app/components/header";
import Navbar from "@/app/components/navbar";
import { oorzaken } from "@/app/data/data";
import React from "react";

const Oorzaken = () => {
    const oorzaak = oorzaken;
    return (
        <div className="flex flex-col mt-20 mb-24 h-screen">
            <Header title="Eerste hulp bij hartaanvallen" />
            <div className="w-96 mx-auto pb-5">
                <div className="py-10">
                    <h1 className="text-3xl">{oorzaak.title1}</h1>
                    {oorzaak.description1.map((desc, index) => (
                        <p key={index} className="pt-4">
                            {desc}
                        </p>
                    ))}
                </div>
                <div className="pt-5">
                    <h2 className="text-2xl">{oorzaak.title2}</h2>
                    {oorzaak.description2.map((desc, index) => (
                        <p key={index} className="pt-2.5">
                            {desc}
                        </p>
                    ))}
                    <ul className="list-disc pl-5 mb-5">
                        {oorzaak.description3.map((factor, index) => (
                            <li key={index} className="pt-2.5 font-bold">
                                {factor}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pt-5">
                    <h2 className="text-2xl">{oorzaak.title4}</h2>
                    {oorzaak.description4.map((desc, index) => (
                        <p key={index} className="pt-2.5">
                            {desc}
                        </p>
                    ))}
                    <ul className="list-disc pl-5 mb-5">
                        {oorzaak.description5.map((factor, index) => (
                            <li key={index} className="pt-2.5 font-bold">
                                {factor}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default Oorzaken;
