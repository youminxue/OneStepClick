# 使用方法：
```
<script src="js/jquery-3.1.1.min.js" type="text/javascript" charset="utf-8"></script>
```

```
<script src="jquery_OneStepClick.js" type="text/javascript" charset="utf-8"></script>
```

```
$("[type='button']").OneStepClick(function(){//点击事件
console.log("1");
//this.Done();//完成调用
},function(){//上一次未完成
alert("别点了")
});
```