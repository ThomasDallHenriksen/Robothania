# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Deploy (GitHub Actions, self-hosted runner på Raspberry Pi)

[![Deploy to Raspberry Pi (Self-Hosted)](https://github.com/Robothania/robothaniaReactWebsite/actions/workflows/deploy-selfhosted.yml/badge.svg)](https://github.com/Robothania/robothaniaReactWebsite/actions/workflows/deploy-selfhosted.yml)

- **Trigger:** Kører automatisk ved push til `master`/`main` og kan også startes manuelt via **Actions → Run workflow**.
- **Runner:** Jobbet kører på vores **self-hosted** GitHub Actions runner på Raspberry Pi (`self-hosted`, `Linux`, `ARM64`).
- **Hvad der sker:**
  - Tjekker koden ud.
  - *(Vælg én variant – afhængigt af repoet):*  
    - **Statisk HTML/CSS:** Kopierer filerne fra repoet til Nginx-mappen med `rsync` (ekskl. `.git`, `.github`, `README*`).  
    - **Build-projekt (fx Vite/React):** `npm ci && npm run build`, derefter `rsync` af `dist/` til Nginx-mappen.
  - Ingen SSH, ingen åbne porte – runneren skriver **lokalt** til serverens filsystem.
- **Destination:** `/var/www/mysite/` (den mappe Nginx server filer fra).
- **Resultat:** Når workflowet er grønt, er websitet opdateret.

**Fejlfinding (kort)**  
- Runner: `cd ~/actions-runner && sudo ./svc.sh status`  
- Nginx: `sudo nginx -t && sudo systemctl reload nginx`  
- Rettigheder: `sudo chown -R <pi_user>:<pi_user> /var/www/mysite`

