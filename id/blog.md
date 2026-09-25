---
layout: default
permalink: /id/blog/
lang: id
slug: blog
title: Blog
subtitle: "Tulisan teknis dengan notasi matematis"
---

<div class="callout">
  <p><strong>Catatan:</strong> Blog ini berisi tulisan dalam Bahasa Indonesia.
  Audiens utama adalah mahasiswa dan peneliti di Indonesia. Pembaca yang membutuhkan
  terjemahan Bahasa Inggris dapat memakai fitur terjemahan bawaan peramban.</p>
</div>

<p class="lead">
Tempat saya menampung tulisan teknis berat yang butuh notasi matematis dan diagram
yang tidak diakomodir dengan baik oleh Medium. Isinya dua jenis: <strong>tulisan
asli</strong> yang saya susun sendiri dengan kata-kata sendiri dari sumber-sumber yang
saya cantumkan, dan <strong>terjemahan</strong> Bahasa Indonesia dari artikel yang menurut
saya berharga, dengan atribusi penuh ke versi aslinya.
</p>

{% comment %}
  All articles live in _posts/: Markdown posts written through the CMS and the
  hand-built HTML articles (layout: null) alike. site.posts is newest first.
{% endcomment %}

{% if site.posts.size > 0 %}
<ul class="blog-list">
{% for post in site.posts %}
  <li class="blog-item">
    <h3 class="blog-title">
      <a href="{{ post.url }}">{{ post.title }}</a>
      {% if post.type == 'translation' %}<span class="blog-type-badge blog-type-translation">Terjemahan</span>{% else %}<span class="blog-type-badge blog-type-original">Asli</span>{% endif %}
    </h3>
    {% if post.type == 'translation' %}
    <p class="blog-attribution">
      Terjemahan dari <a href="{{ post.original_url }}" target="_blank" rel="noopener external">"{{ post.original_title }}"</a> oleh {{ post.original_author }} ({{ post.original_date | slice: 0, 4 }}).
    </p>
    {% elsif post.inspirations %}
    <p class="blog-attribution">
      Tulisan asli, terinspirasi dari:
      {% for src in post.inspirations %}<a href="{{ src.url }}" target="_blank" rel="noopener external">{{ src.author }} ({{ src.year }})</a>{% unless forloop.last %}, {% endunless %}{% endfor %}.
    </p>
    {% endif %}
    {% if post.summary_id %}<p class="blog-summary">{{ post.summary_id }}</p>{% endif %}
    <div class="blog-meta">
      {% for tag in post.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
      <span class="blog-date">Ditulis {{ post.date | date: "%d-%m-%Y" }}</span>
    </div>
  </li>
{% endfor %}
</ul>
{% else %}
<p class="muted-note">Belum ada tulisan.</p>
{% endif %}
