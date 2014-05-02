Package.describe({
  summary: 'Wrapper for Morris.js'
});

Package.on_use(function(api) {
  api.use(['jquery', 'raphael']);
  api.add_files(['morris.js'], ['client']);
  api.export('Morris', 'client');
});