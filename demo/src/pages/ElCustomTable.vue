<template>
    <div class="my-table">
        <el-custom-table
            ref="customTable"
            :data="list"
            :config="tableConfig"
            :default-columns="defaultColumns"
            cacheName="XXX_LIST_COLUMNS"
            v-loading="loading"
            stripe
            border
        >
            <el-table-column slot="name" label="插入" prop="city"></el-table-column>
            <el-table-column label="操作" fixed="right">
                <template slot-scope="scope">
                    <el-button type="text" @click="onDelete(scope.row)">
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-custom-table>
    </div>
</template>

<script>
    import ElCustomTable from '../../../packages/el-custom-table/src/index';
    
    export default {
        components: {
            ElCustomTable
        },

        data() {
            return {
                loading: false,
                list: [],
                tableConfig: [
                    { prop: 'date', label: '日期', fixed: true, width: 100 },
                    { prop: 'name', label: '名称' },
                    { prop: 'province', label: '省份' },
                    { prop: 'city', label: '城市', width: 200 },
                    { prop: 'address', label: '地址', width: 200, sot: true }, // sot: show-overflow-tooltip属性
                    { prop: 'zip', label: '邮编号码', width: 150 },
                ],
                defaultColumns: [
                    'date',
                    'name',
                    'address',
                ],
            };
        },

        methods: {
            getList () {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.list = [{
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄 XXXXXXXXXXX',
                        zip: 200333
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄 000000000000',
                        zip: 200333
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-08',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-06',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-07',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }];
                }, 1000);
            },

            onDelete(data) {
                this.$message.info(`删除 ${data.date} 这一项`);
            }
        },

        mounted() {
            this.getList();
        },
    };
</script>

<style lang="less" scoped>
    .my-table {
        width: 700px;
        margin: 20px 0 0 10px;
    }
</style>