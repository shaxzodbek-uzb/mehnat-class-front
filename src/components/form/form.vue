<template>
  <div>
    {{ user }}
    <CreateComponent
      :fields="fields"
      apiSlug="comments"
      indexViewName="CommentIndex"
      title="комментарий"
    />
    {{ fields }}
  </div>
</template>

<script>
import CreateComponent from "@/components/core/create";
import { genders } from "@/data/index";

export default {
  props: {
    user: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      fields: [
        {
          key: "fullname",
          type: "text",
          label: "Ф.И.О.",
          placeholder: "Введите полное имя",
          value: this.user.fullname
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
          value: this.user.phone
        },
        {
          key: "gender",
          type: "radio",
          label: "Пол",
          value: "",
          options: genders
        }
      ]
    };
  },
  components: { CreateComponent }
};
</script>

<style></style>
