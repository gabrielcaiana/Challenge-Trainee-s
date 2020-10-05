<template>
  <header>
   <img src="@/assets/images/logo.svg" alt="logo">
   <ul>
    <li><a href="#" v-scroll-to="'#work'">Why Open Enterprise</a></li>
    <li><a href="#" v-scroll-to="'#kickstart'">Features</a></li>
    <li><a href="#" v-scroll-to="'#help'">Contribute</a></li>
    <li><a href="#" v-scroll-to="'#start'">Request early access</a></li>
   </ul>
  </header>
</template>

<script>
export default {
 
}
</script>

<style lang="scss" scoped>
 header {
  height: 56px;
  display: flex;
  padding: 16px 32px;
  justify-content: space-between;
  align-items: center;
  background: map-get($theme-colors, "background" );

  ul {
   display: flex;
   list-style: none;

     a {
      margin-left: 24px;
      text-decoration: none;
      color: map-get($theme-colors, "black");
      transition: .3s;
      font-size: 16px;
      font-weight: 500;

      &:hover {
       color: map-get($theme-colors, "green");
      }
     }
   }
 }
</style>