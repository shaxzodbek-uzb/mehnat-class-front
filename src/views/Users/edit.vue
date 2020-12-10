<template>
  <CreateComponent
    :fields="fields"
    apiSlug="users"
    indexViewName="UserIndex"
    title="пользователь"
  />
</template>

<script>
import CreateComponent from "@/components/core/create";
import { userFields } from "@/data/index";

export default {
  data() {
    return {
      fields: []
    };
  },
  components: { CreateComponent },
  mounted() {
    this.fields = userFields;
    let id = this.$route.params.id;
    this.$api(`users/${id}`, { params: { include: "articles.comments" } }).then(
      ({ data: { data } }) => {
        this.user.fullname = data.fullname;
        this.user.username = data.username;
        this.user.status = data.status;
        this.user.birth_date = data.birth_date;
        this.user.id = data.id;
        this.user.phone = data.phone;
        this.user.gender = data.gender;
      }
    );
  }
};
</script>
