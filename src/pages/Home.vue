<template>
  <div class="home">
    <Header/>
    <Wrapper/>
    <Work/>
    <Kickstart/>
    <Onboard/>
    <Engage/>
    <Help/>
    <Start/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Wrapper from "@/components/Wrapper"
import Work from "@/components/Work"
import Kickstart from "@/components/Kickstart"
import Onboard from "@/components/Onboard"
import Engage from "@/components/Engage"
import Help from "@/components/Help"
import Start from "@/components/Start"
import Footer from "@/components/Footer"

export default {
  components: {
    Header,
    Wrapper,
    Work,
    Kickstart,
    Onboard,
    Engage,
    Help,
    Start,
    Footer
  }
};
</script>
