import { redirect } from 'next/navigation'
import { client } from '@/lib/sanity/client'
import { settingsQuery } from '@/lib/sanity/queries'

export const revalidate = 60

export default async function Redirect() {
    let resumeUrl = "/files/Resume.pdf"
    try {
        const settings = await client.fetch<{ resumeUrl?: string; resumeFileUrl?: string } | null>(settingsQuery)
        if (settings?.resumeFileUrl) resumeUrl = settings.resumeFileUrl
        else if (settings?.resumeUrl) resumeUrl = settings.resumeUrl
    } catch (err) {
        console.error('Failed to fetch resume URL from Sanity:', err)
    }
    redirect(resumeUrl)
}