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

{% assign posts = site.data.blog.posts | sort: "date" | reverse %}

{% if posts and posts.size > 0 %}
<ul class="blog-list">
  {% for post in posts %}
    <li class="blog-item">
      <h3 class="blog-title">
        <a href="/blog/{{ post.slug }}/">{{ post.title }}</a>
        {% if post.type == 'translation' %}<span class="blog-type-badge blog-type-translation">Translation</span>{% else %}<span class="blog-type-badge blog-type-original">Original</span>{% endif %}
      </h3>
      {% if post.type == 'translation' %}
        <p class="blog-attribution">
          Indonesian translation of <a href="{{ post.original_url }}" target="_blank" rel="noopener external">"{{ post.original_title }}"</a> by {{ post.original_author }} ({{ post.original_date | slice: 0, 4 }}).
        </p>
      {% else %}
        {% if post.inspirations %}
          <p class="blog-attribution">
            Original work, inspired by:
            {% for src in post.inspirations %}<a href="{{ src.url }}" target="_blank" rel="noopener external">{{ src.author }} ({{ src.year }})</a>{% unless forloop.last %}, {% endunless %}{% endfor %}.
          </p>
        {% endif %}
      {% endif %}
      <p class="blog-summary">{{ post.summary_id }}</p>
      <div class="blog-meta">
        {% for tag in post.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
        <span class="blog-date">{{ post.date | date: "%Y-%m-%d" }}</span>
      </div>
    </li>
  {% endfor %}
</ul>
{% else %}
<p class="muted-note">No articles yet.</p>
{% endif %}
