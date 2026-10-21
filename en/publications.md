---
layout: default
permalink: /en/publications/
lang: en
slug: publications
title: Publications
subtitle: "Peer-reviewed research output"
---

<p class="lead">
Publications in journals and international conferences. For community-service
publications (pengabdian masyarakat), see <a href="/en/research/#community-engagement">Community Engagement</a>.
</p>

<div class="pub-filter" role="group" aria-label="Filter by area">
  <button data-filter="all" class="active" type="button">All ({{ site.publications.size }})</button>
  {% assign n = site.publications | where: "area", "domain-specific-nlp" %}{% if n.size > 0 %}<button data-filter="domain-specific-nlp" type="button">Domain-Specific NLP ({{ n.size }})</button>{% endif %}
  {% assign n = site.publications | where: "area", "low-resource-languages" %}{% if n.size > 0 %}<button data-filter="low-resource-languages" type="button">Low-Resource Languages ({{ n.size }})</button>{% endif %}
  {% assign n = site.publications | where: "area", "bias-fairness" %}{% if n.size > 0 %}<button data-filter="bias-fairness" type="button">Bias & Fairness ({{ n.size }})</button>{% endif %}
  {% assign n = site.publications | where: "area", "applied-ml" %}{% if n.size > 0 %}<button data-filter="applied-ml" type="button">Applied ML ({{ n.size }})</button>{% endif %}
</div>

{% assign pubs = site.publications | sort: "year" | reverse %}
{% assign years = pubs | map: "year" | uniq %}

<div class="pub-timeline">
{% for year in years %}{% assign year_pubs = pubs | where: "year", year %}<details class="year-group"{% if forloop.first %} open{% endif %}><summary class="year-summary"><span class="year-label">{{ year }}</span><span class="year-count" data-one="publication" data-many="publications">{{ year_pubs.size }} {% if year_pubs.size == 1 %}publication{% else %}publications{% endif %}</span></summary><ul class="pub-list">{% for pub in year_pubs %}<li class="pub-item" data-area="{{ pub.area }}"><div class="pub-title">{% if pub.link and pub.link != "" %}<a href="{{ pub.link }}" target="_blank" rel="noopener external">{{ pub.title }}</a>{% else %}{{ pub.title }}{% endif %}</div><div class="pub-authors">{{ pub.authors | join: ", " | replace: "F.V.P. Samosir", "<strong>F.V.P. Samosir</strong>" }}</div><div class="pub-meta"><span class="venue-badge venue-{{ pub.venue_type }}">{{ pub.venue_type | capitalize }}</span><span class="pub-venue">{{ pub.venue }}</span></div>{% include pub-extras.html pub=pub lang="en" %}</li>{% endfor %}</ul></details>{% endfor %}
</div>

{% include pubs-jsonld.html pubs=pubs %}

<script>
  (function() {
    document.querySelectorAll('.copy-bib').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var text = btn.parentNode.querySelector('code').textContent;
        var label = btn.textContent;
        function done() {
          btn.textContent = btn.getAttribute('data-done');
          setTimeout(function() { btn.textContent = label; }, 1500);
        }
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(done, function() {});
        }
      });
    });
  })();

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
          var count = g.querySelector('.year-count');
          if (count) count.textContent = visible + ' ' + count.getAttribute(visible === 1 ? 'data-one' : 'data-many');
        });
      });
    });
  })();
</script>
