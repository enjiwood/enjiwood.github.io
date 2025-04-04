const About = () => {
    const openResume = () => {
        window.open("/Wood, Nathaniel G. - Resume.pdf", "_blank");
    }

    return (
        <section id="about" className="c-space my-10">
            <div className="w-full mx-auto flex flex-col gap-3 items-center">
                <h1>About</h1>
                    <p className="pt-4 pb-6">I am a senior in the Computer Science program at Oregon State University. 
                        While studying programming and graphics hardware as an undergrad, I work on software and game development on the side. 
                        Through personal projects and collaborations, I've developed a keen eye for detail and a solid understanding of the latest technologies and paradigms.
                        My dedication to innovation drives me to seek out new challenges and opportunities to apply my skills.
                    </p>
                <div className="w-sm bg-[#f9f9f9] dark:bg-[#1a1a1a] xl:rounded-2xl rounded-xl
            h-auto shadow-sm shadow-gray-500/50 dark:shadow-[#000000] gap-3 p-3 flex items-center justify-center duration-300 
            hover:scale-102 hover:shadow-lg hover:bg-[#fafafa] from-[#f9f9f9] to-[#e6e6e6] dark:from-[#1a1a1a] dark:to-[#151515]" onClick={openResume}>My Resume</div>
            </div>
        </section>
    );
};

export default About;