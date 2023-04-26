import { formatDate } from "./formattedDate";
export const mapComplaintData = (complaints) => {
  return complaints.map((complaint) => ({
    id: complaint.id,
    title: complaint.title,
    description: complaint.description,
    subDate: formatDate(complaint.createdDate),
    status: complaint.status,
  }));
};
