## 说明
| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| dao     | api对象     | sbject     |  -     |
| apiPath     |   接口调用方法的路径   |   string   |        |
| queryParam    |   搜索内容对应的字段名   |    string  |        |
| extroParam   |   额外的请求参数   |   object   |        |
| resPath   |    其他搜索字段  |     object |        |
| label   | 各选项的显示哪些字段对应的文案，可自定义：用占位符“${}”拼接，如，&quot;abc${name}_de${id}fg&quot;     |   string   |        |
| disabled    |  是否禁用    |    boolean  |        |
| placeholder   |   对应option的label   |   string   |        |
| @change()   |  选择某项后的回调，返回该条数据对应的所有内容    |  function($event)    |        |
| @focus()  | focus回调，返回事件对象     |   function($event)   |        |

## 示例
```html
<imp-suggest
    v-model="queryparam.agentUserId"
    :dao="$dao"
    :extro-param="{ limitSize: 20 }"
    :placeholder="`输入代理商${type === 'name' ? '' : '公司'}名称搜索...`"
    :query-param="type"
    api-path="activity.getAgentUser"
    res-path="data"
    unique-key="userId"
    label="${companyName}_${userName}"
    @change="queryparam.agentUserName = $event.userName;"
>
</imp-suggest>
```



