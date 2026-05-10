---
layout: default
permalink: /id/students/
lang: id
slug: students
title: Mahasiswa
subtitle: "Bimbingan saat ini dan alumni"
---

<p class="lead">
Mahasiswa S1 yang pernah dan sedang saya bimbing. Data di bawah masih placeholder —
nama aktual dan informasi pekerjaan saat ini akan diperbarui secara berkala. Kalau
kamu alumni dan ingin dimasukkan (atau dikoreksi), silakan email saya.
</p>

<h2>Bimbingan saat ini</h2>

{% assign current = site.data.students.current %}
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
        <span class="tag tag-area">{{ s.area | replace: '-', ' ' | capitalize }}</span>
        <span class="tag tag-{{ s.status }}">{{ s.status | capitalize }}</span>
      </div>
    </li>
  {% endfor %}
</ul>
{% else %}
<p class="muted-note">Belum ada bimbingan saat ini.</p>
{% endif %}

<h2>Alumni</h2>

{% assign alumni = site.data.students.alumni | sort: "year_graduated" | reverse %}
{% if alumni and alumni.size > 0 %}
{% assign alumni_years = alumni | map: "year_graduated" | uniq %}
<div class="alumni-timeline">
{% for year in alumni_years %}{% assign year_alumni = alumni | where: "year_graduated", year %}<details class="year-group" open><summary class="year-summary"><span class="year-label">Lulus {{ year }}</span><span class="year-count">{{ year_alumni.size }} alumni</span></summary><ul class="student-list">{% for s in year_alumni %}<li class="student-item"><div class="student-header"><span class="student-name">{{ s.name }}</span></div><p class="student-title">{{ s.title.id }}</p><div class="student-meta"><span class="tag tag-area">{{ s.area | replace: '-', ' ' | capitalize }}</span>{% if s.publication %}{% assign pub = site.data.publications | where: "id", s.publication | first %}{% if pub %}<span class="tag tag-pub">Terpublikasi · {{ pub.year }}</span>{% endif %}{% endif %}</div>{% if s.current_role %}<p class="student-role"><em>Saat ini:</em> {{ s.current_role }}</p>{% endif %}</li>{% endfor %}</ul></details>{% endfor %}
</div>
{% else %}
<p class="muted-note">Belum ada alumni terdaftar.</p>
{% endif %}
