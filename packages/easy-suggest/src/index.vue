<template>
    <el-select
        v-model="searchValue"
        filterable
        remote
        clearable
        :disabled="disabled"
        :placeholder="placeholder || '输入搜索内容...'"
        :remote-method="onSearch"
        :loading="loading"
        @focus="onFocus"
        @change="onSelect"
    >
        <el-option
            v-for="item in list"
            :key="item[uniqueKey]"
            :label="renderLabel(label, item)"
            :value="item[uniqueKey]"
        >
        </el-option>
    </el-select>
</template>

<script>
    export default {
        name: 'ImpSuggest',

        model: {
            prop: 'value',
            event: 'update'
        },

        props: {
            value: {
                type: [String, Number],
                default: ''
            },

            // 请求api
            dao: {
                required: true,
                type: Object,
                default: () => {}
            },

            // 接口调用方法的路径
            apiPath: {
                required: true,
                type: String,
                default: ''
            },

            // 返回值的取值路径：如取res.data.list，则此处填“data.list”
            resPath: {
                required: true,
                type: String,
                default: 'data'
            },

            // 搜索内容对应的字段名
            queryParam: {
                type: String,
                default: ''
            },

            // 额外的请求参数
            extroParam: {
                type: Object,
                default: () => {}
            },

            // 唯一标识字段
            uniqueKey: {
                type: String,
                default: ''
            },

            // 各选项的显示哪些字段对应的文案，可自定义：用占位符${}拼接，如，"abc${name}_de${id}fg"
            label: {
                type: String,
                default: ''
            },

            // 禁用
            disabled: {
                type: Boolean,
                default: false
            },

            // placeholder
            placeholder: {
                type: String,
                default: ''
            },
        },

        data() {
            return {
                loading: false,
                list: [],
                searchValue: this.value
            };
        },

        watch: {
            value(e) {
                this.searchValue = e;
            }
        },

        methods: {
            onSearch(e) {
                const v = _.trim(e);
                if (v === '') { return; }
                const param = {
                    [this.queryParam]: v,
                    ...this.extroParam
                };
                const request = _.get(this.dao, this.apiPath);

                this.loading = true;
                request(param).then(res => {
                    this.loading = false;
                    this.list = _.get(res, this.resPath) || [];
                });
            },

            renderLabel(label, item) {
                label = label.replace(/\$\{(.*?)\}/g, (match, key) => item[key.trim()]);
                return item[label] || label || '';
            },

            onSelect(e) {
                let data = {};
                if (e !== '') {
                    data = _.find(this.list, item => {
                        return e === item[this.uniqueKey];
                    });
                }

                this.$emit('update', e);
                this.$emit('change', data);
            },

            onFocus(e) {
                this.list = [];
                this.$emit('focus', e);
            }
        }
    };
</script>
