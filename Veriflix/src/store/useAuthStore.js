import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";


export const useAuthStore = defineStore("useAuthStore", () => {
    const route = useRoute();
    const router = useRouter();
    let user = ref(null)

    const authUser =  computed(() => !!user)

    const login = async (credential) => {
        //Call to the server for login user
        console.log(credential.email)
        if(credential.email === 'veriflix@verifarma.com' && credential.password === "verifarma"){
            user = credential     
            sessionStorage.setItem('user', JSON.stringify(user))
            router.push('/movieboard')
        }
    }

    const logout = async () => {
        user = null
        sessionStorage.clear()
        router.push('/login')

    }

    return {
        user,
        authUser,
        logout,
        login
    }
})