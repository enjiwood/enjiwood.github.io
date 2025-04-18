import Magnetic from "../Magnetic";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
	const contactSection = () => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth', block: 'center'});
    };

    return (
        <section id="hero" className="min-h-screen w-full flex flex-col relative">
			<div className="w-full mx-auto flex flex-col gap-3 my-auto items-center">
				<Magnetic>
					<img className="w-30 h-30 rounded-full mx-auto border-(--color) border-4" src="/images/avatar_2.jpg" alt="Profile Photo"/>
				</Magnetic>
				<h1 className="sm:text-3xl text-2xl"><strong>Nathaniel G. Wood</strong></h1>
				<h3 className="hero_tag text-(--color)_gradient">OSU computer science student and aspiring software developer.</h3>
				<div className="flex flex-row mx-auto gap-3 my-auto items-center">
					<Magnetic>
						<a href='https://github.com/enjiwood'>
							<div className="bg-black rounded-full h-10 w-10 flex items-center justify-center">
								<VscGithubInverted color={'white'} size={28}/>
							</div>
						</a>
					</Magnetic>
					<Magnetic>
						<a href='https://www.linkedin.com/in/ngwood/'>
							<div className="bg-[#0072b1] rounded-full h-10 w-10 flex items-center justify-center">
								<FaLinkedin color={'white'} size={28}/>
							</div>
						</a>
					</Magnetic>
					<Magnetic>
						<div className="bg-[#f1aa25] rounded-full h-10 w-10 flex items-center justify-center"
							onClick={ contactSection }>
							<MdEmail color={'white'} size={28}/>
						</div>
					</Magnetic>
				</div>
			</div>
		</section>
    );
};

export default Hero;