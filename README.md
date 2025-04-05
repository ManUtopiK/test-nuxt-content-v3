# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <style>
    div {
      color: white;
      font: 18px serif;
      height: 100%;
      overflow: auto;
    }
    /* Customize the scrollbar track (background) */
::-webkit-scrollbar {
    width: 12px; /* Width of the scrollbar */
}

/* Customize the scrollbar thumb (the draggable part) */
::-webkit-scrollbar-thumb {
    background-color: #888; /* Color of the thumb */
    border-radius: 10px; /* Rounded corners */
    border: 3px solid blue; /* Border around the thumb */
}

/* Customize the scrollbar track on hover */
::-webkit-scrollbar-thumb:hover {
    background-color: red; /* Color of the thumb when hovered */
}
  </style>

  <polygon points="5,5 195,10 185,185 10,195" />

  <!-- Common use case: embed HTML text into SVG -->
  <foreignObject x="20" y="20" width="160" height="160">
    <!--
      In the context of SVG embedded in an HTML document, the XHTML
      namespace could be omitted, but it is mandatory in the
      context of an SVG document
    -->
    <div xmlns="http://www.w3.org/1999/xhtml">
      <p id="message">Hello, SVG!</p>
      <button onclick="changeMessage()">Click me</button>
                    <script type="text/javascript">
                        function changeMessage() {
                          console.log(document)
                            document.getElementById('message').textContent = 'Message changed!';
                        }
                    </script>
      Lorem ipsum dolor sit ameieuieuiiiit, consectetur adipiscing elit. Sed mollis mollis
      mi ut ultricies. Nullam magna ipsum, porta vel dui convallis, rutrum
      imperdiet eros. Aliquam erat volutpat.
      
    </div>
  </foreignObject>
</svg>

