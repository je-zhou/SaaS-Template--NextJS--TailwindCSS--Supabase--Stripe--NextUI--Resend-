import Plans from "@/components/Plans/Plans";
import HeaderDemo from "@/components/Header";
import { SocialProofDemo } from "@/components/SocialProof/SocialProof";
import TechStackDemo from "@/components/TechStack/TechStack";
import Navbar from "@/components/Navbar/Navbar";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer/Footer";


export default async function Index() {
  
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <Navbar/>
      <div className="animate-in flex-1 flex flex-col gap-20 px-3">
        {/* Header */}
        <div className="flex min-h-[80vh] items-center">
          <HeaderDemo />
        </div>
        <main className="flex-1 flex flex-col space-y-24 lg:space-y-40 xl:space-y-60 items-center">
          <TechStackDemo/>
          <Divider/>
          <SocialProofDemo/>
          <Divider/>
          <Plans/>
        </main>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
}
