const Projects = () => {
    return (
        <section className="flex flex-col items-center c-space my-10">
            <h1 className="mb-10">Projects</h1>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 grid-cols-1 mx-auto w-full items-center gap-3 h-full">
                <div className="col-span-1 xl:row-span-2 bg-[#f9f9f9] dark:bg-[#1a1a1a] xl:rounded-2xl rounded-xl
                    h-auto shadow-sm shadow-gray-500/50 dark:shadow-[#000000] gap-3 p-3 items-center hover:bg-gradient-to-b from-[#f9f9f9] to-[#e6e6e6] dark:from-[#1a1a1a] dark:to-[#151515]">
                    <h2 className="text-xl text-(--color)">Project 1</h2>
                </div>
            </div>
        </section>
    );
};

export default Projects;