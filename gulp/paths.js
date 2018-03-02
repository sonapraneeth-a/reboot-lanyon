"use strict";
var paths = {};

// Folder naming conventions.
paths.site_folder     = "public_html";
paths.source_folder   = "source";
paths.assets_folder   = "assets";
paths.sass_cache_folder = ".sass-cache";
paths.current_folder = ".";
paths.temp_folder = ".tmp";
paths.sass_folder = "_scss";

// Directory locations.
paths.temp_dir            = paths.temp_folder + "/";
paths.source_dir          = paths.source_folder + "/";
paths.site_dir            = paths.site_folder + "/";
paths.temp_src_dir        = paths.temp_dir + paths.source_dir
paths.temp_site_dir       = paths.temp_dir + paths.site_dir
paths.current_dir         = paths.current_folder + "/";
paths.sass_cache_dir      = paths.sass_cache_folder + "/";
paths.sass_dir            = paths.source_dir + paths.sass_folder + "/";
paths.assets_dir          = paths.source_dir + paths.assets_folder + "/";

// Glob Patterns by file type.
paths.scss_pattern        = "/**/*.scss";
paths.css_pattern         = "/**/*.css";
paths.js_pattern          = "/**/*.js";
paths.image_pattern       = "/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)";
paths.font_pattern        = "/**/*.+(woff|ttf|eot|woff2)";
paths.markdown_pattern    = "/**/*.+(md|MD|markdown|MARKDOWN)";
paths.html_pattern        = "/**/*.html";
paths.txt_pattern         = "/**/*.txt";
paths.xml_pattern         = "/**/*.{xml,json}";
paths.yml_pattern         = "/**/*.yml";

// File globs
paths.css_files_glob       = paths.source_folder + paths.css_pattern
paths.scss_files_glob      = paths.source_folder + paths.scss_pattern
paths.html_files_glob      = paths.source_folder + paths.html_pattern
paths.md_files_glob        = paths.source_folder + paths.markdown_pattern
paths.txt_files_glob       = paths.source_folder + paths.txt_pattern
paths.xml_files_glob       = paths.source_folder + paths.xml_pattern
paths.yml_files_glob       = paths.source_folder + paths.yml_pattern
paths.image_files_glob     = paths.source_folder + paths.image_pattern
paths.js_files_glob        = paths.source_folder + paths.js_pattern

module.exports = paths;
