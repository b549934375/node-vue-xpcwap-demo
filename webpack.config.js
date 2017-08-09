var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
// 将样式提取到单独的 css 文件中，而不是打包到 js 文件或使用 style 标签插入在 head 标签中
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 生成自动引用 js 文件的HTML
var HtmlWebpackPlugin = require('html-webpack-plugin');
var glob = require('glob');

var entries = getEntry('./source/**/*.js'); // 获得入口 js 文件
//console.log(entries,13232323);
var chunks = Object.keys(entries);

var prod = process.env.NODE_ENV === 'production';

module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, prod ? 'application/public/' : 'Public'), // html, css, js 图片等资源文件的输出路径，将所有资源文件放在 Public 目录
    publicPath: '../public/',                  // html, css, js 图片等资源文件的 server 上的路径
    filename: 'js/[name].[hash].js',         // 每个入口 js 文件的生成配置
    chunkFilename: 'js/[id].[hash].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, './node_modules')]
  },
  module: {
    loaders: [
      {
        // 得到jquery模块的绝对路径
        test: require.resolve('jquery'),
        // 将jquery绑定为window.jQuery 和 window.$
        loader: 'expose?jQuery!expose?$'
      },
      {
        test: /\.css$/,
        // 使用提取 css 文件的插件，能帮我们提取 webpack 中引用的和 vue 组件中使用的样式
        loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
      },
      {
        // vue-loader，加载 vue 组件
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", 'css!sass', 'postcss') //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
      },
      {
        test: /\.js$/,
        // 使用 es6 开发，这个加载器帮我们处理
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /vue-scroller.src.*?js$/,
        loader: 'babel'
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   // 图片加载器，较小的图片转成 base64
      //   loader: 'url',
      //   query: {
      //     limit: 1000,
      //     name: './imgs/[name].[ext]?[hash:7]'
      //   }
      // },
      {
　　　　　　test: /\.(png|jpg)$/,
　　　　　　loader: 'url-loader?name=images/[hash:8].[name].[ext]'
　　　　}
    ]
  },
  postcss:[autoprefixer({browsers:['last 2 versions']})],
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  vue: { // vue 的配置
    loaders: {
      js: 'babel',
      css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader'),
      sass: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!sass-loader'),   
    }
  },
  plugins: [
    // 提取公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors', // 公共模块的名称
      chunks: chunks,  // chunks 是需要提取的模块
      minChunks: chunks.length
    }),
    // 配置提取出的样式文件
    new ExtractTextPlugin('css/[name]-[hash:8].css')
  ]
};

module.exports.plugins = (module.exports.plugins || []);
if (prod) {
  module.exports.devtool = 'source-map';
  module.exports.plugins = module.exports.plugins.concat([
    // 借鉴 vue 官方的生成环境配置
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]);
} else {
  module.exports.devtool = 'eval-source-map';
  module.exports.output.publicPath = '/View/';
}

var pages = getEntry('./source/**/*.html');
for (var pathname in pages) {
  // 配置生成的 html 文件，定义路径等
  var pathNameTwo = pathname.substring(pathname.indexOf("/")+1);
  console.log(pathNameTwo,1111);
  var conf = {
    title:'新片场',
    favicon:'favicon.ico',
    filename: (prod ? '../' : '') + pathNameTwo + '.html', // html 文件输出路径
    template: pages[pathname], // 模板路径
    inject: true,              // js 插入位置
    minify: {
      removeComments: true,
      collapseWhitespace: prod
    }
  };
  if (pathname in module.exports.entry) {
    conf.chunks = ['vendors', pathname];
    conf.hash = false;
  }
  // 需要生成几个 html 文件，就配置几个 HtmlWebpackPlugin 对象
  module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}

// 根据项目具体需求，输出正确的 js 和 html 路径
function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    tmp = entry.split('/').splice(-3);
    pathname = tmp.slice(0, 2).join('/')+'/'+basename; 

    if(pathname.split('/')[0] != 'lib'){
      entries[pathname] = entry;
    }
    // 正确输出 js 和 html 的路径
  });
  //console.log(entries,1555);
  return entries;
}
