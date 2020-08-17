goog.provide('kuhumcst.rescope.formats.xml');
goog.require('cljs.core');
goog.require('hickory.core');
kuhumcst.rescope.formats.xml.dom_parse = (function kuhumcst$rescope$formats$xml$dom_parse(xml){
return (new DOMParser()).parseFromString(xml,"text/xml").firstChild;
});
/**
 * Naïvely convert an `xml` string into a raw hiccup representation.
 */
kuhumcst.rescope.formats.xml.parse = (function kuhumcst$rescope$formats$xml$parse(xml){
return hickory.core.as_hiccup(kuhumcst.rescope.formats.xml.dom_parse(xml));
});

//# sourceMappingURL=kuhumcst.rescope.formats.xml.js.map
