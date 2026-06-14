---
layout: default
permalink: /id/blog/
lang: id
slug: blog
title: Blog
subtitle: "Tulisan teknis dengan notasi matematis"
---

<p class="lead">
Tempat saya menampung tulisan teknis berat yang butuh notasi matematis dan diagram
yang tidak diakomodir dengan baik oleh Medium. Isinya dua jenis: <strong>tulisan
asli</strong> yang saya susun sendiri dengan kata-kata sendiri dari sumber-sumber yang
saya cantumkan, dan <strong>terjemahan</strong> Bahasa Indonesia dari artikel yang menurut
saya berharga, dengan atribusi penuh ke versi aslinya.
</p>

{% assign posts_translation = site.data.blog.posts | where: "type", "translation" | sort: "translated_date" | reverse %}
{% assign posts_original = site.data.blog.posts | where: "type", "original" | sort: "written_date" | reverse %}
{% assign all_posts = posts_original | concat: posts_translation %}

{% if all_posts and all_posts.size > 0 %}
<ul class="blog-list">
  {% for post in all_posts %}
    <li class="blog-item">
      <h3 class="blog-title">
        <a href="/blog/{{ post.slug }}/">{{ post.title }}</a>
        {% if post.type == 'translation' %}<span class="blog-type-badge blog-type-translation">Terjemahan</span>{% else %}<span class="blog-type-badge blog-type-original">Asli</span>{% endif %}
      </h3>
      {% if post.type == 'translation' %}
        <p class="blog-attribution">
          Terjemahan dari <a href="{{ post.original_url }}" target="_blank" rel="noopener external">"{{ post.original_title }}"</a> oleh {{ post.original_author }} ({{ post.original_date | slice: 0, 4 }}).
        </p>
      {% else %}
        {% if post.inspirations %}
          <p class="blog-attribution">
            Tulisan asli, terinspirasi dari:
            {% for src in post.inspirations %}<a href="{{ src.url }}" target="_blank" rel="noopener external">{{ src.author }} ({{ src.year }})</a>{% unless forloop.last %}, {% endunless %}{% endfor %}.
          </p>
        {% endif %}
      {% endif %}
      <p class="blog-summary">{{ post.summary_id }}</p>
      <div class="blog-meta">
        {% for tag in post.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
        {% if post.type == 'translation' %}<span class="blog-date">Diposting {{ post.translated_date }}</span>{% else %}<span class="blog-date">Ditulis {{ post.written_date }}</span>{% endif %}
      </div>
    </li>
  {% endfor %}
</ul>
{% else %}
<p class="muted-note">Belum ada tulisan.</p>
{% endif %}
