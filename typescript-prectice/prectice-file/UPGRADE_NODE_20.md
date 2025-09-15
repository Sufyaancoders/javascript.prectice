## Why this document

Vite requires Node >= 20.19 or >= 22.12. If you see errors like:

- "You are using Node.js 16.20.2. Vite requires Node.js version 20.19+ or 22.12+. Please upgrade your Node.js version."
- "TypeError: crypto.getRandomValues is not a function"

then your system Node is too old. The steps below show safe Windows (PowerShell) ways to upgrade to Node 20+ and verify the change.

## Quick checklist

- [ ] Confirm current Node version
- [ ] Install Node 20+ (official installer, nvm-windows, or winget)
- [ ] Ensure old node.exe is not shadowing the new one in PATH
- [ ] Reinstall node modules and start Vite (`npm ci && npm run dev`)

## 1) Quick verification (PowerShell)

Open PowerShell (close and re-open any terminals after changing PATH) and run:

```powershell
node -v
Get-Command node | Select-Object -Property Name, Source
where.exe node
```

- `node -v` shows the active Node version.
- `Get-Command node` and `where.exe node` show which executable(s) are being picked up from PATH.

If `node -v` prints a 16.x version, follow the install steps below.

## 2) Install Node 20+ (choose one)

Option A — Official installer (simple):

1. Visit https://nodejs.org/en/download/ and download the Windows installer for Node 20.x (or Node 22.x if you prefer).
2. Run the installer and keep the option to add Node to PATH checked.
3. Close and re-open PowerShell, then re-run the verification commands above.

Option B — nvm-windows (recommended if you switch versions frequently):

1. Install nvm-windows from its releases page: https://github.com/coreybutler/nvm-windows
2. After installing, open a new PowerShell and run (example installing 20.19.0):

```powershell
nvm install 20.19.0
nvm use 20.19.0
node -v
```

3. Confirm `node -v` is a 20.x version.

Option C — winget (if you use Windows Package Manager):

```powershell
# install the latest Node 20 LTS if available
winget install --id OpenJS.NodeJS -e
# or search first
winget search nodejs
```

Note: winget package IDs can change; if `winget install` fails, use Option A or B.

## 3) Remove or de-prioritize old node.exe entries in PATH (if needed)

If `where.exe node` shows multiple paths, remove the old one from the PATH so the new installation is picked first.

You can edit PATH via the GUI:

1. Press Win + R → `sysdm.cpl` → Advanced → Environment Variables...
2. Edit both `User variables` and `System variables` → select `Path` → Edit.
3. Remove entries that point to old Node installations (e.g., `C:\Program Files\nodejs\` for an older install) and keep the entry for the Node 20+ installation.

Or view PATH from PowerShell to find candidates:

```powershell
$env:Path -split ';' | ForEach-Object { $_ }
```

After editing PATH, close and re-open PowerShell before verifying with `node -v`.

## 4) Rebuild project deps and start dev server

In your project folder (`prectice-file`) run:

```powershell
cd "E:\Javascript folder\javascript-course\typescript-prectice\prectice-file"
# remove node_modules and lockfile if you want a clean install (optional)
# Remove only if you understand consequences:
# rm -r node_modules package-lock.json

npm ci
npm run dev
```

If npm prints the same Node version error, double-check `node -v` in the same terminal where you ran `npm run dev`.

## Notes

- If you use a global `nvm` for WSL or Linux, this file focuses only on Windows PowerShell.
- The `crypto.getRandomValues` error is a symptom of using an environment older than what Vite expects; upgrading Node will resolve it.
- If you prefer, installing Node 22 (>= 22.12) also satisfies Vite's requirement.

If you'd like, I can add a small step-by-step PowerShell script to automate the verification and restart steps—tell me which install method you prefer (installer, nvm-windows, or winget) and I will add it.
