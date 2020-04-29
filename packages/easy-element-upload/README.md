## 说明

|   参数   |  说明    |  类型    |  默认值    |
| ---- | ---- | ---- | ---- |
|   action-url   |  action    |  string    |      |
|   extro-param   |   上传需要的额外参数   |   object   |      |
|   max-size   |  每次上传最大文件 单位M    |   number   |    50  |
|   disabled   |  是否禁用    |  boolean    |   false   |
|   multiple   |  是否支持多个    |   boolean   |   true   |
|    inline  |   已上传文件与按钮是否内联   | boolean     |   false
|    show-file-list  |   是否显示已上传文件列表   |   boolean   |    true  |
|    show-loading  |  是否显示loading    |  boolean    |   true   |
|   file-name-key   |    提交文件时文件名对应的key  |  string    |   'filename'   |
|   previewBaseUrl   |  上传后文件预览的baseUrl，如没有则取previewUrlKey对应值，且认为其是完整路径   |  string    |      |
|   previewUrlKey   |   上传后返回的预览url对应的key   |    string  |    'viewUrl'  |
|    accept  |   接受上传的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)   |   string   |      |
|   limit   |  最大允许上传个数    |   number   |      |
|   clear()   |   清空上传你列表   |   方法   |      |
|   @success   |    每次上传成功后的回调，返回单词上传后端返回值  |   function(res)   |      |
|    @change  |     上传成功后回调，返回fileList |  function({fileList})    |      |


## 示例
```html
<imp-upload
    :action-url="'/marketing-platform/file/upload'"
    :extro-param="{a: 1}"
    @success="onUploadSuccess"
    @change="onUploadChange"
>
</imp-upload>
```

```js
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
```