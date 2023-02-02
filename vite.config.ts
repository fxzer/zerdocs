import { defineConfig } from 'vite';
export default defineConfig(({ command, mode }) => {
  console.log('[ mode ]-5', mode)
  console.log('[ command ]-5', command)
  return {
    base: "./",
  }
});