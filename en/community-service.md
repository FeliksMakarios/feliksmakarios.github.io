---
layout: default
permalink: /en/community-service/
lang: en
slug: community-service
title: Community Service
subtitle: "Pengabdian kepada Masyarakat"
---

<p class="lead">
Community engagement and outreach work — the third pillar of Tridharma Perguruan Tinggi
(alongside teaching and research). These are collaborative projects with schools and
community organizations, focused on basic digital literacy and educational technology.
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
      {% if item.description_en %}<p class="pub-description">{{ item.description_en }}</p>{% endif %}
      {% if item.target_en %}<p class="pub-target"><em>Target audience:</em> {{ item.target_en }}</p>{% endif %}
    </li>

    {% if forloop.last %}</ul>{% endif %}
  {% endfor %}
</div>
