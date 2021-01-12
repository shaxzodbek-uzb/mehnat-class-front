<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <router-link :to="{ name: 'UserIndex' }" class="mb-3">
      <CIcon name="cilArrowLeft" /> Назад
    </router-link>
    <CCard class="w-100 bg-white">
      <CCardHeader> Добавить {{ title }} </CCardHeader>
      <CCardBody class="justify-content-center">
        <component
          v-for="field in fields"
          :key="field.key"
          :field="field"
          :belongsToIncludes="belongsToIncludes"
          :items="items"
          v-model="form[field.key]"
          :is="field.type"
        >
        </component>
        <CButton
          color="info float-right"
          shape="pill"
          variant="outline"
          @click="save"
        >
          <CIcon name="cil-user-plus" />Сохранить
        </CButton>
      </CCardBody>
    </CCard>
  </CContainer>
</template>
<script>
import textField from "@/components/core/fields/form/textField";
import idField from "@/components/core/fields/form/idField";
import belongsToField from "@/components/core/fields/form/belongsToField";
import selectField from "@/components/core/fields/form/selectField";
export default {
  data() {
    return {
      fields: [],
      form: {}
    };
  },
  components: {
    textField,
    idField,
    belongsToField,
    selectField
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
    title: {
      type: String,
      default: ""
    },
    belongsToIncludes: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {
    this.$api(`${this.urlSlug}/create`).then(({ data: { fields } }) =>
      this.fields.push(...fields)
    );
  },
  methods: {
    save() {
      this.$api.post(`${this.urlSlug}`, this.form).then(res => {
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
