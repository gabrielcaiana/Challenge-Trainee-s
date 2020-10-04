<template>
 <footer>
    <h6>Open Enterprise</h6>
   <ul>
    <li><a href="#">Documentation</a></li>
    <li><a href="#">Github</a></li>
    <li><a href="#">Twitter</a></li>
    <li><a href="#">Contact Us</a></li>
   </ul>
 </footer>
</template>

<script>
export default {
 
}
</script>

<style lang="scss" scoped>
footer {
  height: 56px;
  display: flex;
  padding: 16px 32px;
  justify-content: space-between;
  align-items: center;
  background: map-get($theme-colors, "background" );
  padding-top: 60px;

  h6 {
   font-size: 24px;
   color: map-get($theme-colors, "black" );
  }

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