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

<div class="pub-filter student-filter" role="group" aria-label="Saring menurut bidang riset">
  <button data-filter="all" class="active" type="button">Semua ({{ site.students.size }})</button>
  {% for a in site.data.research.areas %}{% assign n = site.students | where: "area", a.id %}{% if n.size > 0 %}<button data-filter="{{ a.id }}" type="button">{% include area-label.html area=a.id lang="id" %} ({{ n.size }})</button>{% endif %}{% endfor %}
</div>

<h2>Bimbingan saat ini</h2>

{% assign current = site.students | where: "status", "current" | sort: "name" %}
{% if current and current.size > 0 %}
<ul class="student-list">
  {% for s in current %}
    <li class="student-item" data-area="{{ s.area }}">
      <div class="student-header">
        <span class="student-name">{{ s.name }}</span>
        {% if s.cohort and s.cohort != "" %}<span class="student-cohort">Angkatan {{ s.cohort }}</span>{% endif %}
      </div>
      <p class="student-title">{{ s.title.id }}</p>
      <div class="student-meta">
        {% if s.area and s.area != "" %}<a href="/id/research/{{ s.area }}/" class="tag tag-area">{% include area-label.html area=s.area lang="id" %}</a>{% endif %}
        {% case s.mentee_status %}{% when "proposal" %}<span class="tag tag-proposal">Proposal</span>{% when "progress" %}<span class="tag tag-progress">Sedang dikerjakan</span>{% when "defense" %}<span class="tag tag-progress">Sidang</span>{% when "graduated" %}<span class="tag tag-open">Lulus</span>{% else %}<span class="tag tag-{{ s.status }}">Aktif</span>{% endcase %}
        {% for pub_slug in s.publications %}{% assign pub = site.publications | where: "slug", pub_slug | first %}{% if pub %}{% if pub.link and pub.link != "" %}<a href="{{ pub.link }}" target="_blank" rel="noopener external" class="tag tag-pub" title="{{ pub.title | escape }}">Terpublikasi · {{ pub.year }} ↗</a>{% else %}<span class="tag tag-pub" title="{{ pub.title | escape }}">Terpublikasi · {{ pub.year }}</span>{% endif %}{% endif %}{% endfor %}
      </div>
    </li>
  {% endfor %}
</ul>
<p class="muted-note current-empty" hidden>Belum ada mahasiswa bimbingan aktif di bidang ini.</p>
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
{% for year in alumni_years %}{% assign year_alumni = alumni | where: "year_graduated", year | sort: "name" %}<details class="year-group"><summary class="year-summary"><span class="year-label">Lulus {{ year }}</span><span class="year-count" data-one="alumni" data-many="alumni">{{ year_alumni.size }} alumni</span></summary><ul class="student-list alumni-list">{% for s in year_alumni %}<li class="student-item" data-area="{{ s.area }}"><div class="student-header"><span class="student-name">{{ s.name }}</span>{% if s.cohort and s.cohort != "" %}<span class="student-cohort">Angkatan {{ s.cohort }}</span>{% endif %}</div><p class="student-title">{{ s.title.id }}</p><div class="student-meta">{% if s.area and s.area != "" %}<a href="/id/research/{{ s.area }}/" class="tag tag-area">{% include area-label.html area=s.area lang="id" %}</a>{% endif %}{% for pub_slug in s.publications %}{% assign pub = site.publications | where: "slug", pub_slug | first %}{% if pub %}{% if pub.link and pub.link != "" %}<a href="{{ pub.link }}" target="_blank" rel="noopener external" class="tag tag-pub" title="{{ pub.title | escape }}">Terpublikasi · {{ pub.year }} ↗</a>{% else %}<span class="tag tag-pub" title="{{ pub.title | escape }}">Terpublikasi · {{ pub.year }}</span>{% endif %}{% endif %}{% endfor %}{% if s.thesis_url and s.thesis_url != "" %}<a href="{{ s.thesis_url }}" target="_blank" rel="noopener external" class="tag tag-thesis">Skripsi · {{ s.year_graduated }} ↗</a>{% endif %}</div>{% if s.current_role %}<p class="student-role"><em>Saat ini:</em> {{ s.current_role }}</p>{% endif %}</li>{% endfor %}</ul></details>{% endfor %}
</div>
{% else %}
<p class="muted-note">Belum ada alumni terdaftar.</p>
{% endif %}

<script>
  (function() {
    var buttons = document.querySelectorAll('.student-filter button');
    var empty = document.querySelector('.current-empty');
    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        buttons.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        var match = function(item) { return filter === 'all' || item.getAttribute('data-area') === filter; };
        var current = document.querySelectorAll('.student-list:not(.alumni-list) > .student-item');
        var shownCurrent = 0;
        document.querySelectorAll('.student-item').forEach(function(item) {
          item.style.display = match(item) ? '' : 'none';
        });
        current.forEach(function(item) { if (match(item)) shownCurrent++; });
        if (empty) empty.hidden = shownCurrent > 0;
        document.querySelectorAll('.alumni-timeline .year-group').forEach(function(g) {
          var visible = Array.from(g.querySelectorAll('.student-item')).filter(match).length;
          g.style.display = visible > 0 ? '' : 'none';
          var count = g.querySelector('.year-count');
          if (count) count.textContent = visible + ' ' + count.getAttribute(visible === 1 ? 'data-one' : 'data-many');
        });
      });
    });
  })();
</script>
