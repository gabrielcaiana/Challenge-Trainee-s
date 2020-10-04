<template>
  <div class="home">
    <Header/>
    <Wrapper/>
    <Work/>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Wrapper from "@/components/Wrapper"
import Work from "@/components/Work"

export default {
  components: {
    Header,
    Wrapper,
    Work
  }
};
</script>
