# 小程序商城(Applets-Shop)

## 必知必看

​	该项目是本人学习`小程序`时所创建的仓库，用于记录`小程序`的学习过程，资料来源于网络， <u>如有侵权请联系`clone`地址里的企鹅号。</u>

# 以下内容套用了另一个项目的模板，目前只上传了部分截图，其他部分有待修补
## 项目介绍

​	项目的主要核心业务是新闻的撰写、提交审核、审核新闻、发布新闻等...

​	基本上复现了教程视频里的页面，在某些地方添加了一些个人的设计，处理请求的数据方式上部分与教程不一致，但也注释保留了原来的处理方法，因为版本问题有些效果无法实现(报错)，所以本人也只是做了个人常用浏览器的兼容，希望参考这个项目学习的友友能做更好的兼容，追求更好的兼容效果，进一步提升自己的能力。

PS：后期会对项目进行优化，当然只是尽可能的优化。

​	

## 上手指南

​	接下来的内容会大致描述运行项目主要的步骤，帮助你在本地机器上安装和运行该项目，进行二次开发和测试。

### 安装要求

- `node`版本，目前了解到的最好控制在14及以上的版本。
- `package.json` 文件中未记录 `lodash` 版本，需要自行另安装。
- 全局安装 `json-server` ，模拟接口。
- 未安装 `NProgress` 进度条模块，如想使用请自行安装。

### 安装步骤

clone代码  ->  初始化  ->  安装 `json-server`  ->  db文件夹启动server  ->  运行项目

- `git clone https://github.com/2661909992/react-news.git`
- `npm install`
- `npm install -g json-server`
- `json-server --watch db.json --port 5000`
- `npm start`

PS：暂不展示在线 Demo

## 测试

​	解释说明一下如何运行该系统的自动测试部分。

### 分解为端对端测试

​	解释这些测试是什么以及为什么要做这些测试

- 暂不做测试，不举例

### 代码风格测试

​	解释这些测试是什么以及为什么要做这些测试

- 暂不做测试，不举例

## 部署

​	对以上的安装步骤进行补充说明，描述如何在在线环境中安装该项目。

- 暂不做部署，不举例

## 使用到的框架

* 涉及技术栈：react@18、reactRouter@5、redux@4、antd@4
* 第三方工具库：axios@0.27、echarts、lodash、NProgress等
* 据个人了解 node14-16 可用

## 贡献者

​	请阅读 [贡献者名单.md](https://github.com/2661909992/react-news/edit/main/README.md) 查阅为该项目做出贡献的开发者。

## 版本控制

​	该项目使用 [SemVer](http://semver.org/) 进行版本管理。您可以在 [repository](https://github.com/your/project/tags) 参看当前可用版本。(请忽略此信息)

## 作者

* **NNPB** - *前端开发和维护* - [公司名(无)](https://github.com/PurpleBooth)

PS：您也可以在 [贡献者名单.md](https://github.com/2661909992/react-news/edit/main/README.md) 中参看所有参与该项目的开发者。

## 版权说明

​	该项目未签署了MIT 授权许可，对MIT详情感兴趣请自行了解 。

## 鸣谢

* 该项目参考了 **破站**  里 **千锋教育 kerwin老师** 主讲的 [课程](https://www.bilibili.com/video/BV1dP4y1c7qd?p=152&vd_source=dd831bffe2fbc3e5e70e5aabbee73fe4) ，课程风趣，非常感谢。
* README.md 文档的灵感来源于写 [这篇博客](https://blog.csdn.net/shiyanlou_chenshi/article/details/86623534) 的作者，感谢翻译。
* 感谢亲朋好友的支持和陪伴。

## 部分页面截图
![1](https://user-images.githubusercontent.com/84703480/199233660-e0a492c7-074c-4e77-8653-ac7fc960981b.png)
![2](https://user-images.githubusercontent.com/84703480/199233668-905eb227-fd32-423e-bb7e-ac7b483c6bba.png)
![3](https://user-images.githubusercontent.com/84703480/199233683-26080119-70b3-4ebc-856c-de9e3bed307d.png)
![4](https://user-images.githubusercontent.com/84703480/199233707-c25eca79-27ee-4c01-b9e6-fd50fec25a69.png)
![5](https://user-images.githubusercontent.com/84703480/199233717-74e7356e-9059-4183-8108-d29619c8313b.png)
