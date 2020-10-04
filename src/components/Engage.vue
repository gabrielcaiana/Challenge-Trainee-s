<template>
  <div class="engage">
    <div class="content">
      <img src="@/assets/icons/Icon5.svg" alt="icone" />
      <h3>Engage highly committed contributors</h3>
      <p>
        You need talented people on-demand across various tasks that your
        full-time workforce can’t prioritize at the moment. As an Open
        Enterprise, you can easily fund tasks and have people apply to work on
        them in return for funds or shares..
      </p>
    </div>

    <div class="cards">
      <div class="card1">
        <div class="card-header">
          <p>Write a how-to on Open Enterprise</p>
          <span>1 share</span>
        </div>
        <p>
          Looking for an amazing copywriter using Open Enterprise to help us
          write an article on how to get started.
        </p>
      </div>

      <div class="group-cards">
        <div class="card2">
          <span>3 Applications</span>

          <ul>
            <li>
              <img
                class="user-photo"
                src="@/assets/images/member.png"
                alt="peaple"
              />
              <div class="user-information">
                <span>Dillon Kydd</span>
                <span class="stars">4.8</span>
              </div>
            </li>

            <li>
              <img
                class="user-photo"
                src="@/assets/images/member2.png"
                alt="peaple"
              />
              <div class="user-information">
                <span>Anna Olsen</span>
                <span class="stars">4.5</span>
              </div>
            </li>

            <li>
              <img
                class="user-photo"
                src="@/assets/images/member3.png"
                alt="peaple"
              />
              <div class="user-information">
                <span>Kas Moss</span>
                <span class="stars">4.2</span>
              </div>
            </li>
          </ul>
        </div>

        <div class="card3">
          <img
            class="user-photo"
            src="@/assets/images/member6.png"
            alt="peaple"
          />
          <span>Alex Rosa</span>
          <p>UX Writer</p>

          <div class="user-information">
            <span>4 commits</span>
            <span class="stars">4.8</span>
          </div>
          <Button estilo="button-secundary" widthButton="192" label="View profile"/>
        </div>
      </div>
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
.engage {
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
    height: 400px;
    padding-left: 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    .card1 {
      width: 485px;
      height: 164px;
      border: 4px solid #303031;
      box-sizing: border-box;
      border-radius: 16px;
      padding: 18px;
      box-sizing: border-box;
      -webkit-box-shadow: 0px 12px 0px -5px rgba(113, 168, 148, 1);
      -moz-box-shadow: 0px 12px 0px -5px rgba(113, 168, 148, 1);
      box-shadow: 0px 12px 0px -5px rgba(113, 168, 148, 1);

      .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;

        p {
          font-size: 18px;
          font-weight: 600;
        }

        span {
          padding: 8px;
          border-radius: 40px;
          background-color: map-get($theme-colors, "green");
          color: map-get($theme-colors, "white");
        }
      }

      p {
        font-size: 16px;
        line-height: 26px;
        color: map-get($theme-colors, "black");
      }
    }

    .group-cards {
      display: flex;
      margin-top: 32px;

      .card2 {
        width: 340px;
        height: 290px;
        border: 4px solid #303031;
        box-sizing: border-box;
        border-radius: 16px;
        padding: 12px 24px;
        box-sizing: border-box;
        background-color: map-get($theme-colors, "light-gold");

        .user-photo {
          width: 48px;
          height: 48px;
        }

        span {
          font-size: 24px;
          color: map-get($theme-colors, "black");
        }

        ul {
          list-style: none;

          li {
            display: flex;
            margin: 24px 0;

            .user-information {
              margin-left: 16px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
            }

            span {
              font-size: 18px;
            }

            p {
              font-size: 16px;
              font-weight: 300;
            }

            .stars {
              position: relative;

              &::before {
                content: url("../assets/icons/star.svg");
                padding: 0 8px;
                position: absolute;
                left: -37px;
                top: 2px;
              }
            }
          }
        }
      }

      .card3 {
        width: 240px;
        height: 290px;
        border: 4px solid map-get($theme-colors, "green");
        box-sizing: border-box;
        border-radius: 16px;
        padding: 12px 24px;
        box-sizing: border-box;
        background-color: map-get($theme-colors, "white");
        margin: 24px 0 0 16px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        span {
          font-size: 18px;
          font-weight: 600;
          margin-top: 8px;
          color: map-get($theme-colors, "black");
        }

        p {
          font-size: 16px;
          font-weight: 300;
        }

        .user-information {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin: 24px 0;

          span {
            font-size: 16px;
            font-weight: 300;
          }

          .stars {
            position: relative;

            &::before {
              content: url("../assets/icons/star.svg");
              padding: 0 8px;
              position: absolute;
              left: -37px;
              top: 2px;
            }
          }
        }
      }
    }
  }
}
</style>
