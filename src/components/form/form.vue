<template>
  <CreateComponent
    :fields="fields"
    apiSlug="comments"
    indexViewName="CommentIndex"
    title="комментарий"
  />
</template>

<script>
import CreateComponent from "@/components/core/create";

export default {
  data() {
    return {
      fields: [
        {
          key: "fullname",
          type: "text",
          label: "Ф.И.О.",
          placeholder: "Введите полное имя",
          value: ""
        },
        {
          key: "password",
          type: "password",
          label: "Пароль",
          placeholder: "Введите новый пароль",
          value: ""
        },
        {
          key: "birth_date",
          type: "date",
          label: "Дата рождения",
          placeholder: "Введите дату рождения",
          value: ""
        },
        {
          key: "phone",
          type: "text",
          label: "Телефон",
          placeholder: "Введите номер телефона",
          value: ""
        },
        {
          key: "gender",
          type: "radio",
          label: "Пол",
          options: this.genders
        }
      ],
      genders: [
        { value: 1, label: "Erkak" },
        { value: 2, label: "Ayol" }
      ]
    };
  },
  components: { CreateComponent }
};
</script>

<style></style>
