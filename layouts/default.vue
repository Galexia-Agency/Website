
<style lang="scss">
/* Resets */
html {
  --delay: 0s;
  --primaryColor: #1A237E;
  --100vw: calc(100vw - var(--scrollbar-width, 0px));
  background: white
}
body {
  margin: 0;
  padding: 0;
  color: white;
  font-weight: 400;
  font-size: 16px;
  font-family: Open Sans, Open Sans fallback, sans-serif;
  background-color: white;
  scroll-behavior: var(--motion, auto)
}
::selection {
  color: white;
  background: #1C2AB1
}
* {
  box-sizing: border-box;
  outline-color: var(--primaryColor)
}
:any-link {
  color: inherit;
  text-decoration: none;
  word-break: break-word;
  transition: opacity .25s
}
:any-link:focus {
  opacity: .5
}
picture {
  display: block
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  font-family: Montserrat, Montserrat fallback, sans-serif;
  line-height: 1.225;
  + p {
    margin-top: 0
  }
}
h1 {
  margin-bottom: 1.5rem;
  color: var(--primaryColor);
  font-size: 2.5rem;
  letter-spacing: 1px
}
h2 {
  margin-bottom: 1.5rem;
  font-size: 2.25rem
}
h3 {
  margin-bottom: 1rem;
  font-size: 2rem
}
h4 {
  margin-bottom: 1rem;
  font-size: 1.75rem
}
h5 {
  margin-bottom: 1rem;
  font-size: 1.5rem
}
h6 {
  margin-bottom: 1rem;
  font-size: 1.25rem
}
p {
  &:last-child {
    margin-bottom: 0
  }
  + p,
  &:first-child {
    margin-top: 0
  }
}
code {
  padding: 0 .2em;
  word-break: break-all;
  background-color: rgb(26 35 126 / 15%);
  user-select: all
}
.text--normal {
  line-height: 1.6;
  opacity: .9
}
button {
  font-family: Open Sans, Open Sans fallback, sans-serif
}
.button:any-link {
  text-decoration: none
}
main .button:any-link {
  color: white;
  font-weight: normal
}
main .button:any-link:hover,
main .button :any-link:hover {
  text-decoration: none
}
.button {
  display: inline-block;
  padding: .75rem 1.25rem;
  color: white;
  font-size: 1.25rem;
  font-family: Open Sans, Open Sans fallback, sans-serif;
  line-height: 1.25rem;
  text-transform: capitalize;
  background-color: var(--primaryColor);
  border: 0;
  border-radius: .25rem;

  box-shadow: 0 5px 5px rgb(26 35 126 / 8%);
  cursor: pointer;
  transition: opacity .5s
}
.button.colorTwo {
  background-color: #534BAE
}
.button:hover {
  opacity: .75
}
.button:disabled {
  color: #777777;
  background: linear-gradient(
    180deg,
    rgb(83 75 174 / 15%) 0%,
    rgb(26 35 126 / 15%) 100%
  )
}
.button:disabled:hover {
  opacity: 1
}
.button:disabled,
.button:disabled:hover {
  cursor: not-allowed
}
.button + .button {
  margin-left: .5rem
}
label {
  font-size: .85rem;
  opacity: .85
}
input,
textarea,
select {
  font-size: 1rem;
  font-family: Open Sans, Open Sans fallback, sans-serif;
  line-height: 1.75rem;
  background: linear-gradient(
    180deg,
    rgb(83 75 174 / 15%) 0%,
    rgb(26 35 126 / 15%) 100%
  );
  border: none;
  border-radius: .25rem;

  box-shadow: 0 5px 5px rgb(26 35 126 / 8%)
}
input:not([type='submit']),
textarea,
select {
  width: 100%;
  padding: .33rem
}
select {
  background: linear-gradient(
    180deg,
    rgb(83 75 174 / 15%) 0%,
    rgb(26 35 126 / 15%) 100%
  ),
    url('data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+')
    no-repeat
    99% 50%;
  appearance: none
}
textarea {
  resize: vertical
}
::placeholder {
  color: #777777
}

