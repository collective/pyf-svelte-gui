<script>
  import { search_classifiers } from "./stores";
  import { plone_version } from "./stores";
  import { package_type } from "./stores";
  import { doSearch } from "./search";
  import { package_types, plone_versions } from "./settings";
</script>

<style>

</style>

<div class="search_filter">
  <form>
    <label for="plone_version">Plone version</label>
    <select
      name="plone_version"
      id="plone_version"
      bind:value={$plone_version}
      on:change={doSearch}>
      {#each plone_versions as version}
        <option value={version.value}  selected={version.default===true}>{version.title}</option>
      {/each}
    </select>
    <label for="package_type">Package type</label>
    <select
      name="package_type"
      id="package_type"
      bind:value={$package_type}
      on:change={doSearch}>
      {#each package_types as ptype}
        <option value={ptype.value} selected={ptype.default===true}>{ptype.title}</option>
      {/each}
    </select>
  </form>
</div>
