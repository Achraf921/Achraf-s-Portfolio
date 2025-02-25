import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/ui/RecentProjects";
import Footer from "@/components/ui/Footer";


export default function Home() {
  return (
    <main>
      <div className="relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems}/>
          <Hero/>
          <Grid/>
          <RecentProjects/>
          <Footer/>
        </div>

      </div>
    </main>
  );
}
