# React属性代理与反向继承

此demo重点在于理解在属性代理和反向继承两种情况下外层高级组件和被包裹组件在`创建时`的生命周期调用顺序。销毁时的调用顺序可自行推导。

## 操作

切换App组件的包裹容器（HOC/ReverseHOC），查看控制台输出。

另外可编辑ReverseHOC高级组件中的对被包裹容器的生命周期的调用位置与调用顺序。

## 简单结论

> + 属性代理方式创建生命周期的调用顺序：`super componentWillMount`、`super render`、`item componentWillMount`、`item render`、`item componentDidMount`、`super componentDidMount`。这个顺序是不可变的。
> + 反向继承方式创建生命周期的调用顺序：默认只会按顺序执行`super componentWillMount`、`super render`、`super componentDidMount`这四个生命周期函数。被包裹组件内的`componentWillMount`和`componentDidMount`两个函数未被调用。
> + 在反向继承方式下，在高级组件中可以在任意位置使用super对象去调取被包裹组件的生命周期函数。当然对于被包裹组件生命周期函数的调用还需要谨慎。
