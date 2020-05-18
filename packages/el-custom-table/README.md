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
注：可以通过 slot 插入操作列，向最前插入加上 slot="prefix", 若要插入某一列前面， slot="该列的prop"

```js
data() {
	return {
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
		request.getList(param).then(res => {
			this.loading = false;
			let data = res.data.data;
			if(res.data.status == 0) {
				this.list = data.list;
			}
		});
	}
}
```
## 图示