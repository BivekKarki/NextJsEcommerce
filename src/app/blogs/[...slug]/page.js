import React from 'react'

async function BlogsBySlug( {params }) {
    const slugs = await params.slug;
  return (
    <div>
      BlogsBySlug : {slugs}
    </div>
  )
}

export default BlogsBySlug
