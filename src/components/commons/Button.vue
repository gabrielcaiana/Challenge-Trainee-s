<template>
  <button
    :class="estilo"
    :style="{ width: widthButton + 'px', borderRadius: radius + 'px' }"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: ["estilo", "label", "widthButton", "radius"],
  data() {
    return {
      width: this.widthButton,
      borderRadius: this.radius,
    };
  },
};
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

.button-secundary {
  width: 400px;
  height: 46px;
  border-radius: 18px;
  border: none;
  background-color: map-get($theme-colors, "black");
  color: map-get($theme-colors, "white");
  transition: 0.3s;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color: map-get($theme-colors, "green");
  }
}
</style>
