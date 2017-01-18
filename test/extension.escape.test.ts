import * as assert from 'assert'
import * as vscode from 'vscode'

import * as escape from '../src/escape'
import * as encja from 'encoding-japanese'

suite("Escape Tests", () => {

    test("toHtml", () => {
        assert.equal("", escape.toHtml(''))

        assert.equal("&quot;", escape.toHtml('"'))
        assert.equal("&#039;", escape.toHtml("'"))
        assert.equal("&lt;", escape.toHtml("<"))
        assert.equal("&gt;", escape.toHtml(">"))
        assert.equal("&iexcl;", escape.toHtml("¡"))
        assert.equal("&cent;", escape.toHtml("¢"))
        assert.equal("&pound;", escape.toHtml("£"))
        assert.equal("&curren;", escape.toHtml("¤"))
        assert.equal("&yen;", escape.toHtml("¥"))
        assert.equal("&brvbar;", escape.toHtml("¦"))
        assert.equal("&sect;", escape.toHtml("§"))
        assert.equal("&uml;", escape.toHtml("¨"))
        assert.equal("&copy;", escape.toHtml("©"))
        assert.equal("&ordf;", escape.toHtml("ª"))
        assert.equal("&laquo;", escape.toHtml("«"))
        assert.equal("&not;", escape.toHtml("¬"))
        assert.equal("&reg;", escape.toHtml("®"))
        assert.equal("&macr;", escape.toHtml("¯"))
        assert.equal("&deg;", escape.toHtml("°"))
        assert.equal("&plusmn;", escape.toHtml("±"))
        assert.equal("&sup2;", escape.toHtml("²"))
        assert.equal("&sup3;", escape.toHtml("³"))
        assert.equal("&acute;", escape.toHtml("´"))
        assert.equal("&micro;", escape.toHtml("µ"))
        assert.equal("&para;", escape.toHtml("¶"))
        assert.equal("&middot;", escape.toHtml("·"))
        assert.equal("&cedil;", escape.toHtml("¸"))
        assert.equal("&sup1;", escape.toHtml("¹"))
        assert.equal("&ordm;", escape.toHtml("º"))
        assert.equal("&raquo;", escape.toHtml("»"))
        assert.equal("&frac14;", escape.toHtml("¼"))
        assert.equal("&frac12;", escape.toHtml("½"))
        assert.equal("&frac34;", escape.toHtml("¾"))
        assert.equal("&iquest;", escape.toHtml("¿"))
        assert.equal("&Agrave;", escape.toHtml("À"))
        assert.equal("&Aacute;", escape.toHtml("Á"))
        assert.equal("&Acirc;", escape.toHtml("Â"))
        assert.equal("&Atilde;", escape.toHtml("Ã"))
        assert.equal("&Auml;", escape.toHtml("Ä"))
        assert.equal("&Aring;", escape.toHtml("Å"))
        assert.equal("&AElig;", escape.toHtml("Æ"))
        assert.equal("&Ccedil;", escape.toHtml("Ç"))
        assert.equal("&Egrave;", escape.toHtml("È"))
        assert.equal("&Eacute;", escape.toHtml("É"))
        assert.equal("&Ecirc;", escape.toHtml("Ê"))
        assert.equal("&Euml;", escape.toHtml("Ë"))
        assert.equal("&Igrave;", escape.toHtml("Ì"))
        assert.equal("&Iacute;", escape.toHtml("Í"))
        assert.equal("&Icirc;", escape.toHtml("Î"))
        assert.equal("&Iuml;", escape.toHtml("Ï"))
        assert.equal("&ETH;", escape.toHtml("Ð"))
        assert.equal("&Ntilde;", escape.toHtml("Ñ"))
        assert.equal("&Ograve;", escape.toHtml("Ò"))
        assert.equal("&Oacute;", escape.toHtml("Ó"))
        assert.equal("&Ocirc;", escape.toHtml("Ô"))
        assert.equal("&Otilde;", escape.toHtml("Õ"))
        assert.equal("&Ouml;", escape.toHtml("Ö"))
        assert.equal("&times;", escape.toHtml("×"))
        assert.equal("&Oslash;", escape.toHtml("Ø"))
        assert.equal("&Ugrave;", escape.toHtml("Ù"))
        assert.equal("&Uacute;", escape.toHtml("Ú"))
        assert.equal("&Ucirc;", escape.toHtml("Û"))
        assert.equal("&Uuml;", escape.toHtml("Ü"))
        assert.equal("&Yacute;", escape.toHtml("Ý"))
        assert.equal("&THORN;", escape.toHtml("Þ"))
        assert.equal("&szlig;", escape.toHtml("ß"))
        assert.equal("&agrave;", escape.toHtml("à"))
        assert.equal("&aacute;", escape.toHtml("á"))
        assert.equal("&acirc;", escape.toHtml("â"))
        assert.equal("&atilde;", escape.toHtml("ã"))
        assert.equal("&auml;", escape.toHtml("ä"))
        assert.equal("&aring;", escape.toHtml("å"))
        assert.equal("&aelig;", escape.toHtml("æ"))
        assert.equal("&ccedil;", escape.toHtml("ç"))
        assert.equal("&egrave;", escape.toHtml("è"))
        assert.equal("&eacute;", escape.toHtml("é"))
        assert.equal("&ecirc;", escape.toHtml("ê"))
        assert.equal("&euml;", escape.toHtml("ë"))
        assert.equal("&igrave;", escape.toHtml("ì"))
        assert.equal("&iacute;", escape.toHtml("í"))
        assert.equal("&icirc;", escape.toHtml("î"))
        assert.equal("&iuml;", escape.toHtml("ï"))
        assert.equal("&eth;", escape.toHtml("ð"))
        assert.equal("&ntilde;", escape.toHtml("ñ"))
        assert.equal("&ograve;", escape.toHtml("ò"))
        assert.equal("&oacute;", escape.toHtml("ó"))
        assert.equal("&ocirc;", escape.toHtml("ô"))
        assert.equal("&otilde;", escape.toHtml("õ"))
        assert.equal("&ouml;", escape.toHtml("ö"))
        assert.equal("&divide;", escape.toHtml("÷"))
        assert.equal("&oslash;", escape.toHtml("ø"))
        assert.equal("&ugrave;", escape.toHtml("ù"))
        assert.equal("&uacute;", escape.toHtml("ú"))
        assert.equal("&ucirc;", escape.toHtml("û"))
        assert.equal("&uuml;", escape.toHtml("ü"))
        assert.equal("&yacute;", escape.toHtml("ý"))
        assert.equal("&thorn;", escape.toHtml("þ"))
        assert.equal("&yuml;", escape.toHtml("ÿ"))
        assert.equal("&OElig;", escape.toHtml("Œ"))
        assert.equal("&oelig;", escape.toHtml("œ"))
        assert.equal("&Scaron;", escape.toHtml("Š"))
        assert.equal("&scaron;", escape.toHtml("š"))
        assert.equal("&Yuml;", escape.toHtml("Ÿ"))
        assert.equal("&fnof;", escape.toHtml("ƒ"))
        assert.equal("&circ;", escape.toHtml("ˆ"))
        assert.equal("&tilde;", escape.toHtml("˜"))
        assert.equal("&Alpha;", escape.toHtml("Α"))
        assert.equal("&Beta;", escape.toHtml("Β"))
        assert.equal("&Gamma;", escape.toHtml("Γ"))
        assert.equal("&Delta;", escape.toHtml("Δ"))
        assert.equal("&Epsilon;", escape.toHtml("Ε"))
        assert.equal("&Zeta;", escape.toHtml("Ζ"))
        assert.equal("&Eta;", escape.toHtml("Η"))
        assert.equal("&Theta;", escape.toHtml("Θ"))
        assert.equal("&Iota;", escape.toHtml("Ι"))
        assert.equal("&Kappa;", escape.toHtml("Κ"))
        assert.equal("&Lambda;", escape.toHtml("Λ"))
        assert.equal("&Mu;", escape.toHtml("Μ"))
        assert.equal("&Nu;", escape.toHtml("Ν"))
        assert.equal("&Xi;", escape.toHtml("Ξ"))
        assert.equal("&Omicron;", escape.toHtml("Ο"))
        assert.equal("&Pi;", escape.toHtml("Π"))
        assert.equal("&Rho;", escape.toHtml("Ρ"))
        assert.equal("&Sigma;", escape.toHtml("Σ"))
        assert.equal("&Tau;", escape.toHtml("Τ"))
        assert.equal("&Upsilon;", escape.toHtml("Υ"))
        assert.equal("&Phi;", escape.toHtml("Φ"))
        assert.equal("&Chi;", escape.toHtml("Χ"))
        assert.equal("&Psi;", escape.toHtml("Ψ"))
        assert.equal("&Omega;", escape.toHtml("Ω"))
        assert.equal("&alpha;", escape.toHtml("α"))
        assert.equal("&beta;", escape.toHtml("β"))
        assert.equal("&gamma;", escape.toHtml("γ"))
        assert.equal("&delta;", escape.toHtml("δ"))
        assert.equal("&epsilon;", escape.toHtml("ε"))
        assert.equal("&zeta;", escape.toHtml("ζ"))
        assert.equal("&eta;", escape.toHtml("η"))
        assert.equal("&theta;", escape.toHtml("θ"))
        assert.equal("&iota;", escape.toHtml("ι"))
        assert.equal("&kappa;", escape.toHtml("κ"))
        assert.equal("&lambda;", escape.toHtml("λ"))
        assert.equal("&mu;", escape.toHtml("μ"))
        assert.equal("&nu;", escape.toHtml("ν"))
        assert.equal("&xi;", escape.toHtml("ξ"))
        assert.equal("&omicron;", escape.toHtml("ο"))
        assert.equal("&pi;", escape.toHtml("π"))
        assert.equal("&rho;", escape.toHtml("ρ"))
        assert.equal("&sigmaf;", escape.toHtml("ς"))
        assert.equal("&sigma;", escape.toHtml("σ"))
        assert.equal("&tau;", escape.toHtml("τ"))
        assert.equal("&upsilon;", escape.toHtml("υ"))
        assert.equal("&phi;", escape.toHtml("φ"))
        assert.equal("&chi;", escape.toHtml("χ"))
        assert.equal("&psi;", escape.toHtml("ψ"))
        assert.equal("&omega;", escape.toHtml("ω"))
        assert.equal("&thetasym;", escape.toHtml("ϑ"))
        assert.equal("&upsih;", escape.toHtml("ϒ"))
        assert.equal("&piv;", escape.toHtml("ϖ"))
        assert.equal("&ndash;", escape.toHtml("–"))
        assert.equal("&mdash;", escape.toHtml("—"))
        assert.equal("&lsquo;", escape.toHtml("‘"))
        assert.equal("&rsquo;", escape.toHtml("’"))
        assert.equal("&sbquo;", escape.toHtml("‚"))
        assert.equal("&ldquo;", escape.toHtml("“"))
        assert.equal("&rdquo;", escape.toHtml("”"))
        assert.equal("&bdquo;", escape.toHtml("„"))
        assert.equal("&dagger;", escape.toHtml("†"))
        assert.equal("&Dagger;", escape.toHtml("‡"))
        assert.equal("&bull;", escape.toHtml("•"))
        assert.equal("&hellip;", escape.toHtml("…"))
        assert.equal("&permil;", escape.toHtml("‰"))
        assert.equal("&prime;", escape.toHtml("′"))
        assert.equal("&Prime;", escape.toHtml("″"))
        assert.equal("&lsaquo;", escape.toHtml("‹"))
        assert.equal("&rsaquo;", escape.toHtml("›"))
        assert.equal("&oline;", escape.toHtml("‾"))
        assert.equal("&frasl;", escape.toHtml("⁄"))
        assert.equal("&euro;", escape.toHtml("€"))
        assert.equal("&image;", escape.toHtml("ℑ"))
        assert.equal("&weierp;", escape.toHtml("℘"))
        assert.equal("&real;", escape.toHtml("ℜ"))
        assert.equal("&trade;", escape.toHtml("™"))
        assert.equal("&alefsym;", escape.toHtml("ℵ"))
        assert.equal("&larr;", escape.toHtml("←"))
        assert.equal("&uarr;", escape.toHtml("↑"))
        assert.equal("&rarr;", escape.toHtml("→"))
        assert.equal("&darr;", escape.toHtml("↓"))
        assert.equal("&harr;", escape.toHtml("↔"))
        assert.equal("&crarr;", escape.toHtml("↵"))
        assert.equal("&lArr;", escape.toHtml("⇐"))
        assert.equal("&uArr;", escape.toHtml("⇑"))
        assert.equal("&rArr;", escape.toHtml("⇒"))
        assert.equal("&dArr;", escape.toHtml("⇓"))
        assert.equal("&hArr;", escape.toHtml("⇔"))
        assert.equal("&forall;", escape.toHtml("∀"))
        assert.equal("&part;", escape.toHtml("∂"))
        assert.equal("&exist;", escape.toHtml("∃"))
        assert.equal("&empty;", escape.toHtml("∅"))
        assert.equal("&nabla;", escape.toHtml("∇"))
        assert.equal("&isin;", escape.toHtml("∈"))
        assert.equal("&notin;", escape.toHtml("∉"))
        assert.equal("&ni;", escape.toHtml("∋"))
        assert.equal("&prod;", escape.toHtml("∏"))
        assert.equal("&sum;", escape.toHtml("∑"))
        assert.equal("&minus;", escape.toHtml("−"))
        assert.equal("&lowast;", escape.toHtml("∗"))
        assert.equal("&radic;", escape.toHtml("√"))
        assert.equal("&prop;", escape.toHtml("∝"))
        assert.equal("&infin;", escape.toHtml("∞"))
        assert.equal("&ang;", escape.toHtml("∠"))
        assert.equal("&and;", escape.toHtml("∧"))
        assert.equal("&or;", escape.toHtml("∨"))
        assert.equal("&cap;", escape.toHtml("∩"))
        assert.equal("&cup;", escape.toHtml("∪"))
        assert.equal("&int;", escape.toHtml("∫"))
        assert.equal("&there4;", escape.toHtml("∴"))
        assert.equal("&sim;", escape.toHtml("∼"))
        assert.equal("&cong;", escape.toHtml("≅"))
        assert.equal("&asymp;", escape.toHtml("≈"))
        assert.equal("&ne;", escape.toHtml("≠"))
        assert.equal("&equiv;", escape.toHtml("≡"))
        assert.equal("&le;", escape.toHtml("≤"))
        assert.equal("&ge;", escape.toHtml("≥"))
        assert.equal("&sub;", escape.toHtml("⊂"))
        assert.equal("&sup;", escape.toHtml("⊃"))
        assert.equal("&nsub;", escape.toHtml("⊄"))
        assert.equal("&sube;", escape.toHtml("⊆"))
        assert.equal("&supe;", escape.toHtml("⊇"))
        assert.equal("&oplus;", escape.toHtml("⊕"))
        assert.equal("&otimes;", escape.toHtml("⊗"))
        assert.equal("&perp;", escape.toHtml("⊥"))
        assert.equal("&sdot;", escape.toHtml("⋅"))
        assert.equal("&lceil;", escape.toHtml("⌈"))
        assert.equal("&rceil;", escape.toHtml("⌉"))
        assert.equal("&lfloor;", escape.toHtml("⌊"))
        assert.equal("&rfloor;", escape.toHtml("⌋"))
        assert.equal("&lang;", escape.toHtml("〈"))
        assert.equal("&rang;", escape.toHtml("〉"))
        assert.equal("&loz;", escape.toHtml("◊"))
        assert.equal("&spades;", escape.toHtml("♠"))
        assert.equal("&clubs;", escape.toHtml("♣"))
        assert.equal("&hearts;", escape.toHtml("♥"))
        assert.equal("&diams;", escape.toHtml("♦"))
        assert.equal("&nbsp;", escape.toHtml(" "))
        assert.equal("&amp;", escape.toHtml("&"))
        assert.equal("&apos;", escape.toHtml("`"))
        assert.equal("&#x2f;", escape.toHtml("/"))

        assert.equal("abcdef", escape.toHtml("abcdef"))
        assert.equal("あいうえお", escape.toHtml("あいうえお"))
        assert.equal("叱", escape.toHtml("叱"))
    })

    test("toHtmlAll", () => {
        assert.equal("", escape.toHtmlAll(''))

        assert.equal("&quot;", escape.toHtmlAll('"'))
        assert.equal("&#039;", escape.toHtmlAll("'"))
        assert.equal("&lt;", escape.toHtmlAll("<"))
        assert.equal("&gt;", escape.toHtmlAll(">"))
        assert.equal("&iexcl;", escape.toHtmlAll("¡"))
        assert.equal("&cent;", escape.toHtmlAll("¢"))
        assert.equal("&pound;", escape.toHtmlAll("£"))
        assert.equal("&curren;", escape.toHtmlAll("¤"))
        assert.equal("&yen;", escape.toHtmlAll("¥"))
        assert.equal("&brvbar;", escape.toHtmlAll("¦"))
        assert.equal("&sect;", escape.toHtmlAll("§"))
        assert.equal("&uml;", escape.toHtmlAll("¨"))
        assert.equal("&copy;", escape.toHtmlAll("©"))
        assert.equal("&ordf;", escape.toHtmlAll("ª"))
        assert.equal("&laquo;", escape.toHtmlAll("«"))
        assert.equal("&not;", escape.toHtmlAll("¬"))
        assert.equal("&reg;", escape.toHtmlAll("®"))
        assert.equal("&macr;", escape.toHtmlAll("¯"))
        assert.equal("&deg;", escape.toHtmlAll("°"))
        assert.equal("&plusmn;", escape.toHtmlAll("±"))
        assert.equal("&sup2;", escape.toHtmlAll("²"))
        assert.equal("&sup3;", escape.toHtmlAll("³"))
        assert.equal("&acute;", escape.toHtmlAll("´"))
        assert.equal("&micro;", escape.toHtmlAll("µ"))
        assert.equal("&para;", escape.toHtmlAll("¶"))
        assert.equal("&middot;", escape.toHtmlAll("·"))
        assert.equal("&cedil;", escape.toHtmlAll("¸"))
        assert.equal("&sup1;", escape.toHtmlAll("¹"))
        assert.equal("&ordm;", escape.toHtmlAll("º"))
        assert.equal("&raquo;", escape.toHtmlAll("»"))
        assert.equal("&frac14;", escape.toHtmlAll("¼"))
        assert.equal("&frac12;", escape.toHtmlAll("½"))
        assert.equal("&frac34;", escape.toHtmlAll("¾"))
        assert.equal("&iquest;", escape.toHtmlAll("¿"))
        assert.equal("&Agrave;", escape.toHtmlAll("À"))
        assert.equal("&Aacute;", escape.toHtmlAll("Á"))
        assert.equal("&Acirc;", escape.toHtmlAll("Â"))
        assert.equal("&Atilde;", escape.toHtmlAll("Ã"))
        assert.equal("&Auml;", escape.toHtmlAll("Ä"))
        assert.equal("&Aring;", escape.toHtmlAll("Å"))
        assert.equal("&AElig;", escape.toHtmlAll("Æ"))
        assert.equal("&Ccedil;", escape.toHtmlAll("Ç"))
        assert.equal("&Egrave;", escape.toHtmlAll("È"))
        assert.equal("&Eacute;", escape.toHtmlAll("É"))
        assert.equal("&Ecirc;", escape.toHtmlAll("Ê"))
        assert.equal("&Euml;", escape.toHtmlAll("Ë"))
        assert.equal("&Igrave;", escape.toHtmlAll("Ì"))
        assert.equal("&Iacute;", escape.toHtmlAll("Í"))
        assert.equal("&Icirc;", escape.toHtmlAll("Î"))
        assert.equal("&Iuml;", escape.toHtmlAll("Ï"))
        assert.equal("&ETH;", escape.toHtmlAll("Ð"))
        assert.equal("&Ntilde;", escape.toHtmlAll("Ñ"))
        assert.equal("&Ograve;", escape.toHtmlAll("Ò"))
        assert.equal("&Oacute;", escape.toHtmlAll("Ó"))
        assert.equal("&Ocirc;", escape.toHtmlAll("Ô"))
        assert.equal("&Otilde;", escape.toHtmlAll("Õ"))
        assert.equal("&Ouml;", escape.toHtmlAll("Ö"))
        assert.equal("&times;", escape.toHtmlAll("×"))
        assert.equal("&Oslash;", escape.toHtmlAll("Ø"))
        assert.equal("&Ugrave;", escape.toHtmlAll("Ù"))
        assert.equal("&Uacute;", escape.toHtmlAll("Ú"))
        assert.equal("&Ucirc;", escape.toHtmlAll("Û"))
        assert.equal("&Uuml;", escape.toHtmlAll("Ü"))
        assert.equal("&Yacute;", escape.toHtmlAll("Ý"))
        assert.equal("&THORN;", escape.toHtmlAll("Þ"))
        assert.equal("&szlig;", escape.toHtmlAll("ß"))
        assert.equal("&agrave;", escape.toHtmlAll("à"))
        assert.equal("&aacute;", escape.toHtmlAll("á"))
        assert.equal("&acirc;", escape.toHtmlAll("â"))
        assert.equal("&atilde;", escape.toHtmlAll("ã"))
        assert.equal("&auml;", escape.toHtmlAll("ä"))
        assert.equal("&aring;", escape.toHtmlAll("å"))
        assert.equal("&aelig;", escape.toHtmlAll("æ"))
        assert.equal("&ccedil;", escape.toHtmlAll("ç"))
        assert.equal("&egrave;", escape.toHtmlAll("è"))
        assert.equal("&eacute;", escape.toHtmlAll("é"))
        assert.equal("&ecirc;", escape.toHtmlAll("ê"))
        assert.equal("&euml;", escape.toHtmlAll("ë"))
        assert.equal("&igrave;", escape.toHtmlAll("ì"))
        assert.equal("&iacute;", escape.toHtmlAll("í"))
        assert.equal("&icirc;", escape.toHtmlAll("î"))
        assert.equal("&iuml;", escape.toHtmlAll("ï"))
        assert.equal("&eth;", escape.toHtmlAll("ð"))
        assert.equal("&ntilde;", escape.toHtmlAll("ñ"))
        assert.equal("&ograve;", escape.toHtmlAll("ò"))
        assert.equal("&oacute;", escape.toHtmlAll("ó"))
        assert.equal("&ocirc;", escape.toHtmlAll("ô"))
        assert.equal("&otilde;", escape.toHtmlAll("õ"))
        assert.equal("&ouml;", escape.toHtmlAll("ö"))
        assert.equal("&divide;", escape.toHtmlAll("÷"))
        assert.equal("&oslash;", escape.toHtmlAll("ø"))
        assert.equal("&ugrave;", escape.toHtmlAll("ù"))
        assert.equal("&uacute;", escape.toHtmlAll("ú"))
        assert.equal("&ucirc;", escape.toHtmlAll("û"))
        assert.equal("&uuml;", escape.toHtmlAll("ü"))
        assert.equal("&yacute;", escape.toHtmlAll("ý"))
        assert.equal("&thorn;", escape.toHtmlAll("þ"))
        assert.equal("&yuml;", escape.toHtmlAll("ÿ"))
        assert.equal("&OElig;", escape.toHtmlAll("Œ"))
        assert.equal("&oelig;", escape.toHtmlAll("œ"))
        assert.equal("&Scaron;", escape.toHtmlAll("Š"))
        assert.equal("&scaron;", escape.toHtmlAll("š"))
        assert.equal("&Yuml;", escape.toHtmlAll("Ÿ"))
        assert.equal("&fnof;", escape.toHtmlAll("ƒ"))
        assert.equal("&circ;", escape.toHtmlAll("ˆ"))
        assert.equal("&tilde;", escape.toHtmlAll("˜"))
        assert.equal("&Alpha;", escape.toHtmlAll("Α"))
        assert.equal("&Beta;", escape.toHtmlAll("Β"))
        assert.equal("&Gamma;", escape.toHtmlAll("Γ"))
        assert.equal("&Delta;", escape.toHtmlAll("Δ"))
        assert.equal("&Epsilon;", escape.toHtmlAll("Ε"))
        assert.equal("&Zeta;", escape.toHtmlAll("Ζ"))
        assert.equal("&Eta;", escape.toHtmlAll("Η"))
        assert.equal("&Theta;", escape.toHtmlAll("Θ"))
        assert.equal("&Iota;", escape.toHtmlAll("Ι"))
        assert.equal("&Kappa;", escape.toHtmlAll("Κ"))
        assert.equal("&Lambda;", escape.toHtmlAll("Λ"))
        assert.equal("&Mu;", escape.toHtmlAll("Μ"))
        assert.equal("&Nu;", escape.toHtmlAll("Ν"))
        assert.equal("&Xi;", escape.toHtmlAll("Ξ"))
        assert.equal("&Omicron;", escape.toHtmlAll("Ο"))
        assert.equal("&Pi;", escape.toHtmlAll("Π"))
        assert.equal("&Rho;", escape.toHtmlAll("Ρ"))
        assert.equal("&Sigma;", escape.toHtmlAll("Σ"))
        assert.equal("&Tau;", escape.toHtmlAll("Τ"))
        assert.equal("&Upsilon;", escape.toHtmlAll("Υ"))
        assert.equal("&Phi;", escape.toHtmlAll("Φ"))
        assert.equal("&Chi;", escape.toHtmlAll("Χ"))
        assert.equal("&Psi;", escape.toHtmlAll("Ψ"))
        assert.equal("&Omega;", escape.toHtmlAll("Ω"))
        assert.equal("&alpha;", escape.toHtmlAll("α"))
        assert.equal("&beta;", escape.toHtmlAll("β"))
        assert.equal("&gamma;", escape.toHtmlAll("γ"))
        assert.equal("&delta;", escape.toHtmlAll("δ"))
        assert.equal("&epsilon;", escape.toHtmlAll("ε"))
        assert.equal("&zeta;", escape.toHtmlAll("ζ"))
        assert.equal("&eta;", escape.toHtmlAll("η"))
        assert.equal("&theta;", escape.toHtmlAll("θ"))
        assert.equal("&iota;", escape.toHtmlAll("ι"))
        assert.equal("&kappa;", escape.toHtmlAll("κ"))
        assert.equal("&lambda;", escape.toHtmlAll("λ"))
        assert.equal("&mu;", escape.toHtmlAll("μ"))
        assert.equal("&nu;", escape.toHtmlAll("ν"))
        assert.equal("&xi;", escape.toHtmlAll("ξ"))
        assert.equal("&omicron;", escape.toHtmlAll("ο"))
        assert.equal("&pi;", escape.toHtmlAll("π"))
        assert.equal("&rho;", escape.toHtmlAll("ρ"))
        assert.equal("&sigmaf;", escape.toHtmlAll("ς"))
        assert.equal("&sigma;", escape.toHtmlAll("σ"))
        assert.equal("&tau;", escape.toHtmlAll("τ"))
        assert.equal("&upsilon;", escape.toHtmlAll("υ"))
        assert.equal("&phi;", escape.toHtmlAll("φ"))
        assert.equal("&chi;", escape.toHtmlAll("χ"))
        assert.equal("&psi;", escape.toHtmlAll("ψ"))
        assert.equal("&omega;", escape.toHtmlAll("ω"))
        assert.equal("&thetasym;", escape.toHtmlAll("ϑ"))
        assert.equal("&upsih;", escape.toHtmlAll("ϒ"))
        assert.equal("&piv;", escape.toHtmlAll("ϖ"))
        assert.equal("&ndash;", escape.toHtmlAll("–"))
        assert.equal("&mdash;", escape.toHtmlAll("—"))
        assert.equal("&lsquo;", escape.toHtmlAll("‘"))
        assert.equal("&rsquo;", escape.toHtmlAll("’"))
        assert.equal("&sbquo;", escape.toHtmlAll("‚"))
        assert.equal("&ldquo;", escape.toHtmlAll("“"))
        assert.equal("&rdquo;", escape.toHtmlAll("”"))
        assert.equal("&bdquo;", escape.toHtmlAll("„"))
        assert.equal("&dagger;", escape.toHtmlAll("†"))
        assert.equal("&Dagger;", escape.toHtmlAll("‡"))
        assert.equal("&bull;", escape.toHtmlAll("•"))
        assert.equal("&hellip;", escape.toHtmlAll("…"))
        assert.equal("&permil;", escape.toHtmlAll("‰"))
        assert.equal("&prime;", escape.toHtmlAll("′"))
        assert.equal("&Prime;", escape.toHtmlAll("″"))
        assert.equal("&lsaquo;", escape.toHtmlAll("‹"))
        assert.equal("&rsaquo;", escape.toHtmlAll("›"))
        assert.equal("&oline;", escape.toHtmlAll("‾"))
        assert.equal("&frasl;", escape.toHtmlAll("⁄"))
        assert.equal("&euro;", escape.toHtmlAll("€"))
        assert.equal("&image;", escape.toHtmlAll("ℑ"))
        assert.equal("&weierp;", escape.toHtmlAll("℘"))
        assert.equal("&real;", escape.toHtmlAll("ℜ"))
        assert.equal("&trade;", escape.toHtmlAll("™"))
        assert.equal("&alefsym;", escape.toHtmlAll("ℵ"))
        assert.equal("&larr;", escape.toHtmlAll("←"))
        assert.equal("&uarr;", escape.toHtmlAll("↑"))
        assert.equal("&rarr;", escape.toHtmlAll("→"))
        assert.equal("&darr;", escape.toHtmlAll("↓"))
        assert.equal("&harr;", escape.toHtmlAll("↔"))
        assert.equal("&crarr;", escape.toHtmlAll("↵"))
        assert.equal("&lArr;", escape.toHtmlAll("⇐"))
        assert.equal("&uArr;", escape.toHtmlAll("⇑"))
        assert.equal("&rArr;", escape.toHtmlAll("⇒"))
        assert.equal("&dArr;", escape.toHtmlAll("⇓"))
        assert.equal("&hArr;", escape.toHtmlAll("⇔"))
        assert.equal("&forall;", escape.toHtmlAll("∀"))
        assert.equal("&part;", escape.toHtmlAll("∂"))
        assert.equal("&exist;", escape.toHtmlAll("∃"))
        assert.equal("&empty;", escape.toHtmlAll("∅"))
        assert.equal("&nabla;", escape.toHtmlAll("∇"))
        assert.equal("&isin;", escape.toHtmlAll("∈"))
        assert.equal("&notin;", escape.toHtmlAll("∉"))
        assert.equal("&ni;", escape.toHtmlAll("∋"))
        assert.equal("&prod;", escape.toHtmlAll("∏"))
        assert.equal("&sum;", escape.toHtmlAll("∑"))
        assert.equal("&minus;", escape.toHtmlAll("−"))
        assert.equal("&lowast;", escape.toHtmlAll("∗"))
        assert.equal("&radic;", escape.toHtmlAll("√"))
        assert.equal("&prop;", escape.toHtmlAll("∝"))
        assert.equal("&infin;", escape.toHtmlAll("∞"))
        assert.equal("&ang;", escape.toHtmlAll("∠"))
        assert.equal("&and;", escape.toHtmlAll("∧"))
        assert.equal("&or;", escape.toHtmlAll("∨"))
        assert.equal("&cap;", escape.toHtmlAll("∩"))
        assert.equal("&cup;", escape.toHtmlAll("∪"))
        assert.equal("&int;", escape.toHtmlAll("∫"))
        assert.equal("&there4;", escape.toHtmlAll("∴"))
        assert.equal("&sim;", escape.toHtmlAll("∼"))
        assert.equal("&cong;", escape.toHtmlAll("≅"))
        assert.equal("&asymp;", escape.toHtmlAll("≈"))
        assert.equal("&ne;", escape.toHtmlAll("≠"))
        assert.equal("&equiv;", escape.toHtmlAll("≡"))
        assert.equal("&le;", escape.toHtmlAll("≤"))
        assert.equal("&ge;", escape.toHtmlAll("≥"))
        assert.equal("&sub;", escape.toHtmlAll("⊂"))
        assert.equal("&sup;", escape.toHtmlAll("⊃"))
        assert.equal("&nsub;", escape.toHtmlAll("⊄"))
        assert.equal("&sube;", escape.toHtmlAll("⊆"))
        assert.equal("&supe;", escape.toHtmlAll("⊇"))
        assert.equal("&oplus;", escape.toHtmlAll("⊕"))
        assert.equal("&otimes;", escape.toHtmlAll("⊗"))
        assert.equal("&perp;", escape.toHtmlAll("⊥"))
        assert.equal("&sdot;", escape.toHtmlAll("⋅"))
        assert.equal("&lceil;", escape.toHtmlAll("⌈"))
        assert.equal("&rceil;", escape.toHtmlAll("⌉"))
        assert.equal("&lfloor;", escape.toHtmlAll("⌊"))
        assert.equal("&rfloor;", escape.toHtmlAll("⌋"))
        assert.equal("&lang;", escape.toHtmlAll("〈"))
        assert.equal("&rang;", escape.toHtmlAll("〉"))
        assert.equal("&loz;", escape.toHtmlAll("◊"))
        assert.equal("&spades;", escape.toHtmlAll("♠"))
        assert.equal("&clubs;", escape.toHtmlAll("♣"))
        assert.equal("&hearts;", escape.toHtmlAll("♥"))
        assert.equal("&diams;", escape.toHtmlAll("♦"))
        assert.equal("&nbsp;", escape.toHtmlAll(" "))
        assert.equal("&amp;", escape.toHtmlAll("&"))
        assert.equal("&apos;", escape.toHtmlAll("`"))
        assert.equal("&#x2f;", escape.toHtmlAll("/"))

        assert.equal("&#x61;&#x62;&#x63;&#x64;&#x65;&#x66;", escape.toHtmlAll("abcdef"))
        assert.equal("&#x3042;&#x3044;&#x3046;&#x3048;&#x304a;", escape.toHtmlAll("あいうえお"))
        assert.equal("&#x29e3d;&#x29e3d;&#x29e3d;", escape.toHtmlAll("\u{29e3d}\uD867\uDE3D𩸽"))
        assert.equal("&#x20b9f;&#x20b9f;", escape.toHtmlAll("\u{20b9f}𠮟"))
        assert.equal("&#x30a6;&#x30a3;&#x30ad;&#x30da;&#x30c7;&#x30a3;&#x30a2;", escape.toHtmlAll("ウィキペディア"))

    })
    
    test("toUnicode", () => {
        assert.equal("\\u0030\\u0041\\u0061", escape.toUnicode('0Aa'))
        assert.equal("\\ud867\\ude3d\\u0020\\ud867\\ude3d\\u0020\\ud867\\ude3d", escape.toUnicode('\u{29e3d} \uD867\uDE3D 𩸽'))

        assert.equal("", escape.toUnicode(''))
    })
    
})
