## 说明
<table class="lake-table">
    <tbody>
        <tr>
            <td>参数</td>
            <td>说明</td>
            <td>类型</td>
            <td>默认值</td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <td>action-url</td>
            <td>action</td>
            <td>string</td>
            <td>'/ncrm/file/upload/ext'</td>
        </tr>
        <tr>
            <td>extro-param</td>
            <td>上传需要的额外参数</td>
            <td>object</td>
            <td>-</td>
        </tr>
        <tr>
            <td>max-size</td>
            <td>每次上传最大文件 单位M</td>
            <td>number</td>
            <td>50</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>multiple</td>
            <td>是否支持多个</td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td>inline</td>
            <td>已上传文件与按钮是否内联</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>show-file-list</td>
            <td>是否显示已上传文件列表</td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td>show-loading</td>
            <td>是否显示loading</td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td>file-name-key</td>
            <td>提交文件时文件名对应的key</td>
            <td>string</td>
            <td>'filename'</td>
        </tr>
        <tr>
            <td>previewBaseUrl</td>
            <td>上传后文件预览的baseUrl，如没有则取previewUrlKey对应值，且认为其是完整路径</td>
            <td>string</td>
            <td>''</td>
        </tr>
        <tr>
            <td>previewUrlKey</td>
            <td>上传后返回的预览url对应的key</td>
            <td>string</td>
            <td>'viewUrl'</td>
        </tr>
        <tr>
            <td>button-text</td>
            <td>按钮文案</td>
            <td>string</td>
            <td>'上传'</td>
        </tr>
        <tr>
            <td>accept</td>
            <td>
                接受上传的
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept" target="_blank" rel="noopener noreferrer">文件类型</a>
            </td>
            <td>string</td>
            <td>''</td>
        </tr>
        <tr>
            <td>limit</td>
            <td>最大允许上传个数</td>
            <td>number</td>
            <td>-</td>
        </tr>
        <tr>
            <td>clear()</td>
            <td>清空上传你列表</td>
            <td>方法</td>
            <td>-</td>
        </tr>
        <tr>
            <td>
                <a>@success</a>
            </td>
            <td>每次上传成功后的回调，返回单词上传后端返回值</td>
            <td>function(res)</td>
            <td>-</td>
        </tr>
        <tr>
            <td>
                <a>@change</a>
            </td>
            <td>上传成功后回调，返回fileList</td>
            <td>function({fileList})</td>
            <td>-</td>
        </tr>
    </tbody>
</table>

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