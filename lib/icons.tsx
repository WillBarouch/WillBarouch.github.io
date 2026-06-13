import type { IconType } from 'react-icons';
import { FaGithub, FaPython, FaReact, FaUbuntu } from 'react-icons/fa';
import { ImMail4 } from 'react-icons/im';
import { BiLogoFigma } from 'react-icons/bi';
import { IoMusicalNoteSharp } from 'react-icons/io5';
import {
    SiAdobeaftereffects,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiBlender,
    SiCss3,
    SiHtml5,
    SiJupyter,
    SiLatex,
    SiNextdotjs,
    SiR,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';

/**
 * Registry mapping the string keys stored in Sanity to their react-icons
 * components. The keys are the single source of truth for both the Studio
 * dropdown (see `iconOptions`) and rendering on the page.
 */
export const iconRegistry = {
    SiAdobephotoshop,
    SiAdobeillustrator,
    BiLogoFigma,
    SiTypescript,
    SiCss3,
    SiHtml5,
    FaReact,
    SiTailwindcss,
    SiNextdotjs,
    SiLatex,
    SiR,
    SiJupyter,
    FaUbuntu,
    IoMusicalNoteSharp,
    FaPython,
    SiBlender,
    SiAdobeaftereffects,
    SiAdobepremierepro,
    FaGithub,
    ImMail4,
} satisfies Record<string, IconType>;

export type IconKey = keyof typeof iconRegistry;

export const iconKeys = Object.keys(iconRegistry) as IconKey[];

/** Option list for the Sanity schema `iconKey` dropdown. */
export const iconOptions = iconKeys.map((key) => ({ title: key, value: key }));

/** Resolve a stored key to a component, falling back to `undefined` if unknown. */
export function getIcon(key: string | undefined): IconType | undefined {
    if (!key) return undefined;
    return iconRegistry[key as IconKey];
}
