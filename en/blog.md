---
layout: default
permalink: /en/blog/
lang: en
slug: blog
title: Blog
subtitle: "Technical writing with mathematical notation"
---

<div class="callout">
  <p><strong>Note:</strong> Articles in this blog are written in Bahasa Indonesia.
  The primary audience is Indonesian-speaking students and researchers.
  Your browser's built-in translation feature works well if you need English.</p>
</div>

<p class="lead">
Technical writing that needs mathematical notation, diagrams, and interactive
content not well suited to Medium. Two types: <strong>original articles</strong>
I wrote myself, and <strong>Indonesian translations</strong> of articles I find
valuable, with full attribution to the originals.
</p>

{% if site.posts.size > 0 %}
<div class="pub-filter blog-filter" role="group" aria-label="Filter by type">
  <button data-filter="all" class="active" type="button">All</button>
  <button data-filter="original" type="button">Original</button>
  <button data-filter="translation" type="button">Translation</button>
</div>

<ul class="blog-list">
  {% for post in site.posts %}
    <li class="blog-item" data-type="{% if post.type == 'translation' %}translation{% else %}original{% endif %}">
      <h3 class="blog-title">
        <a href="{{ post.url }}">{{ post.title }}</a>
        {% if post.type == 'translation' %}<span class="blog-type-badge blog-type-translation">Translation</span>{% else %}<span class="blog-type-badge blog-type-original">Original</span>{% endif %}
      </h3>
      {% if post.type == 'translation' %}
        <p class="blog-attribution">
          Indonesian translation of <a href="{{ post.original_url }}" target="_blank" rel="noopener external">"{{ post.original_title }}"</a> by {{ post.original_author }} ({{ post.original_date | slice: 0, 4 }}).
        </p>
      {% elsif post.inspirations %}
        <p class="blog-attribution">
          Original work, inspired by:
          {% for src in post.inspirations %}<a href="{{ src.url }}" target="_blank" rel="noopener external">{{ src.author }} ({{ src.year }})</a>{% unless forloop.last %}, {% endunless %}{% endfor %}.
        </p>
      {% endif %}
      {% if post.summary_id %}<p class="blog-summary">{{ post.summary_id }}</p>{% endif %}
      <div class="blog-meta">
        {% for tag in post.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
        <span class="blog-date">{{ post.date | date: "%Y-%m-%d" }}</span>
      </div>
    </li>
  {% endfor %}
</ul>
<p class="muted-note blog-filter-empty" hidden>No articles of this type yet.</p>

<script>
  (function() {
    var buttons = document.querySelectorAll('.blog-filter button');
    var items = document.querySelectorAll('.blog-item');
    var empty = document.querySelector('.blog-filter-empty');
    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        buttons.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        var shown = 0;
        items.forEach(function(item) {
          var match = filter === 'all' || item.getAttribute('data-type') === filter;
          item.style.display = match ? '' : 'none';
          if (match) shown++;
        });
        if (empty) empty.hidden = shown > 0;
      });
    });
  })();
</script>
{% else %}
<p class="muted-note">No articles yet.</p>
{% endif %}
