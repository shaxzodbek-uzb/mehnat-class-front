<template>
  <CContainer class="c-app flex-column" :fluid="true">
    {{ form }}
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
    title: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.$api(`${this.urlSlug}/create`, {
      params: { include: this.apiIncludes }
    }).then(
      ({ data: { fields } }) => (
        console.log(fields), this.fields.push(...fields)
      )
    );
  },
  methods: {
    save() {
      let params = {};
      for (let index = 0; index < this.fields.length; index++) {
        const element = this.fields[index];
        params[element.key] = element.value;
      }
      console.log(params);
      this.$api.post(`${this.urlSlug}`, params).then(res => {
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
