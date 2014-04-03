formats = {
  fullwidth: [
    //[' ', chr(0x3000)],
    [/[^ ]/g, 0xff00-0x20]
  ],

  italicize: [
    [/[A-Z]/g, 0x1d434-0x41],
    [/[a-z]/g, 0x1d44e-0x61]
  ],

  circled: [
    [/[A-Z]/g, 0x24b6-0x41],
    [/[a-z]/g, 0x24d0-0x61],
    [/[1-9]/g, 0x2460-0x31],
    [/0/g, 0x24ea-0x30]
  ],

  parenthesized: [
    [/[A-Z]/g, 0x249c-0x41],
    [/[a-z]/g, 0x249c-0x61],
    [/[1-9]/g, 0x2474-0x31],
  ],


  freeze_spaces: [
    [/\t/g, "    "],
    [/ /g, chr(0x3000)]
  ],

  //bold: [0x1d400, 0x1d7ce],
  bold: [
    [/[A-Z]/g, 0x1d400-0x41],
    [/[a-z]/g, 0x1d41a-0x61],
    [/[1-9]/g, 0x1d7ed-0x31],
    [/0/g, 0x1d7ed-0x31]
  ],

  //italic: 0x1d434,
  italic: [
    ['h', 0x210E],
    [/[A-Z]/g, 0x1d434-0x41],
    [/[a-z]/g, 0x1d434+26-0x61]
  ],
  
  //bold_italic: [0x1d468, 0x1d7ce],
  bold_italic: [
    [/[A-Z]/g, 0x1d468-0x41],
    [/[a-z]/g, 0x1d482-0x61],
    [/[1-9]/g, 0x1d7ed-0x31],
    [/0/g, 0x1d7ed-0x31]
  ],
  
  //sans_serif: [0x1d5a0, 0x1d7e2],
  sans_serif: [
    [/[A-Z]/g, 0x1d5a0-0x41],
    [/[a-z]/g, 0x1d5ba-0x61],
    [/[1-9]/g, 0x1d7e3-0x31],
    [/0/g, 0x1d7e3-0x31],
  ],
    
  //sans_serif_bold: [0x1d5d4, 0x1d7ec],
  sans_serif_bold: [
    [/[A-Z]/g, 0x1d5d4-0x41],
    [/[a-z]/g, 0x1d5ee-0x61],
    [/[1-9]/g, 0x1d7ed-0x31],
    [/0/g, 0x1d7ed-0x31],
  ],
  
  //sans_serif_italic: 0x1d608,
  sans_serif_italic: [
    [/[A-Z]/g, 0x1d608-0x41],
    [/[a-z]/g, 0x1d622-0x61],
    [/[1-9]/g, 0x1d7e3-0x31],
    [/0/g, 0x1d7e3-0x31],
  ],
  
  //sans_serif_bold_italic: [0x1d63c, 0x1d7ec],
  sans_serif_bold_italic: [
    [/[A-Z]/g, 0x1d63c-0x41],
    [/[a-z]/g, 0x1d656-0x61],
    [/[1-9]/g, 0x1d7ed-0x31],
    [/0/g, 0x1d7ed-0x31],
  ],
  
  monospace: [0x1d670, 0x1d7f6],
  
  //script: 0x1d49c,
  script: [
    ['B', 0x212c],
    ['E', 0x2130],
    ['F', 0x2131],
    ['H', 0x210b],
    ['I', 0x2110],
    ['L', 0x2112],
    ['M', 0x2133],
    ['R', 0x211b],
    ['e', 0x212f],
    ['g', 0x210a],
    ['o', 0x2134],
    [/[A-Z]/g, 0x1d49c-0x41],
    [/[a-z]/g, 0x1d49c+26-0x61]
  ],
  script_bold: 0x1d4d0,
  //fraktur: 0x1d504,
  fraktur: [
    ['C', 0x212d],
    ['H', 0x210c],
    ['I', 0x2111],
    ['R', 0x211c],
    ['Z', 0x2128],
    [/[A-Z]/g, 0x1d504-0x41],
    [/[a-z]/g, 0x1d504+26-0x61]
  ],
  fraktur_bold: 0x1d56c,
  //double_struck: 0x1d538,
  double_struck: [
    ['C', 0x2102],
    ['D', 0x2145],
    ['H', 0x210D],
    ['N', 0x2115],
    ['P', 0x2119],
    ['Q', 0x211A],
    ['R', 0x211D],
    ['Z', 0x2124],
    [/[A-Z]/g, 0x1d538-0x41],
    [/[a-z]/g, 0x1d538+26-0x61]
  ],
  
  ſubſtitute_ſes: function(text) {
    return text.replace(/s(?=[a-z])/g, 'ſ');
  },
  
  region_tiles: function(text) {
    var sub = [
      //symbols
      ['!!','\u203c'],  ['!?','\u2049'],  ['?','\u2753'],  ['!','\u2757'],
      //misc letter groups
      ['ab','\uD83C\uDD8E'],  ['wc','\uD83C\uDD8F'],  ['dj','\uD83C\uDD90'],  ['cl','\uD83C\uDD91'],
      ['cool','\uD83C\uDD92'],  ['free','\uD83C\uDD93'],  ['new','\uD83C\uDD95'],  ['ng','\uD83C\uDD96'],
      ['ok','\uD83C\uDD97'],  ['sos','\uD83C\uDD98'],  ['up','\uD83C\uDD99'],  ['vs','\uD83C\uDD9A'],
      ['wc','\uD83D\uDEBE'],  ['TM','\u2122'],
      ['back','\uD83D\uDD19'],  ['end','\uD83D\uDD1A'],  ['soon','\uD83D\uDD1C'],
      ['on','\uD83D\uDD1B'],  ['top','\uD83D\uDD1D'],
      //prevent flags, needs editing if they add more!
      ['CN','C\u00ADN'],  ['DE','D\u00ADE'],  ['ES','E\u00ADS'],  ['FR','F\u00ADR'],
      ['GB','G\u00ADB'],  ['IT','I\u00ADT'],  ['JP','J\u00ADP'],  ['KR','K\u00ADR'],
      ['RU','R\u00ADU'],  ['US','U\u00ADS'],
      //letters
      ['A','\uD83C\uDDE6'],  ['B','\uD83C\uDDE7'],  ['C','\uD83C\uDDE8'],  ['D','\uD83C\uDD94'],
      ['E','\uD83C\uDDEA'],  ['F','\uD83C\uDDEB'],  ['G','\uD83C\uDDEC'],  ['H','\uD83C\uDDED'],
      ['I','\uD83C\uDDEE'],  ['J','\uD83C\uDDEF'],  ['K','\uD83C\uDDF0'],  ['L','\uD83C\uDDF1'],
      ['M','\uD83C\uDDF2'],  ['N','\uD83C\uDDF3'],  ['O','\uD83C\uDDF4'],  ['P','\uD83C\uDDF5'],
      ['Q','\uD83C\uDDF6'],  ['R','\uD83C\uDDF7'],  ['S','\uD83C\uDDF8'],  ['T','\uD83C\uDDF9'],
      ['U','\uD83C\uDDFA'],  ['V','\uD83C\uDDFB'],  ['W','\uD83C\uDDFC'],  ['X','\uD83C\uDDFD'],
      ['Y','\uD83C\uDDFE'],  ['Z','\uD83C\uDDFF']
    ];

    for(var i=0;i<sub.length;i++) {
      var restr = sub[i][0].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      var re = new RegExp(restr, 'ig');
      text = text.replace(re, sub[i][1]);
    }
    return text;
  }
}

