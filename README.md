web开发框架，采用gulp进行项目的构建，源文件目录在app。
本框架采用nodejs进行开发，可使用coffee-script和sass，也可以直接使用javascript和css。

特点
---

- 开发脚本：[coffee-script][1]或者 javascript，[sass][2]或者css
- 包管理器：采用[bower][3]进行前端包的管理
- 自动刷新：可检测目录文件的变化，自动刷新页面
- 自动构建：自动构建项目，支持对js，css文件的合并和压缩

环境安装
---
1.安装nodejs [进入官网下载][4]

2.使用nodejs的包管理器npm安装gulp，npm会随nodejs一起安装，不必单独下载
   
    npm install -g gulp
    
3.npm的源时常会被墙，推荐采用淘宝提供的npm国内镜像[淘宝npm镜像][5]

开发流程
----
进入项目根目录，执行以下命令（以下所有命令都需要在根目录进行操作）

**1.项目依赖加载**

    npm install
    bower install
    
**2.启动项目**

    gulp serve
    
**3.源码位于app文件夹，进行开发**  

 1. app/index.html为pc端面设计

 2. app/mobile.html 为移动端页面设计,专门为移动端引入了一些包，包括[zepto][6]、[touchjs][7]、[iscroll][8]
 
 3. 暂未引入字体符号，可以访问[icomoon][9]选择合适的字体符号加入，字体文件可放置于app/fonts文件夹下。
 
 4. 为sass引入[sassCore][10]库。

**4.开发完毕，构建项目**
    
    gulp build


  [1]: http://coffeescript.org/
  [2]: http://sass-lang.com/
  [3]: http://bower.io/
  [4]: http://nodejs.org/
  [5]: http://npm.taobao.org/
  [6]: http://zeptojs.com/
  [7]: https://github.com/brandnewera/touchjs
  [8]: https://github.com/cubiq/iscroll
  [9]: http://icomoon.io/app/#/select
  [10]: https://github.com/marvin1023/sassCore.git