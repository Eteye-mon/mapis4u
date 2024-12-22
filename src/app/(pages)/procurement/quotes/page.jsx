"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PageHeader from '@/app/components/PageHeader'
import { Metadata } from 'next';

const metadata = {
    title: 'Quotes',
};
export const wizardSteps = [
    { id: 1, name: "Step 1", path: "step1" },
    { id: 2, name: "Step 2", path: "step2" },
    { id: 4, name: "Completed", path: "step3" },
];
export default function WizardLayout({ children, currentStep }) {
    const router = useRouter();

    const goToNextStep = () => {
        var nextStep = wizardSteps[currentStep]?.path;
        if (nextStep) router.push(nextStep);
    };

    const goToPreviousStep = () => {
        const previousStep = wizardSteps[currentStep - 2]?.path;
        if (previousStep) router.push(previousStep);
    };


    return (
        <>
            <PageHeader />
            <div className="mt-10 gap-4 space-y-10 p-6">
                <div className="max-w-full mx-auto p-7 bg-white rounded-lg border border-[#E4E7EC]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div
                                className={`w-8 h-8 flex items-center justify-center rounded-full ${currentStep == 1 ? "bg-[#175CFF]" : "bg-[#E7F6EC]"} ${currentStep == 1 ? "text-white" : "text-[#0F973D]"} font-semibold`}
                            >
                                1
                            </div>
                            <div className="ml-3">
                                <p className={`text-sm font-medium ${currentStep >= 1 ? "text-[#101928] font-bold" : "text-[#99A2B3] font-medium"}`}>Request Information</p>
                                <p className="text-xs text-gray-500">Provide details about the RFQ</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div
                                className={`w-8 h-8 flex items-center justify-center rounded-full ${currentStep === 2
                                    ? "bg-[#175CFF] text-white"
                                    : currentStep < 2
                                        ? "bg-white border border-[#98A2B3] text-[#98A2B3]"
                                        : "bg-[#E7F6EC] text-[#0F973D]"
                                    } font-semibold`}
                            >
                                2
                            </div>
                            <div className="ml-3">
                                <p className={`text-sm font-medium ${currentStep >= 2 ? "text-[#101928] font-bold" : "text-[#99A2B3] font-medium"}`}>Terms and Attachments</p>
                                <p className="text-xs text-gray-500">Payment and delivery terms</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div
                                className={`w-8 h-8 flex items-center justify-center rounded-full ${currentStep === 3
                                    ? "bg-[#175CFF] text-white"
                                    : currentStep < 3
                                        ? "bg-white border border-[#98A2B3] text-[#98A2B3]"
                                        : "bg-[#E7F6EC] text-[#0F973D]"
                                    } font-semibold`}
                            >
                                3
                            </div>
                            <div className="ml-3">
                                <p className={`text-sm font-medium ${currentStep == 3 ? "text-[#101928] font-bold" : "text-[#99A2B3] font-medium"}`}>Review</p>
                                <p className="text-xs text-gray-500">Confirm all information provided</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-full mx-auto p-6 bg-white border border-[#E4E7EC] rounded-lg">
                    {children}
                    <div className="flex justify-end gap-4 items-center">
                        <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium text-[#475367] bg-white rounded-md border border-[#E4E7EC]" onClick={goToPreviousStep}
                            disabled={currentStep === 1}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium text-[#175CFF] bg-white rounded-md border border-[#175CFF]"
                        >
                            Save as Draft
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 text-sm font-medium text-white bg-[#175CFF] rounded-md hover:bg-[#175CFF]"
                            onClick={goToNextStep}
                            disabled={currentStep === wizardSteps.length}
                        >
                            {currentStep === 3 ? "Submit" : "Continue"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
