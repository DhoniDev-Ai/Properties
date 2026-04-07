import { MetadataRoute } from 'next'
import { getProperties } from '@/lib/data'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://agrwalproperties.com'
  
  // Basic Routes
  const routes = [
    '',
    '/properties',
    '/sell',
    '/properties/apartment',
    '/properties/plot',
    '/properties/villa',
    '/properties/commercial',
    '/properties/agriculture-land',
    '/properties/farmhouse',
    '/properties/hb',
    '/properties/project',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))
 
  // Dynamic Property Routes
  const properties = await getProperties()
  const propertyEntries = properties.map((prop) => ({
    url: `${baseUrl}/properties/${prop.type.toLowerCase().replace(' ', '-')}/${prop.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))
 
  return [...routes, ...propertyEntries]
}
