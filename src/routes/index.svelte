<script context="module">
  export async function load({fetch}) {
    try {
      const res = await fetch('/blog/all.json')
      const data = await res.json()
      return {
        props: data
      }
    } catch (err) {
      console.log('500:', err)
    }
  }
</script>

<script>
  import PostsGrid from '$lib/PostsGrid.svelte'
  import {onMount} from 'svelte'

  let get = false

  onMount(async () => {
    get = true
  })

  export let posts
  // export let authors
</script>

<svelte:head>
  <title>Lovely Joy's Kitchen</title>
</svelte:head>

<h1 style="color:#888">Recent posts</h1>

{#if get}
  <PostsGrid {posts} />
{/if}
