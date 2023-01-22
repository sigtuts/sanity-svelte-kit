<script>
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Header blogTitle={"Lovely Lovely Joy's Kitchen"} />

<main style="padding: 1em">
  <slot />
</main>

<Footer></Footer>
<style>
  :global(a) {
    color: #1a4d9e;
  }
  :global(a:hover) {
    color: #1e61cd;
    border-bottom: none;
  }
</style>
