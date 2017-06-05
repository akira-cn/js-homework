# 练习：分组选中

已知如下列表：

```html
<style>
  #list {
    margin: 0;
    padding: 0;    
  }
  #list li {
    list-style-type:none;
  }
  #list a {
    display: block;
    text-decoration: none;
  }
  #list a:hover {
    background-color: rgba(0, 0, 0, 0.2);  
  }
  #list li.error a{
    color: red;
  }
  #list li.warning a{
    color: orange;
  }
  #list li.info a{
    color: green;
  }
</style>
<ul id="list">
  <li class="error"><a href="###">错误信息：error...</a></li>
  <li class="warning"><a href="###">警告信息：error...</a></li>
  <li class="info"><a href="###">提示信息：error...</a></li>
  <li class="warning"><a href="###">警告信息：error...</a></li>
  <li class="warning"><a href="###">警告信息：error...</a></li>
  <li class="error"><a href="###">错误信息：error...</a></li>
  <li class="error"><a href="###">错误信息：error...</a></li>
  <li class="info"><a href="###">提示信息：error...</a></li>
  <li class="error"><a href="###">错误信息：error...</a></li>
</ul>
```

![](https://p3.ssl.qhimg.com/t01103f5d49ee25fa95.png)

用 JavaScript 实现功能：选中其中一项，鼠标点击后，把同类型的所有项高亮（黑底白字）。例如，选中 `class="error"` 的项，结果如下：

![](https://p2.ssl.qhimg.com/t012a38405ab70e53da.png)

点击页面的其他部分，列表恢复原状。

