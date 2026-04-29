---
layout: default
permalink: /id/research/
lang: id
slug: research
title: Riset
subtitle: "NLP dan ML untuk konteks Indonesia yang kurang terwakili"
---

<p class="lead">
Riset saya mempelajari apa yang patah ketika sistem NLP dan machine learning mainstream bertemu dengan konteks Indonesia yang kurang terwakili — secara linguistik, demografis, spesifik domain, dan modalitas. Tujuannya dua: memahami mengapa sistem mainstream gagal di situasi ini, dan membangun pendekatan yang robust terhadapnya.
</p>

<h2>Bidang riset</h2>

<div class="area-grid">
  {% for area in site.data.research.areas %}
    {% assign sub_names = "" %}
    {% for sub in area.sub_areas %}
      {% if forloop.first %}
        {% assign sub_names = sub.name.id %}
      {% else %}
        {% assign sub_names = sub_names | append: ", " | append: sub.name.id %}
      {% endif %}
    {% endfor %}
    <article class="area-card">
      <h3>{{ area.name.id }}</h3>
      <p class="area-definition">{{ area.definition.id }}</p>
      <p class="area-subareas"><strong>Mencakup:</strong> {{ sub_names }}.</p>
      <a href="/id/research/{{ area.id }}/" class="btn-detail">Detail →</a>
    </article>
  {% endfor %}
</div>

<h2>Lintas bidang</h2>

<p>Untuk daftar lengkap publikasi, lihat <a href="/id/publications/">Publikasi</a>. Untuk mahasiswa yang pernah dan sedang saya bimbing, lihat <a href="/id/students/">Mahasiswa</a>.</p>

<div class="callout">
  <p><strong>Mencari dosen pembimbing TA?</strong> Tiap halaman detail bidang riset mencantumkan topik yang terbuka. Kirim email dengan CV, transkrip, dan paragraf singkat tentang alasan suatu topik menarik buat kamu.</p>
</div>
