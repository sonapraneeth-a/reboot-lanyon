---
layout: post
title: CSS Components in Reload Lanyon
categories: ['Website']
tags: ['HTML5', 'CSS3']
excerpt_separator: <!--more-->
published: 23 February, 2018 10:23 IST
assets: /assets/blog/2018-02-23-css-components
related: true
comments: true
sharing: true
publish: true
toc: true
toc_label: "On this page"
toc_icon: "table"  # corresponding Font Awesome icon name (without fa prefix)
---

## Utility Classes

Currently four utility classes are suported in theme: info, danger, success and warning.

### Styled blockquotes

> **Information block**  
> First line
{: .block .info}

> **Danger block**  
> First line
{: .block .danger}

> **Success block**  
> First line
{: .block .success}

> **Warning block**  
> First line
{: .block .warning}

### Styled text

- Information text
{: .info}
- Danger text
{: .danger}
- Success text
{: .success}
- Warning text
{: .warning}

### Panel

{::options parse_block_html="true" /}
<div class="panel">
Heading
{: .panel-header}
Content
{: .panel-content}
Footer
{: .panel-footer}
</div>
{::options parse_block_html="false" /}