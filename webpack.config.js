let path=require('path');//解析路径,出口只支持绝对路径
let htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:'./app/index.js',  //入口文件
    output:{
        filename: "bundle.js",//打包出文件的名称
        path: path.resolve('dist'),  //打包出的目录，必须是绝对路径
    },
    module: {
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',  //用这个加载器解析
                exclude:/node_modules/  //不编译node_modules里面的js
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template:'./app/index.html'
        })
    ],
    devtool:'source-map', //错误时可以提示源码错误，不会只显示bundle.js错误
    devServer: {
        proxy:{
           '/api':'http://localhost:3000'
        }
    }
};