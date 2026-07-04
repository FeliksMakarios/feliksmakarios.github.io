# Setup OAuth untuk Decap CMS

Decap CMS membutuhkan OAuth provider untuk autentikasi GitHub. Pilih satu opsi.

---

## Opsi A: Cloudflare Workers (Direkomendasikan)

Gratis, cepat, tanpa server. Butuh akun Cloudflare gratis.

### Langkah 1: Daftar Cloudflare

Buka https://dash.cloudflare.com/sign-up. Daftar dengan email, tidak perlu menambahkan domain.

### Langkah 2: Buat GitHub OAuth App

1. Buka https://github.com/settings/applications/new
2. Isi:
   - Application name: `Decap CMS`
   - Homepage URL: `https://feliksmakarios.github.io`
   - Authorization callback URL: `https://decap-oauth.feliksmakarios.workers.dev/callback`
3. Setelah dibuat, catat **Client ID**
4. Klik **Generate a new client secret**, catat **Client Secret**

### Langkah 3: Deploy Worker

1. Buka https://dash.cloudflare.com > Workers & Pages
2. Klik **Create** > **Create Worker**
3. Name: `decap-oauth`
4. Klik **Deploy**
5. Setelah deploy, klik **Edit code**
6. Hapus kode default, paste seluruh isi `worker.js` dari folder ini
7. Klik **Save and deploy**

### Langkah 4: Set Environment Variables

1. Kembali ke halaman Worker `decap-oauth`
2. Tab **Settings** > **Variables and Secrets**
3. Tambahkan 4 variables:

| Name | Value |
|---|---|
| `OAUTH_CLIENT_ID` | Client ID dari langkah 2 |
| `OAUTH_CLIENT_SECRET` | Client Secret dari langkah 2 |
| `REDIRECT_URL` | `https://decap-oauth.feliksmakarios.workers.dev/callback` |
| `GATEWAY_ORIGIN` | `https://feliksmakarios.github.io` |

4. Klik **Save and Deploy** lagi

### Langkah 5: Update config.yml

Cek file `admin/config.yml`. Pastikan `base_url` sesuai dengan URL Worker Anda:

```yaml
backend:
  name: github
  repo: FeliksMakarios/feliksmakarios.github.io
  branch: main
  base_url: https://decap-oauth.feliksmakarios.workers.dev
  auth_type: implicit
```

### Langkah 6: Test

1. Buka `https://feliksmakarios.github.io/admin/`
2. Klik **Login with GitHub**
3. Authorize app
4. Anda akan melihat dashboard CMS dengan 7 collections

---

## Opsi B: Netlify Identity (Alternatif)

Lebih sederhana tapi butuh deploy tambahan di Netlify.

1. Daftar di https://netlify.com (login dengan GitHub)
2. Drag-drop folder repo (atau connect repo)
3. Settings > Identity > Enable Identity
4. Settings > Identity > Registration > Invite-only
5. Settings > Identity > Services > GitHub > Enable
6. Tambahkan user FeliksMakarios sebagai member
7. Update `admin/config.yml`:

```yaml
backend:
  name: git-gateway
  branch: main
```

Catatan: Situs utama tetap di GitHub Pages. Netlify hanya dipakai untuk Identity service.

---

## Troubleshooting

**Error "redirect_uri mismatch"**
Callback URL di GitHub OAuth App harus persis sama dengan REDIRECT_URL di Worker.

**Error "Invalid client_id"**
Cek environment variable OAUTH_CLIENT_ID di Worker settings.

**Login berhasil tapi tidak bisa save**
Pastikan repo name dan branch di config.yml benar. Pastikan akun GitHub Anda punya write access ke repo.

**Worker returns 500**
Cek logs di Cloudflare dashboard > Workers > decap-oauth > Logs. Pastikan semua 4 environment variables sudah diset.
