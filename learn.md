1.1 首页的配置
1.2 页面的配置(页面配置会覆盖首页， 优先级更高)
1.3 配置主要在 app.json 配置 Page, windows, tarbar,
1.4 内部使用双线程进行渲染dom，  一个线程处理 (wxml + wxss)，  一个线程处理 (js)文件

界面渲染整体流程:

  1. 在渲染层， 宿主环境会把wxml转换为对应的js对象
  2. 将js对象再次转换为真是的DOM数， 交给渲染层线程渲染
  3. 数据变化时候， 逻辑层提供最新的变化数据， js对象该发生变化比较进行diff算法对比
  4. 将最新变化的内容反应到真实的DOM数中， 更新UI。


箭头函数this指向问题:
  this会一层一层向上寻找， 直到找到一个已经被定义的对象，然后指向它
  


App的生命周期:
  onLauch:
    判断小程序进入的场景:

Page的生命周期: