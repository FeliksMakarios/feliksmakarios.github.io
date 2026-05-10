---
layout: default
permalink: /id/publications/
lang: id
slug: publications
title: Publikasi
subtitle: "Karya riset peer-reviewed"
---

<p class="lead">
Publikasi di jurnal dan konferensi internasional. Untuk publikasi pengabdian kepada
masyarakat, lihat <a href="/id/community-service/">Pengabdian</a>.
</p>

<div class="pub-filter" role="group" aria-label="Filter by area">
  <button data-filter="all" class="active" type="button">Semua</button>
  <button data-filter="domain-specific-nlp" type="button">NLP Spesifik Domain</button>
  <button data-filter="low-resource-languages" type="button">Bahasa Low-Resource</button>
  <button data-filter="bias-fairness" type="button">Bias & Fairness</button>
  <button data-filter="applied-ml" type="button">Applied ML</button>
</div>

{% assign pubs = site.data.publications | sort: "year" | reverse %}
{% assign years = pubs | map: "year" | uniq %}

<div class="pub-timeline">
{% for year in years %}{% assign year_pubs = pubs | where: "year", year %}<details class="year-group" open><summary class="year-summary"><span class="year-label">{{ year }}</span><span class="year-count">{{ year_pubs.size }} publikasi</span></summary><ul class="pub-list">{% for pub in year_pubs %}<li class="pub-item" data-area="{{ pub.area }}"><div class="pub-title">{% if pub.url and pub.url != "" %}<a href="{{ pub.url }}" target="_blank" rel="noopener external">{{ pub.title }}</a>{% else %}{{ pub.title }}{% endif %}</div><div class="pub-authors">{{ pub.authors | join: ", " }}</div><div class="pub-meta"><span class="venue-badge venue-{{ pub.venue_type }}">{{ pub.venue_type | capitalize }}</span><span class="pub-venue">{{ pub.venue }}</span></div></li>{% endfor %}</ul></details>{% endfor %}
</div>

<script>
  (function() {
    var buttons = document.querySelectorAll('.pub-filter button');
    var items = document.querySelectorAll('.pub-item');
    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        buttons.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        items.forEach(function(item) {
          var area = item.getAttribute('data-area');
          item.style.display = (filter === 'all' || area === filter) ? '' : 'none';
        });
        document.querySelectorAll('.year-group').forEach(function(g) {
          var visible = g.querySelectorAll('.pub-item').length === 0 ? 0 :
            Array.from(g.querySelectorAll('.pub-item')).filter(function(i) { return i.style.display !== 'none'; }).length;
          g.style.display = visible > 0 ? '' : 'none';
        });
      });
    });
  })();
</script>
