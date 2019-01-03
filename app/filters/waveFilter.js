

angularApp.filter('waveFilter', function() {
    return function(string) {
        return string
                .split('')
                .map(function(char, index) {
                    if (index % 2) return char.toUpperCase();
                    return char;
                })
                .join('');
    }
})