'use client'

import { redirect } from "next/navigation";
import { useState } from "react";

export default function ClaimForm() {

    // Details of primary insured
    const [policyNumber, setPolicyNumber] = useState("");
    const [certificateNumber, setCertificateNumber] = useState("");
    const [companyNo, setCompanyNo] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    // Details of insurance person hospitalized
    const [hName, setHName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [dob, setDob] = useState("");
    const [relationship, setRelationship] = useState("");
    const [occupation, setOccupation] = useState("");

    // Details of hospitalization
    const [hospitalName, setHospitalName] = useState("");
    const [roomCategory] = useState("");
    const [reason] = useState("");
    const [admissionDate, setAdmissionDate] = useState("");
    const [admissionTime, setAdmissionTime] = useState("");
    const [dischargeDate, setDischargeDate] = useState("");
    const [dischargeTime, setDischargeTime] = useState("");

    // Details of insurance history
    const [otherCover] = useState("");
    const [commencementDate, setCommencementDate] = useState("");
    const [historyCompanyName, setHistoryCompanyName] = useState("");
    const [historyPolicyNo, setHistoryPolicyNo] = useState("");
    const [historySumAssured, setHistorySumAssured] = useState("");
    const [history4Years] = useState("");
    const [historyDate, setHistoryDate] = useState("");
    const [diagnosis, setDiagnosis] = useState("");
    const [preMediClaim] = useState("");

    // Details of claim
    const [preHospExpenses, setPreHospExprenses] = useState("");
    const [hospExpenses, setHospExpenses] = useState("");
    const [postHospExpenses, setPostHospExpenses] = useState("");
    const [hCheckCost, setHCheckCost] = useState("");
    const [ambCharges, setAmbCharges] = useState("");
    const [othCharges, setOtherCharges] = useState("");
    const [totalCost, setTotalCost] = useState("");

    const handleSubmit = () => { redirect("/submit") }

    return (
        <div className="flex flex-col mb-8">
            <div className="text-center">
                <h1 className="text-3xl mt-2">Reimbursement Claim Form</h1>
                <h2>To be filled out by the insured</h2>
            </div>

            {/* Details of primary insured */}
            <div className="flex w-full gap-1 justify-evenly text-center content-center mt-2 ">
                <div className="border border-[#1971c2] border-b-1 h-0 w-[600px] mt-3"></div>
                <div>
                    <h3 className="text-[#1971c2] font-bold capitalize">Details of primary insured</h3>
                </div>
                <div className="border border-[#1971c2] border-b-1 h-0 w-[600px] mt-3"></div>
            </div>

            <div className="flex flex-col gap-2 mx-auto mt-2">
                <input type="text" placeholder="Policy Number" value={policyNumber} onChange={(e) => setPolicyNumber(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <input type="text" placeholder="Certificate Number" value={certificateNumber} onChange={(e) => setCertificateNumber(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <input type="text" placeholder="Company Number" value={companyNo} onChange={(e) => setCompanyNo(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
            </div>

            {/* Details of insurance history */}
            <div className="flex w-full gap-1 justify-evenly text-center content-center mt-2 ">
                <div className="border border-[#1971c2] border-b-1 h-0 w-[600px] mt-3"></div>
                <div>
                    <h3 className="text-[#1971c2] font-bold capitalize">Details of insurance history</h3>
                </div>
                <div className="border border-[#1971c2] border-b-1 h-0 w-[600px] mt-3"></div>
            </div>

            <div className="flex flex-col gap-2 mx-auto mt-2">
                <div>
                    <h3>Currently covered by any other mediclaim / health insurance</h3>
                    <input type="radio" value={otherCover} name="Other Mediclaim" />
                    <label className="p-2">Yes</label>
                    <input type="radio" value={otherCover} name="Other Mediclaim" />
                    <label className="p-2">No</label>
                </div>
                <h3>Date of Commencement of first insurance without break</h3>
                <input type="date" placeholder="Date of commencement" value={commencementDate} onChange={(e) => setCommencementDate(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <input type="text" placeholder="Company name" value={historyCompanyName} onChange={(e) => setHistoryCompanyName(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <input type="text" placeholder="Policy Number" value={historyPolicyNo} onChange={(e) => setHistoryPolicyNo(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <input type="text" placeholder="Sum Assured (Rs)" value={historySumAssured} onChange={(e) => setHistorySumAssured(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <div>
                    <h3>Have you been hospitalized in the last four years since inception of contract</h3>
                    <input type="radio" value={history4Years} name="History 4 years" />
                    <label className="p-2">Yes</label>
                    <input type="radio" value={otherCover} name="History 4 years" />
                    <label className="p-2">No</label>
                </div>
                <h3>Date</h3>
                <input type="date" placeholder="Date" value={historyDate} onChange={(e) => setHistoryDate(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <input type="text" placeholder="Diagnosis" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <div>
                    <h3>Previously covered by any other mediclaim / health insurance</h3>
                    <input type="radio" value={preMediClaim} name="Pre Mediclaim" />
                    <label className="p-2">Yes</label>
                    <input type="radio" value={preMediClaim} name="Pre Mediclaim" />
                    <label className="p-2">No</label>
                </div>
            </div>

            {/* Details of insurance person hospitalized */}
            <div className="flex w-full gap-1 justify-evenly text-center content-center mt-2 ">
                <div className="border border-[#1971c2] border-b-1 h-0 w-[600px] mt-3"></div>
                <div>
                    <h3 className="text-[#1971c2] font-bold capitalize">Details of insurance person hospitalized</h3>
                </div>
                <div className="border border-[#1971c2] border-b-1 h-0 w-[600px] mt-3"></div>
            </div>

            <div className="flex flex-col gap-2 mx-auto mt-2">
                <input type="text" placeholder="Name" value={hName} onChange={(e) => setHName(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <input type="text" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <input type="text" placeholder="Relationship to primary insured" value={relationship} onChange={(e) => setRelationship(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <input type="text" placeholder="Occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
            </div>

            {/* Details of hospitalization */}
            <div className="flex w-full gap-1 justify-evenly text-center content-center mt-2 ">
                <div className="border border-[#1971c2] border-b-1 h-0 w-[600px] mt-3"></div>
                <div>
                    <h3 className="text-[#1971c2] font-bold capitalize">Details of hospitalization</h3>
                </div>
                <div className="border border-[#1971c2] border-b-1 h-0 w-[600px] mt-3"></div>
            </div>

            <div className="flex flex-col gap-2 mx-auto mt-2">
                <input type="text" placeholder="Name of hospital where admitted" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <div>
                    <h3>Room Category</h3>

                    <input type="radio" value={roomCategory} name="Room Category" />
                    <label className="p-2">Day Care</label>

                    <input type="radio" value={roomCategory} name="Room Category" />
                    <label className="p-2">Single Occupancy</label>

                    <input type="radio" value={roomCategory} name="Room Category" />
                    <label className="p-2">Twin Sharing</label>

                    <input type="radio" value={roomCategory} name="Room Category" />
                    <label className="p-2">Three or more beds per room</label>
                </div>
                <div>
                    <h3>Hospitalization due to</h3>
                    <input type="radio" value={reason} name="Reason" />
                    <label className="p-2">Injury</label>
                    <input type="radio" value={reason} name="Reason" />
                    <label className="p-2">Maternity</label>
                    <input type="radio" value={reason} name="Reason" />
                    <label className="p-2">Illness</label>
                </div>
                <div>
                    <h3>Date of Admission</h3>
                    <input type="date" placeholder="Date of admission" value={admissionDate} onChange={(e) => setAdmissionDate(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                </div>
                <div>
                    <h3>Admission Time</h3>
                    <input type="time" placeholder="Time" value={admissionTime} onChange={(e) => setAdmissionTime(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                </div>
                <div>
                    <h3>Date of Discharge</h3>
                    <input type="date" placeholder="Date of discharge" value={dischargeDate} onChange={(e) => setDischargeDate(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                </div>
                <div>
                    <h3>Admission Time</h3>
                    <input type="time" placeholder="Time" value={dischargeTime} onChange={(e) => setDischargeTime(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                </div>
            </div>

            {/* Details of claim */}
            <div className="flex w-full gap-1 justify-evenly text-center content-center mt-2 ">
                <div className="border border-[#1971c2] border-b-1 h-0 w-[600px] mt-3"></div>
                <div>
                    <h3 className="text-[#1971c2] font-bold capitalize">Details of claim</h3>
                </div>
                <div className="border border-[#1971c2] border-b-1 h-0 w-[600px] mt-3"></div>
            </div>

            <div className="flex flex-col gap-2 mx-auto mt-2">
                <h3>Details of treatment exprenses claimed</h3>
                <input type="text" placeholder="Pre-hospitalization expenses" value={preHospExpenses} onChange={(e) => setPreHospExprenses(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <input type="text" placeholder="Hospitalization expenses" value={hospExpenses} onChange={(e) => setHospExpenses(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <input type="text" placeholder="Post-hospitalization expenses" value={postHospExpenses} onChange={(e) => setPostHospExpenses(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <input type="text" placeholder="Health-Check up cost" value={hCheckCost} onChange={(e) => setHCheckCost(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <input type="text" placeholder="Ambulance Charges" value={ambCharges} onChange={(e) => setAmbCharges(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <input type="text" placeholder="Others (Code)" value={othCharges} onChange={(e) => setOtherCharges(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
                <input type="text" placeholder="Total" value={totalCost} onChange={(e) => setTotalCost(e.target.value)} className="border border-[#1971c2] h-10 w-[600px] mx-auto rounded-lg p-2" />
            </div>

            <button onClick={handleSubmit} className="w-96 mx-auto p-2 bg-[#1971c2] text-white rounded-lg mt-4">Submit Claim</button>
        </div>
    )
}