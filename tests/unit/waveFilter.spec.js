
describe('waveFilter', function() {

    let waveFilter;

    beforeEach(module('angularApp'))
    beforeEach(function() {

        inject(function(_$filter_) {
            waveFilter = _$filter_('waveFilter');
        })
    })

    it('Should reformat the string correctly', function() {

        let myString = 'hola',
            expectedString = 'hOlA'

            expect(waveFilter(myString)).toBe(expectedString);

    })

})