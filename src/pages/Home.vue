<template>
  <div class="home">
    <Header/>
    <Wrapper/>
    <Work/>
    <Kickstart/>
    <Onboard/>
    <Engage/>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Wrapper from "@/components/Wrapper"
import Work from "@/components/Work"
import Kickstart from "@/components/Kickstart"
import Onboard from "@/components/Onboard"
import Engage from "@/components/Engage"

export default {
  components: {
    Header,
    Wrapper,
    Work,
    Kickstart,
    Onboard,
    Engage
  }
};
</script>
