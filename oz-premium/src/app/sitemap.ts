import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ozpremiumfinance.com.au',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://ozpremiumfinance.com.au/products',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://ozpremiumfinance.com.au/about',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
        url: 'https://ozpremiumfinance.com.au/investors',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    {
    url: 'https://ozpremiumfinance.com.au/resources',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5,
    },
    {
        url: 'https://ozpremiumfinance.com.au/contact',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
        },
  ]
}