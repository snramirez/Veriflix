<template>
  <div class="py-10">
    <v-card class="mx-auto my-12" max-width="450" elevation="16">
      <h1 class="d-flex justify-center pt-8">Inicio de Sesion</h1>

      <v-container class="pa-7">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="login(credential)"
        >
          <v-text-field
            v-model="credential.email"
            :rules="userRules"
            label="Usuario"
            required
          ></v-text-field>

          <v-text-field
            type="password"
            v-model="credential.password"
            :rules="passwordRules"
            label="Contraseña"
            required
          ></v-text-field>

          <div class="d-flex justify-center py-5">
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              type="submit"
            >
              Ingresar
            </v-btn>
          </div>
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/store/useAuthStore";
import { storeToRefs } from "pinia";

const useAuth = useAuthStore();
const { authUser, logout, login } = useAuth;
const { user } = storeToRefs(useAuth);
const credential = ref({
  email: "",
  password: "",
});

const valid = ref(true);
const userRules = [(v) => !!v || "El usuario es obligatorio"];
const passwordRules = [(v) => !!v || "La contraseña es obligatoria"];

const submitForm = () => {
  console.log("send");
};
</script>

<style></style>
