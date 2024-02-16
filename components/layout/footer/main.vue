<style lang="scss" scoped>
.footer-main-inner {
  display: grid;
  grid-template-columns: .5fr 1fr;
  gap: 1rem;
  .logo-container {
    grid-column: span 3;
    margin-bottom: 1rem
  }
}
@media (max-width: 900px) {
  .footer-main-inner {
    grid-template-columns: 1fr;
    text-align: center;
    .logo-container {
      grid-column: 1;
      margin: 0 auto 1rem
    }
  }
}
@media print {
  .footer-main {
    display: none
  }
}
</style>

<template>
  <div class="footer-main">
    <div class="footer-main-inner layout--max-width section-padding section-padding--60">
      <Logo :lg-width="150" />
      <LayoutFooterContact />
      <LayoutFooterTestimonials />
    </div>
  </div>
</template>
