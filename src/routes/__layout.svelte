<script>
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
  import image from '$lib/wave.svg'
</script>

<Header blogTitle={'Grumpy Joy Cusine'} svg={image} />

<span class="layout-container">
  <span class="sides"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. At, deleniti quae nobis, dignissimos
    non quos, vitae rerum beatae sunt ipsa deserunt veniam corporis ad numquam voluptatum animi
    ipsum iste harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur,
    quisquam fugit blanditiis nisi ab suscipit natus nam sequi, tempora facilis dicta quaerat
    laborum atque ut voluptatibus. Minima, eaque aspernatur.</span
  >
  <main style="padding: 1em">
    <slot />
  </main>
  <span class="sides"
    >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima rerum eius similique
    necessitatibus, consequatur debitis nisi non cum? Rerum enim eligendi ipsam voluptas quisquam,
    similique vel rem eum quod? Dolorem. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Rem ipsum perspiciatis quis excepturi odio, et provident numquam. Laborum ipsa earum ea magni
    doloribus incidunt ab minus beatae dolor, tenetur molestias.</span
  >
</span>
<Footer />

<style>
  :global(a) {
    color: #1a4d9e;
  }
  :global(a:hover) {
    color: #1e61cd;
    border-bottom: none;
  }
  .sides {
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    text-align: center;
    color: #888;
  }
  .layout-container {
    display: grid;
    justify-content: space-between;
    align-content: center;

    gap: 4px;
    grid-template-columns: 1fr 4fr 1fr;
    width: 100%;
  }
</style>
