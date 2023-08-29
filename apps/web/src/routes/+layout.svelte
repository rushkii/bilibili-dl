<script>
  import "../app.css";
  import Header from "$components/Header.svelte";
</script>


<svelte:head>
  <title>OpenBstation</title>
  <meta
    name="viewport"
    content="minimum-scale=1, initial-scale=1, width=device-width"
  />
</svelte:head>

<Header/>
<slot />
