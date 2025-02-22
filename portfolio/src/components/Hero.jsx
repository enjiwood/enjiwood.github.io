const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col relative">
			<div className="w-full mx-auto flex flex-col gap-3 my-auto items-center">
				<img className="w-30 h-30 rounded-full mx-auto border-(--color) border-4" src="/images/avatar.jpg" alt="Profile Photo"/>
				<h1 className="sm:text-3xl text-2xl"><strong>Nathaniel G. Wood</strong></h1>
				<h3 className="hero_tag text-(--color)_gradient">OSU computer science student and aspiring software developer.</h3>
			</div>
		</section>
    );
};

export default Hero;