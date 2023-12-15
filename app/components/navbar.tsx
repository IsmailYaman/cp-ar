import React from "react";
import Image from "next/image";

interface NavbarProps {
    goToNextHandeling?: () => void;
    goToPreviousHandeling?: () => void;
    hasPrevious?: boolean;
    hasNext?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ goToNextHandeling, goToPreviousHandeling, hasPrevious, hasNext }) => {
    return (
        <>
            <div className="bg-primary flex justify-between">
                <button onClick={goToPreviousHandeling}>
                    <Image
                        src={"/img/back.svg"}
                        className={`${!hasPrevious ? "invisible" : ""}`}
                        width={40}
                        height={40}
                        alt="back"
                    />
                </button>
                <a href="/">
                    <Image src={"/img/home.svg"} width={40} height={40} alt="home" />
                </a>
                <button onClick={goToNextHandeling}>
                    <Image
                        src={"/img/next.svg"}
                        className={`${!hasNext ? "invisible" : ""}`}
                        width={40}
                        height={40}
                        alt="next"
                    />
                </button>
            </div>
        </>
    );
};

export default Navbar;
