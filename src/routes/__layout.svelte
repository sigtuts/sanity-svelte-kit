<script>
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Header blogTitle={"Lovely Lovely Joy's Kitchen"} />

<span style="
  display: grid;
  justify-content: space-between;
  align-content: center;

  gap: 4px;
  grid-template-columns: 1fr 4fr 1fr;
  width: 100%;
  ">
<span style="border-style: solid;border-width: 1px;border-radius: 10px; text-align: center;">.</span>
<main style="padding: 1em">
  <slot />
</main>

<span style="border-style: solid;border-width: 1px;border-radius: 10px; text-align: center;">.</span>
</span>
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
