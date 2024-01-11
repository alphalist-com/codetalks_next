# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Node.js Version Requirement

This project requires Node.js version `20.x`. This specific version is used because it is used in the Digital Ocean App. To manage multiple Node.js versions on your system, you can use `nvm` (Node Version Manager).

### Using NVM to Switch Node Versions

If you don't have `nvm` installed, you can find the installation instructions here:
- On Linux/macOS: [nvm-sh/nvm](https://github.com/nvm-sh/nvm)
- On Windows: [coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

Once `nvm` is installed, run the following commands in your terminal to install and use Node.js version `20.x`:

```bash
nvm install 20
nvm use 20

```

## Setup

Make sure to use the correct node version install the dependencies:


```bash
npm install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

```

## Production

Build the application for production:

```bash
# npm
npm run build

```

Locally preview production build:

```bash
# npm
npm run preview

```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
