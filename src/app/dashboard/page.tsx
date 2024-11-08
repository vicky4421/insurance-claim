'use client'
import { redirect } from "next/navigation";

export default function Dashboard() {
    return (
        <div className="mt-36">
            <div className="text-3xl cursor-pointer font-semibold max-w-[600px] border border-[#1971c2] mx-auto text-[#1971c2] rounded-lg p-4 m-4 text-center hover:text-white hover:bg-[#1971c2]">
                Motor
            </div>
            <div className="text-3xl cursor-pointer font-semibold max-w-[600px] border border-[#1971c2] mx-auto text-[#1971c2] rounded-lg p-4 m-4 text-center hover:text-white hover:bg-[#1971c2]">
                Health
            </div>
            <div className="text-3xl cursor-pointer font-semibold max-w-[600px] border border-[#1971c2] mx-auto text-[#1971c2] rounded-lg p-4 m-4 text-center hover:text-white hover:bg-[#1971c2]">
                Travel
            </div>
            <div onClick={() => redirect("/claim-form")} className="text-3xl cursor-pointer font-semibold max-w-[600px] border border-[#1971c2] mx-auto text-[#1971c2] rounded-lg p-4 m-4 text-center hover:text-white hover:bg-[#1971c2]">
                Claim
            </div>
        </div>
    )
}