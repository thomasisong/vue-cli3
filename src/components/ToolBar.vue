<template>
    <div class="header">
        <!-- router-link에 주소를 직접 넣어주면서 해당 주소로 넘어가도록 툴바 컴포넌트 생성 -->
        <router-link to="/news">News</router-link> | 
        <router-link to="/ask">Ask</router-link>
        <router-link to="/jobs">Jobs</router-link>
    </div>
</template>

<script>

export default {
    
}
</script>
<style scoped>
.header {
    color: white;
    background-color: #42b883;
    display: flex;
    padding: 8px;
}

.header .router-link-exact-active {
    color: blue;
}
</style>