<template>
  <CreateComponent
    :fields="fields"
    apiSlug="articles"
    indexViewName="ArticleIndex"
    title="пользователя"
  />
</template>

<script>
import CreateComponent from "@/components/core/create";

export default {
  data() {
    return {
      fields: [
        {
          key: "user_id",
          type: "text",
          label: "Foydalanuvchi",
          placeholder: "Foydalanuvchi idsini kiritirng",
          value: "asdasd"
        },
        {
          key: "alias",
          type: "text",
          label: "Maqola",
          placeholder: "Maqola idsini kiritirng",
          value: ""
        },

        {
          key: "text",
          type: "textArea",
          label: "Firk",
          placeholder: "Fikrmazmuni",
          value: ""
        }
      ]
    };
  },
  components: { CreateComponent }
};
</script>

<style></style>
