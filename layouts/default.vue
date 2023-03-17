
<style lang="scss">
/* Resets */
html {
  --delay: 0;
  --primaryColor: #1a237e;

  background: white;
}
body {
  background-color: white;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  color: white;
  font-family: Open Sans, sans-serif;
  font-size: 16px;
  font-weight: 400;
  scroll-behavior: var(--motion);
  background-size: var(--backgroundSize, 4500px);
  background-repeat: no-repeat;
  background-image: url('../assets/img/SpaceBackgroundBlurred.jpg?webp');
}
body.no-webp {
  background-image: url('../assets/img/SpaceBackgroundBlurred.jpg?resize');
}
main header {
  background-size: var(--backgroundSize, 4500px);
  background-image: linear-gradient(
      rgba(53, 47, 114, 0.33),
      rgba(53, 47, 114, 0.33)
    ),
    url('../assets/img/SpaceBackgroundBlurred.jpg?webp');
  background-position: 0 -135px;
}
.no-webp main header {
  background-image: linear-gradient(
      rgba(53, 47, 114, 0.33),
      rgba(53, 47, 114, 0.33)
    ),
    url('../assets/img/SpaceBackgroundBlurred.jpg?resize');
}
::selection {
  background: #1c2ab1;
  color: white; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #1c2ab1;
  color: white; /* Gecko Browsers */
}
* {
  box-sizing: border-box;
  outline-color: var(--primaryColor);
}
:any-link {
  text-decoration: none;
  color: inherit;
  word-break: break-word;
  transition: opacity 0.25s;
}
:any-link:focus {
  opacity: 0.5;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Montserrat, serif;
  font-weight: 700;
}
h1 {
  font-size: 3.5rem;
  line-height: 1;
  color: var(--primaryColor);
}
h2 {
  font-size: 3rem;
  line-height: 1;
}
h3 {
  font-size: 2rem;
  line-height: 1.125;
}
h4 {
  font-size: 1.75rem;
  line-height: 1.125;
}
h5 {
  font-size: 1.5rem;
  line-height: 1.125;
}
h6 {
  font-size: 1.25rem;
  line-height: 1.225;
}
code {
  background-color: rgba(26, 35, 126, 0.15);
  padding: 0 0.2em;
  user-select: all;
  word-break: break-all;
}
.text--normal {
  opacity: 0.9;
  line-height: 1.6;
}
button {
  font-family: Open Sans, sans-serif;
}
main .button:any-link {
  color: white;
  font-weight: normal;
}
main .button:any-link:hover,
main .button :any-link:hover {
  text-decoration: none;
}
.button {
  border: 0;
  color: white;
  text-transform: capitalize;
  cursor: pointer;
  font-family: Open Sans, sans-serif;
  padding: 0.75rem 1.25rem;
  font-size: 1.25rem;
  line-height: 1.25rem;
  background-color: var(--primaryColor);
  border-radius: 0.25rem;
  display: inline-block;
  transition: opacity 0.5s;
  // stylelint-disable-next-line
  box-shadow: 0 5px 5px RGB(26 35 126 / 8%);
}
.button.colorTwo {
  background-color: #534bae;
}
.button:hover {
  opacity: 0.75;
}
.button:disabled {
  background: linear-gradient(
    180deg,
    rgba(83, 75, 174, 0.15) 0%,
    rgba(26, 35, 126, 0.15) 100%
  );
  color: #777777;
}
.button:disabled:hover {
  opacity: 1;
}
.button:disabled,
.button:disabled:hover {
  cursor: not-allowed;
}
.button + .button {
  margin-left: 0.5rem;
}
label {
  font-size: 0.85rem;
  opacity: 0.85;
}
input,
textarea,
select {
  border-radius: 0.25rem;
  border: none;
  // stylelint-disable-next-line
  box-shadow: 0 5px 5px RGB(26 35 126 / 8%);
  background: -moz-linear-gradient(
    180deg,
    rgba(83, 75, 174, 0.15) 0%,
    rgba(26, 35, 126, 0.15) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(83, 75, 174, 0.15) 0%,
    rgba(26, 35, 126, 0.15) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(83, 75, 174, 0.15) 0%,
    rgba(26, 35, 126, 0.15) 100%
  );
  font-size: 1rem;
  line-height: 1.75rem;
  font-family: Open Sans, sans-serif;
}
input:not([type='submit']),
textarea,
select {
  padding: 0.33rem;
  width: 100%;
}
textarea {
  resize: vertical;
}
::placeholder {
  color: #777777;
}

