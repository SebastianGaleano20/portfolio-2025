const { STRAPI_HOST, STRAPI_TOKEN } = process.env;
// Fetch data from Strapi CMS API
export async function query(url: string) {
  const res = await fetch(`${STRAPI_HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  });
  return await res.json();
}
