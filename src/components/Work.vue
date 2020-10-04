<template>
  <div class="work">
    <h2>Reimagining what it means to work</h2>
    <p>
      Teams and communities using Open Enterprise fundamentally unlock a reality
      of work that reimagines how people engage in economic opportunity, meeting
      the demands and expectations of a modern organization.
    </p>
    <div class="cards">
      <div class="card">
        <img src="@/assets/icons/Icon1.svg" alt="icone" />
        <span>Modern workforce</span>
        <p>
          Multistakeholder governance aligns employees with the organization’s
          wider community.
        </p>
      </div>

      <div class="card">
        <img src="@/assets/icons/Icon2.svg" alt="icone" />
        <span>Meritocratic by design</span>
        <p>
          Tokenized ownership aligns deeply committed individuals with the
          organization’s success.
        </p>
      </div>

      <div class="card">
        <img src="@/assets/icons/Icon3.svg" alt="icone" />
        <span>Engineered for resilience</span>
        <p>
          Open Enterprise supports best practices in sociocratic management.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.work {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px 0;
  background: map-get($theme-colors, "background" );

  h2 {
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
    margin-top: 42px;
    width: 100%;
  }
}

.card {
      width: 30%;
      height: 340px;
      margin: 0 16px;
      background-color: map-get($theme-colors, "white");
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 16px;
      box-sizing: border-box;

      img {
       width: 64px;
       margin-bottom: 16px;
      }

      span {
       font-size: 20px;
       font-weight: 600;
       color: map-get($theme-colors, "black");
      }

      p {
       font-size: 18px;
       line-height: 28px;
       color: map-get($theme-colors, "black");
      }
    }
</style>
