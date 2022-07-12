# AWS SDK for JavaScript in the Wx Applet

### In the Wx Applet

### 安装

```sh
npm install aws-sdk-for-wx-applet
```

### 使用

```sh
import S3 from 'aws-sdk-for-wx-applet/clients/s3';
```

### 上传文件

```javascript
wx.chooseMessageFile({
  success(res) {
    const fs = wx.getFileSystemManager()
    const temp = res.tempFiles[0]
    fs.readFile({
      filePath: temp.path,
      complete(res) {
        var s3 = new S3({
          endpoint: 'xxx',
          accessKeyId: 'xxx',
          secretAccessKey: 'xxx',
          s3ForcePathStyle: true,
          sslEnabled: false
        })

        var params = {
          Body: res.data,
          Bucket: 'xxx',
          Key: `xxx/${temp.name}`
        }

        s3.putObject(params, function (err, data) {
          if (err) {
            console.log(err)
          } else {
            console.log(data)
          }
        })
      }
    })
  }
})
```
