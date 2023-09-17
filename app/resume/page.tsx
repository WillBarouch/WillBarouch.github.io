import {redirect} from 'next/navigation'

export default async function Redirect() {
    redirect("/files/Resume.pdf")
}