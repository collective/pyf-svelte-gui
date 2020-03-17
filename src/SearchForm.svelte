<script>
  import { search_term } from "./stores";
  import { doSearch } from "./search"

  $search_term = "collective";

</script>

<style>

</style>

<div class="search_form">
  <form>
    <input
      type="text"
      placeholder="Packagename.."
      spellcheck="false"
      on:input={doSearch}
      name="text"
      bind:value={$search_term} />
  </form>
</div>
