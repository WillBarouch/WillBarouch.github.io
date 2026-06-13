import type { SchemaTypeDefinition } from 'sanity';

import { siteSettings } from './siteSettings';
import { education } from './education';
import { skillCategory } from './skillCategory';
import { debating } from './debating';
import { experience } from './experience';

export const schemaTypes: SchemaTypeDefinition[] = [
    siteSettings,
    education,
    skillCategory,
    debating,
    experience,
];
