<script>
  import { doSearch } from "./search"
  import { search_term } from "./stores";
  import { package_list } from "./stores";

  let term = "";
  $: search_term.set(term), term, doSearch();

</script>

<style>
</style>

<div class="search_form">
  <form>
    <input
      type="text"
      placeholder="Packagename.."
      spellcheck="false"
      name="text"
      bind:value={term} />
  </form>
</div>
