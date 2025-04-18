import ProjectCard from "../ProjectCard";

const Projects = () => {
    return (
        <section id="projects" className="flex flex-col items-center c-space mt-20">
            <h1 className="mb-10">Projects</h1>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 grid-cols-1 mx-auto w-full items-center gap-3 h-full">
                <ProjectCard text="Open Response" 
                    image="/images/openresponse.png"
                    desc="For my senior software engineering project at OSU, 
                    my team and I developed an open source classroom polling software called Open Response."/>
                {/*<ProjectCard text="Habit Tracker" />*/}
                <ProjectCard text="Tracks" image="/images/tracks-ingame.png" alt="Tracks In-Game"/>
                <ProjectCard text="Voxelization GLSL Shader" image="/images/voxel.png" alt="Voxelization GLSL Shader"/>
                <div></div>
                <ProjectCard text="Smallsh" image="/images/smallsh.png" alt="Custom Shell"/>
                {/*<ProjectCard text="Mobile Treasure Hunt" />*/}
            </div>
        </section>
    );
};

export default Projects;