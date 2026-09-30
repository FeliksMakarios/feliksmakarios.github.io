---
layout: default
permalink: /id/teaching/
lang: id
slug: teaching
title: Pengajaran
subtitle: "Mata kuliah di UPH Informatika"
---

{% comment %} Course cards link to /id/teaching/<slug>/ (layout: course). {% endcomment %}

<h2 id="courses">Mata kuliah</h2>

<p>Setiap mata kuliah punya halaman sendiri. Materinya disusun per semester: RPS, slide bahan kuliah, kuis dan ujian, tugas dan proyek mahasiswa, serta foto-foto.</p>

{% for group in site.data.teaching.groups %}
<h3>{{ group.label.id }}</h3>
<div class="area-grid">
{% for course in group.courses %}
  {% include course-card.html course=course group=group lang="id" %}
{% endfor %}
</div>
{% endfor %}

<h2 id="supervision">Bimbingan</h2>

{{ site.data.teaching.supervision.id }}
