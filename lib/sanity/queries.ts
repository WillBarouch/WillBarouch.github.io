import { groq } from 'next-sanity';

// Each list type is ordered by the rank field maintained by
// @sanity/orderable-document-list, so card order is editable in the Studio.

export const settingsQuery = groq`*[_type == "siteSettings"][0]{
    name, tagline, email, githubUrl, githubLabel, resumeUrl
}`;

export const educationQuery = groq`*[_type == "education"] | order(orderRank){
    _id, institution, period, details[]{ text, muted }
}`;

export const skillsQuery = groq`*[_type == "skillCategory"] | order(orderRank){
    _id, title, linkLabel, linkHref, icons[]{ iconKey, label }
}`;

export const debatingQuery = groq`*[_type == "debating"] | order(orderRank){
    _id, title, titleUrl, subtitle, results[]{ text, url }
}`;

export const experienceQuery = groq`*[_type == "experience"] | order(orderRank){
    _id, title, subtitle, details[]{ text, url }
}`;
