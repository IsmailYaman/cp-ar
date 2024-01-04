import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="navbar bg-primary">
                <div className="flex-1">
                    <div className="mask mask-squircle bg-gradient-to-b from-primary to-red-700 p-3 w-16 h-16">
                        <Image src="img/logo.svg" width={100} height={100} alt="logo" />
                    </div>
                    <strong className="mx-4 font-bold text-white  text-2xl">CP-AR</strong>
                </div>
            </div>
            <div className="container mx-auto mt-5 px-5">
                <div className="justify-center items-center h-screen">
                    {/* <div className="mask mask-squircle bg-gradient-to-b from-primary to-red-700 p-3 w-32 h-32">
                        <Image src="img/logo.svg" width={100} height={100} alt="logo" />
                    </div> */}
                    <div>
                        <h1 className="text-4xl py-4">Leer Eerste Hulp</h1>
                        <p className=" mb-8">
                            Ontdek hoe te handelen bij een hartstilstand met duidelijke stappen voor reanimatie en AED-gebruik.
                            Verbeter je vaardigheden met de interactieve Augmented Reality ervaring.
                        </p>
                    </div>
                    <Link className="btn btn-secondary btn-lg btn-block mb-5" href="/ehbo">
                        Eerste hulp bij hartaanvallen
                    </Link>
                    <Link className="btn btn-secondary btn-block btn-lg mb-5" href="/aed">
                        AED training
                    </Link>
                    <Link
                        className="btn btn-primary btn-lg btn-block"
                        tabIndex={-1}
                        role="button"
                        href="https://360fabriek.8thwall.app/ismail-test/"
                    >
                        AR scenario&#39;s
                    </Link>
                    <div className="my-10">
                        <p className="pb-5">
                            CP-AR is een interactieve website die levensreddende vaardigheden biedt voor noodsituaties
                            bij hartstilstand, zoals reanimatie (CPR) en het gebruik van een Automatische Externe
                            Defibrillator (AED).
                        </p>
                        <p>
                            Met heldere instructies en een innovatieve AR-game om uw kennis praktisch toe te passen,
                            leert u op een effectieve manier hoe te handelen in een noodgeval. Sluit u aan bij CP-AR en
                            word in staat om levens te redden in kritieke momenten.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
