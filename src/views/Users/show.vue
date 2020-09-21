<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <router-link :to="{ name: 'UserIndex'}" class="mb-3">
     <CIcon name="cilArrowLeft" /> Foydalanuvchilar ro'yhatiga qaytish
    </router-link>
    <CCard>
        <CCardHeader>
            Profile
        </CCardHeader>
        <CCardBody>
            <CDataTable
            :item="item"
            :fields="fields"
            hover
            >
            <template #status="{item}">
                <td>
                <CBadge :color="getBadge(item.status)">
                    {{ item.status }}
                </CBadge>
                </td>
            </template>
            </CDataTable>
        </CCardBody>
    </CCard>
    {{item}}
  </CContainer>
</template>

<script>
import { users as usersData } from "@/data/";
import { getBadge } from "@/utils/html";

export default {
  name: "Users",
  data() {
    return {
      item: [],
      fields: usersData.fields,
      details: [],
      collapseDuration: 0
    };
  },
  mounted() {
        let id = this.$route.params.id;
        this.$api(`users/${id}`).then(({ data: { data } }) => {
            this.item = data
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
    }
  }
};
</script>
