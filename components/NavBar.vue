<template>
  <header
    class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
  >
    <NuxtLink
      class="text-3xl font-mono"
      to="/"
      >cartrader</NuxtLink
    >

    <div
      v-if="user"
      class="flex"
    >
      <NuxtLink
        class="mr-5"
        to="/profile/listings"
        >Profile</NuxtLink
      >

      <button
        class="pointer"
        @click="signOut"
      >
        Sign Out
      </button>
    </div>
    <NuxtLink
      v-else
      to="/sign-in"
      >Sign In</NuxtLink
    >
  </header>
</template>

<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  navigateTo("/");
};
</script>
