<template>
    <ggnCard v-if="hasFemaleNames" title="Female Names">        
        <ggnTag v-for="n in femaleNames" :key="n.count" :text="n.name" :title="resolveTitleTag(n.probability)" @deleteEvent="removeName" colorClass="is-danger"></ggnTag>        
    </ggnCard>    
</template>
<script>

import ggnCard from '../components/ggnCard.vue';
import ggnTag from '../components/ggnTag.vue';

export default {
    name: 'ggnCardFemaleNames',        
    methods: {        
        removeName: function(name){
            this.$store.commit('removeName', name);
        },
        resolveTitleTag: (probability)=> {
            return `Probability ${probability}`;
        }        
    },
    computed:{
        hasFemaleNames(){ 
            return this.$store.getters.hasFemaleNames;
        },
        femaleNames(){
            return this.$store.getters.femaleNames;
        }        
    },    
    components: {ggnCard, ggnTag}
}
</script>