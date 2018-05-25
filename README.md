# SCROLLER-BAR-JS

It's a simple scroll bar that is displayed on the top or bottom of your document.

Options:
- Color: Color of scroller bar
- Height: Height of scroller bar
- Position: Position of scroller bar ('top' or 'bottom')
- Percentage: Show percentage with
- Percentage_color: Color of percentage number
- Radius: Border Radius of scroller bar
- Shadow: Box Shadow of scroller bar
- Start: Strart position ('left' or 'right')

## Installation

Include scroller.js before closing the body tag:

```html
<script src="js/scroller.js"></script>
```

## Usage

Init scroller bar with default options:

```javascript
$('body').scroller();
```

## Options

**Change Styles**
```javascript
$('body').scroller({
color : '#38d41b',//green
height : '40px',
radius : '10px',
shadow : true
});
```

**Change Position**
```javascript
$('body').scroller({
position : 'bottom'
});
```

**Show Percentage**
```javascript
$('body').scroller({
percentage : true,
percentage_color : 'white'
});
```

**Start Position**
```javascript
$('body').scroller({
start : 'right'
});
```

## History

Version 1.0 (2018-05-25)

## Credits
 
Lead Developer - Barnaproject http://barnaproject.com

## License
 
The MIT License (MIT)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
