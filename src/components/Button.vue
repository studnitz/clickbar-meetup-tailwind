<template>
  <button
    class="flex items-center justify-center py-2 text-white transition transform rounded shadow disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none opacity-80 hover:opacity-100 active:translate-y-px focus:ring-offset-2 focus:ring-cyan-700 focus:outline-none focus:ring bg-gradient-to-tr from-emerald-400 to-cyan-800"
  >
    <slot />
  </button>
</template>
