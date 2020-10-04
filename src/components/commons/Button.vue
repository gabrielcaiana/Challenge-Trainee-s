<template>
  <button :class="estilo"> {{ label }} </button>
</template>

<script>
export default {
 props: ["estilo", "label"]
}
</script>

<style lang="scss" scoped>
.button-default {
  width: 235px;
  height: 64px;
  border-radius: 8px;
  border: none;
  background-color: map-get($theme-colors, "green");
  color: map-get($theme-colors, "white");
  transition: 0.3s;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: map-get($theme-colors, "green-hover");
  }
}
</style>
