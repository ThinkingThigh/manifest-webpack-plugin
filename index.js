class ManifestGenerator {
  constructor(options) {
    // TODO: 配置设置
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      "ManifestGenerator",
      (compilation, callback) => {
        var contents = "CACHE MANIFEST\n";
        contents += "# Time: " + new Date() + "\n";
        for (let filename in compilation.assets) {
          contents += `/${filename}\n`;
        }
        contents += "NETWORK:\n";
        contents += "*\n";
        contents += "FALLBACK:\n";
        contents += "/ /offline.html";
        compilation.assets["manifest.appcache"] = {
          source: function () {
            return contents;
          },
          size: function () {
            return contents.length;
          },
        };
        compilation.assets["offline.html"] = {
          source: function () {
            return "网络断开，请稍后重试";
          },
          size: function () {
            return contents.length;
          },
        };
        callback();
      }
    );
  }
}
module.exports = ManifestGenerator;
