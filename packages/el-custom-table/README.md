## 说明
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- |-------- |
| data     | el-table的data   |  Array     | -    |
| config     | 表格各列配置   |  Array     | -    |
| defaultColumns     | 默认展示的列   |  Array     | -    |
| cacheName    | 要读写的localstorage键名，存取的都是localstorage   | String     | -    |

注：支持 el-table 所有属性


## 用法
```html
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
	<el-table-column label="操作" fixed="right">
		<template slot-scope="scope">
			<el-button type="text" @click="onDelete(scope.row)">
				删除
			</el-button>
		</template>
	</el-table-column>
</el-custom-table>
```
注：可以通过 slot 插入操作列，向前插入加上 slot="prefix"

```js
data() {
	return {
		tableConfig: [
			{ prop: 'id', label: 'id', fixed: true },
			{ prop: 'name', label: '名称' },
			{ prop: 'time', label: '时间' },
			{ prop: 'address', label: '地址',. width: 200 },
			{ prop: 'description', label: '描述', width: 150, sot: true }, // sot: show-overflow-tooltip属性
		],
		defaultColumns: [
			'id',
			'year',
			'quarterName',
			'businessSystemName',
			'channelGroup',
			'returnBusinessTypeName',
			'returnTypeName',
			'returnItemName',
		],
	};
},
methods: {
	getList () {
		this.loading = true;
		request.getList(param).then(res => {
			this.loading = false;
			let data = res.data.data;
			if(res.data.status == 0) {
				this.list = data.list;
				this.$nextTick(() => {
					this.$refs.customTable && this.$refs.customTable.init(); //初始化
				});
			}
		});
	}
}
```
## 图示