// vite.config.js
import handlebars from 'vite-plugin-handlebars'
import path from 'path'
function handlebarsOverride (options) {
  const plugin = handlebars(options)
  // Currently handleHotUpdate skips further processing, which bypasses
  // postcss and in turn tailwind doesn't pick up file changes
  delete plugin.handleHotUpdate
  return plugin
}

const config = {
  plugins: [handlebarsOverride({
    reloadOnPartialChange: true,
    partialDirectory: [path.resolve('./src/components/'), path.resolve('./src/controls/')]
  })],

  build: {
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      }
    }
  },

  resolve: {
    alias: {
    

    }
  },

  test: {
    include: ['src/**/__tests__/*.test.js']
  }
}

export default config
