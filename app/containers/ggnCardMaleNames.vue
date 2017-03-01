<template>
    <ggnCard v-if="hasMaleNames" title="Male Names">        
        <ggnTag v-for="n in maleNames" :key="n.count" :text="n.name" :title="resolveTitleTag(n.probability)" @deleteEvent="removeName" colorClass="is-primary"></ggnTag>        
    </ggnCard>    
</template>
<script>

import ggnCard from '../components/ggnCard.vue';
import ggnTag from '../components/ggnTag.vue';

export default {
    name: 'ggnCardMaleNames',    
    methods: {        
        removeName: function(name){
            this.$store.commit('removeName', name);
        },
        resolveTitleTag: (probability)=> {
            return `Probability ${probability}`;
        }
    },    
    computed: {
        hasMaleNames(){
            return this.$store.getters.hasMaleNames;
        },
        maleNames(){
            return this.$store.getters.maleNames;
        }
    },        
    components: {ggnCard, ggnTag}
}
</script>