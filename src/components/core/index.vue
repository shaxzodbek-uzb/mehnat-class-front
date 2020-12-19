<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <div class="pb-4">
      <div class="d-inline text-xl">{{ this.pageTitle }}</div>
      <router-link :to="{ name: createViewName }">
        <CButton color="info float-right">
          <CIcon name="cil-user-plus" /> Создайте новый {{ objectName }}
        </CButton>
      </router-link>
    </div>
    <DataTable :items="items" :fields="fields" />
  </CContainer>
</template>

<script>
const DataTable = () => import("@/components/resource/table");

export default {
  components: {
    DataTable
  },
  props: {
    objectName: {
      type: String,
      default: "Объект"
    },
    pageTitle: {
      type: String,
      default: "Страница объектов"
    },
    createViewName: {
      type: String,
      default: ""
    },
    editViewName: {
      type: String,
      default: ""
    },
    showViewName: {
      type: String,
      default: ""
    },
    urlSlug: {
      type: String,
      default: ""
    },
    apiIncludes: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      items: [],
      details: [],
      fields: []
    };
  },
  mounted() {
    this.$api(this.urlSlug, { params: { include: this.apiIncludes } }).then(
      ({ data: { data, fields } }) => (
        (this.items = data), this.fields.push(...fields)
      )
    );
  },
  methods: {
    edit(id) {
      this.$router.push({ name: this.editViewName, params: { id } });
    },
    show(id) {
      this.$router.push({ name: this.showViewName, params: { id } });
    },
    delete(id) {
      this.$api.delete(`${this.urlSlug}/${id}`).then(res => {
        console.log(res);
        window.location.reload();
      });
    }
  }
};
</script>
