import React, { useState, useEffect } from "react";
import {
  Layout,
  LayoutSection,
  SkeletonBodyText,
  SkeletonThumbnail,
  Space,
  Input,
  Table,
  Checkbox,
  TypographyText,
  Icon 
} from "@brizy/ui";
import { Edit, Profile } from "@brizy/ui-icons";
import { OrdersItem } from "../Utils/OrdersItem";

const OrdersList = () => {
  const leftSkeletonNumber: number[] = [1, 2, 3, 4];
  const rightSkeletonNumber: number[] = [1, 2];
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  });

  const tableDataSource = [
    {
        checkbox: <Checkbox></Checkbox>,
        order: "#34522",
        date: "Jan 31, 2020",
        customer: "	Domenick White",
        payment: "Pending",
        shipping: "Not Shipped",
        total: "479",
        action:<>
        <Icon source={Edit} size="16px" />
        <Icon source={Profile} size="16px" />
      </>
      },
    {
      checkbox: <Checkbox></Checkbox>,
      order: "#34522",
      date: "Jan 31, 2020",
      customer: "Lilian Lynch",
      payment: "Paid",
      shipping: "Shipped",
      total: "479",
      action:<>
      <Icon source={Edit} size="16px" />
      <Icon source={Profile} size="16px" />
    </>
    },
    {
      checkbox: <Checkbox></Checkbox>,
      order: "#34522",
      date: "Jan 31, 2020",
      customer: "Erick Mayer",
      payment: "Paid",
      shipping: "Pending",
      total: "69",
      action:<>
      <Icon source={Edit} size="16px" />
      <Icon source={Profile} size="16px" />
    </>
    },
    {
      checkbox: <Checkbox></Checkbox>,
      order: "#34522",
      date: "Jan 31, 2020",
      customer: "Elissa Luettgen",
      payment: "Paid",
      shipping: "Shipped",
      total: "153",
      action:<>
      <Icon source={Edit} size="16px" />
      <Icon source={Profile} size="16px" />
    </>
    },
    {
      checkbox: <Checkbox></Checkbox>,
      order: "#34522",
      date: "Jan 31, 2020",
      customer: "Rosella Ebert",
      payment: "Pending",
      shipping: "Not Shipped",
      total: "144",
      action:<>
      <Icon source={Edit} size="16px" />
      <Icon source={Profile} size="16px" />
    </>
    },
    {
      checkbox: <Checkbox></Checkbox>,
      order: "#34522",
      date: "Jan 31, 2020",
      customer: "Izabella Collins",
      payment: "Paid",
      shipping: "Pending",
      total: "327",
      action:<>
      <Icon source={Edit} size="16px" />
      <Icon source={Profile} size="16px" />
    </>
    },
    {
      checkbox: <Checkbox></Checkbox>,
      order: "#34522",
      date: "Jan 31, 2020",
      customer: "Reta Schmidt",
      payment: "Failed",
      shipping: "Not Shipped",
      total: "29",
      action:<>
      <Icon source={Edit} size="16px" />
      <Icon source={Profile} size="16px" />
    </>
    },
  ];

  const generatedTableDataSource = tableDataSource.map(item=>OrdersItem(item));
  
  if (isLoading) {
    return (
      <>
        <Layout gutter={[200, 200]}>
          <LayoutSection span={7}></LayoutSection>
          <LayoutSection span={7}>
            {leftSkeletonNumber.map((item) => (
              <>
                <Layout>
                  <LayoutSection span={6}>
                    <SkeletonThumbnail size="large" active={isLoading} />
                  </LayoutSection>
                  <LayoutSection span={18}>
                    <SkeletonBodyText rows={3} active={isLoading} round />
                  </LayoutSection>
                </Layout>
                <Space spacing={15} />
              </>
            ))}
          </LayoutSection>
          <LayoutSection span={4}>
            {rightSkeletonNumber.map((item) => (
              <>
                <Space spacing={15}></Space>
                <Layout>
                  <SkeletonThumbnail size="large" active={isLoading} />
                </Layout>
                <Layout>
                  <SkeletonBodyText rows={3} active={isLoading} round />
                </Layout>
              </>
            ))}
          </LayoutSection>
          <LayoutSection span={6}></LayoutSection>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout alignY="center">
        <LayoutSection span={10}>
          <Input.Search
            value={inputValue}
            onChange={(e) => setInputValue(e)}
            onClear={() => setInputValue("")}
            placeholder="Search items"
            border="field"
          />
          <Space spacing={15}/>
          <Table
            columns={[
              {
                title: <Checkbox></Checkbox>,
                dataIndex: "checkbox",
              },
              {
                title: <TypographyText size="small">Order</TypographyText>,
                dataIndex: "order",
              },
              {
                title: <TypographyText size="small">Date</TypographyText>,
                dataIndex: "date",
              },
              {
                title: <TypographyText size="small">Customer</TypographyText>,
                dataIndex: "customer",
              },
              {
                title: <TypographyText size="small">Payment</TypographyText>,
                dataIndex: "payment",
              },
              {
                title: <TypographyText size="small">Shipping</TypographyText>,
                dataIndex: "shipping",
              },
              {
                title: <TypographyText size="small">Total</TypographyText>,
                dataIndex: "total",
              },
              {
                title: <TypographyText size="small">Actions</TypographyText>,
                dataIndex: "action",
              },
            ]}
            dataSource={generatedTableDataSource}
          />
        </LayoutSection>
      </Layout>
    </>
  );
};

export default OrdersList;
