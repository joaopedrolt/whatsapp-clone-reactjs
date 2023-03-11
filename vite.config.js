import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/whatsapp-clone-reactjs',
	plugins: [react()],
	resolve: {
		alias: {
			src: path.resolve('src/'),
		},
	},
})
