import Plans from "@/components/Plans/Plans";
import HeaderDemo from "@/components/Header";
import { SocialProofDemo } from "@/components/SocialProof/SocialProof";
import TechStackDemo from "@/components/TechStack/TechStack";
import Navbar from "@/components/Navbar/Navbar";
import Divider from "@/components/Divider";

export default async function Index() {
  
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <Navbar/>
      <div className="animate-in flex-1 flex flex-col gap-20 px-3">
        {/* Header */}
        <HeaderDemo />
        <main className="flex-1 flex flex-col space-y-24 lg:space-y-40 xl:space-y-60 items-center">
          <TechStackDemo/>
          <Divider/>
          <SocialProofDemo/>
          <Divider/>
          <Plans/>
        </main>
      </div>
      {/* Footer */}
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Brought to you by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            The Solopreneur
          </a>
        </p>
      </footer>
    </div>
  );
}
