<template>
  <UpdateComponent
    v-if="loaded"
    :fields="fields"
    apiSlug="articles"
    indexViewName="ArticleIndex"
    title="статью"
  />
</template>

<script>
import UpdateComponent from "@/components/core/update";
import { articleFields } from "@/data/index";

export default {
  data() {
    return {
      fields: [],
      loaded: false
    };
  },
  components: { UpdateComponent },
  mounted() {
    this.fields = articleFields;
    let id = this.$route.params.id;
    this.loaded = false;
    this.$api(`articles/${id}`, { params: { include: "user" } }).then(
      ({ data: { data } }) => {
        this.fields[0].value = data.user.data.id;
        this.fields[1].value = data.alias;
        this.fields[2].value = data.text;
        this.loaded = true;
      }
    );
  }
};
</script>

<style></style>
