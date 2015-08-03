Package.describe({
    summary: 'jquery-dropdown for meteor',
    name: 'karfield:jquery-dropdown',
    version: '0.0.1'
});

Package.on_use(function(api) {
    api.add_files('jquery.dropdown.min.js', 'client');
    api.add_files('jquery.dropdown.min.css', 'client');
});
