import React, { ReactElement } from "react";
import {
  Layout,
  LayoutSection,
  Divider,
  Tooltip,
  TypographyTitle,
  TypographyText,
  Card,
  Space,
  Icon,
} from "@brizy/ui";
import { Box,Shipping } from "@brizy/ui-icons";

interface IDataSource {
  action: string | ReactElement;
  desc: string | ReactElement;
}

const SettingsShopNotifications = () => {
  const dataSource: IDataSource[] = [
    {
      action: (
        <>
          {" "}
          <Tooltip title="Edit Template">
            <TypographyText strong size="small">
              <a href="https://google.com"> Order confirmation</a>
            </TypographyText>
          </Tooltip>{" "}
        </>
      ),
      desc: (
        <>
          <TypographyText size="small">
            Sent automatically to the customer after the place order
          </TypographyText>
        </>
      ),
    },
    {
      action: (
        <>
          {" "}
          <Tooltip title="Edit Template">
            <TypographyText strong size="small">
              <a href="https://google.com"> Order edited</a>
            </TypographyText>
          </Tooltip>{" "}
        </>
      ),
      desc: (
        <>
          <TypographyText size="small">
            Sent to the customer in case their order is edited (if you select
            this option here).
          </TypographyText>
        </>
      ),
    },
    {
      action: (
        <>
          {" "}
          <Tooltip title="Edit Template">
            <TypographyText strong size="small">
              <a href="https://google.com"> Order edited invoice</a>
            </TypographyText>
          </Tooltip>{" "}
        </>
      ),
      desc: (
        <>
          <TypographyText size="small">
            Sent to the customer after their order is edited and they owe money
            (if you select this option).
          </TypographyText>
        </>
      ),
    },
    {
      action: (
        <>
          {" "}
          <Tooltip title="Edit Template">
            <TypographyText strong size="small">
              <a href="https://google.com"> Order canceled</a>
            </TypographyText>
          </Tooltip>{" "}
        </>
      ),
      desc: (
        <>
          <TypographyText size="small">
            Sent automatically to the customer if their order is canceled (if
            you select this option).
          </TypographyText>
        </>
      ),
    },
    {
      action: (
        <>
          {" "}
          <Tooltip title="Edit Template">
            <TypographyText strong size="small">
              <a href="https://google.com"> Order refund</a>
            </TypographyText>
          </Tooltip>{" "}
        </>
      ),
      desc: (
        <>
          <TypographyText size="small">
            Sent automatically to the customer if their order is refunded (if
            you select this option).
          </TypographyText>
        </>
      ),
    },
    {
      action: (
        <>
          {" "}
          <Tooltip title="Edit Template">
            <TypographyText strong size="small">
              <a href="https://google.com"> Draft order invoice</a>
            </TypographyText>
          </Tooltip>{" "}
        </>
      ),
      desc: (
        <>
          <TypographyText size="small">
            Sent to the customer when you email their cart from POS. Includes a
            link to buy online.
          </TypographyText>
        </>
      ),
    },
    {
      action: (
        <>
          {" "}
          <Tooltip title="Edit Template">
            <TypographyText strong size="small">
              <a href="https://google.com"> Abandoned checkout</a>
            </TypographyText>
          </Tooltip>{" "}
        </>
      ),
      desc: (
        <>
          <TypographyText size="small">
            Sent to the customer if they leave checkout before they buy the
            items in cart. Configure options in 'checkout settings'
          </TypographyText>
        </>
      ),
    },
  ];

  const dataSource2:IDataSource[]=[
    {
        action: (
          <>
            {" "}
            <Tooltip title="Edit Template">
              <TypographyText strong size="small">
                <a href="https://google.com"> Fulfillment request</a>
              </TypographyText>
            </Tooltip>{" "}
          </>
        ),
        desc: (
          <>
            <TypographyText size="small">
            Sent automatically to the customer after they place order.
            </TypographyText>
          </>
        ),
      },
      {
        action: (
          <>
            {" "}
            <Tooltip title="Edit Template">
              <TypographyText strong size="small">
                <a href="https://google.com">Shipping confirmation</a>
              </TypographyText>
            </Tooltip>{" "}
          </>
        ),
        desc: (
          <>
            <TypographyText size="small">
            Sent to the customer in case their order is edited (if you select this option here).
            </TypographyText>
          </>
        ),
      },
      {
        action: (
          <>
            {" "}
            <Tooltip title="Edit Template">
              <TypographyText strong size="small">
                <a href="https://google.com">Out for delivery</a>
              </TypographyText>
            </Tooltip>{" "}
          </>
        ),
        desc: (
          <>
            <TypographyText size="small">
            Sent to the customer after their order is edited and they owe money (if you select this option).
            </TypographyText>
          </>
        ),
      },
      {
        action: (
          <>
            {" "}
            <Tooltip title="Edit Template">
              <TypographyText strong size="small">
                <a href="https://google.com">Delivered</a>
              </TypographyText>
            </Tooltip>{" "}
          </>
        ),
        desc: (
          <>
            <TypographyText size="small">
            Sent automatically to the customer if their order is canceled (if you select this option).
            </TypographyText>
          </>
        ),
      },
  ];

  return (
    <>
      <Layout alignY="center">
        <LayoutSection span={8}>
          <Card>
            {dataSource.map((item, index) => (
              <>
                <Layout align="middle">
                    <br />
                  <LayoutSection span={8}>{item.action}</LayoutSection>
                  <LayoutSection span={16}>{item.desc}</LayoutSection>
                  <Space spacing={[1, 1, "small", 1]}></Space>
                  {index + 1 !== dataSource.length && <Divider />}
                </Layout>
              </>
            ))}
          </Card>
        </LayoutSection>
        <LayoutSection span={4}>
          <Space spacing={[0, 0, "small", 0]}></Space>
          <Icon color="gray-mid" source={Box} size="48px" />
          <Space spacing={[0, 0, "small", 0]}></Space>
          <TypographyTitle level={2}>Order Notifications</TypographyTitle>
          <TypographyText size="small">
            View and edit the template notifications that are automaticaly sent
            to customers whenever the status changes for an order.
          </TypographyText>
        </LayoutSection>
      </Layout>

      <Layout alignY="center">
          <LayoutSection span={12}>
              <Divider></Divider>
          </LayoutSection>
      </Layout>

      <Layout alignY="center">
        <LayoutSection span={8}>
          <Card>
            {dataSource2.map((item, index) => (
              <>
                <Layout align="middle">
                    <br />
                  <LayoutSection span={8}>{item.action}</LayoutSection>
                  <LayoutSection span={16}>{item.desc}</LayoutSection>
                  <Space spacing={[1, 1, "small", 1]}></Space>
                  {index + 1 !== dataSource2.length && <Divider />}
                </Layout>
              </>
            ))}
          </Card>
        </LayoutSection>
        <LayoutSection span={4}>
          <Space spacing={[0, 0, "small", 0]}></Space>
          <Icon color="gray-mid" source={Shipping} size="48px" />
          <Space spacing={[0, 0, "small", 0]}></Space>
          <TypographyTitle level={2}>Shipping Notifications</TypographyTitle>
          <TypographyText size="small">
          View and edit the notifications that are automatically sent to customers whenever the status changes for an existing or new order.
          </TypographyText>
        </LayoutSection>
      </Layout>

      <Layout alignY="center">
          <LayoutSection span={12}>
              <Divider></Divider>
          </LayoutSection>
      </Layout>

    </>
  );
};

export default SettingsShopNotifications;
