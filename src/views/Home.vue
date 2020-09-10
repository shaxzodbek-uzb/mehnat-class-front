<template>
  <div class="home">
    <ImageConponent width="120" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ImageConponent from "@/components/ImageComponent.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    ImageConponent
  }
};
</script>
