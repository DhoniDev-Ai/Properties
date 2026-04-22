import { MetadataRoute } from 'next'
import { getProperties } from '@/lib/data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://agrawalrealestate.com'

  // Dynamic routes from properties
  const properties = await getProperties({});
  const propertyEntries = properties.map((property) => ({
    url: `${baseUrl}/properties/${property.type.toLowerCase().replace(/ /g, '-')}/${property.slug || property.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Category routes
  const categories = ['apartment', 'plot', 'villa', 'commercial', 'farmhouse', 'hb']
  const categoryEntries = categories.map((cat) => ({
    url: `${baseUrl}/properties/${cat}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/sell`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...categoryEntries,
    ...propertyEntries,
  ]
}
