<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <CCard class="w-100 bg-white">
      <CCardHeader class="">
        <h4 class="d-inline">{{ this.pageTitle }}</h4>
        <router-link :to="{ name: createViewName }">
          <CButton color="info float-right">
            <CIcon name="cil-user-plus" /> Создайте новый {{ objectName }}
          </CButton>
        </router-link>
      </CCardHeader>

      <CCardBody>
        <CDataTable
          :items="items"
          :fields="fields"
          items-per-page-select
          :items-per-page="15"
          hover
          pagination
        >
          <template #user="{item}">
            <td>
              <h5>{{ item.user.data.fullname }}</h5>
              <p
                class="text-primary"
                style="cursor:pointer"
                @click="show(item.id)"
              >
                {{ "@" + item.user.data.username }}
              </p>
            </td>
          </template>
          <template #actions="{item}">
            <td class="py-2" style="display:flex">
              <CLink class="mr-3" @click="edit(item.id)">
                <CButton color="info" variant="outline"
                  ><CIcon name="cil-pencil"
                /></CButton>
              </CLink>
              <CLink class="mr-3" @click="delete item.id">
                <CButton color="danger" variant="outline"
                  ><CIcon name="cil-trash"
                /></CButton>
              </CLink>
            </td>
          </template>

          <template #birth_date="{item}">
            <td>
              {{
                item.birth_date
                  ? new Date().getFullYear() - item.birth_date.slice(0, 4)
                  : 10
              }}
            </td>
          </template>
          <template #article="{item}">
            <td style="opacity: 0.8">
              {{
                item.articles.data.length == 0 ? " " : item.articles.data.alias
              }}
            </td>
          </template>
        </CDataTable>
      </CCardBody>
    </CCard>
  </CContainer>
</template>

<script>
export default {
  props: {
    objectName: {
      type: String,
      default: "Объект"
    },
    pageTitle: {
      type: String,
      default: "Страница объектов"
    },
    fields: {
      type: Array,
      default() {
        return [];
      }
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
      details: []
    };
  },
  mounted() {
    this.$api(this.urlSlug, { params: { include: this.apiIncludes } }).then(
      ({ data: { data } }) => (this.items = data)
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
