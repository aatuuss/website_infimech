import React, { useEffect } from 'react'

function setOrCreateMeta(name, attr = 'name') {
  return (content) => {
    if (!content) return;
    let selector = `${attr}="${name}"`;
    let el = document.head.querySelector(`[${selector}]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }
}

export default function SEO({ title, description, url, image, jsonLd }) {
  const siteName = 'Infimech'
  const siteUrl = 'https://infimech.tech'

  const fullTitle = title ? `${title} — ${siteName}` : siteName
  const metaUrl = url || siteUrl
  const metaImage = image || `${siteUrl}/img/Logo1.png`
  const metaDescription =
    description || 'Infimech — engineering, simulation and project services for energy and industrial clients.'

  useEffect(() => {
    const prevTitle = document.title
    document.title = fullTitle

    // track created elements so we can clean them up on unmount
    const created = []

    const setMeta = (name, content, attr = 'name') => {
      if (!content) return null
      const selector = `[${attr}="${name}"]`
      let el = document.head.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
        created.push(el)
      }
      el.setAttribute('content', content)
      return el
    }

    setMeta('description', metaDescription)

    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', metaDescription, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:url', metaUrl, 'property')
    setMeta('og:image', metaImage, 'property')
    // recommend default image dimensions for social previews
    setMeta('og:image:width', '1200', 'property')
    setMeta('og:image:height', '630', 'property')

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', metaDescription)
    setMeta('twitter:image', metaImage)

    // canonical link
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
      created.push(canonical)
    }
    canonical.setAttribute('href', metaUrl)

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
      // remove elements we created
      for (const el of created) {
        if (el && el.parentNode) el.parentNode.removeChild(el)
      }
    }
  }, [fullTitle, metaDescription, metaUrl, metaImage, jsonLd])

  return null
}
