---
layout: default
permalink: /id/demos/
lang: id
slug: demos
description: "Prototipe interaktif dari riset Feliks Samosir, skripsi mahasiswa bimbingan, dan kegiatan sosialisasi untuk siswa SMA, bisa dijalankan langsung di peramban."
title: Demo
subtitle: "Prototipe interaktif dari riset, pengajaran, dan sosialisasi"
---

<p class="lead">
Prototipe yang bisa dijalankan, dibagi tiga kategori: <strong>Proyek Saya</strong>
untuk demo yang saya bangun dari riset saya sendiri dan proyek sampingan,
<strong>Proyek Mahasiswa</strong> dari skripsi atau capstone mata kuliah yang saya bimbing, dan
<strong>Sosialisasi</strong> dari kegiatan Open House untuk siswa SMA.
</p>

<div class="demo-tabs" role="group" aria-label="Kategori demo">
  <button data-tab="all" class="active" type="button" aria-pressed="true">Semua</button>
  <button data-tab="my-project" type="button" aria-pressed="false">Proyek Saya</button>
  <button data-tab="student-project" type="button" aria-pressed="false">Proyek Mahasiswa</button>
  <button data-tab="outreach" type="button" aria-pressed="false">Sosialisasi</button>
</div>

<h2 class="visually-hidden">Daftar demo</h2>

{% assign demos = site.demos %}
{% assign categories = "my-project,student-project,outreach" | split: "," %}
{% for cat in categories %}
<section id="{{ cat }}" class="demo-section">
{% for demo in demos %}{% if demo.category == cat %}
<div class="card-demo">
  <div class="thumb" aria-hidden="true">{% if demo.thumbnail %}<img src="{{ demo.thumbnail }}" alt="" width="720" height="540" loading="lazy" decoding="async">{% else %}{{ demo.icon }}{% endif %}</div>
  <div>
    <p class="demo-category"><span class="tag tag-area">{% case demo.category %}{% when "my-project" %}Proyek Saya{% when "student-project" %}Proyek Mahasiswa{% else %}Sosialisasi{% endcase %}</span></p>
    <h3>{{ demo.title }}</h3>
    <p class="meta">{{ demo.meta.id }}</p>
    <p>{{ demo.description.id }}</p>
    {% if demo.student %}{% assign stu = site.students | where: "name", demo.student | first %}{% endif %}
    <p class="demo-links"><a href="{{ demo.demo_url }}"{% unless demo.url_is_internal %} target="_blank" rel="noopener external"{% endunless %}>Jalankan demo →</a>{% if stu and stu.thesis_url and stu.thesis_url != "" %}<a href="{{ stu.thesis_url }}" target="_blank" rel="noopener external">Baca skripsinya ↗</a>{% endif %}</p>
    {% assign stu = nil %}
  </div>
</div>
{% endif %}{% endfor %}
</section>
{% endfor %}

<script>
  (function() {
    var buttons = document.querySelectorAll('.demo-tabs button');
    var sections = document.querySelectorAll('.demo-section');
    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var tab = btn.getAttribute('data-tab');
        buttons.forEach(function(b) { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        sections.forEach(function(s) {
          s.hidden = (tab !== 'all' && s.id !== tab);
        });
      });
    });
  })();
</script>
