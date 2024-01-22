<script context="module">
  import {page} from '$app/stores'
</script>

<script>
  export let blogTitle = "Lovely Lovely Joy's Blog"

  let path
  $: ({path} = $page)
</script>

<header style="background-color:#202A30;">
  <span style="grid-column:2;text-align: center;">{blogTitle}</span>
  <nav style="grid-column:3; text-align: center;">
    <ul>
      <li><a data-selected={path === '/'} href="/">home</a></li>
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
  }

  header {
    display: grid;
  justify-content: space-between;
  align-content: center;

  gap: 4px;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100vw;
  
  }
  @media screen and (min-width: 400px) {
    header {
      flex-direction: row-reverse;
      align-items: center;
    }
  }
</style>
