---
layout: default
permalink: /en/teaching/
lang: en
slug: teaching
title: Teaching
subtitle: "Courses at UPH Informatics"
---

{{ site.data.teaching.intro.en }}

## Courses

{% for group in site.data.teaching.groups %}
### {{ group.label.en }}

{% for course in group.courses %}
- **{{ course.name }}** : {{ course.desc.en }}
{% endfor %}
{% endfor %}

## Supervision

{{ site.data.teaching.supervision.en }}
