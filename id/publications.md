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
  <button data-filter="low-resource-nlp" type="button">NLP Low-Resource</button>
  <button data-filter="sentiment-mining" type="button">Sentimen & Opini</button>
  <button data-filter="semantic-retrieval" type="button">Pencarian Semantik</button>
  <button data-filter="applied-ml" type="button">Applied ML</button>
</div>

{% assign pubs = site.data.publications | sort: "year" | reverse %}
{% assign last_year = 0 %}

<div class="pub-timeline">
  {% for pub in pubs %}
    {% if pub.year != last_year %}
      {% unless forloop.first %}</ul>{% endunless %}
      <h3 class="pub-year-header">{{ pub.year }}</h3>
      <ul class="pub-list">
      {% assign last_year = pub.year %}
    {% endif %}

    <li class="pub-item" data-area="{{ pub.area }}">
      <div class="pub-title">
        {% if pub.url and pub.url != "" %}<a href="{{ pub.url }}" target="_blank" rel="noopener external">{{ pub.title }}</a>{% else %}{{ pub.title }}{% endif %}
      </div>
      <div class="pub-authors">{{ pub.authors | join: ", " }}</div>
      <div class="pub-meta">
        <span class="venue-badge venue-{{ pub.venue_type }}">{{ pub.venue_type | capitalize }}</span><span class="pub-venue">{{ pub.venue }}</span>
      </div>
    </li>

    {% if forloop.last %}</ul>{% endif %}
  {% endfor %}
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
        document.querySelectorAll('.pub-year-header').forEach(function(h) {
          var ul = h.nextElementSibling;
          var hasVisible = ul && Array.from(ul.children).some(function(li) {
            return li.style.display !== 'none';
          });
          h.style.display = hasVisible ? '' : 'none';
        });
      });
    });
  })();
</script>
