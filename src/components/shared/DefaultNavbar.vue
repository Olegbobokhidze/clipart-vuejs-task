<script lang="ts" setup>
import useBurgerMenu from '@/composables/useBurgerMenu'
import { useWindowSize } from '@vueuse/core'

import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
import IconLogo from '@/components/icons/IconLogo.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconBurgerMenu from '@/components/icons/IconBurgerMenu.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const { width } = useWindowSize()

const categories = [
  'პოლიტიკა',
  'საზოგადოება',
  'სამართალი',
  'ბიზნესი & ეკონომიკა',
  'მსოფლიო',
  'ხელოვნება',
  'სპორტი',
  'რელიგია',
  'კრიმინალი'
]

const { isMenuOpen, toggleMenu } = useBurgerMenu()
const showDropdown = ref(false)
const otherDiv = ref<any>(null)
const categoriesDiv = ref<any>(null)
const categoryDivs = ref<any[]>([])
const visibleCategoriesCount = ref(8)

const calculateVisibleCategories = (visibleCategoriesLength: number) => {
  if (!categoriesDiv.value || !otherDiv.value) return

  const computedStyles = getComputedStyle(categoriesDiv.value)
  const paddingX = parseFloat(computedStyles.paddingLeft)

  const remainingWidth =
    categoriesDiv.value.offsetWidth - otherDiv.value.offsetWidth - paddingX * 2 - 460
  let sumChildrenWidth = 4 * otherDiv.value.offsetWidth

  for (let i = 0; i <= visibleCategoriesLength - 1; i++) {
    if (categoryDivs.value[i]) {
      sumChildrenWidth += categoryDivs.value[i].offsetWidth + 10
    }
  }

  if (remainingWidth > sumChildrenWidth || visibleCategoriesLength === 0) {
    if (remainingWidth - sumChildrenWidth > 150) {
      visibleCategoriesCount.value = visibleCategoriesLength + 1
    } else {
      visibleCategoriesCount.value = visibleCategoriesLength
    }
    return
  }

  visibleCategoriesCount.value -= 1
  calculateVisibleCategories(visibleCategoriesLength - 1)
}

const visibleCategories = computed(() => {
  return categories.slice(0, visibleCategoriesCount.value)
})

const hiddenCategories = computed(() => {
  return categories.slice(visibleCategoriesCount.value)
})

const showHiddenCategories = () => {
  showDropdown.value = true
}

const hideHiddenCategories = () => {
  showDropdown.value = false
}
const onResize = () => {
  calculateVisibleCategories(visibleCategoriesCount.value)
}
onMounted(() => {
  window.addEventListener('resize', onResize)
  onResize()
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <div
    class="fixed top-0 z-50 flex h-[5rem] w-full items-center justify-between bg-white px-4 tablet:px-14"
  >
    <div class="flex w-[7rem] sm:w-fit"><IconLogo /></div>
    <ul
      v-if="width >= 1240"
      ref="categoriesDiv"
      class="flex w-full flex-row items-center justify-center gap-8 font-semibold text-[#657178]"
    >
      <li
        v-for="(item, index) in visibleCategories"
        ref="categoryDivs"
        class="cursor-pointer whitespace-nowrap text-base text-[#657178] hover:text-[#585EE3]"
        :key="index"
      >
        {{ item }}
      </li>

      <div
        v-if="hiddenCategories.length > 0"
        ref="otherDiv"
        @mouseenter="showHiddenCategories"
        class="text-black-600 relative flex cursor-pointer items-center space-x-2 text-base"
      >
        <p class="text-[#657178] hover:text-[#585EE3]">სხვა</p>
        <span><IconArrowDown /></span>
        <div
          v-if="showDropdown"
          @mouseleave="hideHiddenCategories"
          class="absolute left-5 top-10 z-[150] bg-white py-2 shadow-md"
        >
          <div
            v-for="(category, index) in hiddenCategories"
            :key="index"
            class="cursor-pointer rounded-xl px-4 py-2 text-[#657178] hover:text-[#585EE3]"
          >
            {{ category }}
          </div>
        </div>
      </div>
    </ul>
    <div class="flex gap-2">
      <div v-if="width >= 1024" class="flex items-center justify-center gap-2">
        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F8FF]">
          <IconInstagram />
        </div>
        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F8FF]">
          <IconFacebook />
        </div>
      </div>
      <div
        v-if="width < 1024"
        class="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F8FF]"
      >
        <IconSearch />
      </div>
      <div v-else class="relative flex">
        <div class="absolute right-5 top-[50%] translate-y-[-50%]">
          <IconSearch />
        </div>
        <input
          type="text"
          class="h-12 w-[14rem] rounded-full bg-[#F5F8FF] px-4 focus:outline-[#585EE3]"
          placeholder="ძიება"
        />
      </div>
      <div
        v-if="width < 1240"
        @click="toggleMenu"
        class="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#F5F8FF] hover:bg-[#585EE3]"
      >
        <IconBurgerMenu />
      </div>
    </div>
    <teleport to="div" v-if="width < 1240">
      <div
        class="fixed left-0 z-[49] h-screen w-full bg-white px-4 pt-[7.25rem] duration-300 ease-in tablet:px-14"
        :class="isMenuOpen ? 'top-0' : 'top-[-100%]'"
      >
        <ul class="mb-9 flex flex-col gap-8 font-semibold text-[#657178]">
          <li
            v-for="(item, index) in categories"
            class="cursor-pointer text-base hover:text-[#585EE3]"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
        <div v-if="width < 1024" class="flex w-full items-center justify-center gap-2">
          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F8FF]">
            <IconInstagram />
          </div>
          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F8FF]">
            <IconFacebook />
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>
