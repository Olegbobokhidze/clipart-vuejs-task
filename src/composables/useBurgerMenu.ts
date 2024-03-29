import { ref } from 'vue'

const useBurgerMenu = () => {
  const isMenuOpen = ref<boolean>(false)

  const toggleMenu = () => {
    if (isMenuOpen.value) {
      isMenuOpen.value = false
      document.body.style.overflow = 'auto'
    } else {
      isMenuOpen.value = true
      document.body.style.overflow = 'hidden'
    }
  }

  
  return {
    isMenuOpen,
    toggleMenu
  }
}

export default useBurgerMenu
