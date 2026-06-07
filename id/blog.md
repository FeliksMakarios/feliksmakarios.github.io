---
layout: default
permalink: /id/blog/
lang: id
slug: blog
title: Blog
subtitle: "Artikel terjemahan dan catatan"
---

<p class="lead">
Koleksi kecil terjemahan dan catatan. Terjemahannya adalah versi Bahasa Indonesia
dari artikel yang menurut saya berharga, diposting di sini dengan atribusi dan tautan
balik ke versi aslinya.
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
        Terjemahan dari <a href="{{ post.original_url }}" target="_blank" rel="noopener external">"{{ post.original_title }}"</a> oleh {{ post.original_author }} ({{ post.original_date | slice: 0, 4 }}).
      </p>
      <p class="blog-summary">{{ post.summary_id }}</p>
      <div class="blog-meta">
        {% for tag in post.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
        <span class="blog-date">Diposting {{ post.translated_date }}</span>
      </div>
    </li>
  {% endfor %}
</ul>
{% else %}
<p class="muted-note">Belum ada tulisan.</p>
{% endif %}
