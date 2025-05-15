import { describe, it, expect } from 'vitest';

const API_URL = import.meta.env?.VITE_API_URL || 'https://litorina.onrender.com';

describe('Frontend ↔ Backend Connection', () => {
  it('should fetch data from Strapi backend', async () => {
    const response = await fetch(`${API_URL}/api/Categories`);

    console.log('Response status:', response.status);

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Request failed with status ${response.status}: ${err}`);
    }

    const json = await response.json();
    console.log('Response JSON:', json);

    expect(json).toHaveProperty('data');
  });
});
