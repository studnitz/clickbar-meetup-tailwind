<template>
  <div class="flex-col min-h-screen mx-auto font-sans">
    <Container class="py-16 sm:py-12 bg-cyan-50">
      <header class="space-y-24">
        <div class="space-y-2">
          <h1 class="text-5xl font-extrabold sm:text-7xl md:text-9xl">
            <span
              class="text-transparent bg-clip-text bg-gradient-to-tl from-emerald-400 to-cyan-900"
              >Tailwind CSS</span
            >
          </h1>
          <h2 class="text-2xl font-bold sm:text-4xl md:text-5xl text-cyan-800">
            Schnell moderne Webseiten bauen
          </h2>
        </div>
        <form @submit.prevent class="space-y-2">
          <div class="text-gray-800">Jetzt für den Newsletter anmelden:</div>
          <div
            class="flex flex-col space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row"
          >
            <input
              type="email"
              name="email"
              id="email"
              class="block w-full max-w-sm placeholder-gray-500 rounded sm:text-lg text-cyan-900 focus:ring-cyan-700 focus:ring focus:ring-offset-1 focus:outline-none"
              placeholder="Deine E-Mail-Adresse"
            />
            <Button @click="loading = !loading" type="submit">
              <LoadingIcon
                v-if="loading"
                class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
              />
              <span class="block">Jetzt anmelden!</span>
            </Button>
          </div>
        </form>
      </header>
    </Container>
    <Container
      class="bg-emerald-200 bg-gradient-to-b from-cyan-50 to-emerald-100"
    >
      <main>
        <section class="space-y-16">
          <div class="space-y-2">
            <p
              class="font-medium tracking-wide text-center uppercase text-emerald-800"
            >
              Frisch aus der Presse
            </p>
            <h2
              class="text-3xl font-semibold tracking-tight text-center text-emerald-900"
            >
              Blogposts
            </h2>
          </div>
          <div class="grid gap-4 sm:gap-8 sm:grid-cols-2">
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
import BlogCard from "../components/BlogCardFinal.vue"
import Container from "../components/ContainerFinal.vue"
import Button from "../components/ButtonFinal.vue"
import LoadingIcon from "../components/LoadingIcon.vue"

ref: loading = false
</script>
