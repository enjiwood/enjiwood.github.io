import Magnetic from "./Magnetic";

export default function ProjectCard (props) {
    return (
        <div className="col-span-1 xl:row-span-2 bg-[#f9f9f9] dark:bg-[#1a1a1a] xl:rounded-2xl rounded-xl
            h-auto shadow-sm shadow-gray-500/50 dark:shadow-[#000000] gap-3 p-3 flex items-center justify-center duration-300 
            hover:scale-102 hover:shadow-lg hover:bg-[#fafafa] from-[#f9f9f9] to-[#e6e6e6] dark:from-[#1a1a1a] dark:to-[#151515]"
        >
            <div className="flex xl:flex-col flex-row gap-3 items-center justify-center">
                <div className="xl:hidden flex flex-col m-auto gap-3 w-1/3 h-1/3 items-center justify-center">
                    <span className="text-xl text-(--color)">{ props.text }</span>
                    <span className="text-m text-(--color)">{ props.desc }</span>
                </div>
                <div className="h-50 flex flex-col items-center justify-center">
                    <img src={props.image} alt={props.alt} className="xl:h-auto xl:w-auto h-2/3 w-2/3 xl:rounded-2xl rounded-xl"></img>
                </div>
                <span className="hidden xl:block">{ props.text }</span>
            </div>
        </div>
    );
};