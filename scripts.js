// JAVASCRIPT DOCUMENT

console.log('We here now!');


var countdown = function(end) {
    
    var _second = 1000,
        _minute = _second * 60,
        _hour = _minute * 60,
        _day = _hour = 24,
    
        end = new Date(end),
        timer,
        
        calculate = function() {
            
            var now = new Date(),
                remaining = end.getTime() - now.getTime(),
                data;
            
            
            if ( isNaN(end) ) {
                console.log('Invalid date/time');
                return;
            }
            
            
            if ( remaining <= 0 ) {
                // CLEAR OUR TIMER
                // CALLBACK
            } else {
                if ( !timer ) {
                    timer = setInterval( calculate, _second );
                }
            }
            
            
            data = {
                'days': Math.floor( remaining / _day ),
                'hours': Math.floor( ( remaining % _day ) / _hour ),
                'minutes': Math.floor( ( remaining % _hour ) / _minute ),
                'seconds': Math.floor( ( remaining % _minute ) / _second ),
            };
            
            console.log(data);
        };
    
    
    calculate();
    
    
    
    
};









