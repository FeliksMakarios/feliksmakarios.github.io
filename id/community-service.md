---
layout: default
permalink: /id/community-service/
lang: id
slug: community-service
title: Pengabdian Masyarakat
subtitle: "Pengabdian kepada Masyarakat (PkM)"
---

<p class="lead">
Kegiatan pengabdian dan outreach — pilar ketiga Tridharma Perguruan Tinggi (bersama
pengajaran dan riset). Ini proyek kolaboratif dengan sekolah dan organisasi komunitas,
berfokus pada literasi digital dasar dan teknologi pendidikan.
</p>

{% assign items = site.data.community_service | sort: "year" | reverse %}

<div class="pub-timeline">
  {% assign last_year = 0 %}
  {% for item in items %}
    {% if item.year != last_year %}
      {% unless forloop.first %}</ul>{% endunless %}
      <h3 class="pub-year-header">{{ item.year }}</h3>
      <ul class="pub-list">
      {% assign last_year = item.year %}
    {% endif %}

    <li class="pub-item">
      <div class="pub-title">{{ item.title }}</div>
      <div class="pub-authors">{{ item.authors | join: ", " }}</div>
      <div class="pub-meta">
        <span class="venue-badge venue-{{ item.venue_type }}">{{ item.venue_type | capitalize }}</span>
        <span class="pub-venue">{{ item.venue }}</span>
      </div>
      {% if item.description_id %}<p class="pub-description">{{ item.description_id }}</p>{% endif %}
      {% if item.target_id %}<p class="pub-target"><em>Target audience:</em> {{ item.target_id }}</p>{% endif %}
    </li>

    {% if forloop.last %}</ul>{% endif %}
  {% endfor %}
</div>
