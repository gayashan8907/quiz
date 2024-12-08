import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'quiz', // Replace <REPO_NAME> with your GitHub repository name
});
