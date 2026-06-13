/**
 * One-time seed of the current resume content into Sanity.
 *
 * Usage (after setting NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET
 * and SANITY_API_WRITE_TOKEN in .env.local):
 *
 *   npm run seed
 *
 * It is idempotent — documents use fixed _ids and are created-or-replaced, so
 * re-running resets the seeded content to the values below.
 */
import { readFileSync } from 'fs';
import { join } from 'path';
import { config as loadEnv } from 'dotenv';
import { createClient } from '@sanity/client';
import { LexoRank } from 'lexorank';

loadEnv({ path: '.env.local' });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

if (!projectId || !token) {
    throw new Error(
        'Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local',
    );
}

const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });

type SeedDoc = { _id: string; [key: string]: unknown };

/** A Sanity reference to an uploaded file asset. */
function fileRef(assetId: string) {
    return { _type: 'file', asset: { _type: 'reference', _ref: assetId } };
}

/**
 * Recursively add a `_key` to every object that is an item of an array, as
 * Sanity requires for array-of-object fields. Leaves non-array-item objects
 * (like file/asset references) untouched.
 */
function addKeys<T>(value: T): T {
    if (Array.isArray(value)) {
        return value.map((item, i) =>
            item && typeof item === 'object' && !Array.isArray(item)
                ? addKeys({ _key: `k${i}`, ...(item as Record<string, unknown>) })
                : item,
        ) as unknown as T;
    }
    if (value && typeof value === 'object') {
        const out: Record<string, unknown> = {};
        for (const [k, v] of Object.entries(value)) out[k] = addKeys(v);
        return out as T;
    }
    return value;
}

/** Upload a PDF from /public/files and return its asset _id. */
async function uploadPdf(filename: string): Promise<string> {
    const buffer = readFileSync(join(process.cwd(), 'public', 'files', filename));
    const asset = await client.assets.upload('file', buffer, {
        filename,
        contentType: 'application/pdf',
    });
    return asset._id;
}

/** Generate increasing LexoRank strings, matching the orderable-list scheme. */
function ranker() {
    let rank = LexoRank.min();
    return () => {
        rank = rank.genNext();
        return rank.toString();
    };
}

const ICYDANZ = 'https://icydanz2024.calicotab.com/ICYDANZ2024/';

const settings = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    name: 'Will Barouch',
    tagline:
        "I'm a student in Sydney, Australia with interests in medicine, biotechnology, and computer science.",
    email: 'me@willbarouch.com',
    githubUrl: 'https://github.com/WillBarouch',
    githubLabel: 'WillBarouch',
    // resumeFile is attached at seed time after the PDF is uploaded.
};

const education: SeedDoc[] = [
    {
        _id: 'education.reddam',
        institution: 'Reddam House',
        period: '2014–Present',
        details: [
            'Full Academic Colours (2021–25)',
            'Gold Medal Accelerated Biology (2024, 2025)',
            'Gold Medal Accelerated Science Extension (2025)',
            'Gold Medal Computing Technology (2025)',
            'Applied Sciences Award (2025)',
            'Australian Defence Force Future Innovators Awards (2024)',
            'Gold Medal Mathematics (2024)',
            'Silver Medal Computing Technology (2024)',
            'Silver Medal Science (2023)',
            'HSC Mathematics, Biology & Science Extension accelerant',
        ].map((text) => ({ text, muted: false })),
    },
    {
        _id: 'education.crimson',
        institution: 'Crimson Global Academy',
        period: '2021–23',
        details: [
            { text: 'Biology iGCSE', muted: false },
            { text: 'Achieved Grade 9', muted: true },
            { text: 'Biology iAS', muted: false },
            { text: 'Achieved Grade A', muted: true },
            { text: 'Chemistry iAS', muted: false },
            { text: 'Achieved Grade A', muted: true },
            { text: 'AP Data Science', muted: false },
        ],
    },
    {
        _id: 'education.unsw',
        institution: 'University of New South Wales Selective Gifted Program',
        period: '2017, 2020',
        details: [
            { text: 'The Brain in Health and Disease', muted: false },
            { text: 'Neuroanatomy Course', muted: true },
            { text: 'The Games People Play', muted: false },
            { text: 'Game Psychology Course', muted: true },
        ],
    },
];

