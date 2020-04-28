<template>
    <div>
        <easy-element-upload
            
        >
        </easy-element-upload>
    </div>
</template>

<script>
    // import EasyElementUpload from '../components/easy-element-upload/src/index';
    import EasyElementUpload from '../../../packages/easy-element-upload/src/index';
    import demoService from '../services/demo';
    
    export default {
        name: 'HelloWorld',

        components: {
            EasyElementUpload
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
            
        },
    };
</script>