import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from './env';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    // `useCdn` serves cached, edge-delivered content. Combined with the page's
    // `revalidate`, content edits surface without a redeploy while staying fast.
    useCdn: true,
});
