import axios from 'axios';

const proxy = axios.create({
  baseURL: 'https://ajielpaie.com/asapp/control/SOAPService',
  headers: {
    'Content-Type': 'application/xml',
    Token: 'EL631b7a94-460d-4bb2-b8c8-51f3cf1e5c18',
    Cookie:
      'JSESSIONID=1814673E62ACEE0ACEE4EEBFFA37351D.jvm1; OFBiz.Visitor=18602; asapp.autoUserLoginId=demoadmin; asapp.autoUserPwd=8Aecinm@7u%259RL; asapp.autoUserTenant=demo20; asapp.remember=true; asapp.saveUserTenant=demo20',
  },
});

export default proxy;
