import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc'; // you're using the SWC version, which is good
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      host: '::',
      port: 8080,
    },
    plugins: [react()],
    define: {
      'process.env': env,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
