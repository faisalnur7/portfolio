import ExperienceCalculator from "./ExperienceCalculator";
import TypingAnimation from "./TypingAnimation";

const Hero = () => {

        const phpStart = `<?php`;
        const phpEnd = `?>`;

    return (
        <section className="lg:px-8 bg-gray-900 dark:bg-gray-900 relative z-20 shadow-[0_0_5px_5px_rgba(0,0,0,0.3)]">
            <div className="flex container mx-0 px-6 pt-8 pb-0 lg:mx-auto gap-8 lg:pt-16 justify-between">
                <div className="flex flex-col w-full relative">
                    <h1 className="max-w-2xl mb-4  text-2xl lg:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-white dark:text-white">
                        Hey, I'm Faisal Nur
                    </h1>
                    <h1 className="max-w-2xl mb-4 text-xl lg:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
                        <TypingAnimation color={'text-chocolate_light'} texts={["Laravel Developer", "Full stack developer", "Wordpress theme developer", "React developer"]} />
                    </h1>

                    <div className="hidden sm:block mockup-code bg-slate-950 text-slate-100 my-6 px-4 shadow-[0_0_10px_0px_rgba(200,200,200,0.3)]">
                        <pre className="pl-2 pr-0 whitespace-pre-wrap">
                            <code>
                                <br />
                                {phpStart}<br />
                                // Expert web development with PHP and Laravel. Specializing in SaaS, e-commerce, and payment integration. <br />
                                // Building dynamic web solutions with Codeigniter. Offering SaaS, e-commerce, and payment integration. <br />
                                // Creating robust WordPress sites. Services include SaaS, e-commerce, and payment integration. <br />
                                // Transforming ideas with ReactJS. Specializing in SaaS applications, e-commerce, and payment integration. <br />
                                // <ExperienceCalculator /> <br/>
                                {phpEnd}
                            </code>
                        </pre>
                    </div>
                    
                    <button
                        style={{
                            "--spread": "90deg",
                            "--shimmer-color": "#ffffff",
                            "--radius": "200px",
                            "--speed": "3s",
                            "--cut": "0.1em",
                            "--bg": "rgba(0, 0, 0, 1)",
                        }}
                        className="
                            group 
                            relative 
                            z-0 
                            cursor-pointer
                            overflow-hidden
                            whitespace-nowrap
                            border-white/10
                            [background:var(--bg)]
                            [border-radius:var(--radius)]
                            transform-gpu
                            transition-transform
                            duration-300
                            ease-in-out
                            active:translate-y-px
                            shadow-2xl
                            inline-flex
                            w-full
                            max-w-[350px]
                            items-center
                            justify-center
                            mb-4
                            px-5
                            py-3
                            text-base
                            font-medium
                            text-center
                            dark:text-white
                            text-gray-900
                            border
                            border-gray-300
                            hover:bg-gray-100
                            focus:ring-4
                            focus:ring-gray-100
                            dark:border-gray-700
                            dark:hover:bg-gray-700
                            dark:focus:ring-gray-800"
                        >
                        <div className="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
                            <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:3] [border-radius:0] [mask:none]">
                            <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"></div>
                            </div>
                        </div>
                        <a
                            href="/pdf/faisal-nur-cv.pdf"
                            download
                            className="z-50 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg"
                        >
                            RESUME
                        </a>
                        <div className="insert-0 absolute size-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transform-gpu transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"></div>
                        <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
                    </button>

                    <div className="hidden lg:mt-0 2xl:flex lg:justify-end absolute right-0 bottom-0">
                        <img src="../src/assets/img/f_banner_img_1.png" alt="faisal nur" className="w-[350px] h-vh" />
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Hero;