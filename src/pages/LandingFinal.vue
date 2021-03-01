<template>
  <div class="flex-col min-h-screen font-sans">
    <Container class="py-16 sm:py-12 bg-cyan-50">
      <header class="space-y-24">
        <div class="space-y-2">
          <h1
            class="text-5xl font-extrabold sm:text-7xl md:text-8xl lg:text-9xl"
          >
            <span
              class="text-transparent bg-clip-text bg-gradient-to-tl from-emerald-400 to-cyan-900"
              >Tailwind CSS</span
            >
          </h1>
          <h2
            class="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-cyan-800"
          >
            Schnell moderne Webseiten bauen
          </h2>
        </div>
        <form @submit.prevent class="space-y-4">
          <p class="text-gray-800">Jetzt für den Newsletter anmelden:</p>
          <div
            class="flex flex-col space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row"
          >
            <Input type="email" placeholder="Deine E-Mail-Adresse" />
            <Button class="" @click="loading = !loading" type="submit">
              <LoadingIcon
                v-if="loading"
                class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
              />
              <span class="block">Jetzt&nbsp;anmelden!</span>
            </Button>
          </div>
        </form>
      </header>
    </Container>
    <Container class="bg-gradient-to-b from-cyan-50 to-emerald-200">
      <main>
        <section class="space-y-16">
          <h2 class="space-y-2">
            <span
              class="block font-medium tracking-wide text-center uppercase md:text-lg text-emerald-800"
            >
              Frisch aus der Presse
            </span>
            <span
              class="block text-3xl font-semibold tracking-tight text-center md:text-4xl text-emerald-900"
              >Blogposts</span
            >
          </h2>
          <div class="grid gap-4 md:gap-8 sm:grid-cols-2">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </section>
      </main>
    </Container>
    <Container class="text-cyan-100 bg-cyan-800">
      <footer class="sm:text-lg">&copy; 2021 Jemand aus dem Internet</footer>
    </Container>
  </div>
</template>
<script setup>
import BlogCard from "../components/final/BlogCardFinal.vue"
import Container from "../components/final/ContainerFinal.vue"
import Button from "../components/final/ButtonFinal.vue"
import Input from "../components/final/InputFinal.vue"
import LoadingIcon from "../components/LoadingIcon.vue"

ref: loading = false
</script>
