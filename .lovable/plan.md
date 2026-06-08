

## Plan: Add SEO improvements for Google visibility

### What we'll do

1. **Enhance `index.html` meta tags**
   - Add `keywords` meta tag with relevant terms (web development, South Africa, logo design, etc.)
   - Update Open Graph tags with the site URL and a proper image (use the logo)
   - Fix Twitter tags to reference Bekhukha instead of Lovable
   - Add canonical URL link tag
   - Add `robots` meta tag

2. **Create `public/sitemap.xml`**
   - Single-page sitemap pointing to the published URL
   - Include lastmod date and priority

3. **Update `public/robots.txt`**
   - Add a `Sitemap:` directive pointing to sitemap.xml

### Files changed
- `index.html` — enhanced meta tags, OG tags, Twitter card tags
- `public/sitemap.xml` — new file
- `public/robots.txt` — add sitemap reference

