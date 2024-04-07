import Plans from "@/components/Plans/Plans";
import HeaderDemo from "@/components/Header";
import { SocialProofDemo } from "@/components/SocialProof/SocialProof";
import TechStackDemo from "@/components/TechStack/TechStack";
import Divider from "@/components/Divider";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { HowToDemo } from "@/components/HowTo/HowTo";
import { FAQDemo } from "@/components/FAQ/FAQ";


export default async function Index() {
  return (
    <TracingBeam className="flex-1 w-full flex flex-col gap-20 items-center ">
      <div className="animate-in flex-1 flex flex-col gap-20 px-3 w-full">
        {/* Header */}
        <div className="flex min-h-[80vh] items-center">
          <HeaderDemo />
        </div>
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
  );
}
