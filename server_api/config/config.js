'use strict';

var Config = {
  db: 'mongodb://localhost/ce',
  port: 3000,
  uploadDir: 'uploads',
  username: 'admin',
  password: '111111',
  jwtsecret: '59950ad26fcef1e32e2ba33a29aba58a',
  /* wechat config: appid secret token encodingAESKey*/
  appId: 'wx1ac88143b7396b56',
  secret: '59950ad26fcef1e32e2ba33a29aba58a',
  token: 'calvinheceshihao',
  encodingAESKey: '',
  mchId: '1486203582',
  mchApiKey: 'fga3dfi323Nf9099y2jk32j67dke21lG',
  mchNotifyUrl: '',
  mchCertPath: '',
  baseUrl: 'http://127.0.0.1:3000'
}

module.exports = Config;
