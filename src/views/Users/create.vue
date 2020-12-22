<template>
  <CreateComponent
    :fields="fields"
    urlSlug="users"
    indexViewName="UserIndex"
    title="пользователь"
    :items="items"
  />
</template>

<script>
import CreateComponent from "@/components/core/create";

export default {
  data() {
    return {
      fields: [],
      items: [
        {
          id: 1,
          label: "Мужчина"
        },
        {
          id: 2,
          label: "Женшина"
        }
      ]
    };
  },
  components: { CreateComponent }
};
</script>
