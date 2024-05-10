import Plans from "@/components/Plans/Plans";
import HeaderDemo from "@/components/Header";
import { SocialProofDemo } from "@/components/SocialProof/SocialProof";
import TechStackDemo from "@/components/TechStack/TechStack";
import Divider from "@/components/Divider";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { HowToDemo } from "@/components/HowTo/HowTo";
import { FAQDemo } from "@/components/FAQ/FAQ";
import { HeroHighlight } from "@/components/ui/hero-highlight";


export default async function Index() {
  return (
    <HeroHighlight className="min-h-screen w-fit h-full flex items-center">
      <TracingBeam className="pb-20">
        <div className="animate-in gap-20 px-3 w-full">
          <HeaderDemo />
          <div className="flex-1 flex flex-col space-y-24 lg:space-y-40 xl:space-y-80 items-center pb-72">
            <TechStackDemo/>
            <Divider/>
            <HowToDemo/>
            <Divider/>
            <SocialProofDemo/>
            <Divider/>
            <Plans/>
            <Divider/>
            <FAQDemo/>
          </div>
        </div>
      </TracingBeam>
    </HeroHighlight>  

  );
}
