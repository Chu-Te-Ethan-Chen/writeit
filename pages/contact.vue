<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero
      title="Contact"
      image="/uploads/contact-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Hello!
              </p>
              <p class="subtitle">
                What can I do for you?
              </p>
              <figure class="image is-1by1">
                <opti-image
                  :src="require('~/assets/uploads/Chu-Te-Chen.jpg').src"
                  :srcset="require('~/assets/uploads/Chu-Te-Chen.jpg').srcSet"
                />
              </figure>
              <br />
              <div class="content">
                <p>
                  <strong>
                    Hi, I'm Chu-Te (Ethan) Chen, a passionate software engineer with expertise in full-stack development and cloud computing.
                  </strong>
                </p>
                <p>
                  Feel free to reach out and you can find me on <a href="https://www.linkedin.com/in/chu-te-chen/" target="_blank">LinkedIn</a>.
                </p>
              </div>
            </article>
          </div>
          <!-- <div class="tile is-parent is-8">
            <article class="tile is-child box">
              <contact-form />
            </article>
          </div> -->
        </div>
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <!-- Latest Posts -->
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>

<script>
// import ContactForm from '~/components/ContactForm'
export default {
  head() {
    return {
      title: `Contact | ${this.$siteConfig.siteName}`
    }
  }
  // components: { ContactForm }
}
</script>
