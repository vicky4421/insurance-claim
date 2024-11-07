'use client'
import Link from "next/link";
import { useAuth } from "./auth-provider";


export default function Nav() {

    const isLoggedIn = useAuth();

    return (
        <nav className="bg-[#1971c2] p-4 flex items-center justify-between text-white px-10">
            <div className="font-bold">
                <Link href="/">Insurance Company    </Link>
            </div>
            <div>
                {
                    isLoggedIn.isLoggedIn
                        ? <Link href="/logout">Logout</Link>
                        : <Link href="/login">Login</Link>
                }
            </div>
        </nav>
    )
}
