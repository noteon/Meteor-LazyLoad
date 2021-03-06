Package.describe({
  summary: "\u001b[32mv0.0.1\n"+
  		   "\u001b[33m-----------------------------------------\n"+
  		   "\u001b[0m Adds support for lazyloading javascript \n"+
  		   "\u001b[0m files via the public folder             \n"+
  		   "\u001b[33m-------------------------------------RaiX\n"
});

Package.on_use(function (api) {
    api.add_files('LazyLoad.client.js', 'client');
    api.add_files('LazyLoad.server.js', 'server');
    api.add_files('LazyLoad.common.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('tinytest');
  api.use('deps');
  api.add_files('rigtest.js', 'server');
  api.add_files('LazyLoad.client.js', 'server');
  api.add_files('LazyLoad.tests.js', 'server');
});