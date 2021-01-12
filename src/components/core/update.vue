<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <router-link :to="{ name: indexViewName }" class="mb-3">
      <CIcon name="cilArrowLeft" /> Назад
    </router-link>
    <CCard class="w-100 bg-white">
      <CCardHeader> Редактировать {{ title }}</CCardHeader>
      <CCardBody class="justify-content-center">
        <component
          class="m-4"
          v-for="field in fields"
          :key="field.key"
          :field="field"
          :items="items"
          :belongsToIncludes="belongsToIncludes"
          :is="field.type"
          v-model="form[field.key]"
        >
        </component>
        <CButton
          color="info float-right"
          shape="pill"
          variant="outline"
          @click="save"
        >
          <CIcon name="cil-user-plus" />Oтредактировать
        </CButton>
      </CCardBody>
    </CCard>
  </CContainer>
</template>
<script>
import textField from "@/components/core/fields/form/textField";
import idField from "@/components/core/fields/form/idField";
import selectField from "@/components/core/fields/form/selectField";
import dateField from "@/components/core/fields/form/dateField";
import belongsToField from "@/components/core/fields/form/belongsToField";
export default {
  data() {
    return {
      id: 0,
      form: {},
      fields: []
    };
  },
  components: {
    textField,
    idField,
    selectField,
    dateField,
    belongsToField
  },
  props: {
    urlSlug: {
      type: String,
      default: ""
    },
    indexViewName: {
      type: String,
      default: ""
    },
    belongsToIncludes: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.$api(`${this.urlSlug}/${this.id}/edit`).then(
      ({ data: { data, fields } }) => (
        (this.form = data), this.fields.push(...fields)
      )
    );
  },
  methods: {
    save() {
      this.$api.put(`${this.urlSlug}/${this.id}`, this.form).then(res => {
        if (res.data.success) {
          this.$router.push({ name: this.indexViewName });
        } else {
          console.log("invalid data");
        }
      });
    }
  }
};
</script>

<style></style>
