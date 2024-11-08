'use client'
import Link from "next/link";
import { useAuth } from "./auth-provider";


export default function Nav() {

    const { isLoggedIn, setIsLoggedIn } = useAuth();

    return (
        <nav className="bg-[#1971c2] p-4 flex items-center justify-between text-white px-10">
            <div className="font-bold">
                <Link href="/">Insurance Company    </Link>
            </div>
            <div className="flex gap-4">
                {isLoggedIn && <Link href="/dashboard">Dashboard</Link>}
                {
                    isLoggedIn
                        ? <Link href="/login" onClick={() => { setIsLoggedIn(false) }}>Logout</Link>
                        : <Link href="/login">Login</Link>
                }
            </div>
        </nav>
    )
}
