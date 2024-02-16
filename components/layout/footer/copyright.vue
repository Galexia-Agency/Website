<style lang="scss" scoped>
.footer-copyright {
  padding: 1.5rem 0;
  font-size: .9rem;
  line-height: 1.5rem;
  border-top: 1px solid white
}
.footer-copyright-inner {
  display: grid;
  grid-template-columns: 1fr min-content;
  gap: 2rem;
  align-items: center;
  padding: 0 2rem
}
.footer-copyright-text {
  margin: 0
}
@media (max-width: 900px) {
  .footer-copyright {
    padding: 0
  }
  .footer-copyright-inner {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 1rem;
    place-items: center
  }
  .footer-copyright-text {
    grid-row: 2;
    text-align: center
  }
}
@media print {
  .footer-copyright {
    color: var(--darkGrey)
  }
}
</style>

<template>
  <div class="footer-copyright">
    <div class="footer-copyright-inner layout--max-width">
      <p class="footer-copyright-text">
        © {{ new Date().getFullYear() }} Galexia Creative Agency Ltd. A
        company registered in England and Wales. Company No. 12853224.
      </p>
      <LayoutFooterAccreditations />
    </div>
  </div>
</template>