/* Layout */
#__nuxt {
  background: rgb(53 47 114 / 33%)
}
.site-background {
  display: grid;
  grid-template-areas: 'header'
    'main'
    'footer';
  grid-template-rows: max-content 1fr max-content;
  min-height: 100vh
}
main header {
  background-color: rgb(53 47 114 / 33%);
  background-position: 0 -135px
}
.site-background,
main header {
  background-image: url('../assets/img/SpaceBackgroundBlurred.jpg?format=webp&resize');
  background-image: image-set(
    var(--imageToPreload) type('image/avif'),
    url('../assets/img/SpaceBackgroundBlurred.jpg?format=webp&resize') type('image/webp')
  );
  background-repeat: no-repeat;
  background-size: var(--backgroundSize, 4500px)
}
main {
  grid-area: main;
  background-color: white
}
main :any-link,
main h2,
main h3,
main h4,
main h5,
main h6 {
  color: var(--primaryColor);
  font-weight: 700
}
main h2 {
  margin: 0 auto;
  padding: 2rem 0;
  text-align: center
}
main :any-link:hover {
  text-decoration: underline
}

/* Global helpers */
.maxWidth {
  max-width: 1376px;
  margin-right: auto;
  margin-left: auto;
  padding: 2rem
}
.white {
  color: #212121;
  background: white
}

/* Nav */
nav {
  display: grid;
  grid-auto-flow: column
}
@media (max-width: 900px) {
  nav {
    grid-auto-flow: row;
    justify-content: center
  }
  .js-active nav {
    grid-auto-flow: column;
    justify-content: initial
  }
  h1 {
    font-size: 2.25rem
  }
  h2 {
    font-size: 2rem
  }
  h3 {
    font-size: 1.75rem
  }
  h4 {
    font-size: 1.5rem
  }
  h5 {
    font-size: 1.25rem
  }
  h6 {
    font-size: 1.15rem
  }
  .button {
    font-size: 1.1rem
  }
}
.logo--container {
  display: grid;
  align-content: center;
  justify-content: left
}
.logo svg {
  width: 250px;
  user-select: none;
  fill: white;
  @media (max-width: 1300px) {
    width: 175px
  }
}
.logo svg text {
  font-weight: 300;
  font-size: 32px;
  font-family: Assistant-Light, Assistant, Assistant Fallback, sans-serif;
  letter-spacing: 1.6px
}
.nav--container {
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  align-content: center;
  justify-self: end
}
.nav--link {
  padding: .5rem;
  font-size: 1.25rem;
  font-family: Assistant, Assistant Fallback, sans-serif;
  letter-spacing: .05rem;
  border-bottom: .15rem solid transparent;
  transition: color .5s, border .5s
}
.nav--link:hover {
  color: #FFFFFFAA
}
.nav--link:hover,
.nav--link.nuxt-link-exact-active {
  border-bottom: .15rem solid #534BAE
}
.nav--icon {
  display: none
}

/* Footer */
footer {
  grid-area: footer;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgb(83 75 174 / 75%),
    rgb(0 0 81 / 50%)
  )
}
footer h4 {
  font-size: 1.33rem
}
.footer--copyright {
  padding: 1.5rem;
  font-size: .9rem;
  line-height: 1.5rem;
  border-top: 1px solid white
}
.footer--copyrightInner {
  display: grid;
  grid-template-columns: 1fr min-content;
  gap: 2rem;
  padding: 0 2rem;
  p {
    align-self: end
  }
}
.socialLinks {
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  align-content: center;
  align-items: center;
  justify-self: end;
  font-size: 24px;
  a {
    color: white;
    transition: color .5s;
    &:hover {
      color: #FFFFFF99
    }
    svg {
      width: 1.5rem
    }
  }
}
.footer--bottom {
  display: grid;
  grid-template-columns: .5fr 1fr;
  gap: 1rem
}
.footer--bottom h4 {
  margin: 0;
  margin-bottom: 1rem
}
.footer--bottom .logo--container {
  grid-column: span 3;
  margin-bottom: 1rem
}
.footer--bottom .logo svg {
  width: 150px
}
.footer--bottom_sitemap {
  display: grid;
  gap: .25rem
}
.footer--bottom img {
  margin-top: 1em
}
.footer--bottom_navLink,
.footer--bottom_contact a {
  width: fit-content;
  font-size: 1.25rem;
  font-family: Assistant, Assistant Fallback, sans-serif;
  border-bottom: .15rem solid transparent;
  transition: border .5s, opacity .25s
}
.footer--bottom_navLink:hover,
.footer--bottom_contact a:hover,
.footer--bottom_navLink.nuxt-link-exact-active {
  border-bottom: .15rem solid white
}
.footer--bottom_contact {
  display: grid
}
.footer--bottom_contact h4 {
  margin-bottom: .5rem
}
.footer--bottom_contact h4:not(:first-of-type) {
  margin-top: 1rem
}
@media (max-width: 500px) {
  .socialLinks {
    grid-auto-flow: row;
    grid-template-columns: auto auto auto auto auto;
    a:first-child,
    a:nth-child(2) {
      grid-column: 1 / -1;
      img {
        display: block;
        margin: auto
      }
    }
  }
}

