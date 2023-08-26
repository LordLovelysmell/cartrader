<template>
  <div class="mt-10">
    <h1 class="text-5xl font-bold mb-7">Sign Up</h1>
    <!-- <form> -->
    <div class="flex flex-col">
      <input
        class="shadow border h-[44px] w-[50%] p-4 mb-4"
        type="email"
        v-model="user.email"
        placeholder="Email"
      />
      <input
        class="shadow border h-[44px] w-[50%] p-4"
        type="password"
        v-model="user.password"
        placeholder="Password"
      />
    </div>
    <button
      class="text-white bg-blue-400 px-10 py-3 rounded mt-4"
      @click="signUp"
    >
      Sign Up
    </button>

    <p class="mt-5">
      Already registered?
      <NuxtLink
        class="underline underline-offset-8"
        to="/sign-in"
        >Sign In</NuxtLink
      >
    </p>

    <!-- </form> -->
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

const user = reactive({
  email: "",
  password: "",
});

const supabase = useSupabaseClient();

const signUp = async () => {
  const { error } = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
  });

  if (error) {
    console.error(error);
  }
};
</script>
