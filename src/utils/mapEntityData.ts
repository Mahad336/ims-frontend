import React from "react";
import { formatDate } from "./formattedDate";
import { showImage } from "../pages/Organizations/Organizations";

export const mapRequestData = (requests) => {
  return requests.map((request) => ({
    id: request.id,
    itemName: request?.item?.name,
    category: request?.item?.category?.name,
    subCategory: request?.item?.subcategory?.name,
    type: request?.type,
    submissionDate: formatDate(request?.createdDate),
    status: request?.status,
  }));
};
export const mapAdminData = (admins) => {
  return admins?.map((admin) => ({
    id: admin.id,
    src: showImage(admin.image),
    name: admin.name,
    organization: admin.organization?.name,
    email: admin.email,
    contact: admin.contact,
  }));
};
export const mapItemData = (items) => {
  return items?.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    category: item.category?.name,
    subCategory: item.subcategory.name,
    price: item.currentPrice,
  }));
};
