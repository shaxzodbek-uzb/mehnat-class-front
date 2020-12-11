<template>
  <updateComponent
    :fields="fields"
    :id="id"
    apiSlug="users"
    indexViewName="UserIndex"
    title="пользователя"
  />
</template>

<script>
import updateComponent from "@/components/core/update";
import { userFields } from "@/data/index";

export default {
  data() {
    return {
      fields: [],
      id: null
    };
  },
  components: { updateComponent },
  mounted() {
    this.fields = userFields;
    let id = this.$route.params.id;
    this.$api(`users/${id}`, { params: { include: "articles.comments" } }).then(
      ({ data: { data } }) => {
        this.fields[0].value = data.fullname;
        this.fields[1].value = data.password;
        this.fields[2].value = data.birth_date;
        this.fields[3].value = data.phone;
        this.fields[4].value = data.gender;
        this.id = data.id;
      }
    );
  }
};
</script>
