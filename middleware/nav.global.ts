import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

export default defineNuxtRouteMiddleware(() => {
  const route = useRoute()
  const showNav = useState('showNav', () => false)

  watchEffect(() => {
    showNav.value = route.path !== '/'
  })
})