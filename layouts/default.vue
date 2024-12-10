<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const goHome = () => { navigateTo('/') }
const goBack = () => { router.back() }

const showNav = useState('showNav')

</script>

<template>
    <div :class="{ 'ree': !showNav }"></div>
    <nav v-if="showNav">
        <button @click="goBack" id="back">
            <img src="/public/back.svg" alt="back button">
        </button>
        <button @click="goHome" id="home">
            <img src="/public/home.svg" alt="back button">
        </button>
    </nav>
    <UHeader>

    </UHeader>
    <main>
        <slot />
    </main>
    <UFooter>
        <footer>
            2024 © <NuxtLink to="/">Zalan Store</NuxtLink>
        </footer>
    </UFooter>
</template>

<style scoped>
    .ree {
        display: block;
        padding-top: 2.8em;
    }
</style>