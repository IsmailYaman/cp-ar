'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import React from "react";

const Header = ({ title }: { title: string }) => {
    const router = useRouter()
    return (
        <div className="navbar bg-primary">
            <div className="flex-1">
                <Link href="#" onClick={() => router.back()} className="btn btn-ghost text-white">
                    <Image src={"/img/back.svg"} width={20} height={20} alt="logo" />
                    {title}
                </Link>
            </div>
            <div className="flex-none">
                <Link className="btn btn-ghost" href="/ehbo">
                    <Image src={"/img/ar.svg"} width={40} height={40} alt="ar" />
                </Link>
            </div>
        </div>
    );
};

export default Header;
