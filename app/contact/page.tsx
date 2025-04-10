"use client"
import React from "react"
import { cn } from "@/lib/utils"
import ContactForm from "@/components/ContactForm"
import SlidingButton from "@/components/ui/SlidingButton"
import { PhoneCall } from 'lucide-react';

const Contact = () => {
    return (
        <div className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            "h-fit border-0 py-8 sm:py-12 md:py-16 lg:py-[8%] relative"
        )}>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black z-0"></div>

            <div className="relative z-10 px-4 sm:px-6 md:px-8 mt-12 sm:mt-14 md:mt-5">
                <div className="mb-6 sm:mb-8 md:mb-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-center leading-relaxed"
                        style={{ textShadow: '0 2px 10px #707070' }}>Let&apos;s Talk</h2>
                    <div className="w-full sm:w-[95%] md:w-[90%] mx-auto text-neutral-400 text-center text-base sm:text-lg">
                        Send a message or book a call with us
                    </div>
                </div>

                <div>
                    <ContactForm></ContactForm>
                </div>

                <div className="my-6 sm:my-8">
                    <div className="w-full sm:w-[95%] md:w-[90%] mx-auto text-neutral-400 text-center text-base sm:text-lg">OR</div>
                </div>

                <div className="w-full mx-auto mt-6 sm:mt-8 md:mt-12 flex flex-col items-center gap-4 sm:gap-5 md:gap-7">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-relaxed px-2"
                        style={{ textShadow: '0 2px 7px #707070' }}>
                        Want to chat right away? Schedule a call.
                    </div>
                    <SlidingButton 
                     text="BOOK A CALL"
                     icon={<PhoneCall size={20} className="text-green-500" />} 
                     className="bg-[#131313] border-1 border-[#1f1f1f] w-full sm:w-4/5 md:w-3/5 lg:w-[45%] mx-auto"
                     onClick={() => console.log('Button clicked!')}
                     hoverClassName="bg-[#131313] scale-[101%]"
                     ></SlidingButton>
                </div>
            </div>
        </div>
    )
}

export default Contact