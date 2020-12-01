<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <CCard class="w-100 bg-white">
      <CCardHeader class="">
        <h4 class="d-inline">LIST COMMENTS</h4>
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
          <template #article="{item}">
            <td style="opacity: 0.8">
              {{
                item.articles.data.length == 0
                  ? " "
                  : item.articles.data.alias
              }}
            </td>
          </template>
           <template #user="{item}">
            <td >
              {{
                item.user.length == 0
                  ? " "
                  : item.user.fullname + ' - '
                  + item.user.username
              }}
            </td>
          </template>
          <template #show_details="{item}">
            <td class="py-2" style="display:flex">
              <CLink class="mr-3" @click="updateComment(item.id)">
                <CIcon name="cil-pencil" />
              </CLink>
              <CLink class="mr-3" @click="showComment(item.id)">
                <CIcon name="cil-info" />
              </CLink>
              <CLink class="mr-3" @click="deleteComment(item.id)">
                <CIcon name="cil-trash" />
              </CLink>
            </td>
          </template>
        </CDataTable>
      </CCardBody>
    </CCard>
  </CContainer>
</template>

<script>
import { comments as commentData } from "@/data/comment";

export default {
  name: "Articles",
  data() {
    return {
      items: [],
      fields: commentData.fields,
      details: [],
      collapseDuration: 0
    };
  },
  mounted() {
    this.$api(`comments`, { params: { include: "articles" } }).then(
      ({ data: { data } }) => (this.items = data)
    );
  },
  methods: {
    updateComment(id) {
      this.$router.push({ name: "CommentEdit", params: { id } });
    },
    showComment(id) {
      this.$router.push({ name: "CommentShow", params: { id } });
    },
    deleteComment(id) {
      this.$api.delete(`comments/${id}`).then(res => {
      console.log(res); 
      window.location.reload()
      }
    );
    }
  }
};
</script>
