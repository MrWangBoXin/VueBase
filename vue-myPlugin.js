(function(){
	//需要向外暴漏的插件对象
	const MyPlugin={}
	
	// install安装
	MyPlugin.install = function (Vue, options) {
		
	  // 1. 添加全局方法或 property
	  Vue.myGlobalMethod = function () {
		  console.log('定义了一个名字是myGlobalMethod的方法')
	    // 逻辑...
	  }
	
	  // 2. 添加全局资源
	  //vue-my-directive属性资源
	  Vue.directive('my-directive', function (el, binding) {
	      // 逻辑...
		  el.textContent=binding.value.toUpperCase()
	  })
	
	
	  // 4. 添加实例方法,$符号用于识别实例方法
	  Vue.prototype.$myMethod = function () {
	    // 逻辑...
		console.log('Vue实例对象的方法$myMethod')
	  }
 
	}
	
	
	//向外暴漏
	window.MyPlugin=MyPlugin
	
})()