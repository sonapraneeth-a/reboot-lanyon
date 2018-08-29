# coding: utf-8

# gem environment
# https://www.chrisanthropic.com/blog/2016/creating-gem-based-themes-for-jekyll/
Gem::Specification.new do |spec|
    spec.name                    = "reboot-lanyon"
    spec.version                 = "1.0.6-beta"
    spec.authors                 = ["sonapraneeth-a"]
    spec.email                   = ["sonapraneeth.akula@gmail.com"]
  
    spec.summary       = %q{Jekyll theme following the style of lanyon. Much lighter and loads fast}
    spec.description   = %q{This theme has been hugely inspired from lanyon and codinfox-lanyon. It has been built from scratch to reduce the snapshot and increase the loading speed}
    spec.homepage      = "https://github.com/sonapraneeth-a/reboot-lanyon/"
    spec.license       = "MIT"
  
    spec.metadata["plugin_type"] = "theme"
  
    spec.files                   = `git ls-tree --name-only -r -z jekyll-gem`.split("\x0").select do |f|
      f.match(%r{_includes|_layouts|_sass}i)
    end
  
    spec.add_runtime_dependency "jekyll", "~> 3.8", ">= 3.8.3"
    spec.add_runtime_dependency "jekyll-paginate-v2", "~> 1.9", ">= 1.9.4"
    spec.add_runtime_dependency "jekyll-sitemap", "~> 0.11", ">= 0.11.0"
    spec.add_runtime_dependency "jekyll-feed", "~> 0.9", ">= 0.9.3"
    spec.add_runtime_dependency "jekyll-last-modified-at", "~> 1.0", ">= 1.0.1"
    #spec.add_runtime_dependency "tzinfo", "~> 1.2", ">= 1.2.5"
    #spec.add_runtime_dependency "tzinfo-data", "~> 1.2018", ">= 1.2018.3"
    spec.add_runtime_dependency "wdm", "~> 0.1", ">= 0.1.1"
    spec.add_runtime_dependency "jemoji", "~> 0.9", ">= 0.9.0"
    spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.4", ">= 2.4.0"
    spec.add_runtime_dependency "jekyll-typogrify", "~> 0.3", ">= 0.3.3"
    spec.add_runtime_dependency "jekyll-figure", "~> 0.0.2", ">= 0.0.2"
    spec.add_runtime_dependency "jekyll-gist", "~> 1.5", ">= 1.5.0"
    spec.add_development_dependency "bundler", "~> 1.16", ">= 1.16.0"
    spec.add_development_dependency "html-proofer", "~> 3.9", ">= 3.9.1"
    spec.add_development_dependency "rake", "~> 10.0"
  end