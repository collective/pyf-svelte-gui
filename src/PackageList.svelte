<script>
  import { package_list } from "./stores.js";
  import PackageItem from "./PackageItem";

</script>

<style>

.package_list {
  display: flex;
  flex-wrap: wrap;
}

</style>

<div>found: {$package_list.length} Plone addons</div>
<div class="package_list">
  {#each $package_list as package_item}
    <PackageItem>
      <h2>{package_item.name} ({package_item.version})</h2>
      <p>{package_item.summary}</p>
    </PackageItem>
  {/each}
</div>
