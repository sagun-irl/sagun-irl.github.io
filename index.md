# Home Page
Hi, this seems to be my home page for now 🙂

I'm a long-time player of [Guardian Tales](https://guardian-tales.fandom.com/wiki/) so most of my current works are based around it, but I intend to soon add stuff outside that topic too

Current github pages sitemap:

<ul class="gh-pages-list">
    <!-- script output -->
</ul>

siteurl: {{ site.github.url }}

{%
#liquid
#for repo in site.github.public_repositories
#	if repo.homepage contains site.github.url
#	and repo.homepage != site.github.url
#* [./{{ repo.name }}](./{{ repo.name }})
#	endif
#endfor
%}

<small>

[List generated via [github list repository API](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-the-authenticated-user)]

</small>

<div class="footer border-top border-gray-light mt-5 pt-3 text-right text-gray">

Site source: [{{ site.github.repository_name }}]({{ site.github.repository_url }})\
Last updated: {{ "now" | date: "%b %e, %Y" }}

</div>

## Github metadata

<!-- {{ site.github.public_repositories | where: "homepage", "" }} -->