/* Pages */
section {
  padding: 2rem 0
}
.grid {
  display: grid;
  gap: 6rem
}
.grid.left {
  grid-template-columns: 1fr .75fr
}
.grid.right {
  grid-template-columns: .75fr 1fr
}
.grid.column {
  grid-auto-flow: column;
  gap: 2rem;
  padding-bottom: 4rem
}
.grid.column.two {
  grid-auto-flow: unset;
  grid-template-columns: 1fr 1fr
}
.grid.column.three {
  grid-auto-flow: unset;
  grid-template-columns: 1fr 1fr 1fr
}
.grid.column.four {
  grid-auto-flow: unset;
  grid-template-columns: 1fr 1fr 1fr 1fr
}
.grid h3 {
  margin-top: 0
}
svg {
  display: block;
  width: 100%;
  height: auto;
  max-height: 100%;
  overflow: visible
}

/* Cards */
.card.white {
  border-radius: .5rem;

  box-shadow: 0 5px 5px rgb(26 35 126 / 8%)
}
.card.white .card--inner h3 {
  text-align: center
}
.card .tags span {
  display: inline-block;
  margin-top: .5rem;
  margin-right: .5rem;
  padding: .25rem;
  border: 2px solid var(--primaryColor);
  border-radius: .25rem
}
.card--inner {
  display: grid;
  gap: 1rem;
  padding: 2rem 1rem
}
.card--inner p {
  color: #212121;
  font-weight: 400;
  font-size: 16px;
  font-family: Open Sans, Open Sans fallback, sans-serif
}
.card--inner * {
  margin: 0
}
.card--inner img {
  aspect-ratio: 1;
  object-fit: contain
}

/* Legal */
.legal h1 {
  font-size: 2rem
}
.legal h2 {
  margin: .83em auto;
  padding: 0;
  font-size: 1.5rem;
  text-align: left
}
.legal h3 {
  font-weight: normal;
  font-size: 1.33rem;
  opacity: .75
}
@media print {
  nav,
  .footer--bottom,
  .socialLinks {
    display: none
  }
  .footer--copyrightInner {
    color: #212121
  }
}

/* Testimonials */
.testimonials--container {
  display: grid
}
.testimonials {
  display: grid;
  grid-auto-columns: 100%;
  grid-auto-flow: column;
  grid-column-gap: 10px;
  justify-self: right;
  width: 100%;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.testimonials::-webkit-scrollbar {
  display: none
}
.testimonial {
  scroll-snap-align: center;
  scroll-snap-stop: always
}
.testimonial p {
  margin: 0;
  font-weight: 300;
  line-height: 1.5;
  opacity: .85
}
.testimonial .company {
  margin-top: .75rem;
  font-size: 1.33rem;
  text-align: right
}
.testimonials--controls {
  justify-self: end;
  margin-top: 1rem
}
.testimonials--controls * {
  display: inline
}
.testimonials--controls button {
  margin: 1rem;
  color: white;
  font-size: 1.1rem;
  background: none;
  border: none;
  cursor: pointer
}
.testimonials--controls button:disabled {
  cursor: not-allowed;
  opacity: .5
}

@media (max-width: 768px) {
  .testimonial .company {
    text-align: center
  }
}

/* Toggle */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px
}
.switch input {
  width: 0;
  height: 0;
  opacity: 0
}
.slider {
  position: absolute;
  inset: 0;
  background-color: #CCCCCC;
  cursor: pointer;
  transition: .4s
}
.slider:before {
  position: absolute;
  bottom: 4px;
  left: 4px;
  width: 26px;
  height: 26px;
  background-color: white;
  transition: .4s;
  content: ''
}
input:checked + .slider {
  background-color: var(--primaryColor)
}
input:focus + .slider {
  box-shadow: 0 0 1px var(--primaryColor)
}
input:checked + .slider:before {
  transform: translateX(26px)
}
.slider.round {
  border-radius: 34px
}
.slider.round:before {
  border-radius: 50%
}

