<template>
  <base-card>
    <base-button @click = "setTab('stored-resource')" :mode="switchStoredResource">Stored Resources</base-button>
    <base-button @click = "setTab('new-resource')" :mode="switchNewResource">Add Resource</base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResource from './StoredResource';
import NewResource from './NewResource';
export default {
    components: { StoredResource, NewResource },
    data() {
        return {
            selectedTab: 'stored-resource',
            resources: [
                {
                    id: 'vue-documentation',
                    title: 'Vue-Documentation',
                    description: 'To get official documentation in vuejs',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'To Learn Doubts',
                    link: 'https://google.org'
                }
            ]
        }
    },
    computed: {
        switchStoredResource() {
            return this.selectedTab === 'stored-resource' ? null : 'flat'; 
        },
        switchNewResource() {
            return this.selectedTab === 'new-resource' ? null : 'flat'; 
        }
    },
    provide() {
        return {
            resources: this.resources
        }
    },
    methods: {
        setTab(tab) {
            this.selectedTab = tab;
        }
    },
   
}
</script>
