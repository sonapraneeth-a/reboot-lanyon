# coding: utf-8

# gem environment
# https://www.chrisanthropic.com/blog/2016/creating-gem-based-themes-for-jekyll/
Gem::Specification.new do |spec|
    spec.name                    = "reboot-lanyon"
    spec.version                 = "v1.0.1-beta.1"
    spec.authors                 = ["Sona Praneeth Akula"]
  
    spec.summary                 = %q{Jekyll theme following the style of lanyon. Much lighter and loads fast}
    spec.homepage                = "https://github.com/sonapraneeth-a/reboot-lanyon/"
    spec.license                 = "MIT"
  
    spec.metadata["plugin_type"] = "theme"
  
    spec.files                   = `git ls-files -z`.split("\x0").select do |f|
      f.match(%r{^(assets|blog|projects|public|sources/_(data|includes|layouts|scss|posts|projects)/|(LICENSE|README|CHANGELOG)((\.(md|markdown|xml)|$)))}i)
    end
  
    spec.add_runtime_dependency "jekyll", "~> 3.7.3"
    spec.add_runtime_dependency "jekyll-paginate-v2", "~> 1.9,4"
    spec.add_runtime_dependency "jekyll-sitemap", "~> 0.11.0"
    spec.add_runtime_dependency "jekyll-feed", "~> 0.9.3"
    spec.add_runtime_dependency "jekyll-last-modified-at", "~> 1.0.1"
    spec.add_runtime_dependency "tzinfo", "~> 1.2.5"
    spec.add_runtime_dependency "tzinfo-data", "~> 1.2018.3"
    spec.add_runtime_dependency "wdm", "~> 0.1.1"
    spec.add_runtime_dependency "jemoji", "~> 0.9.0"
    spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.4.0"
    spec.add_runtime_dependency "jekyll-typogrify", "~> 0.3.3"
    spec.add_runtime_dependency "jekyll-figure", "~> 0.0.2"
    spec.add_runtime_dependency "jekyll-gist", "~> 1.5.0"
    spec.add_development_dependency "bundler", "~> 1.16.0"
  end