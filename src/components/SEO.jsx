import React, { useEffect } from 'react'

export default function SEO({ 
  title, 
  description, 
  url, 
  image, 
  imageAlt,
  jsonLd, 
  robots = 'index, follow',
  locale = 'id_ID',
  twitterSite,
  twitterCreator
}) {
  const siteName = 'Infimech'
  const siteUrl = 'https://infimech.tech'

  const fullTitle = title ? `${title} — ${siteName}` : siteName
  const metaUrl = url || siteUrl
  const metaImage = image || `${siteUrl}/img/Logo1.png`
  const metaImageAlt = imageAlt || `${title || siteName} - Infimech`
  const metaDescription =
    description || 'Infimech — engineering, simulation and project services for energy and industrial clients.'

  useEffect(() => {
    const prevTitle = document.title
    const prevLang = document.documentElement.lang
    
    document.title = fullTitle
    document.documentElement.lang = locale.split('_')[0] // 'id_ID' -> 'id'

    // track created elements so we can clean them up on unmount
    const created = []

    const setMeta = (name, content, attr = 'name') => {
      if (!content) return null
      const selector = `meta[${attr}="${name}"]`
      
      // Remove all existing meta tags with this attribute to avoid duplicates
      const existing = document.head.querySelectorAll(selector)
      existing.forEach(el => {
        if (el && el.parentNode) el.parentNode.removeChild(el)
      })
      
      // Create new meta tag
      const el = document.createElement('meta')
      el.setAttribute(attr, name)
      el.setAttribute('content', content)
      document.head.appendChild(el)
      created.push(el)
      return el
    }

    setMeta('description', metaDescription)
    setMeta('robots', robots)

    setMeta('og:site_name', siteName, 'property')
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', metaDescription, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:url', metaUrl, 'property')
    setMeta('og:locale', locale, 'property')
    setMeta('og:image', metaImage, 'property')
    setMeta('og:image:alt', metaImageAlt, 'property')
    // recommend default image dimensions for social previews
    setMeta('og:image:width', '1200', 'property')
    setMeta('og:image:height', '630', 'property')

    setMeta('twitter:card', 'summary_large_image')
    if (twitterSite) setMeta('twitter:site', twitterSite)
    if (twitterCreator) setMeta('twitter:creator', twitterCreator)
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', metaDescription)
    setMeta('twitter:image', metaImage)
    setMeta('twitter:image:alt', metaImageAlt)

    // canonical link - remove existing first to avoid duplicates
    const existingCanonical = document.head.querySelectorAll('link[rel="canonical"]')
    existingCanonical.forEach(el => {
      if (el && el.parentNode) el.parentNode.removeChild(el)
    })
    
    const canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', metaUrl)
    document.head.appendChild(canonical)
    created.push(canonical)

    // JSON-LD: support object or array. If array, wrap in @graph
    let jsonLdEl
    if (jsonLd) {
      jsonLdEl = document.createElement('script')
      jsonLdEl.type = 'application/ld+json'
      if (Array.isArray(jsonLd)) {
        jsonLdEl.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': jsonLd })
      } else {
        jsonLdEl.text = JSON.stringify(jsonLd)
      }
      document.head.appendChild(jsonLdEl)
      created.push(jsonLdEl)
    }

    return () => {
      document.title = prevTitle
      document.documentElement.lang = prevLang
      // remove elements we created
      for (const el of created) {
        if (el && el.parentNode) el.parentNode.removeChild(el)
      }
    }
  }, [fullTitle, metaDescription, metaUrl, metaImage, metaImageAlt, jsonLd, robots, locale, twitterSite, twitterCreator])

  return null
}
