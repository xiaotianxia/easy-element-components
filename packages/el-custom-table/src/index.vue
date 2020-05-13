<template>
    <div class="el-custom-table">
        <el-custom-table-dialog
            ref="customTableDialog"
            class="custom-table-operation"
            :config="config"
            :default="defaultColumns"
            :cache-name="cacheName"
            @hook:mounted="onDialogMounted"
        >
        </el-custom-table-dialog>

        <el-table :data="data" v-bind="$attrs">
            <slot name="prefix"></slot>

            <template v-for="item in config">
                <el-table-column
                    v-if="item.show"
                    :key="item.prop"
                    :prop="item.prop"
                    :label="item.label"
                    :fixed="item.fixed"
                    :width="item.width"
                    :show-overflow-tooltip="item.sot"
                >
                </el-table-column>
            </template>

            <slot></slot>
        </el-table>
    </div>
</template>

<script>
    import ElCustomTableDialog from './components/ElCustomTableDialog';

    export default {
        name: 'ElCustomTable',

        components: {
            ElCustomTableDialog,
        },

        props: {
            data: Array,
            config: Array,
            defaultColumns: Array,
            cacheName: String
        },

        methods: {
            onDialogMounted() {
                this.$refs.customTableDialog.init();
            }
        },

        
    };
</script>

<style lang="less" scoped>
    .el-custom-table {
        position: relative;

        &:hover {
            .custom-table-operation {
                opacity: 1;
            }
        }

        .custom-table-operation {
            position: absolute;
            top: -6px;
            right: -6px;
            z-index: 999;
            opacity: 0;
            transition: all ease .2s;
        }
    }
</style>