'use client';
import IconTooltip from "@/components/ui/IconTooltip";
import ScrollDownIndicator from "@/components/ui/ScrollDownIndicator";
import { FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import {BiLogoFigma} from "react-icons/bi";
import {
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiTypescript,
    SiNextdotjs,
    SiScikitlearn,
    SiPandas,
    SiNumpy, SiTensorflow, SiPytorch, SiLatex, SiMicrosoftexcel, SiJupyter
} from 'react-icons/si';
import { FaReact, FaPython, FaUbuntu } from 'react-icons/fa';
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
import Link from 'next/link';
import Header from '@/components/ui/Header';
import Nav from '@/components/ui/Nav';
import Section from '@/components/ui/Section';
import {isMobile} from "react-device-detect";


export default function Index() {
    return (
    <main className={`flex min-h-screen flex-col items-center px-6 sm:px-24 bg-background dark:bg-dark-background text-text dark:text-dark-text text-left`}>

    <Nav/>

    <section className={`h-screen ${isMobile ? "pt-[12vh]" : "pt-[25vh]"} mb-56 sm:mb-0`} id="landing">

    <Header />
    <h2 className="border-b py-4 text-3xl font-semibold tracking-tight transition-colors justify-around">
        I&apos;m a student in Sydney, Australia with interests in programming, medicine and computer-aided design.
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
                    <TooltipTrigger><a href="mailto:me@willbarouch.com"><ImMail4 size="100%"/></a></TooltipTrigger>
                    <TooltipContent>
                        <p>me@willbarouch.com</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    </div>
    </section>


    <Section id="Education">
        <div className="flex flex-auto w-full flex-wrap justify-center">
            <Card>
                <CardHeader >
                    <CardTitle>Reddam House</CardTitle>
                    <CardDescription>2014 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Full Academic Colours 2020 ‑ 2023</p>
                    <p>Gold Medal Science 2021 & 2022</p>
                    <p>3 Year Public Speaking Course</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader >
                    <CardTitle>Crimson Global Academy</CardTitle>
                    <CardDescription>2021 - 2023</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Biology iGCSE</p>
                    <CardDescription>Achieved Grade 9</CardDescription>
                    <p>Biology iAS</p>
                  
                    <CardDescription>Achieved Grade A</CardDescription>
        
                    <p>Chemistry iAS</p>
                    <CardDescription>Achieved Grade A</CardDescription>
                    <p>AP Data Science</p>
                </CardContent>
            </Card>
           <Card>
                <CardHeader >
                    <CardTitle>University of New South Wales Selective Gifted Program</CardTitle>
                    <CardDescription>2017, 2020</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>The Brain in Health and Disease</p>
                    <CardDescription> Neuroanatomy Course </CardDescription>
                    <br/>
                    <p>The Games People Play</p>
                    <CardDescription>Game Psychology Course</CardDescription>
                </CardContent>
            </Card>
        </div>
    </Section>

    <Section id={"Skills"}>
        <Card>
          <CardHeader>
            <CardTitle>UI/UX design</CardTitle>
          </CardHeader>
          <CardFooter>
            <div className="flex flex-auto w-full flex-wrap mx-auto items-center justify-center">
              <IconTooltip icon={SiAdobephotoshop} tooltipText="Adobe Photoshop" />
              <IconTooltip icon={SiAdobeillustrator} tooltipText="Adobe Illustrator" />
              <IconTooltip icon={BiLogoFigma} tooltipText="Figma" />
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Web Development</CardTitle>
          </CardHeader>
          <CardFooter className=" self-center">
            <div className="flex flex-auto w-full flex-wrap m-auto items-center justify-center">
              <IconTooltip icon={SiTypescript} tooltipText="TypeScript" />
              <IconTooltip icon={SiCss3} tooltipText="CSS3" />
              <IconTooltip icon={SiHtml5} tooltipText="HTML5" />
              <IconTooltip icon={FaReact} tooltipText="React" />
              <IconTooltip icon={SiTailwindcss} tooltipText="Tailwind CSS" />
              <IconTooltip icon={SiNextdotjs} tooltipText="Next.js" />
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Science</CardTitle>
          </CardHeader>
          <CardFooter>
            <div className="flex flex-auto w-full flex-wrap mx-auto items-center justify-center">
              <IconTooltip icon={FaPython} tooltipText="Python" />
              <IconTooltip icon={SiPandas} tooltipText="Pandas" />
              <IconTooltip icon={SiNumpy} tooltipText="NumPy" />
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Machine Learning</CardTitle>
          </CardHeader>
          <CardFooter>
            <div className="flex flex-auto w-full flex-wrap mx-auto items-center justify-center">
                <IconTooltip icon={FaPython} tooltipText="Python" />
                <IconTooltip icon={SiTensorflow} tooltipText="TensorFlow" />
                <IconTooltip icon={SiPytorch} tooltipText="PyTorch" />
                <IconTooltip icon={SiScikitlearn} tooltipText="Scikit-learn" />
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Science</CardTitle>
          </CardHeader>
          <CardFooter>
            <div className="flex flex-auto w-full flex-wrap mx-auto items-center justify-center">
              <IconTooltip icon={SiLatex} tooltipText="LaTeX" />
              <IconTooltip icon={SiMicrosoftexcel} tooltipText="Microsoft Excel" />
              <IconTooltip icon={SiJupyter} tooltipText="Jupyter Notebook" />
              <IconTooltip icon={FaUbuntu} tooltipText="Ubuntu Linux" />
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3D Design & Rendering</CardTitle>
              <CardDescription><Link href="/portfolio" className="underline bold">My portfolio</Link></CardDescription>
          </CardHeader>
          <CardFooter>
            <div className="flex flex-auto w-full flex-wrap mx-auto items-center justify-center">
              <IconTooltip icon={SiBlender} tooltipText="Blender" />
              <IconTooltip icon={SiAdobeaftereffects} tooltipText="Adobe After Effects" />
              <IconTooltip icon={SiAdobepremierepro} tooltipText="Adobe Premiere Pro" />
            </div>
          </CardFooter>
        </Card>
    </Section>

    <Section id="Debating">
        <div className="flex flex-auto w-full flex-wrap justify-center">
            <Card>
                <CardHeader >
                    <CardTitle><Link href={"https://icyd2024.calicotab.com/icyd2024/"}>International Competition For Young Debaters</Link></CardTitle>
                    <CardDescription>Oxford Union, UK — 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <p> 4th open team </p>
                    <p> 1st novice team </p>
                    <p> 4th novice speaker </p>
                    <p> 2nd open speaker <Link href={"https://icydanz2024.calicotab.com/ICYDANZ2024/"}>(AU/NZ regional
                        round)</Link></p>
                    <p> 2nd open team <Link href={"https://icydanz2024.calicotab.com/ICYDANZ2024/"}> (AU/NZ regional round)</Link></p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader >
                    <CardTitle><Link href={"https://cambridgeanz2024.calicotab.com/CambridgeANZ2024/"}>Cambridge Schools AU/NZ</Link></CardTitle>
                    <CardDescription>Saint Ignatius&apos; College, Riverview — 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <p> Semifinalist</p>
                    <p> 8th open team </p>
                </CardContent>
            </Card>
        </div>
    </Section>


    <Section id="Experience">
        <div className="flex flex-auto w-full flex-wrap justify-center">
            <Card>
                <CardHeader >
                    <CardTitle>Uber</CardTitle>
                    <CardDescription>Internship</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>2021 - 2022</p>
                    <p className="mx-auto underline"><a href="../files/Certificate.pdf">Certificate Of Completion</a></p>
                    <p className="mx-auto underline"><a href="../files/Reference.pdf">Letter Of Reccomendation</a></p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader >
                    <CardTitle>SingularityU Global Impact Challenge Finals</CardTitle>
                    <CardDescription>Judge</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>2019</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader >
                    <CardTitle>Code Camp</CardTitle>
                    <CardDescription>Teachers Assistant</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>2018 - 2019</p>
                </CardContent>
            </Card>
        </div>
    </Section>

    <Section id="Contact">
        <div className={"inline"}>
            <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors">Email: <a href="mailto:me@willbarouch.com" className="underline"> me@willbarouch.com </a></h3>
        </div>
    </Section>
  <ScrollDownIndicator />
</main>
  )
}
