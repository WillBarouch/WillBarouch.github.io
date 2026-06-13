'use client';
import IconTooltip from "@/components/ui/IconTooltip";
import ScrollDownIndicator from "@/components/ui/ScrollDownIndicator";
import { FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import Link from 'next/link';
import Header from '@/components/ui/Header';
import Nav from '@/components/ui/Nav';
import Section from '@/components/ui/Section';
import { isMobile } from "react-device-detect";
import { getIcon } from "@/lib/icons";
import type { ResumeData } from "@/lib/sanity/fetch";

export default function ResumeContent({ data }: { data: ResumeData }) {
    const { settings, education, skills, debating, experience } = data;
    const email = settings?.email ?? "me@willbarouch.com";

    return (
        <main className={`flex min-h-screen flex-col items-center px-6 sm:px-24 bg-background dark:bg-dark-background text-text dark:text-dark-text text-left`}>

            <Nav/>

            <section className={`h-screen ${isMobile ? "pt-[12vh]" : "pt-[25vh]"} mb-56 sm:mb-0`} id="landing">

                <Header name={settings?.name} />
                <h2 className="border-b py-4 text-3xl font-semibold tracking-tight transition-colors justify-around">
                    {settings?.tagline}
                </h2>
                <div className="flex flex-row items-center justify-center mt-16">
                    {settings?.githubUrl && (
                        <div className="w-24 mx-5">
                            <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger><a href={settings.githubUrl}><FaGithub size="100%"/></a></TooltipTrigger>
                                    <TooltipContent>
                                        <p>{settings.githubLabel || settings.githubUrl}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    )}

                    <div className="w-24 mx-5">
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger><a href={`mailto:${email}`}><ImMail4 size="100%"/></a></TooltipTrigger>
                                <TooltipContent>
                                    <p>{email}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </section>

            <Section id="Education">
                <div className="flex flex-auto w-full flex-wrap justify-center">
                    {education.map((item) => (
                        <Card key={item._id}>
                            <CardHeader>
                                <CardTitle>{item.institution}</CardTitle>
                                {item.period && <CardDescription>{item.period}</CardDescription>}
                            </CardHeader>
                            <CardContent>
                                {item.details?.map((detail, i) =>
                                    detail.muted ? (
                                        <CardDescription key={i}>{detail.text}</CardDescription>
                                    ) : (
                                        <p key={i}>{detail.text}</p>
                                    )
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section id="Skills">
                {skills.map((category) => (
                    <Card key={category._id}>
                        <CardHeader>
                            <CardTitle>{category.title}</CardTitle>
                            {category.linkLabel && category.linkHref && (
                                <CardDescription>
                                    <Link href={category.linkHref} className="underline bold">{category.linkLabel}</Link>
                                </CardDescription>
                            )}
                        </CardHeader>
                        <CardFooter>
                            <div className="flex flex-auto w-full flex-wrap mx-auto items-center justify-center">
                                {category.icons?.map((icon, i) => {
                                    const IconComponent = getIcon(icon.iconKey);
                                    if (!IconComponent) return null;
                                    return (
                                        <IconTooltip key={i} icon={IconComponent} tooltipText={icon.label} />
                                    );
                                })}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </Section>

            <Section id="Debating">
                <div className="flex flex-auto w-full flex-wrap justify-center">
                    {debating.map((item) => (
                        <Card key={item._id}>
                            <CardHeader>
                                <CardTitle>
                                    {item.titleUrl ? (
                                        <Link href={item.titleUrl}>{item.title}</Link>
                                    ) : (
                                        item.title
                                    )}
                                </CardTitle>
                                {item.subtitle && <CardDescription>{item.subtitle}</CardDescription>}
                            </CardHeader>
                            <CardContent>
                                {item.results?.map((result, i) => (
                                    <p key={i}>
                                        {result.url ? (
                                            <Link href={result.url}>{result.text}</Link>
                                        ) : (
                                            result.text
                                        )}
                                    </p>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section id="Experience">
                <div className="flex flex-auto w-full flex-wrap justify-center">
                    {experience.map((item) => (
                        <Card key={item._id}>
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                                {item.subtitle && <CardDescription>{item.subtitle}</CardDescription>}
                            </CardHeader>
                            <CardContent>
                                {item.details?.map((detail, i) =>
                                    detail.url ? (
                                        <p key={i} className="mx-auto underline">
                                            <a href={detail.url}>{detail.text}</a>
                                        </p>
                                    ) : (
                                        <p key={i}>{detail.text}</p>
                                    )
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section id="Contact">
                <div className={"inline"}>
                    <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors">Email: <a href={`mailto:${email}`} className="underline"> {email} </a></h3>
                </div>
            </Section>
            <ScrollDownIndicator />
        </main>
    )
}
