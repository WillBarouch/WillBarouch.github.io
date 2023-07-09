/* eslint react/no-unescaped-entities */
import Image from 'next/image'
import Profile from "./img/profile.png"
import { FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import {BiLogoFigma} from "react-icons/bi";
import { SiHtml5, SiCss3, SiTailwindcss, SiTypescript, SiNextdotjs, SiScikitlearn, SiPandas } from 'react-icons/si';
import { FaReact, FaPython } from 'react-icons/fa';
import { SiBlender, SiAdobepremierepro,SiAdobephotoshop, SiAdobeillustrator,  SiAdobeaftereffects } from 'react-icons/si';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-black text-white">
    <div className="w-1/3 aspect-square relative">
        <Image src={Profile} alt={"A photo of me!"} fill></Image>
    </div>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-5" >
        Hi I&apos;m <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Will Barouch</span>
    </h1>
    <h2 className="scroll-m-20 border-b py-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        I&apos;m a student in Sydney, Australia with interests in programing, medicine and computer-aided design.
    </h2>
    <div className="flex flex-row items-center justify-center mt-16">
        <div className="w-24 mx-5">
            <TooltipProvider delayDuration={100}>
                <Tooltip>
                    <TooltipTrigger><a href="https://github.com/WillBarouch"><FaGithub size="100%"/></a></TooltipTrigger>
                    <TooltipContent>
                        <p>WillBarouch</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>

        <div className="w-24 mx-5">
            <TooltipProvider delayDuration={100}>
                <Tooltip>
                    <TooltipTrigger><a href="mailto:willbarouch@gmail.com"><ImMail4 size="100%"/></a></TooltipTrigger>
                    <TooltipContent>
                        <p>willbarouch@gmail.com</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    </div>

    <section className="mt-28 p-8 text-center">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Education
        </h2>
        <div className="flex flex-auto w-full flex-wrap justify-center">
            <Card className="m-4 w-72">
                <CardHeader >
                    <CardTitle>Reddam House</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>2014 - Present</p>
                    <p>Grade 9</p>
                </CardContent>
            </Card>
            <Card className="m-4 w-72">
                <CardHeader >
                    <CardTitle>Crimson Global Academy</CardTitle>
                </CardHeader>
                <CardContent>
                    <p> Biology iGCSE - Grade 9 </p>
                    <p> Biology iAS - Currently completing </p>
                    <p> Chemistry iAS - Currently completing </p>
                    <p> AP Data Science</p>
                </CardContent>
            </Card>
           <Card className="m-4 w-72">
                <CardHeader >
                    <CardTitle>University of New South Wales Selective Gifted Program</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>2020</p>
                    <p>Neuroanatomy Course</p>
                </CardContent>
            </Card>
        </div>
    </section>

    <section className="mt-28 p-8 text-center">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Skills
        </h2>
        <div className="flex flex-auto w-full flex-wrap justify-center">
            <Card className="m-4 w-64">
                <CardHeader >
                    <CardTitle>UI/UX design</CardTitle>
                </CardHeader>
                <CardFooter>
                    <div className="flex flex-auto w-full flex-wrap mx-auto items-center justify-center">
                        <SiAdobephotoshop className="m-2" size="20%"/>
                        <SiAdobeillustrator className="m-2" size="20%"/>
                        <BiLogoFigma className="m-2" size="20%"/>
                    </div>
                </CardFooter>
            </Card>

            <Card className="m-4 w-64">
                <CardHeader >
                    <CardTitle>Web Development</CardTitle>
                </CardHeader>
                <CardFooter>
                    <div className="flex flex-auto w-full flex-wrap mx-auto items-center justify-center">
                        <FaReact className="m-2" size="20%"/>
                        <SiCss3 className="m-2" size="20%"/>
                        <SiHtml5 className="m-2" size="20%"/>
                        <SiTypescript className="m-2" size="20%"/>
                        <SiTailwindcss className="m-2" size="20%"/>
                        <SiNextdotjs className="m-2" size="20%"/>
                    </div>
                </CardFooter>
            </Card>

            <Card className="m-4 w-64">
                <CardHeader >
                    <CardTitle>ML & Data Science</CardTitle>
                </CardHeader>
                <CardFooter>
                    <div className="flex flex-auto w-full flex-wrap mx-auto items-center justify-center">
                        <FaPython className="m-2" size="20%"/>
                        <SiScikitlearn className="m-2" size="20%"/>
                        <SiPandas className="m-2" size="20%"/>
                    </div>
                </CardFooter>
            </Card>

            <Card className="m-4 w-64">
                <CardHeader >
                    <CardTitle>3D Design & Rendering</CardTitle>
                </CardHeader>
                <CardFooter>
                    <div className="flex flex-auto w-full flex-wrap mx-auto items-center justify-center">
                        <SiBlender className="m-2" size="20%"/>
                        <SiAdobeaftereffects className="m-2" size="20%"/>
                        <SiAdobepremierepro className="m-2" size="20%"/>
                    </div>
                </CardFooter>
            </Card>

        </div>
    </section>

    <section className="mt-28 p-8 text-center">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Experience
        </h2>
        <div className="flex flex-auto w-full flex-wrap justify-center">
            <Card className="m-4 w-72">
                <CardHeader >
                    <CardTitle>Uber</CardTitle>
                    <CardDescription>Internship</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>2021 - 2022</p>
                    <p className="mx-auto underline"><a href="./files/Crimson%20Careers%20Program%20Certificates%20(5).pdf">Certificate Of Completion</a></p>
                    <p className="mx-auto underline"><a href="./files/Willaim%20Barouch%20Uber%20Letter%20of%20Reference%20.pdf">Letter Of Reccomendation</a></p>
                </CardContent>
            </Card>

            <Card className="m-4 w-72">
                <CardHeader >
                    <CardTitle>SingularityU Global Impact Challenge Finals</CardTitle>
                    <CardDescription>Judge</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>2019</p>
                </CardContent>
            </Card>

            <Card className="m-4 w-72">
                <CardHeader >
                    <CardTitle>Code Camp</CardTitle>
                    <CardDescription>Teachers Assistant</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>2018 - 2019</p>
                </CardContent>
            </Card>
        </div>
    </section>


    </main>
  )
}