function pick() {
  button = $(this)
  console.log('pick', button,  button.data('ruleset-name'))
  window.ruleset_name = button.data('ruleset-name')
  $('div.box button').removeClass('selected')
  button.addClass('selected')
  update()
}

function update() {
  if (!window.ruleset_name) return
  $('#out-text').val(translate($('#in-text').val()))
}

function translate(text) {
  ruleset = formats[window.ruleset_name]
  if (typeof(ruleset) == 'function') {
    text = ruleset(text)
  } else if (typeof(ruleset) == 'number') {
    text = mathFormat(ruleset, 0x31, text) // 0x31 = '1'
  } else if (typeof(ruleset[0]) == 'number') {
    text = mathFormat(ruleset[0], ruleset[1], text)
  } else {
    text = format(ruleset, text)
  }
  return text
}

function format(rules, text) {
  rules.forEach(function(x) {
    if (typeof(x[0]) == 'string' && typeof(x[1]) == 'number')
      text = text.replace(x[0], chr(x[1]), 'g')
    if (typeof(x[1]) == 'number')
      text = text.replace(x[0], function(c) { return shiftchar(c, x[1]) }, 'g')
    else
      text = text.replace(x[0], x[1], 'g')
  })

  return text
}

function mathFormat(offset, digitOffset, text) {
  return format([
      [/[A-Z]/g, offset-0x41],
      [/[a-z]/g, offset+26-0x61],
      [/[1-9]/g, digitOffset-0x31]
    ], text)
}

function shiftchar(c, i) { return chr(asc(c) + i) }
function asc(str) { return fixedCharCodeAt(str, 0) }
function chr(x) { return fixedFromCharCode(x) }

function fixedCharCodeAt (str, idx) {
    // ex. fixedCharCodeAt ('\uD800\uDC00', 0); // 65536
    // ex. fixedCharCodeAt ('\uD800\uDC00', 1); // 65536
    idx = idx || 0;
    var code = str.charCodeAt(idx);
    var hi, low;
    if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
        hi = code;
        low = str.charCodeAt(idx+1);
        if (isNaN(low)) {
            throw 'High surrogate not followed by low surrogate in fixedCharCodeAt()';
        }
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
        // We return false to allow loops to skip this iteration since should have already handled high surrogate above in the previous iteration
        return false;
        /*hi = str.charCodeAt(idx-1);
        low = code;
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;*/
    }
    return code;
}

function fixedFromCharCode (codePt) {  
    if (codePt > 0xFFFF) {  
        codePt -= 0x10000;  
        return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 +  
(codePt & 0x3FF));  
    }  
    else {  
        return String.fromCharCode(codePt);  
    }  
}

$(document).ready(function() {
  $('div.box button').on('click', function() { console.log($(this).data('ruleset-name'))})
  $('div.box button').on('click', pick)
  if (!window.ruleset_name) $($('div.box button')[0]).trigger('click')
})


//}