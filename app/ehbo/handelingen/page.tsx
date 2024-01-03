"use client";
import React, { useState } from "react";
import Header from "@/app/components/header";
import Navbar from "@/app/components/navbar";
import { handelingen } from "@/app/data/data";
import Image from "next/image";

interface Handeling {
    id: number;
    title: string;
    description: string[];
    image: string;
}

const Handelingen: React.FC = () => {
    const [currentHandelingIndex, setCurrentHandelingIndex] = useState<number>(0);

    const goToNextStep = (): void => {
        setCurrentHandelingIndex((prevIndex) => Math.min(prevIndex + 1, handelingen.length - 1));
    };

    const goToPreviousStep = (): void => {
        setCurrentHandelingIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const currentHandeling: Handeling = handelingen[currentHandelingIndex];
    const hasNext = currentHandelingIndex < handelingen.length - 1; // Declare the variable hasNext

    return (
            <div className="flex flex-col mt-20 mb-24 h-screen">
                <Header title="Eerste hulp bij hartaanvallen" />
                <div className="w-96 mx-auto pb-5">
                    <div className="py-10">
                        <h1 className="text-3xl">Handelingen tijdens eerste hulp</h1>
                        <p className="pt-4">
                            Een hartaanval kan overal plaatsvinden. Thuis, tijdens werk of tijdens sporten. Om een
                            effectieve eerste hulp te bieden, worden er stappen gevolgd. Hier krijg je stap-voor-stap
                            uitleg over eerste hulp bij hartaanvallen.
                        </p>
                    </div>
                    <div className="pt-5">
                        <h2 className="text-2xl">{currentHandeling.title}</h2>
                        <ol className="list-decimal list-inside mb-5">
                            {currentHandeling.description.map((desc, index) => (
                                <li key={index} className="pt-4">
                                    {desc}
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className="pt-5">
                        <Image
                            className="rounded-xl"
                            src={currentHandeling.image}
                            alt={`Handeling ${currentHandelingIndex + 1}`}
                            width={400}
                            height={300}
                        />
                    </div>
                </div>
                {!hasNext ? ( // Use the variable hasNext
                    <div className="container w-96 mx-auto flex flex-col items-center pb-4 z-10">
                        <a href="/aed" className="btn btn-lg btn-primary btn-block text-center">
                            AED training
                        </a>
                        <a href="/" className="btn btn-lg btn-secondary btn-block my-3 text-center">
                            Terug naar hoofdmenu
                        </a>
                    </div>
                ) : (
                    ""
                )}
                <Navbar
                    goToNextStep={goToNextStep}
                    goToPreviousStep={goToPreviousStep}
                    hasPrevious={currentHandelingIndex > 0}
                    hasNext={currentHandelingIndex < handelingen.length - 1}
                />
            </div>
    );
};

export default Handelingen;
