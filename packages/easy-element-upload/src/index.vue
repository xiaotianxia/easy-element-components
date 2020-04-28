<template>
    <el-upload
        class="upload-wrap"
        :class="{inline: inline}"
        :action="actionUrl"
        name="file"
        :headers="headers"
        :data="extroParam"
        :before-upload="onBeforeUpload"
        :on-progress="onProgress"
        :on-error="onError"
        :on-preview="onPreview"
        :on-remove="onRemove"
        :on-success="onSuccess"
        :multiple="multiple"
        :show-file-list="showFileList"
        :file-list="files"
        :disabled="disabled"
        :accept="accept"
    >
        <el-button :loading="loading" :disabled="disabled" icon="el-icon-upload2" type="primary">
            {{ buttonText }}
        </el-button>
        <slot />
    </el-upload>
</template>

<script>
    import Cookie from 'js.cookie';
    import { openUrl } from '../../../utils/tools';
    import { map } from 'lodash-es';

    export default {
        name: 'EasyElementUpload',

        props: {
            // 按钮文案
            buttonText: {
                type: String,
                default: '上传'
            },

            // action
            actionUrl: {
                type: String,
                default: '/file/upload/ext'
            },

            // 上传后文件预览的baseUrl，如没有则取previewUrlKey对应值，且认为其是完整路径
            previewBaseUrl: {
                type: String,
                default: ''
            },

            // 上传后返回的预览url对应的key
            previewUrlKey: {
                type: String,
                default: 'viewUrl'
            },

            // 上传需要的额外参数
            extroParam: {
                type: Object,
                default: () => {}
            },

            // 每次上传最大文件 单位M
            maxSize: {
                type: Number,
                default: 50
            },

            // 最多上传个数
            limit: {
                type: Number,
                default: 20
            },

            // 是否支持多选文件
            multiple: {
                type: Boolean,
                default: true
            },

            // 禁用
            disabled: {
                type: Boolean,
                default: false
            },

            // 是否显示已上传文件列表
            showFileList: {
                type: Boolean,
                default: true
            },

            // 提交文件时文件名对应的key
            fileNameKey: {
                type: String,
                default: 'filename'
            },

            // 已上传文件与按钮是否内联
            inline: {
                type: Boolean,
                default: false
            },

            accept: {
                type: String,
                default: ''
            },

            fileList: {
                type: Array,
                default: () => []
            },

            // 上传时是否显示loading
            showLoading: {
                type: Boolean,
                default: true
            }
        },

        data() {
            return {
                loading: false,
                headers: {},
                files: []
            };
        },

        watch: {
            fileList(e) {
                // [{ response: { data: { name: '', viewUrl: ' } } }]
                const files = e || [];
                this.files = map(files,  item => {
                    return {
                        name: item.name,
                        response: {
                            data: {
                                name: item.name,
                                [this.previewUrlKey]: item[this.previewUrlKey]
                            }
                        }
                    }
                });
                this.handleFileList(this.files);
            }
        },

        methods: {
            onBeforeUpload(file) {
                if (file.size > this.maxSize * 1024 * 1024) {
                    this.$message.info(`文件大小请限制在${this.maxSize}M以下`);
                    return false;
                }
                if (this.files.length >= this.limit) {
                    this.$message.info(`最多可上传${this.limit}个文件`);
                    return false;
                }
                this.headers['**-TOKEN'] = Cookie.get('**-TOKEN');
                if (this.extroParam) {
                    this.extroParam[this.fileNameKey] = file.name;
                }
            },

            onProgress(e) {
                this.$emit('progress', e.percent);
                if (this.showLoading) {
                    this.loading = e.percent < 100;
                }
            },

            onError(e) {
                this.$message.error(e.message || '上传出错');
                this.loading = false;
            },

            onSuccess(res, file, fileList) {
                if (res.status === 0) {
                    this.handleFileList(fileList);
                    this.$emit('success', res);
                } else {
                    this.$message.error(res.message || '上传出错');
                }
            },

            onPreview(file) {
                const previewUrl = file.response.data[this.previewUrlKey];
                const url = this.previewBaseUrl ? this.previewBaseUrl + previewUrl : previewUrl;
                openUrl(url);
            },

            onRemove(file, fileList) {
                this.handleFileList(fileList);
            },

            handleFileList(fileList) {
                this.$emit('change', {
                    fileList: map(fileList, item => {
                        return item.response.data;
                    })
                });
            },

            clear() {
                this.files = [];
            }
        }
    };
</script>

<style lang="less" scoped>
    .upload-wrap {
        /deep/ .el-upload-list__item {
            outline: none;
        }

        &.inline {
            /deep/ .el-upload-list {
                display: inline-flex;
                margin-left: 10px;
                vertical-align: bottom;

                li {
                    display: inline-block;
                    margin-top: 0;
                }
            }
        }
    }
</style>
