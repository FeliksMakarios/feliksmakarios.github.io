---
layout: default
permalink: /id/teaching/
lang: id
slug: teaching
title: Pengajaran
subtitle: "Mata kuliah di UPH Informatika"
---

{{ site.data.teaching.intro.id }}

## Mata kuliah

{% for group in site.data.teaching.groups %}
### {{ group.label.id }}

{% for course in group.courses %}
- **{{ course.name }}** : {{ course.desc.id }}
{% endfor %}
{% endfor %}

## Bimbingan

{{ site.data.teaching.supervision.id }}
