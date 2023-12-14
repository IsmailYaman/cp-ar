import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Header from "../components/header";

const EhboHome = () => {
    return (
        <>
            <Header title="Eerste hulp bij hartaanvallen"/>
            <div className="container mx-auto px-16">
            <div className="flex flex-col h-screen justify-center items-stretch">
                <Link className="btn btn-secondary mb-5" href="ehbo/handelingen">
                    Handelingen tijdens eerste hulp
                </Link>
                <Link className="btn btn-secondary mb-5" href="ehbo/oorzaken">
                    Wat zijn de oorzaken van een hartaanval?
                </Link>
                <Link className="btn btn-secondary" href="ehbo/symptomen">
                    Wat zijn de symptomen van een hartaanval?
                </Link>
            </div>
        </div>
            <Navbar />
        </>
    );
};

export default EhboHome;
