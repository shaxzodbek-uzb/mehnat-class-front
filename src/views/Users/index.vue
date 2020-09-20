<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <CCard>
      <router-link :to="{ name: 'UserCreate' }">
        <CButton color="primary float-right" class="m-3">
          <CIcon name="cil-user-plus" /> Yangi Foydalanuvchi yaratish
        </CButton>
      </router-link>
      <h4 class="text-center">Foydalanuvchilar ro'yhati</h4>
      <CCardBody>
        <CDataTable
          :items="items"
          :fields="fields"
          column-filter
          table-filter
          items-per-page-select
          :items-per-page="15"
          hover
          sorter
          pagination
        >
          <template #status="{item}">
            <td>
              <CBadge :color="getBadge(item.status)">
                {{ item.status }}
              </CBadge>
            </td>
          </template>
          <template #show_details="{item}">
            <td class="py-2">
              <CButton
                color="primary"
                variant="outline"
                square
                size="sm"
                @click="updateUser(item.id)"
              >
                Tahrirlash
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
      collapseDuration: 0
    };
  },
  mounted() {
    this.$api("users").then(res => {
      this.items = res.data.data;
    });
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
    }
  }
};
</script>
