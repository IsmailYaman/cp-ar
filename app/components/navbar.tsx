import React from "react";
import Image from "next/image";

interface NavbarProps {
    goToNextStep?: () => void;
    goToPreviousStep?: () => void;
    hasPrevious?: boolean;
    hasNext?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ goToNextStep, goToPreviousStep, hasPrevious, hasNext }) => {
    return (
        <>
            <div className="bg-primary flex py-3 justify-between items-center text-center">
                <button onClick={goToPreviousStep} className={`flex-grow ${!hasPrevious ? "invisible" : ""}`}>
                    <Image
                        src={"/img/back.svg"}
                        width={40}
                        height={40}
                        alt="back"
                        className="mx-auto"
                        layout="intrinsic"
                    />
                </button>
                <a href="/" className="flex-grow">
                    <Image
                        src={"/img/home.svg"}
                        width={40}
                        height={40}
                        alt="home"
                        className="mx-auto"
                        layout="intrinsic"
                    />
                </a>
                <button onClick={goToNextStep} className={`flex-grow ${!hasNext ? "invisible" : ""}`}>
                    <Image
                        src={"/img/next.svg"}
                        width={40}
                        height={40}
                        alt="next"
                        className="mx-auto"
                        layout="intrinsic"
                    />
                </button>
            </div>
        </>
    );
};

export default Navbar;
