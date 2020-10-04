<template>
  <div class="home">
    <Header/>
    <Wrapper/>
    <Work/>
    <Kickstart/>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Wrapper from "@/components/Wrapper"
import Work from "@/components/Work"
import Kickstart from "@/components/Kickstart"

export default {
  components: {
    Header,
    Wrapper,
    Work,
    Kickstart
  }
};
</script>
