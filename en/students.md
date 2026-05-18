---
layout: default
permalink: /en/students/
lang: en
slug: students
title: Students
subtitle: "Current mentees and alumni"
---

<p class="lead">
Undergraduate thesis students I have supervised or am currently supervising. Each
alumnus's thesis is available in the UPH repository; published versions, where they
exist, are linked separately. If you are a past student and want to be listed
(or corrected), please email me.
</p>

<h2>Current mentees</h2>

{% assign current = site.data.students.current | sort: "name" %}
{% if current and current.size > 0 %}
<ul class="student-list">
  {% for s in current %}
    <li class="student-item">
      <div class="student-header">
        <span class="student-name">{{ s.name }}</span>
        <span class="student-cohort">Cohort {{ s.cohort }}</span>
      </div>
      <p class="student-title">{{ s.title.en }}</p>
      <div class="student-meta">
        <span class="tag tag-area">{% case s.area %}{% when 'domain-specific-nlp' %}Domain-Specific NLP{% when 'low-resource-languages' %}Low-Resource Languages{% when 'bias-fairness' %}Bias &amp; Fairness{% when 'applied-ml' %}Applied ML{% else %}{{ s.area | replace: '-', ' ' | capitalize }}{% endcase %}</span>
        <span class="tag tag-{{ s.status }}">{{ s.status | capitalize }}</span>
      </div>
    </li>
  {% endfor %}
</ul>
{% else %}
<p class="muted-note">No current mentees listed.</p>
{% endif %}

<h2>Alumni</h2>

{% assign alumni = site.data.students.alumni | sort: "year_graduated" | reverse %}
{% if alumni and alumni.size > 0 %}
{% assign alumni_years = alumni | map: "year_graduated" | uniq %}
<div class="alumni-timeline">
{% for year in alumni_years %}{% assign year_alumni = alumni | where: "year_graduated", year | sort: "name" %}<details class="year-group"><summary class="year-summary"><span class="year-label">Class of {{ year }}</span><span class="year-count">{{ year_alumni.size }} {% if year_alumni.size == 1 %}graduate{% else %}graduates{% endif %}</span></summary><ul class="student-list">{% for s in year_alumni %}<li class="student-item"><div class="student-header"><span class="student-name">{{ s.name }}</span></div><p class="student-title">{{ s.title.en }}</p><div class="student-meta"><span class="tag tag-area">{% case s.area %}{% when 'domain-specific-nlp' %}Domain-Specific NLP{% when 'low-resource-languages' %}Low-Resource Languages{% when 'bias-fairness' %}Bias &amp; Fairness{% when 'applied-ml' %}Applied ML{% else %}{{ s.area | replace: '-', ' ' | capitalize }}{% endcase %}</span>{% if s.publication %}{% assign pub = site.data.publications | where: "id", s.publication | first %}{% if pub %}{% if pub.url and pub.url != "" %}<a href="{{ pub.url }}" target="_blank" rel="noopener external" class="tag tag-pub">Published · {{ pub.year }} ↗</a>{% else %}<span class="tag tag-pub">Published · {{ pub.year }}</span>{% endif %}{% endif %}{% endif %}{% if s.thesis_url and s.thesis_url != "" %}<a href="{{ s.thesis_url }}" target="_blank" rel="noopener external" class="tag tag-thesis">Thesis · {{ s.year_graduated }} ↗</a>{% endif %}</div>{% if s.current_role %}<p class="student-role"><em>Now:</em> {{ s.current_role }}</p>{% endif %}</li>{% endfor %}</ul></details>{% endfor %}
</div>
{% else %}
<p class="muted-note">No alumni listed yet.</p>
{% endif %}
