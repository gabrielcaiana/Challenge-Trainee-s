<template>
  <div class="help">
    <h4>Help us improve Open Enterprise</h4>
    <p>
      As an Open Enterprise ourselves, we are actively looking for new talent to
      join our mission of improving and delivering the Open Enterprise model to
      the world. Apply for open tasks and earn a stake in our success.
    </p>
    <div class="cards">
      <div class="card">
        <span>Ideate a list of features based on the Sociocracy model</span>
        <p>
          We’re looking for someone interested in business theory and research
          that’ll help us.
        </p>
        <div class="footer-card">
          <span>5 auto</span>
          <p>Apply by May 15</p>
        </div>
      </div>

      <div class="card">
        <span>Update documentation with FAQs</span>
        <p>
          Review our community chat for the most frequently asked questions and
          document answers for our product docs.
        </p>
        <div class="footer-card">
          <span>10 AUT</span>
          <p>Apply by May 18</p>
        </div>
      </div>

      <div class="card">
        <span>Tutorial video series</span>
        <p>
          Create a series of video tutorials that cover everything from start to
          finish on using Open Enterprise.
        </p>
        <div class="footer-card">
          <span>40 AUT</span>
          <p>Apply by May 20</p>
        </div>
      </div>
    </div>
    <Button 
      estilo="button-secundary" 
      widthButton="146"
      radius="8"
      label="View more"
    />
  </div>
</template>

<script>
import Button from"@/components/commons/Button"
export default {
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
.help {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px 0;
  background: map-get($theme-colors, "background");

  h4 {
    font-size: 48px;
    color: map-get($theme-colors, "black");
  }

  p {
    text-align: center;
    max-width: 800px;
    margin-top: 16px;
    font-size: 18px;
    line-height: 28px;
    color: map-get($theme-colors, "black");
    font-weight: 400;
  }

  .cards {
    display: flex;
    justify-content: center;
    margin: 42px 0;
    width: 100%;
  }
}

.card {
  width: 30%;
  height: 216px;
  margin: 0 16px;
  background-color: map-get($theme-colors, "white");
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;

  img {
    width: 64px;
    margin-bottom: 16px;
  }

  span {
    font-size: 18px;
    font-weight: 600;
    color: map-get($theme-colors, "black");
  }

  p {
    font-size: 16px;
    text-align: left;
    margin-bottom: 16px;
    line-height: 26px;
    color: map-get($theme-colors, "black");
  }

  .footer-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    p {
      font-size: 16px;
      font-weight: 600;
    }

    span {
      padding: 8px 16px;
      font-size: 16px;
      font-weight: 300;
      border-radius: 40px;
      background-color: map-get($theme-colors, "green");
      color: map-get($theme-colors, "white");
    }
  }
}
</style>
