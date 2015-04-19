Package.describe({
  name: 'johnantoni:meteor-appear',
  summary: 'jQuery plugin for tracking elements appearance in browser viewport',
  version: '0.0.1',
  git: 'https://github.com/johnantoni/meteor-appear',
  documentation: 'README.md'
});

Package.on_use(function(api) {
  api.add_files([
    'jquery.appear/jquery.appear.js'
  ], ['client']);
});