/* Layout */
#__nuxt {
  background: rgba(53, 47, 114, 0.33);
}
#__layout > div {
  min-height: 100vh;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  grid-template-areas:
    'header'
    'main'
    'footer';
}
main {
  grid-area: main;
  background-color: white;
}
main :any-link,
main h2,
main h3,
main h4,
main h5,
main h6 {
  color: var(--primaryColor);
  font-weight: bold;
}
main h2 {
  text-align: center;
  margin: 0 auto;
  padding: 2rem 0;
}
main :any-link:hover {
  text-decoration: underline;
}

/* Global helpers */
.maxWidth {
  padding: 2rem;
  /* stylelint-disable-next-line */
  max-width: Min(1376px, calc(100vw - 4rem));
  margin: auto;
}
.white {
  background: white;
  color: #212121;
}

/* Nav */
nav {
  display: grid;
  grid-auto-flow: column;
}
@media (max-width: 900px) {
  nav {
    grid-auto-flow: row;
    justify-content: center;
  }
  .js-active nav {
    grid-auto-flow: column;
    justify-content: initial;
  }
}
.logo--container {
  display: grid;
  align-content: center;
  justify-content: left;
}
.logo {
  font-size: 3rem;
}
.logo svg {
  fill: white;
  width: 250px;
  user-select: none;
}
.logo svg text {
  font-size: 32px;
  font-family: Assistant-Light, Assistant, sans-serif;
  font-weight: 300;
  letter-spacing: 1.6px;
}
.nav--container {
  justify-self: end;
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  align-content: center;
}
.nav--link {
  font-size: 1.25rem;
  padding: 0.5rem;
  transition: color 0.5s, border 0.5s;
  border-bottom: 0.15rem solid transparent;
  font-family: Assistant, sans-serif;
  letter-spacing: 0.05rem;
}
.nav--link:hover {
  color: #ffffffaa;
}
.nav--link:hover,
.nav--link.nuxt-link-exact-active {
  border-bottom: 0.15rem solid #534bae;
}
.nav--icon {
  display: none;
}

/* Footer */
footer {
  grid-area: footer;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(83, 75, 174, 0.75),
    rgba(0, 0, 81, 0.5)
  );
}
footer h4 {
  font-size: 1.33rem;
}
.footer--copyright {
  border-top: 1px solid white;
  padding: 1.5rem;
  line-height: 1.5rem;
  font-size: 0.9rem;
}
.footer--copyrightInner {
  display: grid;
  grid-template-columns: 1fr min-content;
  gap: 2rem;
  padding: 0 2rem;
}
.socialLinks {
  justify-self: end;
  font-size: 24px;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  align-content: center;
  align-items: center;
}
.socialLinks a {
  color: #ffffff99;
  transition: color 0.5s;
}
.socialLinks a:hover {
  color: white;
}
.footer--bottom {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: 1rem;
}
.footer--bottom h4 {
  margin: 0;
  margin-bottom: 1rem;
}
.footer--bottom .logo--container {
  grid-column: span 3;
  margin-bottom: 1rem;
}
.footer--bottom .logo svg {
  width: 150px;
}
.footer--bottom_sitemap {
  display: grid;
  gap: 0.25rem;
}
.footer--bottom img {
  margin-top: 1em;
}
.footer--bottom_navLink,
.footer--bottom_contact a {
  font-family: Assistant, sans-serif;
  font-size: 1.25rem;
  border-bottom: 0.15rem solid transparent;
  transition: border 0.5s, opacity 0.25s;
  width: fit-content;
}
.footer--bottom_navLink:hover,
.footer--bottom_contact a:hover,
.footer--bottom_navLink.nuxt-link-exact-active {
  border-bottom: 0.15rem solid white;
}
.footer--bottom_contact {
  display: grid;
}
.footer--bottom_contact h4 {
  margin-bottom: 0.5rem;
}
.footer--bottom_contact h4:not(:first-of-type) {
  margin-top: 1rem;
}
@media (max-width: 500px) {
  .socialLinks {
    grid-auto-flow: initial;
  }
  .DAN {
    grid-column: span 5;
  }
}

