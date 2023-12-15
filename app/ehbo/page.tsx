import React from "react";
import Link from "next/link";
import Navbar from "../components/navbar";
import Header from "../components/header";

const EhboHome = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Header title="Eerste hulp bij hartaanvallen" />
                <div className="flex justify-center flex-grow items-center">
                    <div className="flex flex-col">
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
            </div>
        </>
    );
};

export default EhboHome;
