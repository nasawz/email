# Email Sending Service with Serverless Function

使用无服务器函数发送邮件服务

这是一个使用 Nodemailer 发送邮件的无服务器函数。该函数接收包含秘钥和邮件详情（收件人地址、主题、文本/HTML 内容）的请求，并使用配置的 SMTP 服务器发送邮件。

## 设置

1. 克隆此存储库。
2. 运行 npm install 安装所需的依赖项。
3. 创建一个 .env 文件，并添加以下环境变量：
SMTP_HOST=您的 SMTP 主机
SMTP_PORT=您的 SMTP 端口
SMTP_USERNAME=您的 SMTP 用户名
SMTP_PASSWORD=您的 SMTP 密码
EMAIL_FROM=您的邮箱地址
EMAIL_SECRET_KEY=您的秘钥

4. 将无服务器函数部署到您喜欢的提供商（例如 AWS Lambda），并配置必要的环境变量。
5. 通过发送包含秘钥和邮件详情的 JSON 数据的 POST 请求来测试函数。

## 使用

向部署的无服务器函数发送以下 JSON 载荷的 POST 请求：

```
{
  "key": "您的秘钥",
  "email": {
    "to": "recipient@example.com",
    "subject": "测试邮件",
    "text": "这是一封测试邮件。",
    "html": "<p>这是一封测试邮件。</p>"
  }
}

```
请确保替换 您的秘钥、recipient@example.com 和邮件内容为您自己的值。

## 使用的技术

• Node.js - JavaScript 运行时
• Nodemailer - 邮件发送库
• 无服务器架构（AWS Lambda、Google Cloud Functions 等）

## 作者

[[nasawz](https://github.com/nasawz)]

## 许可证

该项目使用 MIT 许可证进行许可 - 请查看 LICENSE 文件了解详情。