<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <CCard class="w-100 bg-white">
      <CCardHeader class="">
        <h4 class="d-inline">LIST ARTICLES</h4>
        <router-link :to="{ name: 'ArticleCreate' }">
          <CButton color="info float-right">
            <CIcon name="cil-user-plus" /> Create new Article
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
              {{
                item.user.data.fullname + ' - ' + 
                item.user.data.username
              }}
            </td>
          </template>
          <template #show_details="{item}">
            <td class="py-2" style="display:flex">
              <CLink class="mr-3" @click="updateUser(item.id)">
                <CIcon name="cil-pencil" />
              </CLink>
              <CLink class="mr-3" @click="showArticle(item.id)">
                <CIcon name="cil-info" />
              </CLink>
              <CLink class="mr-3" @click="deleteArticle(item.id)">
                <CIcon name="cil-trash" />
              </CLink>
            </td>
          </template>
        </CDataTable>
      </CCardBody>
    </CCard>
  </CContainer>
</template>

<script>
import { articles as articleData } from "@/data/article";
import { getBadge } from "@/utils/html";

export default {
  name: "Users",
  data() {
    return {
      items: [],
      fields: articleData.fields,
      details: [],
      collapseDuration: 0,
      include: {
        include: "articles"
      }
    };
  },
  mounted() {
    this.$api(`articles`, { params: { include: "user.comments" } }).then(
      ({ data: { data } }) => (this.items = data)
    );
  },
  methods: {
    getBadge,
    toggleDetails(item) {
      this.$set(this.items[item.id], "_toggled", !item._toggled);
      this.collapseDuration = 300;
      this.$nextTick(() => {
        this.collapseDuration = 0;
      });
    },
    updateUser(id) {
      this.$router.push({ name: "UserEdit", params: { id } });
    },
    showArticle(id) {
      this.$router.push({ name: "ArticleShow", params: { id } });
    },
    deleteArticle(id) {
      this.$api.delete(`articles/${id}`).then(res => {
      console.log(res); 
      window.location.reload()
      }
    );
    },
    calcAge(birth_date) {
      let date = new Date();
      let age = date.getFullYear() - birth_date.slice(0, 4);
      return age;
    }
  }
};
</script>
