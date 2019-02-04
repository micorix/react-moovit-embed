# react-moovit-embed
React component for Moovit Embedded Web App

Original docs: (https://www.developers.moovit.com/embed-moovit-for-web)
## Props

| Name       | PropType                            | Description  |
| ---------- |:-----------------------------------:| ---------------------------------------------------------------------------------:|
| lang       | PropTypes.string                    | which is language is used to define the user’s interface language. See avai|
| metro      | PropTypes.number                    | which is metroID is used to specify initial metro.                                |
| from       | PropTypes.string                    | value is used as the starting point. If empty, starting point is not filled.      |
| fromCoords | PropTypes.arrayOf(PropTypes.number) | array of latitude and longitude of "from" location.                               |
| to         | PropTypes.string                    | value is used as the end point. If empty, end point is not filled.                |
| toCoords   | PropTypes.arrayOf(PropTypes.number) | array of latitude and longitude of "to" location.                                 |


### Supported languages
Supported languages are: in,ms, nb, ca, cs, de, et, en, en-gb, es, es-419, fr, it, lt, hu, nl, pt, pt-br, ru, ro, sr, fi, vi, tr, el, uk, bg, he, ar, th, zh-cn, zh-tw, ko, ka, ja, da, hr, sk, hi, pl, sv, tl-ph, th
