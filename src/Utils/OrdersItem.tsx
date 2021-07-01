import React, { ReactElement } from "react";
import {
  TypographyText,
  TypographyLink,
  Icon,
  Badge,
  Tooltip,
} from "@brizy/ui";
import { Edit, Profile } from "@brizy/ui-icons";

interface Item {
  checkbox: ReactElement;
  order: string;
  date: string;
  customer: string;
  payment: string;
  shipping: string;
  total: string;
  action: ReactElement;
}

const checkStatus = (status: string) => {
  switch (status) {
    case "Paid":
      return "success";
    case "Shipped":
      return "success";
    case "Pending":
      return "warning";
    case "Not Shipped":
      return "error";
    case "Failed":
      return "error";
    default:
      break;
  }
};

const OrdersItem = (item: Item) => {
  return {
    checkbox: item.checkbox,
    order: (
      <TypographyLink href="https://www.brizy.io/" target="_blank" strong>
        {item.order}
      </TypographyLink>
    ),
    date: (
      <TypographyText size="small" strong color="gray-mid">
        {item.date}
      </TypographyText>
    ),
    customer: (
      <TypographyText color="black" size="large">
        {item.customer}
      </TypographyText>
    ),
    payment: (
      <Badge status={checkStatus(item.payment)} fill text={item.payment} />
    ),
    shipping: (
      <Badge status={checkStatus(item.shipping)} fill text={item.shipping} />
    ),
    total: (
      <>
        <TypographyText strong color="black">
          {item.total}{" "}
        </TypographyText>
        <TypographyText strong color="gray-mid">
          US$
        </TypographyText>
      </>
    ),
    action: (
      <>

            <Tooltip title="Edit">
              <Icon source={Edit} size="16px" />
            </Tooltip>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Tooltip title="Go to customer">
              <Icon source={Profile} size="16px" />
            </Tooltip>

      </>
    ),
  };
};

export { OrdersItem };
