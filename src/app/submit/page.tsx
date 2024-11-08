import Image from "next/image";
import done from "@/app/assets/done.gif"

export default function Submit() {
    return (
        <div>
            <Image src={done} alt="done" className="w-96 mx-auto" />
            <h3 className="text-3xl text-[#1971c2] text-center">Claim submitted succesfully!</h3>
        </div>
    )
}