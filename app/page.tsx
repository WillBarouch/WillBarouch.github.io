import ResumeContent from './ResumeContent';
import { getResumeData } from '@/lib/sanity/fetch';

// Incremental Static Regeneration: content edits in the Studio surface within
// this window without needing a redeploy.
export const revalidate = 60;

export default async function Index() {
    const data = await getResumeData();
    return <ResumeContent data={data} />;
}
