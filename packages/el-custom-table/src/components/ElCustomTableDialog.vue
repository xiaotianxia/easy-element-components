<template>
    <div>
        <i class="custom-table-button el-icon-setting" @click="onShow"></i>

        <el-dialog
            :visible="show"
            title="自定义列"
            :mask-closable="false"
            :show-close="false"
            append-to-body
        >
            <p><a @click="onSetAll" href="javascript:;">全选 </a> | <a @click="onSetDefault" href="javascript:;"> 默认</a></p>
            <el-checkbox-group v-model="fields">
                <template>
                    <el-checkbox v-for="item in config" :key="item.prop" :label="item.prop" :title="item.label">{{ item.label }}</el-checkbox>
                </template>
            </el-checkbox-group>
            <div slot="footer" >
                <el-button @click="show = false;">取消</el-button>
                <el-button type="primary" @click="onConfirm">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'ElCustomTableDialog',

        props: {
            config: Array,
            default: Array,
            cacheName: String
        },

        data() {
            return {
                show: false,
                fields: [],
                allFields: _.map(this.config, 'prop')
            }
        },

        methods: {
            onShow() {
                this.show = true;
                this.init();
            },

            onSetAll() {
                this.fields = this.allFields;
            },

            onSetDefault() {
                this.fields = this.default;
            },

            onConfirm() {
                const cacheName = this.cacheName ;
                localStorage.setItem(cacheName, this.fields.join('|'));

                this.renderTable();

                this.show = false;
            },

            init() {
                const cache = localStorage.getItem(this.cacheName);
                if (cache) {
                    this.fields = cache.split('|');
                } else {
                    this.fields = this.default || this.allFields;
                }
                this.renderTable();
            },

            renderTable() {
                // 全部隐藏
                _.each(this.config, item => {
                    this.$set(item, 'show', false);
                });

                _.each(this.fields, prop => {
                    let index = _.findIndex(this.config, { prop });
                    this.$set(this.config[index], 'show', true);
                });
            }
        },
    };
</script>

<style lang="less" scoped>
    .custom-table-button {
        color: #409EFF;
        font-size: 22px;
        cursor: pointer;
    }
</style>