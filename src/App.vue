<template>
  <div class="container">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: map-get($theme-colors, "background" );

  .content {
    max-width: 1370px;
  }
}
</style>
