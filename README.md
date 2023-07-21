## Requirements
This project uses pnpm with workspaces. So pnpm should be installed.

## Project generation
This project has been generated from a 
```
$ pnpm create vite
```
and selecting the vanilla-ts project.

[Materialize](https://github.com/materializecss/materialize) has been added as a submodule in packages folder and then defined as a [pnpm workspace](https://pnpm.io/workspaces), to use it as a monorepo. 

Typescript has been configured to tread all projects in /packages folder as typescript packages.

head, navbar and footer in all html pages has been defined using [vite-plugin-handlebars](https://github.com/alexlafroscia/vite-plugin-handlebars).

## Instructions to develop
```
git clone https://github.com/danice/materialize-docs-vite.git
cd materialize-docs-vite
git submodule init
git submodule update
pnpm install
pnpm dev
```
This is a very convenient way to work in materialize or docs because all changes in both projects are inmediately displayed in the browser.

Also browser debugging displays the files exactly as they are in the source. 

## Instructions to build site
```
pnpm publish
pnpm preview
```


