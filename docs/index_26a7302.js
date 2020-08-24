amis.define('docs/index.md', function(require, exports, module, define) {

  module.exports = {
    "title": "介绍",
    "description": "介绍",
    "type": 0,
    "group": "💡 概念",
    "menuName": "介绍",
    "icon": null,
    "order": 8,
    "html": "<h2><a class=\"anchor\" name=\"%E4%BB%80%E4%B9%88%E6%98%AF-amis\" href=\"#%E4%BB%80%E4%B9%88%E6%98%AF-amis\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>什么是 amis</h2><p>amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以节省页面开发工作量，极大提升开发前端页面的效率。</p>\n<h2><a class=\"anchor\" name=\"%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%81%9A-amis-\" href=\"#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%81%9A-amis-\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>为什么要做 amis？🤔</h2><p>在经历了十几年的发展后，前端开发变得越来越复杂，门槛也越来越高，要使用当下流行的 UI 组件库，你必须懂 <code>npm</code>、<code>webpack</code>、<code>react/vue</code>，必须熟悉 <code>ES6</code> 语法，最好还了解状态管理（比如 <code>Redux</code>），如果没接触过函数式编程，一开始入门就很困难，而它还有巨大的 <a href=\"https://github.com/markerikson/redux-ecosystem-links\">生态</a>，相关的库有 <strong>2347</strong> 个。</p>\n<p>然而前端技术的发展不会停滞，等学完这些后可能会发现大家都用 <code>Hooks</code> 了、某个打包工具取代 <code>Webpack</code> 了。。。</p>\n<p>而有时候你只是为了做个普通的增删改查界面，用于系统管理，类似下面这种：</p>\n<div class=\"amis-preview\" style=\"height: 1100px\"><script type=\"text/schema\" height=\"1100\">{\n  \"title\": \"浏览器内核对 CSS 的支持情况\",\n  \"remark\": \"嘿，不保证数据准确性\",\n  \"type\": \"page\",\n  \"body\": {\n    \"type\": \"crud\",\n    \"draggable\": true,\n    \"syncLocation\": false,\n    \"api\": \"https://houtai.baidu.com/api/sample\",\n    \"keepItemSelectionOnPageChange\": true,\n    \"filter\": {\n      \"title\": \"筛选\",\n      \"submitText\": \"\",\n      \"controls\": [\n        {\n          \"type\": \"text\",\n          \"name\": \"keywords\",\n          \"placeholder\": \"关键字\",\n          \"addOn\": {\n            \"label\": \"搜索\",\n            \"type\": \"submit\"\n          }\n        }\n      ]\n    },\n    \"bulkActions\": [\n      {\n        \"label\": \"批量删除\",\n        \"actionType\": \"ajax\",\n        \"api\": \"delete:https://houtai.baidu.com/api/sample/${ids|raw}\",\n        \"confirmText\": \"确定要批量删除?\"\n      },\n      {\n        \"label\": \"批量修改\",\n        \"actionType\": \"dialog\",\n        \"dialog\": {\n          \"title\": \"批量编辑\",\n          \"name\": \"sample-bulk-edit\",\n          \"body\": {\n            \"type\": \"form\",\n            \"api\": \"https://houtai.baidu.com/api/sample/bulkUpdate2\",\n            \"controls\": [\n              {\n                \"type\": \"hidden\",\n                \"name\": \"ids\"\n              },\n              {\n                \"type\": \"text\",\n                \"name\": \"engine\",\n                \"label\": \"Engine\"\n              }\n            ]\n          }\n        }\n      }\n    ],\n    \"quickSaveApi\": \"https://houtai.baidu.com/api/sample/bulkUpdate\",\n    \"quickSaveItemApi\": \"https://houtai.baidu.com/api/sample/$id\",\n    \"filterTogglable\": true,\n    \"headerToolbar\": [\n      \"filter-toggler\",\n      \"bulkActions\",\n      {\n        \"type\": \"action\",\n        \"label\": \"重置测试数据\",\n        \"actionType\": \"ajax\",\n        \"size\": \"sm\",\n        \"api\": \"https://houtai.baidu.com/api/sample/reset\"\n      },\n      {\n        \"type\": \"tpl\",\n        \"tpl\": \"一共有 ${count} 行数据。\",\n        \"className\": \"v-middle\"\n      },\n      {\n        \"type\": \"columns-toggler\",\n        \"align\": \"right\"\n      },\n      {\n        \"type\": \"drag-toggler\",\n        \"align\": \"right\"\n      },\n      {\n        \"type\": \"pagination\",\n        \"align\": \"right\"\n      }\n    ],\n    \"footerToolbar\": [\"statistics\", \"switch-per-page\", \"pagination\"],\n    \"columns\": [\n      {\n        \"name\": \"id\",\n        \"label\": \"ID\",\n        \"width\": 20,\n        \"sortable\": true,\n        \"type\": \"text\"\n      },\n      {\n        \"name\": \"engine\",\n        \"label\": \"Rendering engine\",\n        \"sortable\": true,\n        \"searchable\": true,\n        \"type\": \"text\",\n        \"remark\": \"Trident 就是 IE，Gecko 就是 Firefox\"\n      },\n      {\n        \"name\": \"platform\",\n        \"label\": \"Platform(s)\",\n        \"popOver\": {\n          \"body\": {\n            \"type\": \"tpl\",\n            \"tpl\": \"就是为了演示有个叫 popOver 的功能\"\n          }\n        },\n        \"sortable\": true,\n        \"type\": \"text\"\n      },\n      {\n        \"name\": \"grade\",\n        \"label\": \"CSS grade\",\n        \"quickEdit\": {\n          \"mode\": \"inline\",\n          \"type\": \"select\",\n          \"options\": [\"A\", \"B\", \"C\", \"D\", \"X\"]\n        },\n        \"type\": \"text\"\n      },\n      {\n        \"type\": \"operation\",\n        \"label\": \"操作\",\n        \"width\": 100,\n        \"buttons\": [\n          {\n            \"type\": \"button\",\n            \"icon\": \"fa fa-times text-danger\",\n            \"actionType\": \"ajax\",\n            \"tooltip\": \"删除\",\n            \"confirmText\": \"您确认要删除?\",\n            \"api\": \"delete:https://houtai.baidu.com/api/sample/$id\"\n          }\n        ]\n      }\n    ]\n  }\n}\n</script></div>\n<p>这个界面虽然用 <code>Bootstrap</code> 也能快速搭起来，但要想体验好就需要加很多细节功能，比如：</p>\n<ul>\n<li>数据动态加载</li>\n<li>编辑单行数据</li>\n<li>批量修改和删除</li>\n<li>查询某列</li>\n<li>按某列排序</li>\n<li>隐藏某列</li>\n<li>开启整页内容拖拽排序</li>\n<li>表格有分页（页数还会同步到地址栏）</li>\n<li>如果往下拖动还有首行冻结来方便查看表头等</li>\n</ul>\n<p>全部实现这些需要大量的代码。</p>\n<p>然而上面也看到了，在 amis 里只需要 <strong>150</strong> 行 JSON 配置（嘿，其中 40 多行只有一个括号），你不需要了解 <code>React/Vue</code>、<code>Webpack</code>，甚至不需要很了解 <code>JavaScript</code>，即便没学过 amis 也能猜到大部分配置的作用，只需要简单配置就能完成所有页面开发</p>\n<p>这正是建立 amis 的初衷，我们认为：<strong>对于大部分常用页面，应该使用最简单的方法来实现</strong>，而不是越来越复杂。</p>\n<h2><a class=\"anchor\" name=\"%E7%94%A8-json-%E5%86%99%E9%A1%B5%E9%9D%A2%E6%9C%89%E4%BB%80%E4%B9%88%E5%A5%BD%E5%A4%84-\" href=\"#%E7%94%A8-json-%E5%86%99%E9%A1%B5%E9%9D%A2%E6%9C%89%E4%BB%80%E4%B9%88%E5%A5%BD%E5%A4%84-\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>用 JSON 写页面有什么好处 ❓</h2><p>为了实现用最简单方式来生成大部分页面，amis 的解决方案是基于 JSON 来配置，它的独特好处是：</p>\n<ul>\n<li><strong>不需要懂前端</strong>：在百度内部，大部分 amis 用户之前从来没写过前端页面，也不会 <code>JavaScript</code>，就能做出专业且复杂的后台界面，这是所有其他前端 UI 库都无法做到的；</li>\n<li><strong>不受前端技术更新的影响</strong>：百度内部最老的 amis 页面是 4 年多前创建的，至今还在使用，而当年的 <code>Angular/Vue/React</code> 版本现在都废弃了，当年流行的 <code>Gulp</code> 也被 <code>Webpack</code> 取代了，如果这些页面不是用 amis，现在的维护成本会很高，同时还能享受 amis 升级带来的界面改进；</li>\n<li>可以 <strong>完全</strong> 使用 <a href=\"https://fex-team.github.io/amis-editor/#/edit/0\">可视化页面编辑器</a> 来制作页面：一般前端可视化编辑器只能用来做静态原型，而 amis 可视化编辑器做出的页面是可以直接上线的。</li>\n</ul>\n<blockquote>\n<p>JSON 是一种轻量级的数据交换格式，简洁和清晰的层次结构使得它成为理想的数据交换语言。它易于人阅读和编写，同时也易于机器解析和生成，能够有效地提升网络传输效率。</p>\n<p>更多关于 JSON 的知识，可以阅读 <a href=\"https://baike.baidu.com/item/JSON\">百度百科</a></p>\n</blockquote>\n<h2><a class=\"anchor\" name=\"amis-%E7%9A%84%E5%85%B6%E5%AE%83%E4%BA%AE%E7%82%B9-\" href=\"#amis-%E7%9A%84%E5%85%B6%E5%AE%83%E4%BA%AE%E7%82%B9-\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>amis 的其它亮点 ✨</h2><ul>\n<li><strong>提供完整的界面解决方案</strong>：其它 UI 框架必须使用 JavaScript 来组装业务逻辑，而 amis 只需 JSON 配置就能完成完整功能开发，包括数据获取、表单提交及验证等功能；</li>\n<li><strong>内置 100+ 种 UI 组件</strong>：包括其它 UI 框架都会不提供的富文本编辑器、代码编辑器等，能满足各种页面组件展现的需求，而且对于特殊的展现形式还可以通过 <a href=\"/amis/docs/start/custom\">自定义组件</a> 来扩充；</li>\n<li><strong>容器支持无限级嵌套</strong>：可以通过组合来满足各种布局需求；</li>\n<li><strong>经历了长时间的实战考验</strong>：amis 在百度内部得到了广泛使用，<strong>在 4 年多的时间里创建了 3 万+ 页面</strong>，从内容审核到机器管理，从数据分析到模型训练，amis 满足了各种各样的页面需求。</li>\n</ul>\n<h2><a class=\"anchor\" name=\"amis-%E4%B8%8D%E9%80%82%E5%90%88%E5%81%9A%E4%BB%80%E4%B9%88-\" href=\"#amis-%E4%B8%8D%E9%80%82%E5%90%88%E5%81%9A%E4%BB%80%E4%B9%88-\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>amis 不适合做什么？😶</h2><p>使用 JSON 有优点但也有明显缺点，在以下场合并不适合 amis：</p>\n<ul>\n<li><strong>大量定制 UI</strong>：JSON 配置使得 amis 更适合做有大量常见 UI 组件的页面，但对于面向普通客户（toC）的页面，往往追求个性化的视觉效果，这种情况下用 amis 就不合适，实际上绝大部分前端 UI 组件库也都不适合，只能定制开发。</li>\n<li><strong>极为复杂或特殊的交互</strong>：<ul>\n<li>有些复杂的前端功能，比如 可视化编辑器，其中有大量定制的拖拽操作，这种需要依赖原生 DOM 实现的功能无法使用 amis。</li>\n<li>但对于某些交互固定的领域，比如图连线，amis 后续会有专门的组件来实现。</li>\n</ul>\n</li>\n</ul>\n<h2><a class=\"anchor\" name=\"%E9%98%85%E8%AF%BB%E5%BB%BA%E8%AE%AE-\" href=\"#%E9%98%85%E8%AF%BB%E5%BB%BA%E8%AE%AE-\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>阅读建议 👆</h2><ul>\n<li>如果你是第一次接触 amis 的新同学，那么请 <strong>务必认真阅读完概念部分</strong>，它会让你对 amis 有个整体的认识</li>\n<li>如果你已经掌握 amis 基本概念，且有一定的开发经验，需要参考 amis 组件相关文档的同学，那么请移步 <a href=\"./components/component\">组件文档</a></li>\n</ul>\n<h2><a class=\"anchor\" name=\"%E8%AE%A9%E6%88%91%E4%BB%AC%E9%A9%AC%E4%B8%8A%E5%BC%80%E5%A7%8B%E5%90%A7-\" href=\"#%E8%AE%A9%E6%88%91%E4%BB%AC%E9%A9%AC%E4%B8%8A%E5%BC%80%E5%A7%8B%E5%90%A7-\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>让我们马上开始吧！</h2><p>点击页面底部的下一篇，继续阅读文档。</p>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "什么是 amis",
          "fragment": "%E4%BB%80%E4%B9%88%E6%98%AF-amis",
          "fullPath": "#%E4%BB%80%E4%B9%88%E6%98%AF-amis",
          "level": 2
        },
        {
          "label": "为什么要做 amis？🤔",
          "fragment": "%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%81%9A-amis-",
          "fullPath": "#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%81%9A-amis-",
          "level": 2
        },
        {
          "label": "用 JSON 写页面有什么好处 ❓",
          "fragment": "%E7%94%A8-json-%E5%86%99%E9%A1%B5%E9%9D%A2%E6%9C%89%E4%BB%80%E4%B9%88%E5%A5%BD%E5%A4%84-",
          "fullPath": "#%E7%94%A8-json-%E5%86%99%E9%A1%B5%E9%9D%A2%E6%9C%89%E4%BB%80%E4%B9%88%E5%A5%BD%E5%A4%84-",
          "level": 2
        },
        {
          "label": "amis 的其它亮点 ✨",
          "fragment": "amis-%E7%9A%84%E5%85%B6%E5%AE%83%E4%BA%AE%E7%82%B9-",
          "fullPath": "#amis-%E7%9A%84%E5%85%B6%E5%AE%83%E4%BA%AE%E7%82%B9-",
          "level": 2
        },
        {
          "label": "amis 不适合做什么？😶",
          "fragment": "amis-%E4%B8%8D%E9%80%82%E5%90%88%E5%81%9A%E4%BB%80%E4%B9%88-",
          "fullPath": "#amis-%E4%B8%8D%E9%80%82%E5%90%88%E5%81%9A%E4%BB%80%E4%B9%88-",
          "level": 2
        },
        {
          "label": "阅读建议 👆",
          "fragment": "%E9%98%85%E8%AF%BB%E5%BB%BA%E8%AE%AE-",
          "fullPath": "#%E9%98%85%E8%AF%BB%E5%BB%BA%E8%AE%AE-",
          "level": 2
        },
        {
          "label": "让我们马上开始吧！",
          "fragment": "%E8%AE%A9%E6%88%91%E4%BB%AC%E9%A9%AC%E4%B8%8A%E5%BC%80%E5%A7%8B%E5%90%A7-",
          "fullPath": "#%E8%AE%A9%E6%88%91%E4%BB%AC%E9%A9%AC%E4%B8%8A%E5%BC%80%E5%A7%8B%E5%90%A7-",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