/* Pages */
section {
  padding: 2rem 0;
}
.grid {
  display: grid;
  gap: 6rem;
}
.grid.left {
  grid-template-columns: 1fr 0.75fr;
}
.grid.right {
  grid-template-columns: 0.75fr 1fr;
}
.grid.column {
  grid-auto-flow: column;
  gap: 2rem;
  padding-bottom: 4rem;
}
.grid.column.two {
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: unset;
}
.grid.column.three {
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: unset;
}
.grid.column.four {
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-flow: unset;
}
.grid h3 {
  margin-top: 0;
}
svg {
  display: block;
  width: 100%;
  height: auto;
  max-height: 100%;
  overflow: visible;
}

/* Cards */
.card.white {
  // stylelint-disable-next-line
  box-shadow: 0 5px 5px RGB(26 35 126 / 8%);
  border-radius: 0.5rem;
}
.card.white .card--inner h3 {
  text-align: center;
}
.card .tags span {
  display: inline-block;
  padding: 0.25rem;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  border: 2px solid var(--primaryColor);
  border-radius: 0.25rem;
}
.card--inner {
  padding: 2rem 1rem;
  display: grid;
  gap: 1rem;
}
.card--inner p {
  font-family: Open Sans, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #212121;
}
.card--inner * {
  margin: 0;
}

/* Legal */
.legal h1 {
  font-size: 2rem;
}
.legal h2 {
  font-size: 1.5rem;
  text-align: left;
  padding: 0;
  margin: 0.83em auto;
}
.legal h3 {
  font-size: 1.33rem;
  opacity: 0.75;
  font-weight: normal;
}
@media print {
  nav,
  .footer--bottom,
  .socialLinks {
    display: none;
  }
  .footer--copyrightInner {
    color: #212121;
  }
}

/* Testimonials */
.testimonials--container {
  display: grid;
}
.testimonials {
  justify-self: right;
  width: 100%;
  max-width: 80vw;
  display: grid;
  grid-auto-columns: 100%;
  grid-auto-flow: column;
  grid-column-gap: 10px;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.testimonials::-webkit-scrollbar {
  display: none;
}
.testimonial {
  scroll-snap-align: center;
  scroll-snap-stop: always;
}
.testimonial p {
  margin: 0;
  font-weight: 300;
  line-height: 1.5;
  opacity: 0.85;
}
.testimonial .company {
  font-size: 1.33rem;
  margin-top: 0.75rem;
  text-align: right;
}
.testimonials--controls {
  justify-self: end;
  margin-top: 1rem;
}
.testimonials--controls * {
  display: inline;
}
.testimonials--controls button {
  margin: 1rem;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
}
.testimonials--controls button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

@media (max-width: 768px) {
  .testimonial .company {
    text-align: center;
  }
}

/* Toggle */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #cccccc;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: var(--primaryColor);
}
input:focus + .slider {
  box-shadow: 0 0 1px var(--primaryColor);
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}

