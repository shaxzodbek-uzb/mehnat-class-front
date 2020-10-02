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
        <CRow>
          <CCol col="2">
            <CRow>
              <img src="@/assets/images/avatar.png" width="130" alt />
            </CRow>
            <p><strong>Fullname: </strong> {{ item.fullname }}</p>
            <p><strong>Age: </strong> {{ item.age }} y.o.</p>
          </CCol>

          <CCol col="5">
            <CRow v-for="(article, index) in item.articles.data" :key="index">

              <CCallout color="info">
                <small class="text-muted">{{ article.alias }}</small><br>
                <strong class="h5" @click="showComments = !showComments" style="cursor: pointer;">{{ article.text }}</strong>
              </CCallout>

              <CCollapse :show="showComments" class="mt-2">

                <template v-if="article.comments && article.comments.length != 0 ">
                  <CCol col="12" sm="12">
                    <CWidgetIcon
                      v-for="comment in article.comments.data"
                      :key="comment.id"
                      :header="comment.user ? comment.user.username : 'Unknown'"
                      :text="comment.text"
                    >
                      <img src="@/assets/images/avatar_w.png" width="50" alt>
                    </CWidgetIcon>
                    
                  </CCol>
                </template>

                <template v-else>
                  <CCard body-wrapper class="text-muted"> Izoh mavjud emas </CCard>
                </template>
              </CCollapse>
            </CRow>
          </CCol>

        </CRow>
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
      item: [],
      fields: usersData.fields,
      details: [],
      collapseDuration: 0,
      showComments: false
    };
  },
  mounted() {
        let id = this.$route.params.id;
        this.$api(`users/${id}`, { params: {include: 'articles.comments'}}).then(({ data: {data}}) => {
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
