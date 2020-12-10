<template>
  <UpdateComponent
    v-if="loaded"
    :fields="fields"
    apiSlug="comments"
    indexViewName="CommentIndex"
    title="статью"
    :id="id"
  />
</template>

<script>
import UpdateComponent from "@/components/core/update";
import { commentFields } from "@/data/index";

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
    this.fields = commentFields;
    this.id = this.$route.params.id;
    this.loaded = false;
    this.$api(`comments/${this.id}`, { params: { include: "article" } }).then(
      ({ data: { data } }) => {
        this.fields[0].value = data.user.id;
        this.fields[1].value = data.article_id;
        this.fields[2].value = data.text;
        this.loaded = true;
      }
    );
    this.getUsers();
    this.getArticles();
  },
  methods: {
    getUsers() {
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
    },
    getArticles() {
      this.$api(`articles`, { params: { include: "user" } }).then(
        ({ data: { data } }) => {
          if (!(this.fields[1].options && this.fields[1].options.length)) {
            data.forEach(option => {
              this.fields[1].options.push({
                label: option.alias,
                value: option.id
              });
            });
          }
          this.loaded = true;
        }
      );
    }
  }
};
</script>

<style></style>
