const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:9000';

export const fetchTestData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/testAPI`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error("Failed to fetch test data:", error);
    throw error; // Re-throw to allow caller to handle
  }
};
