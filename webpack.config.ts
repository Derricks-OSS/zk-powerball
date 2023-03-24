import path from "path"
module.exports = {
    entry: path.join(__dirname, 'src'),
    mode: "development",
    devtool: "eval-source-map",
    resolve: {
        extension: [".ts", ".js"]
    },
    module: {
       rules: [
        {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: { name: 'img/[path][name].[ext]', context: 'src/' },
              },
            ],
          },
       ]
    }
};
export {};