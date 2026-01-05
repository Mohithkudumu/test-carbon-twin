// API Configuration
// This file centralizes all API endpoint configurations

const getApiUrl = (): string => {
    // In production, use the environment variable
    // In development, use localhost
    return import.meta.env.VITE_API_URL || 'http://localhost:8000';
};

export const API_BASE_URL = getApiUrl();

export const API_ENDPOINTS = {
    getEmissions: (hour: number) => `${API_BASE_URL}/get-emissions/${hour}`,
    getHistoricalData: (days: number) => `${API_BASE_URL}/get-historical-data/${days}`,
    getInsights: () => `${API_BASE_URL}/get-insights`,
};

// Log the API URL in development
if (import.meta.env.DEV) {
    console.log('🔗 API Base URL:', API_BASE_URL);
}
