const postContentModules = import.meta.glob('./*.html', {
  query: '?raw',
  import: 'default',
});

export async function loadPostContent(slug: string): Promise<string | null> {
  const loader = postContentModules[`./${slug}.html`];
  if (!loader) return null;
  return (await loader()) as string;
}
