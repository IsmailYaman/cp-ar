"use client";
import React, { useState } from "react";
import { aed } from "../data/data";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Image from "next/image";

interface Aed {
    id: number;
    title: string;
    description: string[];
    image: string | string[]; // image can be either a string or an array of strings
}

const AedHome: React.FC = () => {
    const [currentAedIndex, setCurrentAedIndex] = useState<number>(0);

    const goToNextAed = (): void => {
        setCurrentAedIndex((prevIndex) => Math.min(prevIndex + 1, aed.length - 1));
    };

    const goToPreviousAed = (): void => {
        setCurrentAedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const currentAed: Aed = aed[currentAedIndex];
    const hasNext = currentAedIndex < aed.length - 1; // Determine if there is a next item

    return (
        <>
            <Header title="AED training" />
            <div className="w-96 mx-auto flex flex-col h-screen">
                <div className="pt-5">
                    <h1 className="text-3xl">Wanneer moet je een AED gebruiken?</h1>
                    <p className="pt-2.5">
                        Een AED wordt gebruikt in situaties waarin iemand een hartstilstand heeft. Dit betekend niet dat
                        de hart helemaal stil staat, maar in een fibrilerende toestand is. Met een schok kan de
                        hartritme weer op zijn normale tempo komen.
                    </p>
                </div>
                <div className="pt-5">
                    <h2 className="text-2xl">{currentAed.title}</h2>
                    {currentAed.description.map((desc, index) => (
                        <p key={index} className="list-disc mb-5">
                            {desc}
                        </p>
                    ))}
                </div>
                <div className="pt-5">
                    {Array.isArray(currentAed.image) ? (
                        currentAed.image.map((imgSrc, index) => (
                            <div key={index} className="mb-4">
                                <Image
                                    className="rounded-xl"
                                    src={imgSrc}
                                    alt={`AED ${currentAedIndex + 1} - Image ${index + 1}`}
                                    width={400}
                                    height={300}
                                />
                            </div>
                        ))
                    ) : (
                        <Image
                            className="rounded-xl"
                            src={currentAed.image}
                            alt={`AED ${currentAedIndex + 1}`}
                            width={400}
                            height={300}
                        />
                    )}
                </div>
            </div>
            {!hasNext && (
                <div className="fixed inset-x-0 bottom-0 flex flex-col items-center pb-4 z-10">
                    <a href="/aed" className="btn btn-primary w-full max-w-xs text-center">
                        Eerste hulp bij hartaanvallen
                    </a>
                    <a href="/" className="btn btn-secondary w-full max-w-xs my-3 text-center">
                        Terug naar hoofdmenu
                    </a>
                </div>
            )}
            <Navbar
                goToNextHandeling={goToNextAed}
                goToPreviousHandeling={goToPreviousAed}
                hasPrevious={currentAedIndex > 0}
                hasNext={hasNext}
            />
        </>
    );
};

export default AedHome;
