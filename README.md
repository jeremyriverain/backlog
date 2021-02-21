# Priorisation backlog

Browser extension to easily prioritize feature requests on Gitlab. Also available in PWA mode. Made with [Quasar](https://quasar.dev/).

In order for the labels to be assigned automatically, they must be created beforehand on your Gitlab project.

PWA [demo](https://backlog-tool.surge.sh/#/)

Browser extension demo below:
![](/public/demo.gif)

## Install the dependencies

```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Build the browser extension

```bash
quasar build -m bex
```

### Deploy in PWA mode via Surge

```bash
npm install --global surge
surge login
export DEPLOY_SURGE_URL=your_domain.surge.sh && yarn deploy
```
