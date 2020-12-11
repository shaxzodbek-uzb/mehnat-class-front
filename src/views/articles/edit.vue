<template>
  <UpdateComponent
    v-if="loaded"
    :fields="fields"
    apiSlug="articles"
    indexViewName="ArticleIndex"
    title="статью"
    :id="id"
  />
</template>

<script>
import UpdateComponent from "@/components/core/update";
import { articleFields } from "@/data/index";

export default {
  data() {
    return {
      fields: [],
      loaded: false,
      id: 0
    };
  },
  components: { UpdateComponent },
  mounted() {
    this.fields = articleFields;
    this.id = this.$route.params.id;
    this.loaded = false;
    this.$api(`articles/${this.id}`, { params: { include: "user" } }).then(
      ({ data: { data } }) => {
        this.fields[1].value = data.alias;
        this.fields[2].value = data.text;
        this.loaded = true;
      }
    );
    this.$api(`users`, { params: { include: "articles" } }).then(
      ({ data: { data } }) => {
        if (!(this.fields[0].options && this.fields[0].options.length)) {
          data.forEach(option => {
            this.fields[0].options.push({
              label: option.fullname,
              value: option.id
            });
          });
        }
        this.loaded = true;
      }
    );
  }
};
</script>

<style></style>
