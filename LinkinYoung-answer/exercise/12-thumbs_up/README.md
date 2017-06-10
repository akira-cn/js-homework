# 练习：点赞

一个列表项前面有点赞按钮，显示“[点赞]”

```html
<style>
  #list a {
    text-decoration:none; 
  }
  .thumbs_up:after {
    content: '[点赞]';
    margin-right: 10px; 
  }
</style>
<ul id="list">
  <li><a href="###" class="thumbs_up"></a>主题1</li>
  <li><a href="###" class="thumbs_up"></a>主题2</li>
  <li><a href="###" class="thumbs_up"></a>主题3</li>
  <li><a href="###" class="thumbs_up"></a>主题4</li>
  <li><a href="###" class="thumbs_up"></a>主题5</li>
  <li><a href="###" class="thumbs_up"></a>主题6</li>
  <li><a href="###" class="thumbs_up"></a>主题7</li>
  <li><a href="###" class="thumbs_up"></a>主题8</li>
  <li><a href="###" class="thumbs_up"></a>主题9</li>
</ul>
```

![](https://p4.ssl.qhimg.com/t01a701e1cf515dc907.png)

要求点击其中一项之后，前面的'[点赞]'变为'[已赞]'，字体颜色变为红色，且不可再被点击。

![](https://p0.ssl.qhimg.com/t019a1155cf587bf876.png)

要求点击后记住已赞过的选项，即使刷新页面也不再允许点击已点过的选项。

