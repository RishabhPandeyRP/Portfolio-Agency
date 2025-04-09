import { cn } from "@/lib/utils";
import { Hero } from "@/components/Hero";
import { TeamPreview } from "@/components/TeamPreview";
import { TechStack } from "@/components/TechStack";
import { Process } from "@/components/Process";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={cn(
      "absolute inset-0",
      "[background-size:40px_40px]",
      "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
      "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
      "h-fit border-0 border-red-400 pt-[8%] relative"
    )}>
      {/* Background overlay with lower z-index */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black z-0"></div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        <div className="border-0 mx-auto border-green-500 w-[55%] h-[600px] text-[60px] text-center font-bold flex flex-col justify-center items-center gap-[0px] mb-[70px]">
          <Hero></Hero>

          <div className="text-[20px] font-light text-neutral-500 w-[90%] text-center mb-[5%]">
            Seamlessly transforming ideas into immersive digital experiences that captivate users and drive business growth.
          </div>

          <div>
            <TeamPreview></TeamPreview>
          </div>
        </div>

        <div className="border-0 border-green-500 w-[100%]">
          <div className="text-5xl leading-relaxed w-fit m-auto">Our Technical Ecosystem</div>
          <TechStack></TechStack>

          <div className="mt-[10%]">
            <Process></Process>
          </div>

          <div className="w-[100%] mx-auto border-0 border-red-500 mt-[3%]">
            <div className="text-5xl leading-relaxed w-fit m-auto my-[3%]">
              Feedback That Fuels Us
            </div>
            <Reviews></Reviews>
          </div>

          <div className="w-[100%] mx-auto border-0 border-red-500">
            <div className="text-5xl leading-relaxed w-fit m-auto mt-[10%]">
              Your Thoughts → Our Inbox
            </div>
            <ContactForm></ContactForm>
          </div>

          <div>
            {/* <Footer></Footer> */}
          </div>
        </div>
      </div>
    </div>
  );
}