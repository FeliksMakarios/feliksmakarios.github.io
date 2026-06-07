---
layout: default
permalink: /en/blog/
lang: en
slug: blog
title: Blog
subtitle: "Translated articles and notes"
---

<p class="lead">
A small collection of translations and notes. The translations are Indonesian versions
of articles I find valuable, posted here with attribution and a link back to the
original.
</p>

{% assign posts = site.data.blog.posts | sort: "translated_date" | reverse %}

{% if posts and posts.size > 0 %}
<ul class="blog-list">
  {% for post in posts %}
    <li class="blog-item">
      <h3 class="blog-title">
        <a href="/blog/{{ post.slug }}/">{{ post.title }}</a>
        {% if post.language %}<span class="blog-lang-badge">{{ post.language | upcase }}</span>{% endif %}
      </h3>
      <p class="blog-attribution">
        Translation of <a href="{{ post.original_url }}" target="_blank" rel="noopener external">"{{ post.original_title }}"</a> by {{ post.original_author }} ({{ post.original_date | slice: 0, 4 }}).
      </p>
      <p class="blog-summary">{{ post.summary_en }}</p>
      <div class="blog-meta">
        {% for tag in post.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
        <span class="blog-date">Posted {{ post.translated_date }}</span>
      </div>
    </li>
  {% endfor %}
</ul>
{% else %}
<p class="muted-note">No posts yet.</p>
{% endif %}
