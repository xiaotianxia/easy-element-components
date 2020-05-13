<template>
    <div>
        <easy-element-upload
            action-url="http://jsonplaceholder.typicode.com/photos"
            :extro-param="{a: 1}"
            @success="onUploadSuccess"
            @change="onUploadChange"
        >
        </easy-element-upload>
    </div>
</template>

<script>
    import EasyElementUpload from '../../../packages/easy-element-upload/src/index';
    
    export default {
        components: {
            EasyElementUpload
        },

        data () {
            return {
                formData: {},
            };
        },

        methods: {
            onUploadSuccess(e) {
                console.log(e); // 服务器返回信息
            },

            onUploadChange (e) {
                this.formData.attachments = e.fileList;
                // 或者
                e.fileList.foreach(item => {
                    this.formData.attachment[item.name] = item.viewUrl;
                });
            }
        },
    };
</script>