<template>
  <div class="mt-10">
    <h1 class="text-5xl font-bold mb-7">Sign In</h1>
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
      @click="signIn"
    >
      Sign In
    </button>

    <p class="mt-5">
      Not registered yet?
      <NuxtLink
        class="underline underline-offset-8"
        to="/sign-up"
        >Sign Up</NuxtLink
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

const signIn = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: user.password,
  });

  if (error) {
    console.error(error);
    return;
  }

  navigateTo("/profile/listings");
};
</script>
