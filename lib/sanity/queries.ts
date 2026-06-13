import { groq } from 'next-sanity';

// Each list type is ordered by the rank field maintained by
// @sanity/orderable-document-list, so card order is editable in the Studio.

export const settingsQuery = groq`*[_type == "siteSettings"][0]{
    name, tagline, email, githubUrl, githubLabel, resumeUrl,
    "resumeFileUrl": resumeFile.asset->url
}`;

export const educationQuery = groq`*[_type == "education"] | order(orderRank){
    _id, institution, period, details[]{ _key, text, muted }
}`;

export const skillsQuery = groq`*[_type == "skillCategory"] | order(orderRank){
    _id, title, linkLabel, linkHref, icons[]{ _key, iconKey, label }
}`;

export const debatingQuery = groq`*[_type == "debating"] | order(orderRank){
    _id, title, titleUrl, subtitle, results[]{ _key, text, url }
}`;

export const experienceQuery = groq`*[_type == "experience"] | order(orderRank){
    _id, title, subtitle, details[]{ _key, text, url, "fileUrl": file.asset->url }
}`;