/* Hosting / SEO */
.title {
  font-size: 1.25rem
}
.desc {
  max-width: 780px;
  margin: auto;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height: 1.33;
  text-align: center;
  opacity: .9;
  &:last-of-type {
    margin-bottom: 2rem
  }
}
.terms {
  padding-left: 22px;
  color: var(--primaryColor);
  font-size: .9rem
}
#top {
  position: relative
}
.toggle {
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: grid;
  place-items: end
}
@media (max-width: 900px) {
  .hosting--background {
    background-size: 75%
  }
  #top {
    display: grid
  }
  .toggle {
    position: relative;
    top: 0;
    right: 0;
    grid-row: 1;
    place-items: center;
    place-self: center
  }
  .desc {
    margin-bottom: 2em;
    opacity: .95
  }
}

/* Comparison Table */
table.comparison {
  border-collapse: collapse;
  td {
    padding: .5rem;
    &:nth-of-type(2),
    &:nth-of-type(3) {
      text-align: center
    }
  }
  h3 {
    margin-bottom: 1.5rem
  }
  tbody {
    td {
      svg.svg-inline--fa {
        width: 1.5rem;
        height: 1.5rem;
        color: var(--primaryColor)
      }
      svg.fa-times-circle {
        color: #999999
      }
    }
    tr {
      &:nth-of-type(odd):not(.no-background) {
        background-color: #1A237E25
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
        background: linear-gradient(450deg, rgb(0 0 0 / 15%), transparent);
        opacity: 0
      }
      &.shadow-right {
        right: 0;
        background: linear-gradient(270deg, rgb(0 0 0 / 15%), transparent)
      }
    }
  }
  .mobile-table {
    position: relative;
    max-width: calc(var(--100vw) - 2rem);
    height: 100%;
    overflow-x: scroll;
    table.comparison {
      width: 650px
    }
  }
}

/* Info */
.info-item {
  display: block;
  margin-left: 1em;
  color: #333333;
  font-size: .8em
}

/* Hosting SVG */
.st0 {
  opacity: .7
}
.st1 {
  fill: url('#SVGID_1_')
}
.st2 {
  fill: #E0E0E0
}
.st3 {
  opacity: .1;
  enable-background: new
}
.st4 {
  fill: #6C63FF
}
.st5 {
  fill: #FDB797
}
.st6 {
  fill: #333333
}
.st7 {
  fill: url('#SVGID_2_')
}
.st8 {
  fill: #3CACBB
}
.st9 {
  fill: #23C3B7
}
.st10 {
  fill: url('#SVGID_3_')
}
.st11 {
  fill: #252F3E
}
.st12 {
  fill: #FF9900
}
.st13 {
  fill: url('#SVGID_4_')
}
.st14 {
  fill: #CAC9C2
}
.st15 {
  fill: white
}
.st16 {
  fill: #5072AA
}
.st17 {
  fill: #4D6796
}
.st18 {
  fill: #CC4232
}
.st19 {
  fill: #B23F33
}
.st20 {
  fill: #ECB02A
}
.st21 {
  fill: #C79732
}

/* Forms */
form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  label {
    display: grid;
    gap: .5rem;
    text-align: left
  }
}
#subject,
#message {
  grid-column: span 2
}
#submitcontainer {
  grid-column: span 2;
  text-align: left
}
p.message {
  grid-column: 1 / 3;
  text-align: left
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s
}
.fade-enter,
.fade-leave-to {
  opacity: 0
}
@media (max-width: 500px) {
  form {
    grid-template-columns: 1fr
  }
  #submitcontainer,
  #message,
  #subject {
    grid-column: 1
  }
}
form.narrow {
  grid-template-columns: 1fr;
  max-width: 800px;
  margin: auto;
  #submitcontainer,
  p.message {
    grid-column: 1
  }
}

/* Animation */
.js-active {
  .hidden {
    opacity: 0
  }
  @media (min-width: 900px) and (prefers-reduced-motion: no-preference) {
    .hidden-right {
      transform: translate(50px, 0)
    }
    .hidden-left {
      transform: translate(-50px, 0)
    }
  }
  .showElement {
    transform: translate(0, 0);
    opacity: 1;
    transition: all .75s ease-out;
    transition-delay: var(--delay)
  }
}

@media (max-width: 1435px) {
  .footer--copyrightInner {
    padding: 0 4rem
  }
}

@media (max-width: 1110px) {
  .grid.column.four {
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr
  }
}

