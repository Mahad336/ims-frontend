import React from "react";
// import { formatDate } from "./formattedDate";
// import { showImage } from "../pages/Organizations/Organizations";

// export const mapComplaintData = (complaints) => {
//   return complaints.map((complaint) => ({
//     id: complaint.id,
//     title: complaint.title,
//     description: complaint.description,
//     subDate: formatDate(complaint.createdDate),
//     status: complaint.status,
//   }));
// };

// export const mapRequestData = (requests) => {
//   return requests.map((request) => ({
//     id: request.id,
//     itemName: request?.item?.name,
//     category: request?.item?.category?.name,
//     subCategory: request?.item?.subcategory?.name,
//     type: request?.type,
//     submissionDate: formatDate(request?.createdDate),
//     status: request?.status,
//   }));
// };

// export const mapComplaintDashboardData = (complaints) => {
//   return complaints.map((complaint) => ({
//     id: complaint.id,
//     adminName: complaint?.submittedBy?.name,
//     organization: complaint?.organization?.name,
//     description: complaint?.description,
//     submissionDate: formatDate(complaint?.createdDate),
//     status: complaint?.status,
//   }));
// };

// export const mapOrganizationData = (organizations) => {
//   return organizations?.map((organization) => ({
//     id: organization.id,
//     src: showImage(organization.image),
//     name: organization.name,
//     location: organization.address,
//     email: organization.email,
//     contact: organization.representativeContact,
//   }));
// };

// export const mapAdminData = (admins) => {
//   return admins?.map((admin) => ({
//     id: admin.id,
//     src: showImage(admin.image),
//     name: admin.name,
//     organization: admin.organization?.name,
//     email: admin.email,
//     contact: admin.contact,
//   }));
// };

// export const mapItemData = (items) => {
//   return items?.map((item) => ({
//     id: item.id,
//     name: item.name,
//     description: item.description,
//     category: item.category?.name,
//     subCategory: item.subcategory.name,
//     price: item.currentPrice,
//   }));
// };

// export const mapEmployeeData = (employees) => {
//   return employees?.map((employee) => ({
//     id: employee.id,
//     name: employee.name,
//     email: employee.email,
//     contact: employee.contact,
//     department: employee.department,
//   }));
// };

// export const mapVendorData = (vendors) => {
//   return vendors?.map((vendor) => ({
//     id: vendor.id,
//     name: vendor.name,
//     contact: vendor?.contact,
//     category: vendor?.categories?.map((cat) => cat.name).join(","),
//     subcategory: vendor?.subcategories?.map((cat) => cat.name).join(","),
//     totalSpending: vendor?.items
//       .map((item) => item.currentPrice)
//       .reduce((acc, currValue) => acc + currValue, 0),
//   }));
// };
