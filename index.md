---
title: abc
---
site title: {{ site.title }}

page title: {{ page.title }}

seo tag title: {{ seo_tag.title }}

# Home Page
Hi, this seems to be my home page for now 🙂

I'm a long-time player of [Guardian Tales](https://guardian-tales.fandom.com/wiki/), so most of my current works are based on it, but I intend to soon add stuff outside that topic too

Current github pages sitemap:

<ul class="gh-pages-list">
    <!-- script output -->
</ul>

{% for repository in site.github.public_repositories %}
  * [./{{ repository.name }}](./{{ repository.name }})
{% endfor %}

<small>

[List generated via [github list repository API](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-the-authenticated-user)]

</small>

<div class="footer border-top border-gray-light mt-5 pt-3 text-right text-gray">

Site source: [{{ site.github.repository_name }}]({{ site.github.repository_url }})\
Last updated: {{ "now" }}
<!-- Last updated: {{  | date_to_string }} -->

</div>

## Github metadata

<!-- {{ site.github.public_repositories | where: "homepage", "" }} -->
