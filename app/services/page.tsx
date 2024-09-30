import { navItems } from "@/data";

import Hero from "@/components/services/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ServiceCards from "@/components/services/ServiceCards";

const Services = () => {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} />
                <Hero />
                <ServiceCards />
            </div>
        </main>
    );
};

export default Services;