<script>
{% include_relative script.js %}
</script>

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

<small markdown="1">
[List generated via [github list repository API](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-the-authenticated-user)]
</small>

<div markdown="1" style="
	position: fixed;
	top: 0;
	right: 0;
	padding: 0.5em 1.5em 0 1.5em;
	border-bottom-left-radius: 5px;
	backdrop-filter: invert(0.25);">
Site source: [{{ site.github.repository_name }}]({{ site.github.repository_url }})  
<!-- Last updated: {{  | date_to_string }} -->
Last updated: {{ "now" }}
</div>

## Github metadata

<!-- {{ site.github.public_repositories | where: "homepage", "" }} -->
