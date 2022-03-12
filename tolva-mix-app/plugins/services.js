import { camelCase } from 'lodash'

// DYNAMIC IMPORT OF SERVICES FROM API
const classes = []
const requireService = require.context(
  '~/services/api/',
  false,
  /[A-Z]\w+\.(js)$/
)
requireService.keys().forEach((fileName) => {
  const clazz = requireService(fileName)
  const serviceName = camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  classes.push({ Clazz: clazz.default, serviceName })
})

export default function ({ app }, inject) {
  classes.forEach((clazzObject) => {
    const instance = new clazzObject.Clazz({ $axios: app.$axios, i18n: app.i18n })
    inject(clazzObject.serviceName, instance)
  })
}
