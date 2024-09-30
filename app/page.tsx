"use client";

import { navItems } from "@/data";

import Hero from "@/components/home/Hero";
import Grid from "@/components/home/Grid";
import Footer from "@/components/home/Footer";
import Clients from "@/components/home/Clients";
import Approach from "@/components/home/Approach";
import Experience from "@/components/home/Experience";
import RecentProjects from "@/components/home/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
