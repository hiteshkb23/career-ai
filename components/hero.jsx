"use client";

import React, { useEffect , useRef} from 'react'
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    const imageRef = useRef(null);

    useEffect(() => {
        const imageElement = imageRef.current;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

        if (scrollPosition > scrollThreshold) {
            imageElement.classList.add("scrolled");
        } else {
            imageElement.classList.remove("scrolled");
        }
    };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="w-full pt-36 md:pd-48 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
                <div className="space-y-6 text-center"> 
                    <div className="space-y-6 mx-auto">
                        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl gradient-title">
                            Your AI Career Coach for
                            <br />
                            Professional Success
                        </h1>
                        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                            Advace you career with personalized guidance, interview prep and
                            AI-powered tools for job success.
                        </p>
                    </div>

                    <div className="flex justify-center space-x-4">
                        <Link href="/dashboard">
                            <Button size="lg" className="px-8">
                                Get Started
                            </Button>
                        </Link>
                        {/* demo youtube  change it */}
                        <Link href="#">
                            <Button size="lg" className="px-8" variant="outline">
                                Watch Demo
                            </Button>
                        </Link>
                    </div>

                    <div className='hero-image-wrapper mt-5 md:mt-0'>
                        <div ref={imageRef} className='hero-image'>
                            <Image
                                src="/banner.jpeg"
                                width={1280}
                                height={720}
                                alt="Dashboard Preview"
                                className="rounded-lg shadow-2xl border mx-auto"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HeroSection;