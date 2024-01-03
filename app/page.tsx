import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col w-full max-w-4xl px-4">
                <div className="mask mask-squircle bg-gradient-to-b from-primary to-red-700 mx-auto p-3 w-32 h-32">
                    <Image src="img/logo.svg" width={100} height={100} alt="logo" />
                </div>
                <h1 className="text-center py-8">CP-AR</h1>
                <Link className="btn btn-secondary mb-5" href="/ehbo">
                    Eerste hulp bij hartaanvallen
                </Link>
                <Link className="btn btn-secondary mb-5" href="/aed">
                    AED training
                </Link>
                <Link
                    className="btn btn-primary"
                    tabIndex={-1}
                    role="button"
                    href="https://360fabriek.8thwall.app/ismail-test/"
                >
                    AR scenario's
                </Link>
            </div>
        </div>
    );
}

