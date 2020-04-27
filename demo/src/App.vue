<template>
    <div id="app">
        <div class="tabs">
            <router-link to="suggest">easy-element-suggest</router-link>  <br>
            <router-link to="upload">easy-element-upload</router-link> 
        </div>
        <div class="main">
            <router-view :key="$route.fullPath"></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {

        }
    };
</script>

<style lang="less" scoped>
    #app {
        display: flex;

        .tabs {
            width: 300px;
        }

        .main {
            margin-left: 20px;
        }
    }
</style>
