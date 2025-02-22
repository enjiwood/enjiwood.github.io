const SideBar = () => {
    const heroSection = () => {
        document.getElementById('hero').scrollIntoView({behavior: 'smooth', block: 'center'});
    };

    const aboutSection = () => {
        document.getElementById('about').scrollIntoView({behavior: 'smooth', block: 'center'});
    };

    const projectsSection = () => {
        document.getElementById('projects').scrollIntoView({behavior: 'smooth', block: 'center'});
    };

    const experienceSection = () => {
        document.getElementById('experience').scrollIntoView({behavior: 'smooth', block: 'center'});
    };

    const contactSection = () => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth', block: 'center'});
    };

    return (
        <div className="h-full w-auto">
            <div className="sticky top-20 h-[80vh] py-32 flex gap-4">
                <div className="hidden lg:flex flex-col gap-6 text-sm xl:text-base">
                    <span onClick={heroSection}>Home</span>
                    <span onClick={aboutSection}>About Me</span>
                </div>
                <div className="hidden lg:flex h-full w-0.5 bg-[#213547] dark:bg-[#ffffffde] rounded-full overflow-hidden">

                </div>
            </div>
        </div>
    );
};

export default SideBar;