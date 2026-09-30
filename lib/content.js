import 'server-only';
import { defaults, fieldOptions } from '@/content/defaults';
import { readJson, writeJson } from './store';

const FILE = 'content.json';

// Coerce `value` to the shape of `template` (a value from defaults): unknown keys are
// dropped, wrong types fall back to the default, lists use their first item as the template.
function conform(value, template, key) {
  if (typeof template === 'string') {
    if (typeof value !== 'string') return template;
    if (fieldOptions[key] && !fieldOptions[key].includes(value)) return template;
    return value.slice(0, 5000);
  }
  if (typeof template === 'boolean') return typeof value === 'boolean' ? value : template;
  if (Array.isArray(template)) {
    if (!Array.isArray(value)) return template;
    return value.slice(0, 50).map((item) => conform(item, template[0]));
  }
  const out = {};
  for (const k of Object.keys(template)) {
    out[k] = conform(value && typeof value === 'object' ? value[k] : undefined, template[k], k);
  }
  return out;
}

export async function getContent() {
  return conform(await readJson(FILE, {}), defaults);
}

export async function saveContent(input) {
  const clean = conform(input, defaults);
  await writeJson(FILE, clean);
  return clean;
}
