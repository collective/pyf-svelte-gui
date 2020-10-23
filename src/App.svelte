<script>
  import PackageList from "./PackageList";
  import SearchForm from "./SearchForm";
  import SearchFilter from "./SearchFilter";
  import { search_classifiers } from "./stores.js";
  import { unsub_search_filter, unsub_search_term } from "./search.js";
  import { onDestroy } from "svelte";

  onDestroy(unsub_search_term);
  onDestroy(unsub_search_filter);
</script>

<style>
  body {
    background-color: rgb(246, 246, 246);
  }
  main {
    /* text-align: center; */
    padding: 1em;
    max-width: 640px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    font-size: 1.8em;
    font-weight: 500;
  }

  img {
    max-width: 100%;
  }

  @media (min-width: 640px) {
    main {
      max-width: 900px;
      background-color: #fff;
    }
  }
</style>

<body>
  <main>
    <img src="images/plone-logo-128.png" alt="Plone logo" />
    <h1>Package Catalog</h1>
    <SearchForm />
    <SearchFilter />
    <PackageList />

  </main>
</body>
