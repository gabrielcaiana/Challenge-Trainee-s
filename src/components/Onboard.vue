<template>
  <div class="onboard">
    <div class="cards">
      <div class="card">
        <ul>
          <li>
            <img
              class="user-photo"
              src="@/assets/images/member4.png"
              alt="peaple"
            />
            <div class="user-information">
              <span>Dillon Kydd</span>
              <p>100 SHARES</p>
            </div>
          </li>
        </ul>

        <p>
          Hey guys, love what you’re doing and I’m convinced that together we’ll
          achieve amazing things.
        </p>

        <div class="informations">
          <div>
            <span>commit</span>
            <p>10,000 dai</p>
          </div>

          <div>
            <span>shares</span>
            <p>20</p>
          </div>
        </div>
        <Button estilo="button-secundary" label="Go to vote" />
      </div>
    </div>

    <div class="content">
      <img src="@/assets/icons/Icon-green.png" alt="icone" />
      <h3>Onboard users, investors and advisors as you grow</h3>
      <p>
        You’ve bootstrapped and delivered an MVP, and some investors and
        advisors are interested in having a chat with you. As an Open
        Enterprise, you can onboard them seamlessly into your digital
        organization and align them with your success.
      </p>
    </div>
  </div>
</template>

<script>
import Button from "@/components/commons/Button";
export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.onboard {
  display: flex;
  padding: 100px 32px 100px 32px;
  justify-content: space-between;
  align-items: center;
  max-height: 600px;
  background: map-get($theme-colors, "background");

  .content {
    width: 50%;

    h3 {
      font-size: 48px;
      line-height: 58px;
      color: map-get($theme-colors, "black");
      margin: 16px 0;
    }

    p {
      font-size: 18px;
      line-height: 28px;
      color: map-get($theme-colors, "black");
    }
  }

  .cards {
    width: 50%;
    padding-right: 100px;
    box-sizing: border-box;
  }
}

.card {
  width: 485px;
  height: 412px;
  border: 4px solid #303031;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 32px 40px;
  box-sizing: border-box;

  p {
    font-size: 18px;
    line-height: 28px;
    color: map-get($theme-colors, "black");
  }

  ul {
    list-style: none;

    li {
      display: flex;
      margin: 24px 0;

      .user-information {
        margin-left: 16px;
      }

      span {
        font-size: 24px;
        color: map-get($theme-colors, "black");
      }

      p {
        font-size: 16px;
        font-weight: 300;
        color: map-get($theme-colors, "black");
      }
    }
  }

  .informations {
    display: flex;
    justify-content: space-between;
    max-width: 250px;
    margin: 16px 0;

    span {
      font-size: 20px;
      font-weight: normal;
      color: map-get($theme-colors, "black");
      text-transform: uppercase;
    }

    p {
      font-size: 24px;
      margin-top: 8px;
      text-transform: uppercase;
    }
  }
}
</style>
