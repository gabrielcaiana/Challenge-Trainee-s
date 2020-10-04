<template>
  <div class="home">
    <Header/>
    <Wrapper/>
    <Work/>
    <Kickstart/>
    <Onboard/>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Wrapper from "@/components/Wrapper"
import Work from "@/components/Work"
import Kickstart from "@/components/Kickstart"
import Onboard from "@/components/Onboard"

export default {
  components: {
    Header,
    Wrapper,
    Work,
    Kickstart,
    Onboard
  }
};
</script>
