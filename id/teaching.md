---
layout: default
permalink: /id/teaching/
lang: id
slug: teaching
title: Pengajaran
subtitle: "Mata kuliah di UPH Informatika"
---

{{ site.data.teaching.intro.id }}

{% comment %} Course cards link to /id/teaching/<slug>/ (layout: course). {% endcomment %}

<h2 id="now">Diajarkan semester ini</h2>

<div class="area-grid">
{% for group in site.data.teaching.groups %}{% for course in group.courses %}{% if course.teaching_now %}
  {% include course-card.html course=course group=group lang="id" %}
{% endif %}{% endfor %}{% endfor %}
</div>

<h2 id="courses">Mata kuliah</h2>

<p>Setiap mata kuliah punya halaman sendiri berisi RPS, slide kuliah, tugas, soal kuis dan ujian, referensi, serta arsip per semester.</p>

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
