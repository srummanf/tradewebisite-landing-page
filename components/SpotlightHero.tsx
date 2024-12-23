"use client";
import React from "react";
import { Spotlight } from "./ui/spotlight";
import { SparklesCore } from "./ui/sparkles";

const SpotlightHero = () => {
    return (
        <div
            className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            {/* Sparkle effect */}
            <div className="absolute inset-0 flex justify-center items-end">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className=" p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                {/* Title Section */}

                <div className="flex flex-col items-center justify-center overflow-hidden rounded-md relative z-20">

                    <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white">
                        Aceternity
                    </h1>

                    <div className="w-[40rem] h-40 relative">
                        {/* Gradients */}
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />



                        {/* Radial Gradient to prevent sharp edges */}
                        <div className="absolute inset-0 w-full h-full opacity-90 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                        <div className="flex justify-center">
                            <p className="font-normal text-base text-neutral-300 max-w-lg text-center mx-auto mt-7">
                                Spotlight effect is a great way to draw attention to a specific part
                                of the page. Here, we are drawing the attention towards the text
                                section of the page. I don&apos;t know why but I&apos;m running out of
                                copy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpotlightHero;
