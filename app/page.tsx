import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex justify-center flex-grow items-center">
                <div className="flex flex-col w-96">
                    <div className="mask mask-squircle bg-gradient-to-b from-primary to-red-700 w-30 h-30 mx-auto p-3">
                        <Image src="img/logo.svg" width={100} height={100} alt="logo" />
                    </div>
                    <h1 className="text-center pb-10 pt-5">CP-AR</h1>
                    <Link className="btn btn-secondary mb-5" href="/ehbo">
                        Eerste hulp bij hartaanvallen
                    </Link>
                    <Link className="btn btn-secondary mb-5" href="/aed">
                        AED training
                    </Link>
                    <Link className="btn btn-primary" href="https://360fabriek.8thwall.app/ismail-test/">
                        AR scenario&#39;s
                    </Link>
                </div>
            </div>
        </div>
    );
}
