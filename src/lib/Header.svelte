<script context="module">
  import {page} from '$app/stores'
</script>

<script>
  export let blogTitle
  export let svg
  let path
  $: ({path} = $page)
</script>

<header>
  <!-- <header style="background-image: url({svg});"> -->
  <!-- <h2>{blogTitle}</h2> -->
  <img src="GrumpyJoy.png" alt="" />
  <nav>
    <ul>
      <li><a data-selected={path === '/'} href="/">home</a></li>
      <li><a href="/authors/the-greatest">Greatest</a></li>
      <li><a href="/authors/lovely-joy">Lovely Joy</a></li>
    </ul>
  </nav>
</header>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a[data-selected='true'] {
    font-weight: 600;
    color: #555;
  }
  a {
    text-decoration: none;
    display: block;
    color: #5555;
  }
  a:hover {
    color: #5559;
  }
  nav {
    grid-column: 3;
    text-align: center;
  }

  header {
    display: grid;
    place-items: center;
    justify-content: space-between;
    align-content: center;
    color: #888;
    gap: 4px;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100vw;
    background-color: #202a30;
    height: 5rem;
  }
  img {
    width: 100%;
    grid-column: 2;
  }
  /* h2 {
    grid-column: 2;
    text-align: center;
    text-shadow: #fc0 1px 0 10px;
  } */
  @media screen and (min-width: 768px) {
    /* header {
      flex-direction: row-reverse;
      align-items: center;
    } */
    img {
      width: 50%;
      grid-column: 2;
    }
  }
</style>
