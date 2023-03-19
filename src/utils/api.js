const API_URL = "https://www.planndesign.com/gapi/drawings";

export const getAllDrawings = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching drawings:", error);
    return [];
  }
};

export const getDrawingBySlug = async (slug) => {
  try {
    const response = await fetch(`${API_URL}?slug=${slug}`);
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error(`Error fetching drawing with slug ${slug}:`, error);
    return null;
  }
};

// import axios from "axios";

// // Define the API endpoint URL
// const API_URL = "https://www.planndesign.com/gapi/drawings";

// /**
//  * Fetches all drawings from the API
//  * @returns {Promise} Promise object that resolves with an array of drawings
//  */
// export const getAllDrawings = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching drawings:", error);
//     return [];
//   }
// };

// /**
//  * Fetches a drawing by slug from the API
//  * @param {string} slug - The slug of the drawing to fetch
//  * @returns {Promise} Promise object that resolves with the drawing details
//  */
// export const getDrawingBySlug = async (slug) => {
//   try {
//     const response = await axios.get(`${API_URL}?slug=${slug}`);
//     return response.data[0];
//   } catch (error) {
//     console.error(`Error fetching drawing with slug ${slug}:`, error);
//     return null;
//   }
// };
