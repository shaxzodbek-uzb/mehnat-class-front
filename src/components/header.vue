<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <CIcon name="logo" height="48" alt="Logo" />
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto"> </CHeaderNav>
    <CHeaderNav v-if="false" class="mr-4">
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-bell" />
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-list" />
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-envelope-open" />
        </CHeaderNavLink>
      </CHeaderNavItem>
      <HeaderAccount />
    </CHeaderNav>

    <CHeaderNav v-else class="mr-4">
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <div @click="logoutUser()">
            <CIcon name="cil-account-logout" /> Выйти
          </div>
        </CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
  </CHeader>
</template>

<script>
import { mapActions } from "vuex";
import HeaderAccount from "./headerAccount";
export default {
  components: {
    HeaderAccount
  },
  methods: {
    ...mapActions({ logout: "user/logout" }),
    logoutUser() {
      this.logout().then(() => {
        this.$router.push({ name: "Login" });
      });
    }
  }
};
</script>
