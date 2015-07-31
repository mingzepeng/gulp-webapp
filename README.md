web开发框架，采用gulp进行项目的构建，源文件目录在app。

特点
---

- jsx自动解析
- 自动刷新

环境安装
---
1.安装nodejs [进入官网下载][4]

2.使用nodejs的包管理器npm安装gulp和bower，npm会随nodejs一起安装，不必单独下载
   
    npm install -g gulp
    npm install -g bower
3.npm的源时常会被墙，推荐采用淘宝提供的npm国内镜像[淘宝npm镜像][5]

开发流程
----
进入项目根目录，执行以下命令（以下所有命令都需要在根目录进行操作）

**1.项目依赖加载**

    npm install
    
**2.启动项目**

    gulp dev
    
**3.源码位于app文件夹，进行开发**  




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
