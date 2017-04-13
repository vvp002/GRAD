"use strict";
System.config({
    baseURL: '.',
    packages: {
        '.': { main: 'main.js', defaultExtension: 'js' },
        '@angular/common': {
            main: 'bundles/common.umd.min.js',
        },
        '@angular/compiler': {
            main: 'bundles/compiler.umd.min.js',
        },
        '@angular/core': {
            main: 'bundles/core.umd.min.js',
        },
        '@angular/platform-browser': {
            main: 'bundles/platform-browser.umd.min.js',
        },
        '@angular/platform-browser-dynamic': {
            main: 'bundles/platform-browser-dynamic.umd.min.js',
        },
        '@angular/http': {
            main: 'bundles/http.umd.min.js',
        },
        '@angular/material': {
            main: 'bundles/material.umd.js',
        },
        '@angular/forms': {
            main: 'bundles/forms.umd.min.js',
        },
        'core-js': { defaultExtension: 'js', format: 'cjs' },
        'underscore': {
            main: 'underscore-min.js'
        },
        "cytoscape": {
            main: "dist/cytoscape.min.js"
        },
        "materialize-css": {
            main: 'dist/js/materialize.js',
            format: 'cjs'
        },
        'jquery': {
            main: 'dist/jquery.min.js',
        },
        'hammerjs': {
            main: 'hammer.min.js'
        }
    }
});
System.defaultJSExtensions = true;
System.import('/');