/* Hosting / SEO */
.title {
  font-size: 1.25rem;
}
.desc {
  font-size: 1.2rem;
  line-height: 1.33;
  opacity: 0.9;
  max-width: 780px;
  text-align: center;
  margin: auto;
  margin-bottom: 1rem;
  &:last-of-type {
    margin-bottom: 2rem;
  }
}
.terms {
  font-size: 0.9rem;
  padding-left: 22px;
  color: var(--primaryColor);
}
#top {
  position: relative;
}
.toggle {
  position: absolute;
  right: 2rem;
  top: 2rem;
  display: grid;
  place-items: end;
}
@media (max-width: 900px) {
  .hosting--background {
    background-size: 75%;
  }
  #top {
    display: grid;
  }
  .toggle {
    position: relative;
    grid-row: 1;
    place-items: center;
    place-self: center;
    right: 0;
    top: 0;
  }
  .desc {
    opacity: 0.95;
    margin-bottom: 2em;
  }
}

/* Comparison Table */
table.comparison {
  border-collapse: collapse;
  td {
    padding: 0.5rem;
    &:nth-of-type(2),
    &:nth-of-type(3) {
      text-align: center;
    }
  }
  h3 {
    margin-bottom: 1.5rem;
  }
  tbody {
    td {
      svg.svg-inline--fa {
        width: 1.5rem;
        height: 1.5rem;
        color: var(--primaryColor);
      }
      svg.fa-times-circle {
        color: #999999;
      }
    }
    tr {
      &:nth-of-type(odd):not(.no-background) {
        background-color: #1a237e25;
      }
    }
  }
}
@media (max-width: 740px) {
  .scroll-wrapper {
    position: relative;
    overflow: hidden;
    .shadow {
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 100;
      width: 10px;
      height: 100%;
      background: red;
      &.shadow-left {
        left: 0;
        background: linear-gradient(450deg, rgba(0, 0, 0, 0.15), transparent);
        opacity: 0;
      }
      &.shadow-right {
        right: 0;
        background: linear-gradient(270deg, rgba(0, 0, 0, 0.15), transparent);
      }
    }
  }
  .mobile-table {
    position: relative;
    max-width: calc(100vw - 2rem);
    overflow-x: scroll;
    height: 100%;
    table.comparison {
      width: 650px;
    }
  }
}

/* Popover */
.v-popover {
  display: inline;
  font-size: 0.75rem;
  vertical-align: middle;
  color: var(--primaryColor);
  cursor: pointer;
}
.v-popover svg.svg-inline--fa.fa-w-12 {
  height: 1rem;
  width: 1rem;
  border: 1.5px solid var(--primaryColor);
  border-radius: 50%;
  padding: 0.05rem;
}

