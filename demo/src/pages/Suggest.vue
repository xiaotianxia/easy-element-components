<template>
    <div>
        <easy-element-suggest
            v-model="formData.name"
            clearable
            :dao="demoService"
            api-path="suggest.getUsers"
            res-path="data.list"
            query-param="userName"
            :extro-param="{id: 123, n: 234}"
            unique-key="userId"
            label="userName"
            placeholder="输入姓名模糊搜索..."
            @focus="onFocus"
            @change="onChange"
        >
        </easy-element-suggest>

        <div>姓名： {{ formData.name }}</div>
        <div>ID： {{ formData.id }}</div>
        <div>地址： {{ formData.address }}</div>
    </div>
</template>

<script>
    // import EasyElementSuggest from '../components/easy-element-suggest/src/index';
    import EasyElementSuggest from '../../../packages/easy-element-suggest/src/index';
    import demoService from '../services/demo';
    
    export default {
        name: 'HelloWorld',

        components: {
            EasyElementSuggest
        },

        props: {
            msg: String
        },

        data () {
            return {
                formData: {
                    id: '',
                    name: '',
                    address: ''
                },
                demoService
            };
        },

        methods: {
            onChange (e) {
                console.log('所选数据', e);
                if(e.userId) {
                    this.formData.name = e.userName;
                    this.formData.id = e.userId;
                    this.formData.address = e.address;
                } else {
                    this.formData.name = '';
                    this.formData.id = '';
                    this.formData.address = '';
                }
            },

            onFocus (e) {
                console.log('focused', e)
            }
        },
    };
</script>