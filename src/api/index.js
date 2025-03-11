const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://cultureconnect-server.up.railway.app";

export const fetchDashboardData = async (token) => {
    try {
        const response = await fetch(`${API_BASE_URL}/dashboard`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Gagal mengambil data dashboard");
        }

        return response.json();
    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        return null;
    }
};
