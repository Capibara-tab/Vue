<template> 
<Header></Header>
<div class="container">
    <sidebar></sidebar>
    <div class = "content">
        <router-view></router-view>
    </div>

</div>
</template>
<script setup>
import sidebar from '../components/sidebar.vue'
import Header from '../components/Header.vue'
</script>
<stlye>
.container {
    display: flex;
}
.content {
    flex: 1;
    padding: 20px;
}
</stlye>