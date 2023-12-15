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

    const goToNextHandeling = (): void => {
        setCurrentHandelingIndex((prevIndex) => Math.min(prevIndex + 1, handelingen.length - 1));
    };

    const goToPreviousHandeling = (): void => {
        setCurrentHandelingIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const currentHandeling: Handeling = handelingen[currentHandelingIndex];
    const hasNext = currentHandelingIndex < handelingen.length - 1; // Declare the variable hasNext

    return (
        <>
            <Header title="Eerste hulp bij hartaanvallen" />
            <div className="w-96 mx-auto">
                <div className="pt-5">
                    <h1 className="text-3xl">Handelingen tijdens eerste hulp</h1>
                    <p className="pt-2.5">
                        Een hartaanval kan overal plaatsvinden. Thuis, tijdens werk of tijdens sporten. Om een
                        effectieve eerste hulp te bieden, worden er stappen gevolgd. Hier krijg je stap-voor-stap uitleg
                        over eerste hulp bij hartaanvallen.
                    </p>
                </div>
                <div className="pt-5">
                    <h2 className="text-2xl">{currentHandeling.title}</h2>
                    <ol className="list-decimal mb-5">
                    {currentHandeling.description.map((desc, index) => (
                            <li key={index} className="pt-2.5">
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
                <div className="fixed w-screen mx-auto bottom-20 flex flex-col items-center pb-4 z-10">
                    <a href="/aed" className="btn btn-primary w-full max-w-xs text-center">
                        AED training
                    </a>
                    <a href="/" className="btn btn-secondary w-full max-w-xs my-3 text-center">
                        Terug naar hoofdmenu
                    </a>
                </div>
            ) : (
                ""
            )}
            <Navbar
                goToNextHandeling={goToNextHandeling}
                goToPreviousHandeling={goToPreviousHandeling}
                hasPrevious={currentHandelingIndex > 0}
                hasNext={currentHandelingIndex < handelingen.length - 1}
            />
        </>
    );
};

export default Handelingen;
