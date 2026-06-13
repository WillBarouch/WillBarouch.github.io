import { client } from './client';
import {
    debatingQuery,
    educationQuery,
    experienceQuery,
    settingsQuery,
    skillsQuery,
} from './queries';

export interface SiteSettings {
    name: string;
    tagline: string;
    email: string;
    githubUrl: string;
    githubLabel: string;
    resumeUrl?: string;
}

export interface DetailLine {
    text: string;
    muted?: boolean;
}

export interface LinkedLine {
    text: string;
    url?: string;
}

export interface SkillIcon {
    iconKey: string;
    label: string;
}

export interface Education {
    _id: string;
    institution: string;
    period: string;
    details: DetailLine[];
}

export interface SkillCategory {
    _id: string;
    title: string;
    linkLabel?: string;
    linkHref?: string;
    icons: SkillIcon[];
}

export interface Debating {
    _id: string;
    title: string;
    titleUrl?: string;
    subtitle: string;
    results: LinkedLine[];
}

export interface Experience {
    _id: string;
    title: string;
    subtitle: string;
    details: LinkedLine[];
}

export interface ResumeData {
    settings: SiteSettings | null;
    education: Education[];
    skills: SkillCategory[];
    debating: Debating[];
    experience: Experience[];
}

const EMPTY: ResumeData = {
    settings: null,
    education: [],
    skills: [],
    debating: [],
    experience: [],
};

export async function getResumeData(): Promise<ResumeData> {
    try {
        const [settings, education, skills, debating, experience] = await Promise.all([
            client.fetch<SiteSettings | null>(settingsQuery),
            client.fetch<Education[]>(educationQuery),
            client.fetch<SkillCategory[]>(skillsQuery),
            client.fetch<Debating[]>(debatingQuery),
            client.fetch<Experience[]>(experienceQuery),
        ]);

        return {
            settings,
            education: education ?? [],
            skills: skills ?? [],
            debating: debating ?? [],
            experience: experience ?? [],
        };
    } catch (err) {
        // Don't let a transient Sanity outage take down the whole page.
        console.error('Failed to fetch resume data from Sanity:', err);
        return EMPTY;
    }
}
