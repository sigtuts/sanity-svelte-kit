<script>
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
  import image from '$lib/wave.svg'
</script>

<Header blogTitle={'Grumpy Joy Cusine'} svg={image} />

<span class="layout-container">
  <span class="sides"
    >At Grumpy Joy, the secret ingredient is always a dash of mystery and a sprinkle of culinary
    whimsy. Who needs recipes when you have a chef's intuition, right? Your dishes are like a
    treasure hunt for the taste buds, where every bite leads to a 'Eureka!' moment. Whether it's the
    adobo with a surprise crunch or the pancit with an unexpected zing, your patrons are in for a
    delightful dining adventure. And let's not forget the pasta – it's like Italy took a detour
    through Manila! Bon appétit, or as we say in Filipino, kainan na!
  </span>
  <main style="padding: 1em">
    <slot />
  </main>
  <span class="sides"
    >Starting a restaurant called Grumpy Joy sounds like the ultimate oxymoron, doesn't it? Imagine
    walking in, greeted by servers with a frown that's turned upside down, serving 'Sourpuss Soup'
    with a side of 'Bitter Greens'. But here's the twist – it's all about the joy of good food and
    the love of a grumpy cat meme that inspired the name. It's a place where the grumpiness is just
    part of the charm, and the joy comes from the delicious, heartwarming meals that turn frowns
    into smiles. So, why start Grumpy Joy? Because sometimes, a little grumpiness can lead to a lot
    of happiness, especially when there's cake involved. And let's be honest, who doesn't love a
    place that doesn't take itself too seriously? It's the perfect spot for those days when you
    spill coffee on your shirt, step on a Lego, or forget your phone at home – a reminder that joy
    can be found in the grumpiest of places.</span
  >
</span>

<!-- <Footer /> -->
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
    /* grid-template-columns: 1fr 4fr 1fr; */
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    width: 100%;
  }
  @media (min-width: 768px) {
    .layout-container {
      display: grid;
      justify-content: space-between;
      align-content: center;

      gap: 4px;
      grid-template-columns: 1fr 4fr 1fr;
      width: 100%;
    }
  }
</style>
