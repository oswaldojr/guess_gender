<template>
    <span :class="style">
        {{text}}        
        <a @click="emitDeleteEvent"><i class="fa fa-question-circle-o icon_custom" :title="title"></i></a>
    </span>
</template>
<script>
export default {
    name: 'ggnTag',
    props: ['text', 'title', 'colorClass', 'deleteEvent'],
    computed: {
        style(){
            return `tag ${this.colorClass} is-medium margin_letf`;
        }
    },
    methods: {
        emitDeleteEvent: function(){            
            this.$emit('deleteEvent', this.text);
        }
    }
}
</script>
<style>
    .margin_letf{
        margin-left: 0.5em
    }
    .icon_custom{
        color: white;
        margin-left: 0.5em
    }
</style>