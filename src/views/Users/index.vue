<template>
  <IndexComponent
    :fields="fields"
    createViewName="UserCreate"
    editViewName="UserEdit"
    showViewName="UserShow"
    urlSlug="users"
    apiIncludes="articles"
    pageTitle="Страница пользователей"
    objectName="Пользователь"
  >
  </IndexComponent>
</template>

<script>
import { users as userData } from "@/data/";
import IndexComponent from "@/components/core/index";
export default {
  name: "UserIndex",
  components: {
    IndexComponent
  },
  data() {
    return { fields: userData.fields };
  }
};
</script>
