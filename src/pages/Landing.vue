<template>
  <div class="flex flex-col min-h-screen mx-auto font-sans">
    <Container class="py-16 bg-cyan-50">
      <header class="space-y-24">
        <div class="space-y-2">
          <h1 class="text-5xl font-extrabold">
            <span
              class="text-transparent bg-clip-text bg-gradient-to-tl from-emerald-400 to-cyan-900"
            >
              Tailwind CSS
            </span>
          </h1>
          <h2 class="text-2xl font-bold text-cyan-800">
            Schnell moderne Webseiten bauen
          </h2>
        </div>
        <form @submit.prevent class="space-y-4">
          <p>Jetzt für den Newsletter anmelden:</p>
          <div class="flex flex-col space-y-4">
            <input type="email" placeholder="Deine E-Mail-Adresse" />
            <Button type="submit">Jetzt anmelden!</Button>
          </div>
        </form>
      </header>
    </Container>
    <Container class="h-screen bg-gradient-to-b from-cyan-50 to-emerald-200">
      <main>Main</main>
    </Container>
    <Container class="bg-cyan-900 text-cyan-100">
      <footer>© 2021 Jemand aus dem Internet</footer>
    </Container>
  </div>
</template>
<script setup>
import Container from "../components/Container.vue"
import Button from "../components/Button.vue"
</script>
