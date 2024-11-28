import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

const repositoryName = 'reactproject3';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    base: `/${repositoryName}/`, 
    server: {
        port: 56680,
    }
})
