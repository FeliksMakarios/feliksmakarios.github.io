---
layout: default
permalink: /id/students/
lang: id
slug: students
title: Mahasiswa
subtitle: "Bimbingan saat ini dan alumni"
---

<p class="lead">
Mahasiswa S1 yang pernah dan sedang saya bimbing. Setiap skripsi alumni tersedia di
repositori UPH; versi paper terpublikasi, kalau ada, ditautkan terpisah. Kalau kamu
alumni dan ingin dimasukkan (atau dikoreksi), silakan email saya.
</p>

<h2>Bimbingan saat ini</h2>

{% assign current = site.students | where: "status", "current" | sort: "name" %}
{% if current and current.size > 0 %}
<ul class="student-list">
  {% for s in current %}
    <li class="student-item">
      <div class="student-header">
        <span class="student-name">{{ s.name }}</span>
        <span class="student-cohort">Angkatan {{ s.cohort }}</span>
      </div>
      <p class="student-title">{{ s.title.id }}</p>
      <div class="student-meta">
        <span class="tag tag-area">{% case s.area %}{% when 'domain-specific-nlp' %}Domain-Specific NLP{% when 'low-resource-languages' %}Low-Resource Languages{% when 'bias-fairness' %}Bias &amp; Fairness{% when 'applied-ml' %}Applied ML{% else %}{{ s.area | replace: '-', ' ' | capitalize }}{% endcase %}</span>
        <span class="tag tag-{{ s.status }}">{{ s.status | capitalize }}</span>
      </div>
    </li>
  {% endfor %}
</ul>
{% else %}
<div class="callout">
  <p>Saat ini belum ada mahasiswa bimbingan aktif karena angkatan terakhir sudah sidang pada 2026.
  Saya sedang menerima mahasiswa skripsi baru. Silakan lihat topik yang terbuka di tiap halaman
  <a href="/id/research/">bidang riset</a>, lalu kirim email kalau ada yang menarik buat kamu.</p>
</div>
{% endif %}

<h2>Alumni</h2>

{% assign alumni = site.students | where: "status", "alumni" | sort: "year_graduated" | reverse %}
{% if alumni and alumni.size > 0 %}
{% assign alumni_years = alumni | map: "year_graduated" | uniq %}
<div class="alumni-timeline">
{% for year in alumni_years %}{% assign year_alumni = alumni | where: "year_graduated", year | sort: "name" %}<details class="year-group"><summary class="year-summary"><span class="year-label">Lulus {{ year }}</span><span class="year-count">{{ year_alumni.size }} alumni</span></summary><ul class="student-list">{% for s in year_alumni %}<li class="student-item"><div class="student-header"><span class="student-name">{{ s.name }}</span></div><p class="student-title">{{ s.title.id }}</p><div class="student-meta"><span class="tag tag-area">{% case s.area %}{% when 'domain-specific-nlp' %}Domain-Specific NLP{% when 'low-resource-languages' %}Low-Resource Languages{% when 'bias-fairness' %}Bias &amp; Fairness{% when 'applied-ml' %}Applied ML{% else %}{{ s.area | replace: '-', ' ' | capitalize }}{% endcase %}</span>{% for pub_slug in s.publications %}{% assign pub = site.publications | where: "slug", pub_slug | first %}{% if pub %}{% if pub.link and pub.link != "" %}<a href="{{ pub.link }}" target="_blank" rel="noopener external" class="tag tag-pub" title="{{ pub.title | escape }}">Terpublikasi · {{ pub.year }} ↗</a>{% else %}<span class="tag tag-pub" title="{{ pub.title | escape }}">Terpublikasi · {{ pub.year }}</span>{% endif %}{% endif %}{% endfor %}{% if s.thesis_url and s.thesis_url != "" %}<a href="{{ s.thesis_url }}" target="_blank" rel="noopener external" class="tag tag-thesis">Skripsi · {{ s.year_graduated }} ↗</a>{% endif %}</div>{% if s.current_role %}<p class="student-role"><em>Saat ini:</em> {{ s.current_role }}</p>{% endif %}</li>{% endfor %}</ul></details>{% endfor %}
</div>
{% else %}
<p class="muted-note">Belum ada alumni terdaftar.</p>
{% endif %}
