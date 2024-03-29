"use client";
import React, { useState } from "react";
import { aed } from "../data/data";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Image from "next/image";

interface Aed {
    id: number;
    title?: string;
    introTitle?: string;
    intro?: string;
    description: string[];
    outro?: string;
    image: string | string[]; // image can be either a string or an array of strings
}

const AedHome: React.FC = () => {
    const [currentAedIndex, setCurrentAedIndex] = useState<number>(0);

    const goToNextAed = (): void => {
        setCurrentAedIndex((prevIndex) =>
            Math.min(prevIndex + 1, aed.length - 1)
        );
    };

    const goToPreviousAed = (): void => {
        setCurrentAedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const currentAed: Aed = aed[currentAedIndex];
    const hasNext = currentAedIndex < aed.length - 1; // Determine if there is a next item

    return (
        <div className="flex flex-col mt-20 mb-36 h-screen">
            <Header title="AED training" />
            <div className="w-96 mx-auto pb-5">
                <div className="py-10">
                    <h1 className="text-3xl">
                        Wanneer moet je een AED gebruiken?
                    </h1>
                    <p className="pt-4">
                        Een AED wordt gebruikt in situaties waarin iemand een
                        hartstilstand heeft. Dit betekend niet dat de hart
                        helemaal stil staat, maar in een fibrilerende toestand
                        is. Met een schok kan de hartritme weer op zijn normale
                        tempo komen.
                    </p>
                </div>

                <div className="pt-5">
                    {currentAed.introTitle ? (
                        <h2 className="text-2xl">{currentAed.introTitle}</h2>
                    ) : (
                        ""
                    )}
                    {currentAed.title ? (
                        <h2 className="text-2xl">{currentAed.title}</h2>
                    ) : (
                        ""
                    )}
                    {currentAed.intro ? (
                        <p className="pt-2.5">{currentAed.intro}</p>
                    ) : (
                        ""
                    )}
                    <ol className="list-decimal list-inside py-2.5">
                        {currentAed.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ol>
                    {currentAed.outro ? (
                        <p className="pt-2.5">{currentAed.outro}</p>
                    ) : (
                        ""
                    )}
                </div>
                <div className="pt-5">
                    {Array.isArray(currentAed.image) ? (
                        currentAed.image.map((imgSrc, index) => (
                            <>
                                <div key={index} className="mb-2">
                                    <Image
                                        className="rounded-xl"
                                        src={imgSrc}
                                        alt={`AED ${
                                            currentAedIndex + 1
                                        } - Image ${index + 1}`}
                                        width={400}
                                        height={300}
                                    />
                                <a
                                    className="text-slate-400 italic text-xs"
                                    href="https://nl.wikihow.com/Cardiopulmonaire-massage-toepassen"
                                >
                                    (Afbeelding afkomstig van: Wikihow - CPR
                                    toepassen)
                                </a>
                                </div>
                            </>
                        ))
                    ) : (
                        <>
                            <Image
                                className="rounded-xl"
                                src={currentAed.image}
                                alt={`AED ${currentAedIndex + 1}`}
                                width={400}
                                height={300}
                            />
                            <a
                                className="text-slate-400 italic text-xs"
                                href="https://nl.wikihow.com/Cardiopulmonaire-massage-toepassen"
                            >
                                (Afbeelding afkomstig van: Wikihow - CPR
                                toepassen)
                            </a>
                        </>
                    )}
                </div>
            </div>
            {!hasNext ? (
                <div className="container w-96 mx-auto flex flex-col items-center py-4 z-10">
                    <a
                        href="/aed"
                        className="btn btn-lg btn-primary btn-block text-center"
                    >
                        Eerste hulp bij hartaanvallen
                    </a>
                    <a
                        href="/"
                        className="btn btn-lg btn-secondary btn-block my-3 mb-16s text-center"
                    >
                        Terug naar hoofdmenu
                    </a>
                </div>
            ) : (
                ""
            )}
            <Navbar
                goToNextStep={goToNextAed}
                goToPreviousStep={goToPreviousAed}
                hasPrevious={currentAedIndex > 0}
                hasNext={hasNext}
            />
        </div>
    );
};

export default AedHome;
