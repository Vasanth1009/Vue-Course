<template>
    <base-dialog v-if="inputIsInValid" title="Invalid Input">
      <template #default>
        <p>Unfortunately, {{ validLabel }} not entered.</p>
        <p>Please! Check and Make sure you enter atleast few characters then Add Resourse.</p>
      </template>
      <template #actions>
          <base-button @click="closeDialog">Ok</base-button>
      </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" v-model="inputTitle" ref="titleInput">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" rows="3" v-model="inputDesc" ref="descInput"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input id="link" name="link" type="url" v-model="inputLink" ref="linkInput">
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>


<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';
export default {
	components: { BaseDialog, BaseButton },
  inject: ['addResource'],
  data() {
    return {
      inputTitle: '',
      inputDesc: '',
      inputLink: '',
      inputIsInValid : false,
      validLabel: ''
    }
  },
  methods: {
    submitData() {
      const titleValue = this.$refs.titleInput.value;
      const descValue = this.$refs.descInput.value;
      const linkValue = this.$refs.linkInput.value;
      if(titleValue.trim()==''&&descValue.trim()==''&&linkValue.trim()==''){
        this.validLabel = 'Inputs are'
        this.inputIsInValid = true;
      }else if((titleValue.trim()==''&&descValue.trim()=='')||(titleValue.trim()==''&&linkValue.trim()=='')||(descValue.trim()==''&&linkValue.trim()=='')){
        this.validLabel = 'Some inputs are'
        this.inputIsInValid = true;
      }else if(titleValue.trim()==''){
        this.validLabel = 'Title is';
        this.inputIsInValid = true;
      }else if(descValue.trim()==''){
        this.validLabel = 'Description is';
        this.inputIsInValid = true;
      }else if(linkValue.trim()==''){
        this.validLabel = 'Link is';
        this.inputIsInValid = true;
      }else{
        this.addResource(titleValue, descValue, linkValue);
        this.inputTitle = '';
        this.inputDesc = '';
        this.inputLink= '';
      }
    },
    closeDialog() {
      this.inputIsInValid = false;
    }
  },  
}
</script>


<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>