/* Hosting SVG */
.st0 {
  opacity: 0.7;
}
.st1 {
  fill: url(#SVGID_1_);
}
.st2 {
  fill: #e0e0e0;
}
.st3 {
  opacity: 0.1;
  enable-background: new;
}
.st4 {
  fill: #6c63ff;
}
.st5 {
  fill: #fdb797;
}
.st6 {
  fill: #333333;
}
.st7 {
  fill: url(#SVGID_2_);
}
.st8 {
  fill: #3cacbb;
}
.st9 {
  fill: #23c3b7;
}
.st10 {
  fill: url(#SVGID_3_);
}
.st11 {
  fill: #252f3e;
}
.st12 {
  fill: #ff9900;
}
.st13 {
  fill: url(#SVGID_4_);
}
.st14 {
  fill: #cac9c2;
}
.st15 {
  fill: white;
}
.st16 {
  fill: #5072aa;
}
.st17 {
  fill: #4d6796;
}
.st18 {
  fill: #cc4232;
}
.st19 {
  fill: #b23f33;
}
.st20 {
  fill: #ecb02a;
}
.st21 {
  fill: #c79732;
}

/* Forms */
form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  label {
    text-align: left;
    display: grid;
    gap: 0.5rem;
  }
}
#subject,
#message {
  grid-column: span 2;
}
#submitcontainer {
  grid-column: span 2;
  text-align: left;
}
p.message {
  text-align: left;
  grid-column: 1 / 3;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@media (max-width: 500px) {
  form {
    grid-template-columns: 1fr;
  }
  #submitcontainer,
  #message,
  #subject {
    grid-column: 1;
  }
}
form.narrow {
  grid-template-columns: 1fr;
  max-width: 800px;
  margin: auto;
  #submitcontainer,
  p.message {
    grid-column: 1;
  }
}

/* Animation */
.js-active {
  .hidden {
    opacity: 0;
  }
  @media (min-width: 900px) and (prefers-reduced-motion: no-preference) {
    .hidden-right {
      transform: translate(50px, 0);
    }
    .hidden-left {
      transform: translate(-50px, 0);
    }
  }
  .showElement {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 0.75s ease-out;
    transition-delay: var(--delay);
  }
}

@media (max-width: 1435px) {
  .footer--copyrightInner {
    padding: 0 4rem;
  }
}

@media (max-width: 1110px) {
  .grid.column.four {
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
  }
}

@media (max-width: 1070px) {
  #__nuxt {
    width: 100vw;
  }
  .js-active .nav--icon {
    display: block;
    fill: white;
    justify-self: end;
    align-self: center;
  }
  .nav--container {
    grid-auto-flow: row;
  }
  .js-active .nav--container {
    height: 100vh;
    min-height: -webkit-fill-available;
    position: absolute;
    left: 100vw;
    top: 0;
    bottom: 0;
    width: 200px;
    background: linear-gradient(
      0deg,
      rgba(83, 75, 174, 0.75),
      rgba(0, 0, 81, 0.5)
    );
    padding: 1rem;
    transition: left 1s;
  }
  .nav_open .nav--container {
    left: calc(100vw - 200px);
  }
  .nav_close .nav--container {
    display: none;
  }
  html {
    transition: margin 1s;
  }
  html.nav_open {
    margin-left: -200px;
    overflow: hidden;
  }
}

@media (max-width: 900px) {
  .text--normal {
    opacity: 0.95;
  }
  .socialLinks a {
    color: white;
  }
  .logo svg {
    width: 150px;
  }
  .grid.column.three,
  .grid.left,
  .grid.right,
  .grid.column.two {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    place-items: center;
  }
  .grid.left div.svg {
    grid-row: 1;
  }
  .grid svg,
  .card img {
    justify-self: center;
    max-width: 300px;
  }
  section {
    padding: 1rem;
  }
  .grid {
    gap: 4rem;
  }
  .footer--bottom {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 2rem 1rem;
    text-align: center;
  }
  .footer--bottom a,
  .footer--bottom img {
    display: inline;
    margin: auto;
    font-size: 1rem;
  }
  .footer--bottom .logo--container {
    margin: 0 auto 1rem;
    grid-column: 1;
  }
  .footer--bottom_contact {
    gap: 1rem;
  }
  .footer--bottom_contact h4 {
    grid-row: 1;
  }
  .footer--bottom_contact h4,
  .footer--bottom_contact h4:not(:first-of-type),
  .footer--bottom_contact a {
    margin: 0 auto;
  }
  .testimonials {
    margin-top: 1rem;
  }
  .footer--copyright {
    padding: 0.5rem;
  }
  .showElement {
    /* stylelint-disable-next-line */
    --delay: 0s !important;
  }
  .footer--copyrightInner {
    padding: 0 1rem;
    grid-template-columns: 1fr;
    place-items: center;
    gap: 1rem;
  }
  .footer--copyrightInner p {
    width: 100%;
    text-align: center;
  }
  .socialLinks {
    justify-self: center;
    padding-bottom: 1rem;
  }
}
@media (max-width: 510px) {
  .footer--bottom_contact h4 {
    grid-row: auto;
  }
}
@media (max-width: 500px) {
  .grid.column.four {
    grid-template-columns: 1fr;
  }
  .grid svg {
    max-width: 200px;
    margin: auto;
  }
  .grid {
    gap: 2rem;
  }
  .maxWidth {
    padding: 1rem;
    max-width: 100%;
  }
  .footer--copyrightInner {
    padding: 0 1rem;
  }
  main > div > section:first-of-type {
    padding-top: 2rem;
  }
  section {
    padding: 0;
  }
  h1 {
    font-size: 2.25rem;
  }
  h2 {
    font-size: 2rem;
    line-height: 1.125;
  }
  h3 {
    font-size: 1.5rem;
    line-height: 1.225;
  }
  .footer--bottom {
    width: 100%;
  }
  .testimonials {
    max-width: 90vw;
  }
}
</style>

