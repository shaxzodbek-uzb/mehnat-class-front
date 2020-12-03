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
              <h5>{{ item.user.data.fullname }}</h5>
              <p
                class="text-primary"
                style="cursor:pointer"
                @click="showArticle(item.id)"
              >
                {{ "@" + item.user.data.username }}
              </p>
            </td>
          </template>
          <template #show_details="{item}">
            <td class="py-2" style="display:flex">
              <CLink class="mr-3" @click="updateArticle(item.id)">
                <CButton color="info" variant="outline"
                  ><CIcon name="cil-pencil"
                /></CButton>
              </CLink>
              <CLink class="mr-3" @click="deleteArticle(item.id)">
                <CButton color="danger" variant="outline"
                  ><CIcon name="cil-trash"
                /></CButton>
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
    updateArticle(id) {
      this.$router.push({ name: "ArticleEdit", params: { id } });
    },
    showArticle(id) {
      this.$router.push({ name: "ArticleShow", params: { id } });
    },
    deleteArticle(id) {
      this.$api.delete(`articles/${id}`).then(res => {
        console.log(res);
        window.location.reload();
      });
    },
    calcAge(birth_date) {
      let date = new Date();
      let age = date.getFullYear() - birth_date.slice(0, 4);
      return age;
    }
  }
};
</script>
