const path = require('path');  

module.exports = {  
  mode: 'development', // Or 'production' or 'none'  
  entry: './src/index.js', // Replace with your entry point  
  output: {  
    path: path.resolve(__dirname, 'dist'), // Replace with your output directory  
    filename: 'bundle.js' // Replace with your output filename  
  },  
  module: {  
    rules: [  
      {  
        test: /\.(js|jsx|ts|tsx)$/,  
        exclude: /node_modules/,  
        use: {  
          loader: 'babel-loader',  
          options: {  
            presets: ['@babel/preset-env', '@babel/preset-react']  
          }  
        }  
      },  
      {  
        test: /\.css$/i,  
        use: ["style-loader", "css-loader"],  
      },  
      {  
        test: /\.(png|svg|jpg|jpeg|gif)$/i,  
        type: 'asset/resource',  
      },  
      {  
        test: /\.js$/, // add this rule to handle source maps  
        use: 'source-map-loader',  
        enforce: 'pre',  
        exclude: /node_modules[\\/]react-datepicker[\\/]dist[\\/]index\.es\.js/, // Exclude the specific files with source map issues  
      },  
    ]  
  },  
  resolve: {  
    extensions: ['.js', '.jsx', '.ts', '.tsx']  
  }  
};  