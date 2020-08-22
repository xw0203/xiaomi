// 封装 ajax 操作

/*
  => 请求地址(url): 必填
  => 请求方式(type): 选填, 如果你不传递, 那么我发送一个 GET 请求
  => 是否异步(async): 选填, 如果你不传递, 那么我就按照异步来
  => 给后端的参数(data): 选填, 如果你不传递, 那么我就不带参数
  => 期望后端返回的数据类型(dataType): 选填, 如果你不传递, 那么我就不解析

  提示用户错误的方式
    => 封装的内容不要以 console.log() 的形式提示错误
    => 因为我们在书写代码的时候, 经常回 console.log() 一下, 看一些内容
    => 我们的提示错误也是按照 console.log() 提示的话, 不容易被发现
    => 语法: throw new Error('你的错误提示信息')
      -> 手动抛出一个异常(报错)
      -> 并且打断程序的继续执行

  用户:
    => 因为我们现在是在封装一个函数
    => 我们封装的函数将来是给其他程序员使用的
    => 在封装函数的时候, 我们的用户面向的是所有开发人员

  思路:
    1. 你的参数传递的检验
      => 如果你没有传递参数, 那么我根本不需要发送一个请求, 因为发出去一定报错
      1-1. options 你传递的是不是一个对象, 如果不是一个对象, 那么回出问题的
        -> 保证你传递进来的是一个 对象 数据类型
        -> 如果不是, 我就提示用户, 你传递的数据类型不对
      1-2. 验证 options 里面的 url 选项是不是传递了
        -> 因为这个参数必填, 如果你没有传递
        -> 我的 ajax 根本不知道向哪里发送
        -> 所以直接报错给用户看到
      1-3. 验证请求方式的数据类型和数据内容
        -> 我们要求, 你的 type 选项只能传递 GET 或者 POST
        -> 目前我们不接受其他数据类型
        -> 也不接收其他数据内容
        -> 如果不是, 那么你就不要传递
        -> 但是其他数据类型, 和数据格式不行
      1-4. 验证是否异步的数据类型和数据内容
        -> 我们要求, 你的 async 选项只能是 true 或者 false 或者 不传递
        -> 其他的不行
        -> true 和 false 是 布尔值类型
        -> 不传递就是 undefined, 是 undefined 类型
      1-5. 验证给后端传递的参数
        -> 给后端传递的参数需要是一个字符串类型或者不传递
        -> 验证时一个 字符串类型 或者 undefined 类型
        -> 如果你想做的更高级一些, 你可以再多验证一下数据格式
        -> 必须是 key=value&key=value 的形式
      1-6. 验证 期望后端返回的数据类型 内容
        -> 期望后端返回的数据类型你可以是 布尔值, 可以是 undefiend
        -> 如果你是 undefined, 那么我就用默认值 false
        -> true 表示我会给你执行 JOSN.parse()
        -> false 表示我不会给你执行 JSON.parse()
      1-7. 验证 回调函数 内容
        -> 要么你别传递, 要么你就得传递一个函数
        -> 判断他的数据类型要么是 undefined, 要么是 function

    2. 进行默认值的设置
      => 因为我们现在只是验证了参数格式
      => 并没有进行默认值的设置
      => 目前你不传递某些参数就是没有

    3. 进行 ajax 的发送了
      => 参数验证完毕
      => 默认值也设置好了
      => 就按照我们设置的默认值来进行 ajax 的发送
      => 就是写一个 ajax 基本步骤
      => 用 _default 里面的数据去替换一些内容
      => 注意:
        3-2. 当你是一个 GET 请求的时候, 并且 data 不是一个空字符串
             需要把参数拼接到 url 的后面
             xxx.php?a=100&b=200
             我们要在 open 之前判断一下, 看看是不是需要拼接参数
        3-4. 发送请求的时候
             如果你是 POST 请求, 我需要设置请求头
             并且参数是再 send 后面的小括号里面
             如果你是 GET 请求, 我不需要设置请求头
             并且 send 后面的小括号里面没有内容
*/

function ajax(options) {
    // 1. 进行参数验证
    // 1-1. 判断 options 是一个 对象 数据类型
    if (Object.prototype.toString.call(options) !== '[object Object]') {
      throw new Error('请您传递一个 Object 类型的数据作为参数')
    }
  
    // 1-2. 判断 url 必填
    if (!options.url) {
      throw new Error('options.url 是必填选项, 请传递一个请求地址')
    }
  
    // 1-3. 判断 type 内容
    if (!(options.type === undefined || /^(get|post)$/i.test(options.type))) {
      throw new Error('options.type 目前只接收 GET 或者 POST, 请期待更新! ^_^')
    }
  
    // 1-4. 判断 async 内容
    if (!(typeof(options.async) === 'undefined' || typeof(options.async) === 'boolean')) {
      throw new Error('options.async 只能传递一个 布尔值 类型')
    }
  
    // 1-5. 验证 data 内容
    if (!(typeof(options.data) === 'undefined' || /^(.+=.+&?)*$/.test(options.data))) {
      throw new Error('options.data 必须是 key=value 的形式')
    }
  
    // 1-6. 验证 dataType 内容
    if (!(typeof(options.dataType) === 'undefined' || typeof(options.dataType) === 'boolean')) {
      throw new Error('options.dataType 目前只能接收 布尔 类型数据')
    }
  
    // 1-7. 验证 success 内容
    // options.success 要么是 undefined 类型数据
    // options.success 要么是 function 类型数据
    // 其他的不行
    if (!(typeof(options.success) === 'undefined' || typeof(options.success) === 'function')) {
      throw new Error('options.success 需要传递一个函数类型数据')
    }
  
    // 2. 设置一个默认值对象
    let _default = {
      url: options.url,
      type: options.type || 'GET',
      async: typeof(options.async) === 'undefined' ? true : options.async,
      data: options.data || '',
      // undefined 类型回转换为 false
      // 'undefined' 是字符串类型, 会转换为 true
      dataType: typeof(options.dataType) === 'undefined' ? false : options.dataType,
      // 设置一个 success 的默认值
      // 代码能来到这里, success 要么是 undefined, 要么是 function
      success: options.success || function () {}
    }
  
    // 3. 发送 ajax 的标准步骤
    // 3-1. 创建一个 ajax 对象
    let xhr = null
    if (XMLHttpRequest) {
      xhr = new XMLHttpRequest()
    } else {
      xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
  
    // 3-2. 进行本次请求的配置
    if (_default.type.toUpperCase() === 'GET' && _default.data) {
      _default.url += `?${_default.data}`
    }
    xhr.open(_default.type, _default.url, _default.async)
  
    // 3-3. 接收响应
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
        if (_default.dataType) {
          // 说明 dataType 是 true
          // console.log(JSON.parse(xhr.responseText))
  
          // 请求成功了, ajax 结束了
          // && 左边的如果是一个 true, 那么右边的执行
          // && 左边的如果是一个 false, 那么右边的不执行了
          // options.success && options.success(JSON.parse(xhr.responseText))
  
          // 来到这里的时候 _default.success 一定是一个函数
          // 要么是你传递进来的函数, 要么是我的默认值函数
          _default.success(JSON.parse(xhr.responseText))
        } else {
          // 说明 dataType 是 false
          // console.log(xhr.responseText)
          // options.success && options.success(xhr.responseText)
  
          _default.success(xhr.responseText)
        }
      }
    }
  
    // 3-4. 发送请求
    if (_default.type.toUpperCase() === 'POST') {
      xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
      xhr.send(_default.data)
    } else {
      xhr.send()
    }
  }
  