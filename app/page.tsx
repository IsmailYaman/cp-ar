import Image from "next/image";

export default function Home() {
    return (
        <div className="container mx-auto px-16">
            <div className="flex flex-col h-screen justify-center items-stretch">
                <div className="mask mask-squircle bg-gradient-to-b from-primary to-red-700 w-24 h-24 mx-auto p-3">
                <Image src="img/logo.svg" width={100} height={100} alt="logo" />
                </div>
                <h1 className="text-center pb-10 pt-5">CP-AR</h1>
                <a className="btn btn-secondary mb-2" href="/ehbo">Eerste hulp bij een hartaanval</a>
                <a className="btn btn-secondary mb-2" href="/aed">AED training</a>
                <a className="btn btn-primary">AR scenario's</a>
            </div>
        </div>
    );
}
