// config/security.js
import { encode } from 'html-entities';

// Content Security Policy configuration
const CSP_HEADER = {
  'default-src': ["'self'"],
  'script-src': ["'self'"],
  'style-src': ["'self'", "'unsafe-inline'"],
  'img-src': ["'self'", 'data:', 'https:'],
  'connect-src': ["'self'", 'https://api.example.com'],
};

// Security utility functions
const SecurityUtils = {
  // Sanitize user input
  sanitizeInput: (input) => {
    if (typeof input !== 'string') return input;
    return encode(input);
  },

  // Validate JWT token
  validateToken: (token) => {
    try {
      // Basic structure validation
      const parts = token.split('.');
      if (parts.length !== 3) return false;
      
      // Check expiration
      const payload = JSON.parse(atob(parts[1]));
      const expiry = payload.exp * 1000; // Convert to milliseconds
      return Date.now() < expiry;
    } catch {
      return false;
    }
  },

  // Generate secure random values
  generateNonce: () => {
    return crypto.getRandomValues(new Uint8Array(16)).join('');
  }
};
export { SecurityUtils,CSP_HEADER };