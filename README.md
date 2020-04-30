### 关于Animated中的Api使用的学习demo
- decay()
 ```javascript
 static decay(value, config)
 /*
 * 参数说明：
 * value: (Animated.Value | Animated.ValueXY)
 * config: {
 *  velocity: number | {x: number, y: numeber} 初始速度
 *  deceleration: Rate of decay. Default 0.997.
 * }
 * 
 * 效果说明：
 * 一个模拟物体物理减速动画
 */
 ```

 - timing()
 ```javascript
 static timing(value, config)
  /*
 * 参数说明：
 * value: (Animated.Value | Animated.ValueXY)
 * config: {
 *  toValue,
 *  duration, 动画时长，默认500
 *  easing, 运动曲线，参考css
 *  delay, 动画延迟
 * }
 * 
 * 效果说明：
 * 最常用的动画效果
 */
 ```

 - spring()
 ```javascript
 static spring(value, config)
 /*
 * 参数说明：
 * value: (Animated.Value | Animated.ValueXY)
 * config: 查看demo
 * 
 * 效果说明：
 * 模拟物体弹跳效果的动画
 */
 ```

 - add()
 ```javascript
 static add(a, b)
 /*
 * 参数说明：
 * a: (Animated.Value | Animated.ValueXY)
 * b: number | (Animated.Value | Animated.ValueXY)
 * 
 * 效果说明：
 * 通过将2个动画值相加，将得到新的动画值，去驱动视图动画；
 * 可以是一个动画值与另一个常数相加；
 * 驱动的时候，不能直接驱动计算得来的动画值，正常的实现逻辑如下：
 *    let x = Animated.add(a, b);
 *    Animated.timing(a, config).start()
 *    <Animated.View style={{..., left: x}} />
 */
 ```

 - subtract()
```javascript
static subtract(a, b) // 减运算, a-b
```

- divide()
```javascript
static divide(a, b) // 除运算, a/b
```

- multiply()
```javascript
static multiply(a, b) // 除运算, a*b
```

- modulo()
```javascript
static modulo(a, modulus) // 求余运算, a*b， modlues: number
```

- diffClamp()
```javascript
static diffClamp(a, min, max)
 /*
 * 参数说明：
 * a: (Animated.Value | Animated.ValueXY)
 * min: number
 * max: number
 * 
 * 效果说明：
 * 这个方法计算得到的新动画值，会被限制在min、max指定的范围内：
 * b = Animated.diffClamp(a, min, max);
 * a < min, b = min
 * a >= min && a <= max, b = a
 * a > max, b = max
 */
```


- event()
```javascript
static event(argMapping, config?) // 可以将一些事件的参数直接映射到动画值，从而用事件驱动动画，具体看demo
```

### 进阶
- 跟随
```javascript
// 可以把A动画的动画值，赋值给B动画的toValue，从而实现让B动画追随A动画的效果

let a = new Animated.Value(0);
let b = new Animated.Value(0);

let animA1 = Animated.timing(a, {
  toValue: 200,
  duration: 500,
})

let animA2 = Animated.timing(a, {
  toValue: 0,
  duration: 500,
})

let animB = Animated.timing(b, {
  toValue: a,
  duration: 0,
})

// 开启跟随, 只需设置一次，此后B会一直跟随着A动画
animB.start();

// 启动A动画
animA1.start();
animA2.start();
// ...更多A动画

// 关闭追随
b.stopAnimation();

```