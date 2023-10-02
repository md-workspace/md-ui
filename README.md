## Technologies
  - Framework: Angular
  - Lib UI: Primeng 
  - CSS: Tailwindcss (use scss)

## Styles
- Angular coding Style: https://infinum.com/handbook/frontend/angular/angular-guidelines-and-best-practices/formatting-naming-and-best-practices
- Commitlint: https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit

## Cli
- Generate component: `nx g @nx/angular:component my-component --project=manufacturer`
- Generate app: `npx nx g @nx/angular:app admin`
- Generate lib: `npx nx g @nx/angular:lib common-ui`
- Config tailwindcss for app: `nx g @nx/react:setup-tailwind --project=<your app here>`


### Run app
- Manufacturing: `npm run serve:manufacturer`

### Build & Deploy
 - Manufacturer: `docker build -t md-manufacturer:0.0.1 --file Dockerfile.manufacturer .`
