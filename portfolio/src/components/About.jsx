const About = () => {
    const openResume = () => {
        window.open("/Wood, Nathaniel G. - Resume.pdf", "_blank");
    }

    return (
        <section className="c-space my-10">
            <div className="w-full mx-auto flex flex-col gap-3 items-center">
                <h1>About</h1>
                    <p className="pt-4 pb-6">I am a senior in the Computer Science program at Oregon State University. 
                        While studying programming and graphics hardware as an undergrad, I work on software and game development on the side. 
                        Through personal projects and collaborations, I've developed a keen eye for detail and a solid understanding of the latest technologies and paradigms.
                        My dedication to innovation drives me to seek out new challenges and opportunities to apply my skills.
                    </p>
                <button className="w-sm text-(--color) focus:ring-4 focus:outline-none
                    focus:ring-gray-300 dark:focus:ring-gray-800 shadow-sm shadow-gray-500/50 dark:shadow-[#000000] font-medium rounded-lg text-sm 
                    px-5 py-2.5 text-center me-2 mb-2" onClick={openResume}>My Resume</button>
            </div>
        </section>
    );
};

export default About;