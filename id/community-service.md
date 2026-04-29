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
{% assign years = items | map: "year" | uniq %}

<div class="pub-timeline">
{% for year in years %}{% assign year_items = items | where: "year", year %}<details class="year-group" open><summary class="year-summary"><span class="year-label">{{ year }}</span><span class="year-count">{{ year_items.size }} entri</span></summary><ul class="pub-list">{% for item in year_items %}<li class="pub-item"><div class="pub-title">{{ item.title }}</div><div class="pub-authors">{{ item.authors | join: ", " }}</div><div class="pub-meta"><span class="venue-badge venue-{{ item.venue_type }}">{{ item.venue_type | capitalize }}</span><span class="pub-venue">{{ item.venue }}</span></div>{% if item.description_id %}<p class="pub-description">{{ item.description_id }}</p>{% endif %}{% if item.target_id %}<p class="pub-target"><em>Target audience:</em> {{ item.target_id }}</p>{% endif %}</li>{% endfor %}</ul></details>{% endfor %}
</div>
