import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { useIntl } from "react-intl";
import useIntlMesseges from "./hooks/useIntlMessage";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const val = {};
console.log(!Object.keys(val).length, "val11");

const ReactIntl: React.FC = () => {
  const intl = useIntl();
  const messsages = useIntlMesseges();

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label={intl.formatMessage(messsages.username)}
          name="username"
          rules={[
            {
              required: true,
              message: intl.formatMessage(messsages.inputYourUsername),
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label={intl.formatMessage(messsages.password)}
          name="password"
          rules={[
            {
              required: true,
              message: intl.formatMessage(messsages.inputYourPassword),
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>{intl.formatMessage(messsages.rememberMe)}</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {intl.formatMessage(messsages.submit)}
          </Button>
        </Form.Item>
      </Form>
      <br />
      <div>
        日期：
        <div>{intl.formatDate(new Date(), { weekday: "long" })}</div>
        <div>{intl.formatDate(new Date(), { weekday: "short" })}</div>
        <div>{intl.formatDate(new Date(), { weekday: "narrow" })}</div>
        <div>{intl.formatDate(new Date(), { dateStyle: "full" })}</div>
        <div>{intl.formatDate(new Date(), { dateStyle: "long" })}</div>
      </div>
      <div>
        相对时间：
        <div>{intl.formatRelativeTime(200, "hour")}</div>
        <div>{intl.formatRelativeTime(-10, "minute")}</div>
      </div>
      {/* currency: intl.locale.includes("en") ? "USD" : "CNY", */}
      <div>
        数字：
        <div>
          {intl.formatNumber(200000, {
            style: "currency",
            currency: intl.locale.includes("en") ? "USD" : "CNY",
          })}
        </div>
        <div>
          {intl.formatNumber(10000, {
            style: "unit",
            unit: "meter",
          })}
        </div>
      </div>
    </>
  );
};

export default ReactIntl;
