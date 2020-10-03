<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <CCard class="w-100 bg-white">
      <CCardHeader class="">
        <h4 class="d-inline">Foydalanuvchilar ro'yhati</h4>
        <router-link :to="{ name: 'UserCreate' }">
          <CButton color="info float-right" >
            <CIcon name="cil-user-plus" /> Yangi Foydalanuvchi yaratish
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
          <template #articles="{item}">
            <td>
              {{ item.articles.data.length == 0 ? ' ' : item.articles.data[0].alias  }}
            </td>
          </template>
          <template #birth_date="{item}">
            <td>
              {{ item.birth_date ? calcAge(item.birth_date) : ''  }}
            </td>
          </template>
          <template #show_details="{item}">
            <td class="py-2">
              <CButton
                color="primary"
                variant="outline"
                square
                size="sm"
                class="mb-1 w-100"
                @click="updateUser(item.id)"
              >
                Tahrirlash
              </CButton>
              <CButton
                color="success"
                variant="outline"
                square
                size="sm"
                class="w-100"
                @click="showUser(item.id)"
              >
                Foydalanuvchi
              </CButton>
              <CButton
                color="danger"
                variant="outline"
                square
                size="sm"
                class="w-100"
                @click="deleteUser(item.id)"
              >
                O'chirish
              </CButton>
            </td>
          </template>
        </CDataTable>
      </CCardBody>
    </CCard>
  </CContainer>
</template>

<script>
import { users as usersData } from "@/data/";
import { getBadge } from "@/utils/html";

export default {
  name: "Users",
  data() {
    return {
      items: [],
      fields: usersData.fields,
      details: [],
      collapseDuration: 0,
      include: {
        include: 'articles'
      }
    };
  },
  mounted() {
    this.$api(`users`, { params: {include: 'articles.comments'}})
      .then(({data: {data}})=>
        this.items = data
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
    showUser(id) {
      this.$router.push({ name: "UserShow", params: { id } });
    },
    deleteUser(id) {
      this.$api.delete(`users/${id}`).then(res => {
        console.log(res);
        if(res.data.success){
          this.$api("users").then(({data: {data}})=>
            this.items = data
          );
        }
      });
    },
    calcAge(birth_date) {
      let date = new Date();
      let age = date.getFullYear() - birth_date.slice(0, 4);
      return age
    }
  }
};
</script>
