// productService.js
import axios from 'axios';

export async function fetchProducts() {
  try {
    const response = await axios.get('server/api/products.json'); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
}
