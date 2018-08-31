---
layout: post
title: CSS Components in Reboot Lanyon
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
toc_label: On this page
toc_icon: table  # corresponding Font Awesome icon name (without fa prefix)
---

In this blog, we present various css options available in this theme <!--more-->

## HTML Elements

### Tables

| Heading 1 | Heading 2 | Heading 3 |
| --------- |:---------:| ---------:|
| Text 1 | Text 2 | Text 3 |
| Text 1 | Text 2 | Text 3 |
| Text 1 | Text 2 | Text 3 |
| Text 1 | Text 2 | Text 3 |
{: .table}

### Buttons

[Click me](){: .button}

## Components

### Chip

<span class="chip">
    <span class="chip-content">
        <b>Date: </b> 25-01-2018
    </span>
</span>

### Card

<div class="card">
    <div class="card-content">
        <div class="card-title">Title</div>
        <div class="card-details">
        Content
        </div>
    </div>
</div>

## Utility Classes

Currently four utility classes are suported in theme: info, danger, success and warning.

### Styled blockquotes

> **Information block**  
> First line
{: .blockquote .info}

> **Danger block**  
> First line
{: .blockquote .danger}

> **Success block**  
> First line
{: .blockquote .success}

> **Warning block**  
> First line
{: .blockquote .warning}

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
