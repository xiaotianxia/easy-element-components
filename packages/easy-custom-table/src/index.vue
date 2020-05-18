<template>
    <div class="easy-custom-table">
        <el-custom-table-dialog
            ref="customTableDialog"
            class="custom-table-operation"
            :config="config"
            :default="defaultColumns"
            :cache-name="cacheName"
            @hook:mounted="onDialogMounted"
        >
        </el-custom-table-dialog>

        <table>
            <colgroup>
                <col v-for="item in config" :key="item.prop" :width="item.width">
            </colgroup>
            <thead>
                <tr>
                    <template v-for="item in config">
                        <th v-if="item.show" :key="item.prop">{{ item.label }}</th>
                    </template>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item, index) in data">
                    <tr :key="index">
                        <template v-for="(value, key) in item">
                            <td v-if="(find(config, { prop: key }) || {}).show" :key="key">{{ data[index][key]}}</td>
                        </template>
                        <slot :row="item"></slot>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    import ElCustomTableDialog from './components/ElCustomTableDialog';
    import { find } from 'lodash-es';

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

        data() {
            return {
                find,
            }
        },

        methods: {
            onDialogMounted() {
                this.$refs.customTableDialog.init();
                console.log(this.$slots)
            }
        },
    };
</script>

<style lang="less" scoped>
    .easy-custom-table {
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

        table {
            width: 100%;
            background-color: #fff;
            box-sizing: content-box;
            border-collapse: collapse;
            font-size: 12px;
            color: #606266;

            th,
            td {
                text-align: left;
                text-overflow: ellipsis;
                vertical-align: middle;
                border-left: 1px solid #f2f2f2;
                border-right: 1px solid #f2f2f2;
                border-bottom: 1px solid #e7e7e7;
                padding: 10px;
            }

            th {
                color: #909399;
                white-space: nowrap;
                font-weight: 700;
                border-top: 1px solid #e7e7e7;
            }
        }
    }
</style>