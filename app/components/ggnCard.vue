<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title" v-text="title"></p>            
        </header>
        <div class="card-content">
            <div class="content">                
                <slot></slot>
            </div>
        </div>        
    </div>
</template>
<script>
export default {
    name:'ggnCard',
    props: ['title']
}
</script>