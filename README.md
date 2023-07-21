git clone https://github.com/danice/materialize-docs-vite.git

cd materialize-docs-vite
git submodule init
git submodule update
pnpm install
pnpm dev

to build the site
pnpm publish
pnpm preview