<template>
  <div :style="'--motion: ' + motion">
    <header>
      <nav class="maxWidth">
        <div class="logo--container">
          <nuxt-link class="logo" to="/">
            <div v-html="require('../assets/svg/logo_v2.svg?include')" />
          </nuxt-link>
        </div>
        <div class="nav--icon">
          <Hamburger type="arrow" color="white" :expanded="expanded" />
        </div>
        <div class="nav--container">
          <nuxt-link to="/" class="nav--link">
            Home
          </nuxt-link>
          <nuxt-link to="/web/" class="nav--link">
            Design &amp; Development
          </nuxt-link>
          <nuxt-link to="/hosting/" class="nav--link">
            Hosting
          </nuxt-link>
          <nuxt-link to="/marketing/" class="nav--link">
            Marketing
          </nuxt-link>
          <nuxt-link to="/blog/" class="nav--link">
            Blog
          </nuxt-link>
          <nuxt-link to="/support/" class="nav--link">
            Support
          </nuxt-link>
          <nuxt-link to="/contact/" class="nav--link">
            Contact
          </nuxt-link>
        </div>
      </nav>
    </header>
    <main>
      <nuxt keep-alive />
    </main>
    <footer>
      <div class="footer--bottom_container">
        <div class="footer--bottom maxWidth">
          <div class="logo--container">
            <nuxt-link class="logo" to="/">
              <div v-html="require('../assets/svg/logo_v2.svg?include')" />
            </nuxt-link>
          </div>
          <div class="footer--bottom_contact">
            <h4>Telephone</h4>
            <a
              href=""
              onclick="Calendly.initPopupWidget({url: 'https://calendly.com/galexia/phone-call'});return false;"
            >07521 491222</a>
            <h4>Email</h4>
            <a href="mailto:info@galexia.agency">info@galexia.agency</a>
            <h4>Quick Links</h4>
            <div class="footer--bottom_sitemap">
              <nuxt-link class="footer--bottom_navLink" to="/our-team/">
                Our Team
              </nuxt-link>
              <nuxt-link class="footer--bottom_navLink" to="/legal/">
                Legal
              </nuxt-link>
            </div>
          </div>
          <div class="testimonials--container">
            <div class="testimonials">
              <div
                v-for="(testimonial, index) in testimonials"
                :key="index"
                class="testimonial"
              >
                <div v-html="testimonial.content" />
                <div class="company" v-html="'- ' + testimonial.title" />
              </div>
            </div>
            <div class="testimonials--controls">
              <button
                aria-label="previous"
                :disabled="count === 1"
                @click="left"
              >
                <font-awesome-icon :icon="['fas', 'chevron-left']" />
              </button>
              <p>
                <span>{{ count }}</span> /
                <span>{{ testimonials.length }}</span>
              </p>
              <button
                aria-label="next"
                :disabled="count === testimonials.length"
                @click="right"
              >
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
              </button>
            </div>
          </div>
        </div>
        <div class="footer--copyright">
          <div class="footer--copyrightInner maxWidth">
            <p>
              © {{ new Date().getFullYear() }} Galexia Creative Agency Ltd. A
              company registered in England and Wales. Company No. 12853224.
            </p>
            <div class="socialLinks">
              <a href="https://www.policybee.co.uk/" target="_blank">
                <img
                  src="../assets/img/White_Badge_PolicyBee.png?size=75"
                  width="75"
                  height="75"
                  alt="Insured through PolicyBee"
                >
              </a>
              <a
                href="https://digitalagencynetwork.com/agencies/cambridge"
                target="_blank"
                class="DAN"
              >
                <img
                  style="width: 160px; height: auto"
                  src="https://digitalagencynetwork.com/wp-content/themes/danglobal/assets/images/badges/dark.svg"
                  alt="Cambridge digital agency network member badge dark"
                >
              </a>
              <a
                href="https://fb.me/GalexiaAgency"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <font-awesome-icon :icon="['fab', 'facebook']" />
              </a>
              <a
                href="https://www.instagram.com/galexia_agency"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </a>
              <a
                href="https://www.twitter.com/galexia_agency"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </a>
              <a
                href="https://www.linkedin.com/company/galexia-agency"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
              <a
                href="https://github.com/orgs/Galexia-Agency/"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Hamburger from 'vue-hamburger/hamburger.vue'

