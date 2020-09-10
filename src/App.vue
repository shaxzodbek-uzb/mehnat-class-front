<template>
  <div id="app">
    <div id="nav">
      <CNavbar expandable="md" type="dark" color="info">
        <CToggler in-navbar @click="collapsed = !collapsed"/>
        <CNavbarBrand href="#">NavBar</CNavbarBrand>
        <CCollapse :show="collapsed" navbar>
          <CNavbarNav>
       |
            <CNavItem href=""><router-link to="/">Home</router-link></CNavItem>
            <CNavItem href=""><router-link to="/about">About</router-link></CNavItem>
          </CNavbarNav>

          <!-- Right aligned nav items -->
          <CNavbarNav class="ml-auto">
            <CForm inline>
              <CInput
                class="mr-sm-2"
                placeholder="Search"
                size="sm"
              />
              <CButton
                color="secondary"
                size="sm" 
                class="my-2 my-sm-0" 
                type="submit"
              >
                Search
              </CButton>
            </CForm>

            <CDropdown
              togglerText="Lang"
              nav
              placement="bottom-end"
            >
                <CDropdownItem>EN</CDropdownItem>
                <CDropdownItem>ES</CDropdownItem>
                <CDropdownItem>RU</CDropdownItem>
                <CDropdownItem>FA</CDropdownItem>
            </CDropdown>

            <CDropdown
              nav
              togglerText="User"
              placement="bottom-end"
            >
              <CDropdownItem>Profile</CDropdownItem>
              <CDropdownItem>Signout</CDropdownItem>
            </CDropdown>
          </CNavbarNav>
        </CCollapse>
      </CNavbar>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~@coreui/coreui/scss/coreui";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
