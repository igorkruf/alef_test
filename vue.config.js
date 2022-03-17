module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/global.vars.scss";`,
      },
    },
  },
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },
  transpileDependencies: ["quasar"],
};
