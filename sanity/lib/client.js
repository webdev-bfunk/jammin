import { createClient, groq } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

// uses GROQ
export async function getPosts() {
  const revalidate = 60 
  const posts = await client.fetch(groq`*[_type == 'post']{
  _id,
  title,
  "slug": slug.current,
  "image": mainImage.asset->url,
  publishedAt,
  "body": pt::text(body),
  "author": *[_type == 'author' && _id == ^.author._ref][0]{
    _id,
    name,
    "slug": slug.current,
    },
    categories[]->{
    _id,
    title
  },
  "content": body,
}`, {next: {revalidate}});
  return posts;
}

// const builder = imageUrlBuilder(client);

// export const urlFor = (source) => builder.image(source);

// export async function getPosts() {
//   const client = createClient({
//     projectId: "b6zq48k6",
//     dataset: "production",
//     useCdn: true,
//     apiVersion: "2023-06-22",
//     token: process.env.SANITY_SECRET_TOKEN,
//   });

//   return client.fetch(groq`*[_type == 'post']{
//   _id,
//   title,
//   "slug": slug.current,
//   "image": mainImage.asset->url,
//   publishedAt,
//   "body": pt::text(body)
// }`);
// }