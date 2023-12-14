import React from "react";
import Image from "next/image";

interface NavbarProps {
    goToNextHandeling: () => void;
    goToPreviousHandeling: () => void;
    hasPrevious: boolean;
    hasNext: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ goToNextHandeling, goToPreviousHandeling, hasPrevious, hasNext }) => {
    return (
        <div className="btm-nav bg-primary flex justify-between">
            <button 
                onClick={goToPreviousHandeling} 
               
                disabled={!hasPrevious}
            >
                <Image src={"/img/back.svg"}  className={`${!hasPrevious ? 'opacity-25' : ''}`} width={40} height={40} alt="back" />
            </button>
            <a href="/">
                <Image src={"/img/home.svg"} width={40} height={40} alt="home" />
            </a>
            <button 
                onClick={goToNextHandeling} 
                
                disabled={!hasNext}
            >
                <Image src={"/img/next.svg"} className={`${!hasNext ? 'opacity-25' : ''}`} width={40} height={40} alt="next" />
            </button>
        </div>
    );
};

export default Navbar;
