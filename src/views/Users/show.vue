<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <CCard>
      <CCardHeader>
        <router-link :to="{ name: 'UserIndex' }" class="mb-3">
          <CButton shape="pill" variant="ghost" color="info"
            ><CIcon name="cilArrowLeft" />
          </CButton>
        </router-link>
        <strong class="ml-2">{{ user.fullname }}</strong>
      </CCardHeader>
      <CCardBody>
        <UserProfile :user="user" />
        <Articles :articles="user.articles" />
      </CCardBody>
      <registerForm v-if="editUser" :showModal="showModal" />
    </CCard>
  </CContainer>
</template>

<script>
import UserProfile from "@/components/users/UserProfile";
import Articles from "@/components/articles/Articles";

export default {
  name: "Users",
  components: { UserProfile, Articles },
  data() {
    return {
      user: {},
      editUser: false
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let id = this.$route.params.id;
      this.$api(`users/${id}`, {
        params: { include: "articles.comments" }
      }).then(({ data: { data } }) => {
        this.user = data;
      });
    }
  }
};
</script>
