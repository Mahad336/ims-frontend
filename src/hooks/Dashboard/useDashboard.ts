import { useQuery } from "@tanstack/react-query";
import { fetchDashboardStats } from "../../services/Dashboard/dashboardApi";
import { fetchDashboardGraphData } from "../../services/Dashboard/dashboardApi";

export const useDashboardStats = () => {
  const {
    data: dashboardStats,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["dashboardStats"], fetchDashboardStats);
  return {
    dashboardStats,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};

export const useDashboardGraphData = () => {
  const {
    data: dashboardGraphData,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(["dashboardGraphData"], fetchDashboardGraphData);
  return {
    dashboardGraphData,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