const skills: SeedDoc[] = [
    {
        _id: 'skill.uiux',
        title: 'UI/UX design',
        icons: [
            { iconKey: 'SiAdobephotoshop', label: 'Adobe Photoshop' },
            { iconKey: 'SiAdobeillustrator', label: 'Adobe Illustrator' },
            { iconKey: 'BiLogoFigma', label: 'Figma' },
        ],
    },
    {
        _id: 'skill.web',
        title: 'Web Development',
        icons: [
            { iconKey: 'SiTypescript', label: 'TypeScript' },
            { iconKey: 'SiCss3', label: 'CSS3' },
            { iconKey: 'SiHtml5', label: 'HTML5' },
            { iconKey: 'FaReact', label: 'React' },
            { iconKey: 'SiTailwindcss', label: 'Tailwind CSS' },
            { iconKey: 'SiNextdotjs', label: 'Next.js' },
        ],
    },
    {
        _id: 'skill.science',
        title: 'Science',
        icons: [
            { iconKey: 'SiLatex', label: 'LaTeX' },
            { iconKey: 'SiR', label: 'R' },
            { iconKey: 'SiJupyter', label: 'Jupyter Notebook' },
            { iconKey: 'FaUbuntu', label: 'Ubuntu Linux' },
            { iconKey: 'IoMusicalNoteSharp', label: 'Bioconductor' },
            { iconKey: 'FaPython', label: 'Python' },
        ],
    },
    {
        _id: 'skill.3d',
        title: '3D Design & Rendering',
        linkLabel: 'My portfolio',
        linkHref: '/portfolio',
        icons: [
            { iconKey: 'SiBlender', label: 'Blender' },
            { iconKey: 'SiAdobeaftereffects', label: 'Adobe After Effects' },
            { iconKey: 'SiAdobepremierepro', label: 'Adobe Premiere Pro' },
        ],
    },
];

const debating: SeedDoc[] = [
    {
        _id: 'debating.icyd',
        title: 'International Competition For Young Debaters',
        titleUrl: 'https://icyd2024.calicotab.com/icyd2024/',
        subtitle: 'Oxford Union, UK — 2024',
        results: [
            { text: '4th open team' },
            { text: '1st novice team' },
            { text: '4th novice speaker' },
            { text: '2nd open speaker (AU/NZ regional round)', url: ICYDANZ },
            { text: '2nd open team (AU/NZ regional round)', url: ICYDANZ },
        ],
    },
    {
        _id: 'debating.cambridge',
        title: 'Cambridge Schools AU/NZ',
        titleUrl: 'https://cambridgeanz2024.calicotab.com/CambridgeANZ2024/',
        subtitle: "Saint Ignatius' College, Riverview — 2024",
        results: [{ text: 'Semifinalist' }, { text: '8th open team' }],
    },
];

const experience: SeedDoc[] = [
    {
        _id: 'experience.centenary',
        title: 'Centenary Institute',
        subtitle: 'Work Experience Placement',
        details: [{ text: '2024' }],
    },
    {
        _id: 'experience.uber',
        title: 'Uber',
        subtitle: 'Internship',
        // The two PDF lines get a `file` asset attached at seed time.
        details: [
            { text: '2021–2022' },
            { text: 'Certificate Of Completion' },
            { text: 'Letter Of Reccomendation' },
        ],
    },
    {
        _id: 'experience.singularityu',
        title: 'SingularityU Global Impact Challenge Finals',
        subtitle: 'Judge',
        details: [{ text: '2019' }],
    },
];

async function seed() {
    // Upload PDFs to Sanity so they are CMS-hosted, then attach the references.
    console.log('Uploading PDFs...');
    const [resumeId, certId, refId] = await Promise.all([
        uploadPdf('Resume.pdf'),
        uploadPdf('Certificate.pdf'),
        uploadPdf('Reference.pdf'),
    ]);
    (settings as Record<string, unknown>).resumeFile = fileRef(resumeId);

    const uber = experience.find((d) => d._id === 'experience.uber')!;
    const uberDetails = uber.details as Record<string, unknown>[];
    uberDetails[1].file = fileRef(certId);
    uberDetails[2].file = fileRef(refId);

    const tx = client.transaction();

    tx.createOrReplace(addKeys(settings));

    const eduRank = ranker();
    for (const doc of education) {
        tx.createOrReplace(addKeys({ _type: 'education', orderRank: eduRank(), ...doc }));
    }

    const skillRank = ranker();
    for (const doc of skills) {
        tx.createOrReplace(addKeys({ _type: 'skillCategory', orderRank: skillRank(), ...doc }));
    }

    const debateRank = ranker();
    for (const doc of debating) {
        tx.createOrReplace(addKeys({ _type: 'debating', orderRank: debateRank(), ...doc }));
    }

    const expRank = ranker();
    for (const doc of experience) {
        tx.createOrReplace(addKeys({ _type: 'experience', orderRank: expRank(), ...doc }));
    }

    await tx.commit();
    console.log(
        `Seeded: 1 settings, ${education.length} education, ${skills.length} skills, ` +
            `${debating.length} debating, ${experience.length} experience.`,
    );
}

seed().catch((err) => {
    console.error(err);
    process.exit(1);
});
