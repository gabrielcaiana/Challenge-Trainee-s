<template>
  <div class="start">
    <div class="content-start">
      <h5>Start an Open Enterprise</h5>
      <p>
        If you can’t wait to run a new or existing organization on Open
        Enterprise and are willing to explore and navigate the beta, we’d love
        to get you started.
      </p>
      <Button estilo="button-default" label="Request early access" />
    </div>
    <div class="ilustration-start">
      <img src="@/assets/images/ilustration-footer.svg" alt="ilustração" />
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
.start {
  display: flex;
  padding: 16px 32px;
  justify-content: space-between;
  align-items: center;
  background: map-get($theme-colors, "background");

  .content-start {
    h5 {
      font-size: 48px;
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

  .ilustration-start img {
    max-height: 700px;
  }
}
</style>
