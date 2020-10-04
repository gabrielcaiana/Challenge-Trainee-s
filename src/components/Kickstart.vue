<template>
  <div class="kickstart">
    <div class="content">
      <img src="@/assets/icons/Icon4.svg" alt="icone" />
      <h3>kickstart an organization with your co-founders</h3>
      <p>
        It’s the early days, you just had a long conversation with two friends
        about a meaningful challenge that you’re all passionate about and have a
        potential solution for. You’re ready to embark the startup journey.
      </p>
    </div>
    <div class="cards">
      <div class="card">
        <span>Members</span>

        <ul>
          <li>
            <img
              class="user-photo"
              src="@/assets/images/member.png"
              alt="peaple"
            />
            <div class="user-information">
              <span>Dillon Kydd</span>
              <p>100 SHARES</p>
            </div>
          </li>

          <li>
            <img src="@/assets/images/member2.png" alt="peaple" />
            <div class="user-information">
              <span>Anna Olsen</span>
              <p>100 SHARES</p>
            </div>
          </li>

          <li>
            <img src="@/assets/images/member3.png" alt="peaple" />
            <div class="user-information">
              <span>Kas Moss</span>
              <p>100 SHARES</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.kickstart {
  display: flex;
  padding: 16px 32px;
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
    padding-left: 100px;
    box-sizing: border-box;
  }
}

.card {
  width: 485px;
  height: 400px;
  border: 4px solid #303031;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 32px 40px;
  box-sizing: border-box;
  -webkit-box-shadow: 13px 16px 0px 1px rgba(113, 168, 148, 1);
  -moz-box-shadow: 13px 16px 0px 1px rgba(113, 168, 148, 1);
  box-shadow: 13px 16px 0px 1px rgba(113, 168, 148, 1);

  span {
    font-size: 32px;
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
      }

      p {
        font-size: 16px;
        font-weight: 300;
      }
    }
  }
}
</style>
