<style>
  .package {
    border: 1px solid #aaa;
    border-radius: 2px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1em;
    margin: 0 1em 1em 0;
    flex-basis: 40%;
    flex-grow: 1;
  }
</style>

<div class="package">
  <slot>
    <em>no content was provided</em>
  </slot>
</div>