@media (max-width: 1070px) {
  .site-width {
    width: var(--100vw)
  }
  .js-active .nav--icon {
    display: block;
    align-self: center;
    justify-self: end;
    fill: white
  }
  .nav--container {
    grid-auto-flow: row
  }
  .js-active {
    transition: margin 1s;
    &.nav_open {
      margin-left: -200px;
      overflow: hidden
    }
    .nav--container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 100vw;
      width: 200px;
      height: 100vh;

      /* stylelint-disable-next-line declaration-property-value-no-unknown */
      min-height: stretch;
      padding: 1rem;
      background: linear-gradient(
        0deg,
        rgb(83 75 174 / 75%),
        rgb(0 0 81 / 50%)
      );
      transition: left 1s
    }
    &.nav_open .nav--container {
      left: calc(var(--100vw) - 200px)
    }
    &.nav_close .nav--container {
      display: none
    }
  }
}

@media (max-width: 900px) {
  .text--normal {
    opacity: .95
  }
  .socialLinks a {
    color: white
  }
  .logo svg {
    width: 150px
  }
  .grid.column.three,
  .grid.left,
  .grid.right,
  .grid.column.two {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    place-items: center
  }
  .grid.left div.svg {
    grid-row: 1
  }
  .grid svg,
  .card img {
    justify-self: center;
    max-width: 300px
  }
  section {
    padding: 1rem
  }
  .grid {
    gap: 4rem
  }
  .footer--bottom {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 2rem 1rem;
    text-align: center
  }
  .footer--bottom a,
  .footer--bottom img {
    display: inline;
    margin: auto;
    font-size: 1rem
  }
  .footer--bottom .logo--container {
    grid-column: 1;
    margin: 0 auto 1rem
  }
  .footer--bottom_contact {
    gap: 1rem
  }
  .footer--bottom_contact h4 {
    grid-row: 1
  }
  .footer--bottom_contact h4,
  .footer--bottom_contact h4:not(:first-of-type),
  .footer--bottom_contact a {
    margin: 0 auto
  }
  .testimonials {
    margin-top: 1rem
  }
  .footer--copyright {
    padding: .5rem
  }
  .showElement {
    /* stylelint-disable-next-line declaration-no-important */
    --delay: 0s!important
  }
  .footer--copyrightInner {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
    place-items: center;
    p {
      grid-row: 2;
      width: 100%;
      text-align: center
    }
  }
  .socialLinks {
    justify-self: center;
    padding-bottom: 1rem
  }
}
@media (max-width: 510px) {
  .footer--bottom_contact h4 {
    grid-row: auto
  }
}
@media (max-width: 500px) {
  .grid.column.four {
    grid-template-columns: 1fr
  }
  .grid svg {
    max-width: 200px;
    margin: auto
  }
  .grid {
    gap: 2rem
  }
  .maxWidth {
    max-width: 100%;
    padding: 1rem
  }
  .footer--copyrightInner {
    padding: 0 1rem
  }
  main > div > section:first-of-type {
    padding-top: 2rem
  }
  section {
    padding: 0
  }
  .footer--bottom {
    width: 100%
  }
}
</style>

<template>
  <div class="site-background" :style="`--imageToPreload: url(${imageToPreload})`">
    <div class="site-width">
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
          <div id="navigation" class="nav--container">
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
                company registered in England and Wales. 85 Great Portland Street,
                First Floor, London, W1W 7LT. Company No. 12853224.
              </p>
              <div class="socialLinks">
                <a href="https://www.policybee.co.uk/" target="_blank">
                  <GalexiaImage
                    :avif="require('~/assets/img/White_Badge_PolicyBee.png?format=avif&resize&size=75')"
                    :webp="require('~/assets/img/White_Badge_PolicyBee.png?format=webp&resize&size=75')"
                    :src="require('~/assets/img/White_Badge_PolicyBee.png?resize&size=75')"
                    width="75"
                    height="75"
                    alt="Insured through PolicyBee"
                  />
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
      imageToPreload: require('~/assets/img/SpaceBackgroundBlurred.jpg?format=avif&resize'),
      count: 1,
      motion: 'auto',
      expanded: null
    }
  },
  head () {
    return {
      link: [
        { rel: 'preload', as: 'image', href: this.imageToPreload }
      ]
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
    if (!(await window.matchMedia('(prefers-reduced-motion: reduce)'))) {
      this.motion = 'auto'
    } else {
      this.motion = 'smooth'
      document.querySelector('body').style.setProperty('--motion', 'smooth')
    }
  },
  mounted () {
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
