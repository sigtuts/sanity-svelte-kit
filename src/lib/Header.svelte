<script context="module">
  import {page} from '$app/stores'
</script>

<script>
  export let blogTitle = "Lovely Lovely Joy's Blog"

  let path
  $: ({path} = $page)
</script>

<header >
  <svg 

  xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320"><path fill="#030303" fill-opacity="0.2" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  <h2 >{blogTitle}</h2>
  <nav >
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
  nav{
    grid-column:3; text-align: center;
  }

  header {
    display: grid;
  justify-content: space-between;
  align-content: center;
  color: #888;
  gap: 4px;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100vw;
  background-color:#202A30;
  height:5rem;
  
  }
  h2{
    grid-column:2;text-align: center;
    text-shadow: #FC0 1px 0 10px;
  }
  @media screen and (min-width: 400px) {
    header {
      flex-direction: row-reverse;
      align-items: center;
    }
  }
</style>
