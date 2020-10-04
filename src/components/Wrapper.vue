<template>
  <div class="wrapper">
    <div class="content-wrapper">
      <h1>A new model for open collaboration</h1>
      <p>
        Run an organization where members get rewarded for their contributions
        with fractional ownership.
      </p>
      <!-- <button>Request early access</button> -->
      <Button estilo="button-default" label="Request early access"/>
    </div>
    <div class="ilustration-wrapper">
      <img src="@/assets/images/ilustration-header.svg" alt="ilustração" />
    </div>
  </div>
</template>

<script>
import Button from "./commons/Button";
export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: map-get($theme-colors, "white");
  display: flex;
  padding: 16px 32px;
  justify-content: space-between;
  align-items: center;
  max-height: 600px;

  .content-wrapper {
    h1 {
      font-size: 58px;
      line-height: 68px;
      margin-bottom: 16px;
      color: map-get($theme-colors, "black");
    }

    p {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 32px;
      color: map-get($theme-colors, "gray");
    }
  }

  .ilustration-wrapper img {
    max-height: 700px;
  }
}
</style>
