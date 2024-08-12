const path = require('path'); 

module.exports = {
    mode: "development", //para saber si esta en desarrolo o producción
    entry: './src/index.js', //punto de entrada de tu aplicación
    output: {
    filename: 'bundle.js', //Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), //Carpeta de salida
 } ,
    module: {
    rules: [
        {
            test: /\.css$/, //Regex para identificar archivos CSS
            use: ['style-loader', 'css-loader'], //Loaders para procesar archivos CSS
        },
        {
            test: /\.js$/, //Regex para identificar archivos JS
            exclude: /node_modules/, //Excluir la carpeta node_modules
            use: {
                loader: 'babel-loader', //loader para convertir JS moderno al Js compatible con más navegadores
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        },
    ],
 },
  devtool: 'source-map', //Genera source maps para facilitar la depuración
  devServer: {
    static: { 
        directory: path.resolve(__dirname, 'dist'), //carpeta del que correra el servidor
    },
       compress: true, //Habilitar compresión gzip
       port: 9000, //puerto del servidor de desarrollo
   },
};