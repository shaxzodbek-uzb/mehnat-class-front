<template>
  <div>
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
          <template #show_details="{item, index}">
            <td class="py-2">
              <CButton
                color="primary"
                variant="outline"
                square
                size="sm"
                @click="toggleDetails(item, index)"
              >
                {{ Boolean(item._toggled) ? "Hide" : "Show" }}
              </CButton>
            </td>
          </template>
          <template #details="{item}">
            <CCollapse
              :show="Boolean(item._toggled)"
              :duration="collapseDuration"
            >
              <CCardBody>
                <CMedia :aside-image-props="{ height: 102 }">
                  <h4>
                    {{ item.username }}
                  </h4>
                  <p class="text-muted">User since: {{ item.registered }}</p>
                  <CButton
                    @click="updateUser(item.id)"
                    size="sm"
                    color="info"
                    class=""
                  >
                    Tahrirlash
                  </CButton>
                  <CButton size="sm" color="danger" class="ml-1">
                    Delete
                  </CButton>
                </CMedia>
              </CCardBody>
            </CCollapse>
          </template>
        </CDataTable>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { users as usersData } from "@/data/";
import { getBadge } from "@/utils/html";

export default {
  name: "Users",
  data() {
    return {
      items: usersData.items.map((item, id) => {
        return { ...item, id };
      }),
      fields: usersData.fields,
      details: [],
      collapseDuration: 0
    };
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
      this.$router.push({ name: "UserEdit", props: { id: id } });
    }
  }
};
</script>
