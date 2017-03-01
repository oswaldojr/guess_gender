<template>
    <ggnPanel title="What are the names?">        
        <p class="control">
            <label class="label">Name</label>
            <input class="input" type="text" placeholder="Name" v-model="name" @keyup="addName" @keydown="clearError">            
            <span class="help is-danger" v-if="hasError" v-text="erroMessage"></span>
        </p>
    </ggnPanel>    
</template>

<script>

import ggnPanel from '../components/ggnPanel.vue';

export default {
    name: 'ggnPanelName',
    data(){
        return {
            name: '',
            hasError: false,
            erroMessage: ''
        }
    },    
    methods: {
        addName: function(e){            
            if(e.keyCode === 32 || e.keyCode === 13){ //Space or Enter            
                this.$http.get('https://api.genderize.io/?name=' + this.name).then(function({data}){                
                    if(data.gender){
                        this.$store.commit('addName', data);
                        this.name = '';
                    }else{
                        this.hasError = true;
                        this.erroMessage = "I don't know the gender of that name =/";
                    }
                }.bind(this)).catch(function(response){
                    this.hasError = true;
                    this.erroMessage = "Error, anything is wrong =/"
                }.bind(this));            
            }
        },
        clearError: function(){ 
            if(this.hasError){
                this.hasError = false;
                this.erroMessage = '';
            }
        }
    },
    components: {ggnPanel}    
}
</script>