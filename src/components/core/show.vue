<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <CRow class=" m-1">
      <CCol>
        <h4>{{ title }}</h4>
      </CCol>
      <CCol>
        <CLink class="icon" @click="delete item.id">
          <CIcon name="cil-trash" size="lg" />
        </CLink>
      </CCol>
    </CRow>
    <CCard class="">
      <CCardHeader>
        <router-link :to="backButton" class="mb-3">
          <CButton shape="pill" variant="ghost" color="info"
            ><CIcon name="cilArrowLeft" />
          </CButton>
        </router-link>

        <slot name="title">
          {{ title }}
        </slot>
      </CCardHeader>
      <CCardBody>
        <table class="table table-lg ">
          <thead>
            <tr class="table-info">
              <th scope="col" v-for="item in fields" :key="item.column">
                {{ item.label }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-light">
              <td v-for="field in fields" :key="field.key">
                <component :is="field.type" :value="object" :field="field" />
              </td>
            </tr>
          </tbody>
        </table>
      </CCardBody>
      <template :is="updateForm" />
    </CCard>
  </CContainer>
</template>

<script>
const belongsToField = () =>
  import("@/components/core/fields/index/belongsToField");
const idField = () => import("@/components/core/fields/index/idField");
const textField = () => import("@/components/core/fields/index/textField");
const selectField = () => import("@/components/core/fields/index/selectField");
export default {
  name: "ArticleShow",
  data() {
    return {
      object: {},
      editArticle: false,
      fields: []
    };
  },
  components: {
    belongsToField,
    idField,
    textField,
    selectField
  },
  props: {
    urlSlug: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    backButton: {
      type: Object,
      default() {
        return {};
      }
    },
    apiIncludes: {
      type: String,
      default: ""
    }
  },

  mounted() {
    let id = this.$route.params.id;
    this.$api(`${this.urlSlug}/${id}`, {
      params: { include: this.apiIncludes }
    }).then(
      ({ data: { data, fields } }) => (
        (this.object = data), this.fields.push(...fields)
      )
    );
  },
  methods: {
    delete(id) {
      this.$api.delete(`${this.key}/${id}`).then(() => {
        window.location.reload();
      });
    }
  }
};
</script>

<style>
.icon {
  float: right;
  width: 45px;
  border: 1px solid lightblue;
  border-radius: 20%;
  background-color: #ffffff;
  padding: 5px 10px;
}
</style>