export default {
  components: {
    Hamburger
  },
  data () {
    return {
      count: 1,
      motion: 'auto',
      expanded: null
    }
  },
  computed: {
    ...mapState([
      'testimonials',
      'blog',
      'blogs',
      'portfolios',
      'legal',
      'legals'
    ])
  },
  watch: {
    $route () {
      document.documentElement.classList.remove('nav_open')
      setTimeout(function () {
        document.documentElement.classList.add('nav_close')
        // eslint-disable-next-line no-undef
        background()
      }, 1000)
    }
  },
  async beforeMount () {
    // eslint-disable-next-line
    if (await this.WebpIsSupported()) {
    } else {
      document.querySelector('body').classList.add('no-webp')
    }
    this.motion = (await window.matchMedia('(prefers-reduced-motion: reduce)')
      .matches)
      ? 'auto'
      : 'smooth'
  },
  mounted () {
    document.querySelector('html').classList.add('js-active')
    const self = this
    document.addEventListener('touchstart', handleTouchStart, false)
    document.addEventListener('touchmove', handleTouchMove, false)

    let xDown = null
    let yDown = null

    function getTouches (evt) {
      return evt.touches
    }

    function handleTouchStart (evt) {
      const firstTouch = getTouches(evt)[0]
      xDown = firstTouch.clientX
      yDown = firstTouch.clientY
    }

    function handleTouchMove (evt) {
      if (!xDown || !yDown) {
        return
      }

      const xUp = evt.touches[0].clientX
      const yUp = evt.touches[0].clientY

      const xDiff = xDown - xUp
      const yDiff = yDown - yUp

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff < 0) {
          document.documentElement.classList.remove('nav_open')
          self.expanded = null
          setTimeout(function () {
            document.documentElement.classList.add('nav_close')
            self.expanded = false
          }, 500)
        }
      }
      /* reset values */
      xDown = null
      yDown = null
    }
  },
  methods: {
    async WebpIsSupported () {
      // If the browser doesn't have the method createImageBitmap, you can't display webp format
      if (!self.createImageBitmap) {
        return false
      }

      // Base64 representation of a white point image
      const webpData =
        'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA='

      // Retrieve the Image in Blob Format
      const blob = await fetch(webpData).then((r) => r.blob())

      // If the createImageBitmap method succeeds, return true, otherwise false
      return createImageBitmap(blob).then(
        () => true,
        () => false
      )
    },
    left () {
      if (this.count !== 1) {
        const container = document.querySelector('.testimonials')
        const width = document.querySelector('.testimonial').offsetWidth
        container.scrollBy({
          left: -width,
          behavior: this.motion
        })
        const self = this
        setTimeout(function () {
          self.count = Math.round(container.scrollLeft / width + 1)
        }, 300)
      }
    },
    right () {
      if (this.count !== this.testimonials.length) {
        const container = document.querySelector('.testimonials')
        const width = document.querySelector('.testimonial').offsetWidth
        container.scrollBy({
          left: width,
          behavior: this.motion
        })
        const self = this
        setTimeout(function () {
          self.count = Math.round(container.scrollLeft / width + 1)
        }, 300)
      }
    }
  }
}
</script>
