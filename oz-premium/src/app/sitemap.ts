import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ozpremiumfinance.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://ozpremiumfinance.com/products',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://ozpremiumfinance.com/about',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
        url: 'https://ozpremiumfinance.com/investors',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    {
    url: 'https://ozpremiumfinance.com/resources',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5,
    },
    {
        url: 'https://ozpremiumfinance.com/contact',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
        },
  ]
}