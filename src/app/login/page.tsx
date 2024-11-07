'use client'

import { redirect } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../components/auth-provider";
export default function Login() {

    const { isLoggedIn, setIsLoggedIn } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const clearForm = () => {
        setEmail("");
        setPassword("");
    }

    const handleLogin = () => {
        if (email && password) {
            if (email === "admin" && password === "admin") {
                setIsLoggedIn(true)
                console.log('login', isLoggedIn)
                redirect("/dashboard")
            } else {
                alert("Invalid email or password")
                clearForm()
            }
        } else {
            alert("Please enter email and password")
            clearForm()
        }
    }

    return (
        <div className="flex items-center justify-center h-[90vh]">
            <div className="p-4 flex flex-col items-center justify-between rounded-lg border shadow-blue-100 shadow-xl w-[700px] mx-auto">
                <h2 className="text-3xl font-bold">Login</h2>
                <div className="p-4 w-full">
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded-lg" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded-lg mt-4" />
                    <button onClick={handleLogin} className="w-full p-2 bg-[#1971c2] text-white rounded-lg mt-4">Login</button>
                </div>
            </div>
        </div>
    )
}