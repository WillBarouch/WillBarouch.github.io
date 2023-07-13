import Image from 'next/image'
import Profile from "./img/profile.png"
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
import Link from 'next/link';


export default function Index() {
    return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-black text-white">

    <Image src={Profile} alt={"A photo of me!"} className={"w-72 relative"}></Image>

    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-5" >
        Hi I&apos;m <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Will Barouch</span>
    </h1>
    <h2 className="scroll-m-20 border-b py-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0 justify-around">
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
            <Card>
                <CardHeader >
                    <CardTitle>Reddam House</CardTitle>
                    <CardDescription>2014 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Grade 9</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader >
                    <CardTitle>Crimson Global Academy</CardTitle>
                    <CardDescription>2021 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Biology iGCSE</p>
                    <CardDescription>Achieved Grade 9</CardDescription>
                    <p>Biology iAS</p>
                    <CardDescription>Awaiting results</CardDescription>
                    <p>Chemistry iAS</p>
                    <CardDescription>Awaiting results </CardDescription>
                    <p>AP Data Science</p>
                </CardContent>
            </Card>
           <Card>
                <CardHeader >
                    <CardTitle>University of New South Wales Selective Gifted Program</CardTitle>
                    <CardDescription>2020</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Neuroanatomy Course</p>
                </CardContent>
            </Card>
        </div>
    </section>

    <section className="mt-28 p-8 text-center">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Skills
        </h2>
        <div className="flex flex-auto w-full mx-auto lg:w-[95%] xl:w-[85%] 2xl:w-[60%] flex-wrap justify-center">

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


        </div>
    </section>

    <section className="mt-28 p-8 text-center">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Experience
        </h2>
        <div className="flex flex-auto w-full flex-wrap justify-center">
            <Card>
                <CardHeader >
                    <CardTitle>Uber</CardTitle>
                    <CardDescription>Internship</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>2021 - 2022</p>
                    <p className="mx-auto underline"><a href="../files/Crimson%20Careers%20Program%20Certificates%20(5).pdf">Certificate Of Completion</a></p>
                    <p className="mx-auto underline"><a href="../files/Willaim%20Barouch%20Uber%20Letter%20of%20Reference%20.pdf">Letter Of Reccomendation</a></p>
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
    </section>

    <section className="mt-28 p-8 text-center">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Contact
        </h2>
        <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors mt-5">Mobile: +61 403 359 219</h3>
        <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors">Email: <a href="mailto:willbarouch@gmail.com" className="underline"> willbarouch@gmail.com </a></h3>
    </section>

  <ScrollDownIndicator />

    </main>
  )
}
