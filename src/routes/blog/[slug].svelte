<script context="module">
  export async function load({page, fetch}) {
    try {
      const url = `/blog/${page.params.slug}.json`
      const res = await fetch(url)
      const data = await res.json()

      if (data?.post) {
        return {
          props: data
        }
      }
    } catch (err) {
      return {
        status: 500,
        error: new Error(`Could not load url`)
      }
    }
  }
</script>

<script>
  import PortableText from '@portabletext/svelte'
  import Code from '$lib/Code.svelte'
  import Link from '$lib/Link.svelte'
  import ImageBlock from '$lib/ImageBlock.svelte'
  import AuthorBlock from '$lib/AuthorBlock.svelte'
  import AuthorCard from '$lib/AuthorCard.svelte'
  import SanityImage from '$lib/SanityImage.svelte'

  export let post

  let gallery
  let img

  try {
    if (post.gallery.images.length != 0) {
      gallery = true
    }
  } catch (error) {
    gallery = false
  }
  function open() {
    console.log('open')
  }
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>
<p>
  Published {new Date(post.publishedAt).toLocaleDateString('en', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })}
</p>

{#each post.authors || [] as author}
  <AuthorCard {author} />
{/each}

{#if post.image}
  <SanityImage image={post.image} />
{/if}
{#if post.price}
  <h2>{post.price}</h2>
{/if}

<PortableText
  blocks={post.body}
  serializers={{
    types: {
      code: Code,
      image: ImageBlock,
      authorReference: AuthorBlock
    },
    marks: {
      link: Link
    }
  }}
/>

{#if gallery}
  {#each post.gallery.images as imi}
    <SanityImage image={imi} />
  {/each}
{:else}
  <p>Nothing to view</p>
{/if}
