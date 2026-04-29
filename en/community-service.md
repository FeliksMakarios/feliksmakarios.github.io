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
{% assign years = items | map: "year" | uniq %}

<div class="pub-timeline">
{% for year in years %}{% assign year_items = items | where: "year", year %}<details class="year-group" open><summary class="year-summary"><span class="year-label">{{ year }}</span><span class="year-count">{{ year_items.size }} {% if year_items.size == 1 %}entry{% else %}entries{% endif %}</span></summary><ul class="pub-list">{% for item in year_items %}<li class="pub-item"><div class="pub-title">{{ item.title }}</div><div class="pub-authors">{{ item.authors | join: ", " }}</div><div class="pub-meta"><span class="venue-badge venue-{{ item.venue_type }}">{{ item.venue_type | capitalize }}</span><span class="pub-venue">{{ item.venue }}</span></div>{% if item.description_en %}<p class="pub-description">{{ item.description_en }}</p>{% endif %}{% if item.target_en %}<p class="pub-target"><em>Target audience:</em> {{ item.target_en }}</p>{% endif %}</li>{% endfor %}</ul></details>{% endfor %}
</div>
