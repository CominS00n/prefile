import { ref } from "vue"

export default function configweb() {
    const navBar = ref(true)

    const toggleNavBar = () => {
        navBar.value = !navBar.value
    }

    return {
        navBar,
        toggleNavBar
    }

}