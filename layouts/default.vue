<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const goHome = () => { navigateTo('/') }
const goBack = () => { router.back() }

const showNav = useState('showNav')

const colorMode = useColorMode()

console.log(colorMode.preference)

</script>

<template>
    <UHeader>
        <div :class="{ 'ree': !showNav }"></div>
        <nav v-if="showNav">
            <button @click="goBack" id="back">
                <img src="/public/back.svg" alt="back button">
            </button>
            <button @click="goHome" id="home">
                <img src="/public/home.svg" alt="back button">
            </button>
        </nav>
    </UHeader>
    <main>
        <slot />
    </main>
    <UFooter>
        <div class="tema">
            <!-- <p>Sekarang tema {{ $colorMode.value }}</p> -->
            <select v-model="$colorMode.preference">
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
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

nav {
    display: flex;
    justify-content: space-between;
    padding-block: .5em;
    padding-inline: .25em;

    button {
        background-color: #00000000;
        cursor: pointer;
        color: #00a05a;
        border: none;
        transition: 0.3s;
        -webkit-transition: 0.3s;
        -moz-transition: 0.3s;
        -ms-transition: 0.3s;
        -o-transition: 0.3s;

        &:hover {
            /* background-color: #00a05a33;
        border: #eaeaeaaa 1px solid; */
            color: #eaeaea;
            /* text-decoration: none; */
        }

        img {
            width: 30px;

            &:active {
                transform: translateY(7);
                -webkit-transform: translateY(7);
                -moz-transform: translateY(7);
                -ms-transform: translateY(7);
                -o-transform: translateY(7);
            }
        }
    }
}

main {
    padding: 1em;
}

UFooter {
    .tema {
        display: flex;
        justify-content: right;
        padding-inline: 1em;

        select {
            background: #2a2a2a;
            color: #eaeaea;
            border: none;
            cursor: pointer;
        }
    }
    
    footer {
        background: #2a2a2a;
        position: fixed;
        bottom: .25em;
        padding-top: .25em;
        border-top: 1px solid #1a1a1a;
        margin: auto;
        text-align: center;
        width: 450px;
        z-index: 100;
    }
}

</style>