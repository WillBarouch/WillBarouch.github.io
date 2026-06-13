import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from './env';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    // `useCdn: false` reads from the live API for strong consistency. Caching /
    // performance is handled at the Next.js layer via the page's `revalidate`,
    // so the API CDN would only add staleness here.
    useCdn: false,
});
