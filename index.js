var ClientLib = require('scp2');

function WebpackSftpClient(options) {
  this.options = options;
}

WebpackSftpClient.prototype.apply = function (compiler) {

  var self = this;

  compiler.plugin('after-emit', function (compilation) {

    var remotePath = self.options.remotePath;
    var path = self.options.path;
    var username = self.options.username;
    var host = self.options.host;
    var password = self.options.password;
    var port = self.options.port || '22';
    var verbose = self.options.verbose;

    var srcPath = path;
    var destPath = username + ':' + password + '@' + host + ':' + port + ':' + remotePath;
    
    ClientLib.scp(srcPath, destPath,
      function (err) {
        
        if (err) {
          console.log('FTP Upload Error: ', err);
        } else {
          console.log('Uploaded File: ' + srcPath,'->',destPath);
        }
      }
    );
  });
};

module.exports = WebpackSftpClient;