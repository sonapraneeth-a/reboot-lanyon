"use strict";
var argv       = require("yargs").argv;
var gulp       = require("gulp");
var htmlmin    = require("gulp-htmlmin");
var size       = require("gulp-size");
var when       = require("gulp-if");
var log        = require("fancy-log");
var uglify= require("gulp-uglifyes");
var strip = require("gulp-strip-comments");
var cleanCSS = require("gulp-clean-css");
var sourcemaps = require("gulp-sourcemaps");
var sass = require("gulp-ruby-sass");
var concatCss = require('gulp-concat-css');
var concatJs = require('gulp-concat');

// include paths file
var paths      = require("../../paths");
