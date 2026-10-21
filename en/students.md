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

<div class="pub-filter student-filter" role="group" aria-label="Filter by research area">
  <button data-filter="all" class="active" type="button">All ({{ site.students.size }})</button>
  {% for a in site.data.research.areas %}{% assign n = site.students | where: "area", a.id %}{% if n.size > 0 %}<button data-filter="{{ a.id }}" type="button">{% include area-label.html area=a.id lang="en" %} ({{ n.size }})</button>{% endif %}{% endfor %}
</div>

<h2>Current mentees</h2>

{% assign current = site.students | where: "status", "current" | sort: "name" %}
{% if current and current.size > 0 %}
<ul class="student-list">
  {% for s in current %}
    <li class="student-item" data-area="{{ s.area }}">
      <div class="student-header">
        <span class="student-name">{{ s.name }}</span>
        {% if s.cohort and s.cohort != "" %}<span class="student-cohort">Cohort {{ s.cohort }}</span>{% endif %}
      </div>
      <p class="student-title">{{ s.title.en }}</p>
      <div class="student-meta">
        {% if s.area and s.area != "" %}<a href="/en/research/{{ s.area }}/" class="tag tag-area">{% include area-label.html area=s.area lang="en" %}</a>{% endif %}
        {% case s.mentee_status %}{% when "proposal" %}<span class="tag tag-proposal">Proposal</span>{% when "progress" %}<span class="tag tag-progress">In progress</span>{% when "defense" %}<span class="tag tag-progress">Defense</span>{% when "graduated" %}<span class="tag tag-open">Graduated</span>{% else %}<span class="tag tag-{{ s.status }}">Current</span>{% endcase %}
        {% for pub_slug in s.publications %}{% assign pub = site.publications | where: "slug", pub_slug | first %}{% if pub %}{% if pub.link and pub.link != "" %}<a href="{{ pub.link }}" target="_blank" rel="noopener external" class="tag tag-pub" title="{{ pub.title | escape }}">Published · {{ pub.year }} ↗</a>{% else %}<span class="tag tag-pub" title="{{ pub.title | escape }}">Published · {{ pub.year }}</span>{% endif %}{% endif %}{% endfor %}
      </div>
    </li>
  {% endfor %}
</ul>
<p class="muted-note current-empty" hidden>No current mentees in this area.</p>
{% else %}
<div class="callout">
  <p>No active mentees at the moment: the most recent cohort defended in 2026. I am taking on new
  thesis students. See the open topics on each <a href="/en/research/">research area</a> page and
  email me if one of them interests you.</p>
</div>
{% endif %}

<h2>Alumni</h2>

{% assign alumni = site.students | where: "status", "alumni" | sort: "year_graduated" | reverse %}
{% if alumni and alumni.size > 0 %}
{% assign alumni_years = alumni | map: "year_graduated" | uniq %}
<div class="alumni-timeline">
{% for year in alumni_years %}{% assign year_alumni = alumni | where: "year_graduated", year | sort: "name" %}<details class="year-group"><summary class="year-summary"><span class="year-label">Class of {{ year }}</span><span class="year-count" data-one="graduate" data-many="graduates">{{ year_alumni.size }} {% if year_alumni.size == 1 %}graduate{% else %}graduates{% endif %}</span></summary><ul class="student-list alumni-list">{% for s in year_alumni %}<li class="student-item" data-area="{{ s.area }}"><div class="student-header"><span class="student-name">{{ s.name }}</span>{% if s.cohort and s.cohort != "" %}<span class="student-cohort">Cohort {{ s.cohort }}</span>{% endif %}</div><p class="student-title">{{ s.title.en }}</p><div class="student-meta">{% if s.area and s.area != "" %}<a href="/en/research/{{ s.area }}/" class="tag tag-area">{% include area-label.html area=s.area lang="en" %}</a>{% endif %}{% for pub_slug in s.publications %}{% assign pub = site.publications | where: "slug", pub_slug | first %}{% if pub %}{% if pub.link and pub.link != "" %}<a href="{{ pub.link }}" target="_blank" rel="noopener external" class="tag tag-pub" title="{{ pub.title | escape }}">Published · {{ pub.year }} ↗</a>{% else %}<span class="tag tag-pub" title="{{ pub.title | escape }}">Published · {{ pub.year }}</span>{% endif %}{% endif %}{% endfor %}{% if s.thesis_url and s.thesis_url != "" %}<a href="{{ s.thesis_url }}" target="_blank" rel="noopener external" class="tag tag-thesis">Thesis · {{ s.year_graduated }} ↗</a>{% endif %}</div>{% if s.current_role %}<p class="student-role"><em>Now:</em> {{ s.current_role }}</p>{% endif %}</li>{% endfor %}</ul></details>{% endfor %}
</div>
{% else %}
<p class="muted-note">No alumni listed yet.</p>
{% endif %}

<script>
  (function() {
    var buttons = document.querySelectorAll('.student-filter button');
    var empty = document.querySelector('.current-empty');
    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        buttons.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        var match = function(item) { return filter === 'all' || item.getAttribute('data-area') === filter; };
        var current = document.querySelectorAll('.student-list:not(.alumni-list) > .student-item');
        var shownCurrent = 0;
        document.querySelectorAll('.student-item').forEach(function(item) {
          item.style.display = match(item) ? '' : 'none';
        });
        current.forEach(function(item) { if (match(item)) shownCurrent++; });
        if (empty) empty.hidden = shownCurrent > 0;
        document.querySelectorAll('.alumni-timeline .year-group').forEach(function(g) {
          var visible = Array.from(g.querySelectorAll('.student-item')).filter(match).length;
          g.style.display = visible > 0 ? '' : 'none';
          var count = g.querySelector('.year-count');
          if (count) count.textContent = visible + ' ' + count.getAttribute(visible === 1 ? 'data-one' : 'data-many');
        });
      });
    });
  })();
</script>
