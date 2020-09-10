<template>
  <div class="home">
    <ImageComponent width="120" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ImageComponent from "@/components/ImageComponent.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    ImageComponent
  }
};
</script>
