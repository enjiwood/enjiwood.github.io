import ProjectCard from "../ProjectCard";

const Projects = () => {
    return (
        <section id="projects" className="flex flex-col items-center c-space my-10">
            <h1 className="mb-10">Projects</h1>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 grid-cols-1 mx-auto w-full items-center gap-3 h-full">
                <ProjectCard text="Open Response" image="/images/tracks.png" alt="Tracks" 
                    desc="For my senior software engineering project at OSU, my team and I developed an open source classroom polling software called Open Response."/>
                <ProjectCard text="Habit Tracker" />
                <ProjectCard text="Tracks" />
                <ProjectCard text="Voxelization GLSL Shader" image="/images/tracks.png"/>
                <ProjectCard text="Smallsh" />
                <ProjectCard text="Mobile Treasure Hunt" />
            </div>
        </section>
    );
};

export default Projects;