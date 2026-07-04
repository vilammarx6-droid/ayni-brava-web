import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'ik88lryr',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01'
});

const builder = imageUrlBuilder(client);

client.fetch('*[_type == "home"]').then(res => {
  console.log("Found", res.length, "documents");
  res.forEach(doc => {
    console.log(`- ID: ${doc._id}, Title: ${doc.heroTitle}`);
  });
}).catch(console.error);
