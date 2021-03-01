<template>
  <div class="flex flex-col min-h-screen font-sans">
    <div>
      <!-- Container -->
      <header class="max-w-screen-lg px-4 py-8 mx-auto">
        <!-- Hero Headline -->
        <div>
          <h1>Tailwind CSS</h1>
          <h2>Schnell moderne Webseiten bauen</h2>
        </div>
        <!-- Newsletter Signup -->
        <form @submit.prevent>
          <p>Jetzt für den Newsletter anmelden</p>

          <!-- Form Input mobile untereinander, sm+ nebeneinander -->
          <div>
            <input type="email" placeholder="Deine E-Mail-Adresse" />
            <button type="submit">Jetzt anmelden!</button>
          </div>
        </form>
      </header>
    </div>

    <div>
      <!-- Container -->
      <main class="max-w-screen-lg px-4 py-8 mx-auto">
        <h2>
          <span> Frisch aus der Presse </span>
          <span>Blogposts</span>
        </h2>
        <!-- Blogposts Grid -->
        <div>
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
        </div>
      </main>
    </div>

    <div>
      <!-- Container -->
      <footer class="max-w-screen-lg px-4 py-8 mx-auto">
        © 2021 Jemand aus dem Internet
      </footer>
    </div>
  </div>
</template>

<script setup>
// import Container from "../components/Container.vue"
// import Button from "../components/Button.vue"
// import Input from "../components/Input.vue"
import BlogPostCard from "../components/BlogPostCard.vue"
</script>
