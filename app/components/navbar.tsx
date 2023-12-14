import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <div className="btm-nav bg-primary">
            <button>
                <a href="/">
                    <Image src={"/img/home.svg"} width={40} height={40} alt="home" />
                </a>
            </button>
        </div>
    );
};

export default Navbar;
