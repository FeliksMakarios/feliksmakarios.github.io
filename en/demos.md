---
layout: default
permalink: /en/demos/
lang: en
slug: demos
title: Demos
subtitle: "Interactive prototypes from research, teaching, and outreach"
---

<p class="lead">
Working prototypes split into three categories: <strong>My Project</strong> for demos
I built around my own research and side projects, <strong>Student Project</strong> for
demos from thesis or course capstones I supervised, and <strong>Outreach</strong> for
demos used at open-house events with high-school students.
</p>

<div class="demo-tabs" role="group" aria-label="Demo categories">
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
    <p class="meta">{{ demo.meta.en }}</p>
    <p>{{ demo.description.en }}</p>
    <p><a href="{{ demo.url }}"{% unless demo.url_is_internal %} target="_blank" rel="noopener external"{% endunless %}>Launch demo →</a></p>
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
