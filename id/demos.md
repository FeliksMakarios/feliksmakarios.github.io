---
layout: default
permalink: /id/demos/
lang: id
slug: demos
title: Demo
subtitle: "Prototipe interaktif dari riset, pengajaran, dan outreach"
---

<p class="lead">
Prototipe yang bisa dijalankan, dibagi tiga kategori: <strong>My Project</strong>
untuk demo yang saya bangun dari riset saya sendiri dan side project,
<strong>Student Project</strong> dari skripsi atau capstone matkul yang saya bimbing, dan
<strong>Outreach</strong> dari kegiatan open house untuk siswa SMA.
</p>

<div class="demo-tabs" role="group" aria-label="Kategori demo">
  <button data-tab="my-project" class="active" type="button">My Project</button>
  <button data-tab="student-project" type="button">Student Project</button>
  <button data-tab="outreach" type="button">Outreach</button>
</div>

{% assign demos = site.data.demos %}
{% assign categories = "my-project,student-project,outreach" | split: "," %}
{% for cat in categories %}
<section id="{{ cat }}" class="demo-section"{% unless cat == "my-project" %} hidden{% endunless %}>
{% for demo in demos %}{% if demo.category == cat %}
<div class="card-demo">
  <div class="thumb" aria-hidden="true">{{ demo.icon }}</div>
  <div>
    <h3>{{ demo.title }}</h3>
    <p class="meta">{{ demo.meta.id }}</p>
    <p>{{ demo.description.id }}</p>
    <p><a href="{{ demo.url }}"{% unless demo.url_is_internal %} target="_blank" rel="noopener external"{% endunless %}>Jalankan demo →</a></p>
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
        buttons.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        sections.forEach(function(s) {
          s.hidden = (s.id !== tab);
        });
      });
    });
  })();
</script>
