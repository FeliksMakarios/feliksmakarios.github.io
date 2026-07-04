---
layout: blog-post
title: "Selamat datang di blog baru"
date: 2026-07-04
category: blog
permalink: /blog/:year/:month/:day/:title/
subtitle: "Sistem blog dengan dukungan LaTeX, kode, dan video"
type: original
tags: [meta, announcement]
summary_id: "Blog sekarang mendukung markdown, LaTeX, code blocks, dan video embed melalui struktur _posts."
mathjax: true
---

# Halo!

Ini adalah contoh blog post menggunakan sistem `_posts/` yang baru. Semua artikel
baru yang dibuat melalui Decap CMS akan mengikuti format ini.

## Dukungan LaTeX

Notasi inline: $\alpha + \beta = \gamma$. Notasi display:

$$
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$

## Dukungan kode

```python
import torch
from transformers import AutoModel

model = AutoModel.from_pretrained("indobenchmark/indobert-base-p1")
print(model.config.hidden_size)  # 768
```

## Video embed

Gunakan HTML inline untuk video:

```html
<video controls src="/assets/videos/demo.mp4"></video>
```

Atau iframe untuk YouTube:

```html
<div class="video-wrapper">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
</div>
```

---

Artikel ini akan hilang setelah Anda menambahkan konten asli pertama melalui CMS.
