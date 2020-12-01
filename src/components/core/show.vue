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
          {{ object.title }}
        </slot>
      </CCardHeader>
      <CCardBody>
        <table class="table table-lg ">
          <thead>
            <tr class="table-info">
              <th scope="col" v-for="item in tableData" :key="item.column">
                {{ item.title }}
              </th>
              <!-- <th scope="col">Comments</th> -->
            </tr>
          </thead>
          <tbody>
            <tr class="table-light">
              <td v-for="item in tableData" :key="item.column">
                {{ object[item.column] }}
              </td>
              <!-- <td :v-for="comment in object.user.data.comments.data">{{ comment }}</td> -->
            </tr>
          </tbody>
        </table>
      </CCardBody>
      <!-- <registerForm v-if="editArticle" :showModal="showModal" /> -->
      <template :is="updateForm" />
    </CCard>
  </CContainer>
</template>

<script>
export default {
  props: {
    key: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    tableData: {
      type: Array,
      default() {
        return [];
      }
    },
    backButton: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  name: "Article",
  components: {},
  data() {
    return {
      object: {},
      editArticle: false
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let id = this.$route.params.id;
      this.$api(`${this.key}/${id}`, {
        params: { include: "user.comments" }
      }).then(({ data: { data } }) => {
        this.object = data;
      });
    },
    delete(id) {
      this.$api.delete(`${this.key}/${id}`).then(res => {
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
