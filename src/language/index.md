需要下载这个插件  
npm i -save-dev @formatjs/cli

然后执行 extract 命令从 ts、vue 等文件里提所有 defineMessage 定义的消息
注意：这个文件只能放在最外面

<!-- npx formatjs extract "src/**/*.tsx" --out-file temp.json -->

接下来再执行 compile 命令生成资源包 json

<!-- npx formatjs compile 'temp.json' --out-file src/language/ja-JP.json -->

最后把刚才的临时文件删除
rm ./temp.json
