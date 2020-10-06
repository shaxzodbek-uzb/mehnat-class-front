<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <CCard>
      <CCardHeader>
        <router-link :to="{ name: 'UserIndex'}" class="mb-3">
          <CButton shape='pill' variant="ghost" color="info" ><CIcon name="cilArrowLeft" /> </CButton>
        </router-link>
        <strong class="ml-2">{{item.fullname }}</strong>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol col="12" sm="6">
            <CRow class="header_image" :style="{ backgroundImage: 'url(' + require('@/assets/images/600x200.jpg') + ')' }">
              <img class="avatar_profile ml-2" src="@/assets/images/avatar.png" width="130" alt />
            </CRow>
            <div class="mt-5">
              {{editUser}}
              <CButton class="float-right" color="info" shape='pill' variant="outline" @click="editUser = !editUser"><CIcon name="cilSettings" /> Edit</CButton>
              <h3><strong> {{ item.fullname }}</strong></h3>
              <p class="text-muted">@{{ item.username }}</p>
              <p><strong>Birthdate: </strong> {{ item.birth_date }}</p>
            </div> <hr>
          </CCol>
        </CRow>
        <CRow>
          <CCol col="12" sm="6">
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
                    <CRow>
                      <CCol col="12" sm="12">
                        <CInput
                          placeholder="Add comment"
                          v-model="comment.text"
                        />
                      </CCol>
                    </CRow>
                    <CButton class="float-right" color="info" shape='pill' variant="outline" @click="addComment(article.id)"> Add comment</CButton>
                </template>
                <template v-else>
                  <CCard body-wrapper class="text-muted"> Izoh mavjud emas </CCard>
                </template>
              </CCollapse>
            </CRow>
          </CCol>
        </CRow>
      </CCardBody>
      <registerForm v-if="editUser" :showModal="showModal" />
    </CCard>
  </CContainer>
</template>

<script>
import { users as usersData } from "@/data/";
import { getBadge } from "@/utils/html";
import registerForm from "@/components/form/register"

export default {
  name: "Users",
  components: {
    registerForm
  },
  data() {
    return {
      item: [],
      fields: usersData.fields,
      details: [],
      collapseDuration: 0,
      showComments: false,
      showModal: true,
      editUser: false,
      showReply: false,
      currentAlertCounter: 5,
      showAlert: false,
      comment: {
        user_id: 14,
        article_id: '',
        text: ''
      }
    };
  },
  mounted() {
    this.getData()
  },
  methods: {
    getBadge,
    getData() {
      let id = this.$route.params.id;
      this.$api(`users/${id}`, { params: {include: 'articles.comments'}}).then(({ data: {data}}) => {
          this.item = data
      });
    },
    toggleDetails(item) {
      this.$set(this.items[item.id], "_toggled", !item._toggled);
      this.collapseDuration = 300;
      this.$nextTick(() => {
        this.collapseDuration = 0;
      });
    },
    addComment(article_id) {
      this.comment.article_id = article_id
        this.$api.post(`comments`, {...this.comment})
        .then(res => {
          if (res.data.success) {
              this.showAlert = true
          }
        })
        .finally(() => {
          this.comment.text = ''
          this.getData()
        })
    }
  }
};
</script>
