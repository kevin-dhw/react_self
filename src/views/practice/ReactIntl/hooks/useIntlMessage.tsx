import { defineMessages } from "react-intl";

function useIntlMesseges() {
  // 里面默认信息是必填的
  return defineMessages({
    username: {
      id: "username",
      defaultMessage: "用户名",
    },
    password: {
      id: "password",
      defaultMessage: "密码",
    },
    rememberMe: {
      id: "rememberMe",
      defaultMessage: "记住我",
    },
    submit: {
      id: "submit",
      defaultMessage: "提交",
    },
    inputYourUsername: {
      id: "inputYourUsername",
      defaultMessage: "请输入用户名！",
    },
    inputYourPassword: {
      id: "inputYourPassword",
      defaultMessage: "请输入密码！",
    },
  });
}
export default useIntlMesseges;
