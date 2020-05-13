<template>
    <div id="app">
        <div class="tabs">
            <router-link to="suggest">easy-element-suggest</router-link>  <br>
            <router-link to="upload">easy-element-upload</router-link> <br>
            <router-link to="el-custom-table">el-custom-table</router-link> <br>
            <router-link to="custom-table">custom-table</router-link> 
        </div>
        <div class="main">
            <router-view :key="$route.fullPath"></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App'
    };
</script>

<style lang="less">
    html,
    body {
        height: 100%;
    }
    #app {
        display: flex;

        .tabs {
            width: 240px;
        }

        .main {
            margin-left: 20px;
            padding-left: 20px;
            border-left: 1px solid #aaa;
        }
    }
</style>
