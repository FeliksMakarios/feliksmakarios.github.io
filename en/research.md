---
layout: default
permalink: /en/research/
lang: en
slug: research
title: Research
subtitle: "NLP and ML for underrepresented Indonesian contexts"
---

<p class="lead">
My research studies what breaks when mainstream NLP and machine learning systems meet underrepresented Indonesian contexts — linguistically, demographically, domain-specifically, and modally. The goal is twofold: to understand why mainstream systems fail in these settings, and to build approaches that are robust to them.
</p>

<h2>Research areas</h2>

<div class="area-grid">
  {% for area in site.data.research.areas %}
    {% assign sub_names = "" %}
    {% for sub in area.sub_areas %}
      {% if forloop.first %}
        {% assign sub_names = sub.name.en %}
      {% else %}
        {% assign sub_names = sub_names | append: ", " | append: sub.name.en %}
      {% endif %}
    {% endfor %}
    <article class="area-card">
      <h3>{{ area.name.en }}</h3>
      <p class="area-definition">{{ area.definition.en }}</p>
      <p class="area-subareas"><strong>Covers:</strong> {{ sub_names }}.</p>
      <a href="/en/research/{{ area.id }}/" class="btn-detail">Detail →</a>
    </article>
  {% endfor %}
</div>

<h2>Across all areas</h2>

<p>For the complete list of published work, see <a href="/en/publications/">Publications</a>. For students I've supervised and am currently supervising, see <a href="/en/students/">Students</a>.</p>

<div class="callout">
  <p><strong>Looking for a thesis supervisor?</strong> Each research area's detail page lists open topics. Send me an email with your CV, transcript, and a short paragraph on why a particular topic appeals to you.</p>
</div>
