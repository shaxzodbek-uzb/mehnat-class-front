<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <CRow class=" m-1">
        <CCol>
            <h4>Article details</h4>
        </CCol>
        <CCol>
            <CLink class="icon" @click="deleteArticle(item.id)">
                <CIcon name="cil-trash" size="lg" /> 
            </CLink>
        </CCol>
    </CRow>
    <CCard class="">
      <CCardHeader>
        <router-link :to="{ name: 'ArticleIndex' }" class="mb-3">
          <CButton shape="pill" variant="ghost" color="info"
            ><CIcon name="cilArrowLeft" />
          </CButton>
        </router-link>
        <strong class="ml-2">{{ article.user.data.username + ' - ' +  article.alias }}</strong>
      </CCardHeader>
      <CCardBody>
        
        <table class="table table-lg ">
        <thead>
            <tr class="table-info">
                <th scope="col">#</th>
                <th scope="col">Alias</th>
                <th scope="col">User</th>
                <th scope="col">Text</th>
                <!-- <th scope="col">Comments</th> -->
            </tr>
        </thead>
        <tbody>
            <tr class="table-light">
                <th scope="row">{{ article.id }}</th>
                <td>{{ article.alias }}</td>
                <td>{{ article.user.data.fullname }}</td>
                <td>{{ article.text }}</td>
                <!-- <td :v-for="comment in article.user.data.comments.data">{{ comment }}</td> -->
            </tr>
        </tbody>  
        </table>
      </CCardBody>
      <registerForm v-if="editArticle" :showModal="showModal" />
    </CCard>
  </CContainer>
</template>

<script>

export default {
  name: "Article",
  components: {  },
  data() {
    return {
      article: {},
      editArticle: false
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let id = this.$route.params.id;
      this.$api(`articles/${id}`, {
        params: { include: "user.comments" }
      }).then(({ data: { data } }) => {
        this.article = data;
      });
    },
    deleteArticle(id) {
      this.$api.delete(`articles/${id}`).then(res => {
      console.log(res); 
      window.location.reload()
      }
    );
    }
  }
};
</script>

<style >
    .icon {
        float: right;
        width: 45px;
        border: 1px solid lightblue;
        border-radius: 20%;
        background-color: #ffffff;
        padding: 5px 10px;
    }
</style>
