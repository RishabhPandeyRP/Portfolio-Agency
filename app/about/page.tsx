import React from "react"
import { cn } from "@/lib/utils";
import { OurValues } from "@/components/OurValues";
import ExpertiesCards from "@/components/ExpertiesCards";
// import Footer from "@/components/Footer";

const About = () => {
    return (

        <div className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            "h-fit border-1 border-red-400 pt-[8%] relative"
        )}>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black z-0"></div>

            <div className="flex flex-col">
                <div className="border-0 border-red-500 text-white z-30 w-[80%] px-2 mx-auto flex flex-col gap-20">

                    <div className="flex flex-col gap-8">
                        <h2 className="text-5xl text-center leading-relaxed "
                            style={{ textShadow: '0 2px 10px #707070' }}
                        >Our Genesis</h2>
                        <div className="border-0 border-red-500 w-[90%] mx-auto text-neutral-400 text-center text-lg">Founded in 2019, Pixel Pulse began with three friends who shared a vision: to create digital experiences that transform how businesses connect with their audience. What started in a small co-working space has evolved into a dynamic team of 28 creators, developers, and strategists united by our passion for pushing the boundaries of digital design.</div>
                    </div>

                    <div className="flex flex-col gap-8 my-[2%]">
                        <h2 className="text-5xl text-center leading-relaxed "
                            style={{ textShadow: '0 2px 10px #707070' }}>Our Values</h2>
                        <OurValues></OurValues>
                    </div>

                    <div className="flex flex-col gap-22 my-[2%]">
                        <h2 className="text-5xl text-center leading-relaxed "
                            style={{ textShadow: '0 2px 10px #707070' }}>Our Experties</h2>
                        <div className="mx-auto w-[100%]  flex justify-center">
                            <ExpertiesCards></ExpertiesCards>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 my-[7%]">
                        <h2 className="text-5xl text-center leading-relaxed "
                            style={{ textShadow: '0 2px 10px #707070' }}
                        >Let&rsquo;s Create Together</h2>
                        <div className="border-0 border-red-500 w-[90%] mx-auto text-neutral-400 text-center text-lg flex flex-col gap-5">
                            <div>
                                Ready to transform your digital vision into reality? We&rsquo;re just a conversation away from bringing your boldest ideas to life.
                            </div>

                            <div>
                                Whether you&rsquo;re looking to launch a web app that works harder than your coffee machine on Monday morning, design an interface so intuitive your grandmother could use it, or build a mobile experience that keeps users coming back like it&rsquo;s their favorite restaurant—we&rsquo;ve got you covered.
                            </div>

                            <div>
                                Drop us a line for a no-jargon, no-pressure discovery call. We promise to speak human, listen intently, and only get technical when absolutely necessary (or when you ask us about our favorite JavaScript frameworks—then we might geek out a little).
                            </div>

                            <div className="font-bold text-neutral-300">
                                Ready to make digital magic? Let&rsquo;s click together.
                            </div>
                        </div>
                    </div>

                </div>

                {/* <div className="border-0 border-red-500 w-[100%] z-30">
                    <Footer></Footer>
                </div> */}
            </div>
        </div>
    )
}

export default About