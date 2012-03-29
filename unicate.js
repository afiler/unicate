monospace = [
  //[' ', chr(0x3000)],
  [/[^ ]/g, 0xff00-0x20]
]

italicize = [
  [/[A-Z]/g, 0x1d434-0x41],
  [/[a-z]/g, 0x1d44e-0x61]
]

circle = [
  [/[A-Z]/g, 0x24b6-0x41],
  [/[a-z]/g, 0x24d0-0x61],
  [/[1-9]/g, 0x2460-0x31],
  [/0/g, 0x24ea-0x30]
]

freeze_spaces = [
  [/\t/g, "    "],
  [/ /g, chr(0x3000)]
]

function $(v) {
  return document.getElementById(v)
}

function go(fn) {
  text = $('in-text').value
  if (typeof(fn) == 'function') {
    text = fn(text)
  } else {
    text = format(fn, text)
  }
  $('out-text').value = text
}

function format(rules, text) {
  rules.forEach(function(x) {
    if (typeof(x[1]) == 'number')
      text = text.replace(x[0], function(c) { return shiftchar(c, x[1]) })
    else
      text = text.replace(x[0], x[1])
  })

  return text
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


//}