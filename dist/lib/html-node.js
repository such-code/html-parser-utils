"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlNode = void 0;
exports.HtmlNode = {
    all: new Set([
        'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'body',
        'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del',
        'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figure', 'figcaption', 'footer',
        'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img',
        'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem',
        'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'pre',
        'progress', 'q', 'rb', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source',
        'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot',
        'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',
    ]),
    // Attribute table, global attributes like `hidden` and `id` are not
    // included as these attributes require no additional checks.
    attributes: {
        hidden: '*',
        high: 'meter',
        href: new Set(['a', 'area', 'base', 'link']),
        hreflang: new Set(['a', 'area', 'link']),
        'http-equiv': 'meta',
        icon: 'command',
        id: '*',
        ismap: 'img',
        itemprop: '*',
        itemscope: '*',
        keytype: 'keygen',
        kind: 'track',
        label: 'track',
        lang: '*',
        language: 'script',
        list: 'input',
        loop: new Set(['audio', 'bgsound', 'marquee', 'video']),
        low: 'meter',
        manifest: 'html',
        max: new Set(['input', 'meter', 'progress']),
        maxlength: new Set(['input', 'textarea']),
        media: new Set(['a', 'area', 'link', 'source', 'style']),
        method: 'form',
        min: new Set(['input', 'meter']),
        multiple: new Set(['input', 'select']),
        name: new Set([
            'button', 'form', 'fieldset', 'iframe', 'input', 'keygen', 'object', 'output', 'select', 'textarea',
            'map', 'meta', 'param'
        ]),
        open: 'details',
        optimum: 'meter',
        pattern: 'input',
        ping: new Set(['a', 'area']),
        placeholder: new Set(['input', 'textarea']),
        poster: 'video',
        preload: new Set(['audio', 'video']),
        pubdate: 'time',
        radiogroup: 'command',
        readonly: new Set(['input', 'textarea']),
        rel: new Set(['a', 'area', 'link']),
        required: new Set(['input', 'select', 'textarea']),
        reversed: 'ol',
        rows: 'textarea',
        rowspan: new Set(['td', 'th']),
        sandbox: 'iframe',
        spellcheck: '*',
        scope: 'th',
        scoped: 'style',
        seamless: 'iframe',
        selected: 'option',
        shape: new Set(['a', 'area']),
        size: new Set(['input', 'select']),
        sizes: 'link',
        span: new Set(['col', 'colgroup']),
        src: new Set(['audio', 'embed', 'iframe', 'img', 'input', 'script', 'source', 'track', 'video']),
        srcdoc: 'iframe',
        srclang: 'track',
        srcset: 'img',
        start: 'ol',
        step: 'input',
        style: '*',
        summary: 'table',
        tabindex: '*',
        target: new Set(['a', 'area', 'base', 'form']),
        title: '*',
        type: new Set(['button', 'input', 'command', 'embed', 'object', 'script', 'source', 'style', 'menu']),
        usemap: new Set(['img', 'input', 'object']),
        value: new Set(['button', 'option', 'input', 'li', 'meter', 'progress', 'param']),
        width: new Set(['canvas', 'embed', 'iframe', 'img', 'input', 'object', 'video']),
        wrap: 'textarea',
        border: new Set(['img', 'object', 'table']),
        buffered: new Set(['audio', 'video']),
        challenge: 'keygen',
        charset: new Set(['meta', 'script']),
        checked: new Set(['command', 'input']),
        cite: new Set(['blockquote', 'del', 'ins', 'q']),
        class: '*',
        code: 'applet',
        codebase: 'applet',
        color: new Set(['basefont', 'font', 'hr']),
        cols: 'textarea',
        colspan: new Set(['td', 'th']),
        content: new Set(['meta']),
        contenteditable: '*',
        contextmenu: '*',
        controls: new Set(['audio', 'video']),
        coords: new Set(['area']),
        data: 'object',
        datetime: new Set(['del', 'ins', 'time']),
        default: 'track',
        defer: 'script',
        dir: '*',
        dirname: new Set(['input', 'textarea']),
        disabled: new Set(['button', 'command', 'fieldset', 'input', 'keygen', 'optgroup', 'option', 'select', 'textarea']),
        download: new Set(['a', 'area']),
        draggable: '*',
        dropzone: '*',
        enctype: 'form',
        for: new Set(['label', 'output']),
        form: new Set([
            'button', 'fieldset', 'input', 'keygen', 'label', 'meter', 'object', 'output', 'progress', 'select',
            'textarea'
        ]),
        formaction: new Set(['input', 'button']),
        headers: new Set(['td', 'th']),
        height: new Set(['canvas', 'embed', 'iframe', 'img', 'input', 'object', 'video']),
        accept: new Set(['form', 'input']),
        'accept-charset': 'form',
        accesskey: '*',
        action: 'form',
        align: new Set([
            'applet', 'caption', 'col', 'colgroup', 'hr', 'iframe', 'img', 'table', 'tbody', 'td', 'tfoot', 'th',
            'thead', 'tr'
        ]),
        alt: new Set(['applet', 'area', 'img', 'input']),
        async: new Set('script'),
        autocomplete: new Set(['form', 'input']),
        autofocus: new Set(['button', 'input', 'keygen', 'select', 'textarea']),
        autoplay: new Set(['audio', 'video']),
        autosave: 'input',
        bgcolor: new Set(['body', 'col', 'colgroup', 'marquee', 'table', 'tbody', 'tfoot', 'td', 'th', 'tr']),
        novalidate: new Set(['form']),
        sortable: new Set(['table']),
    },
    // List of inline elements, br is left out deliberately so it is treated as block
    // level element. Spaces around br elements are redundant.
    inline: new Set([
        'a', 'abbr', 'b', 'bdo', 'button', 'cite', 'code', 'dfn', 'em', 'i', 'img', 'input', 'kbd',
        'label', 'q', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'textarea', 'var'
    ]),
    // Elements that have special content, e.g. JS or CSS.
    node: new Set(['tag', 'script', 'style']),
    // List of redundant attributes, e.g. boolean attributes that require no value.
    redundant: new Set([
        'autofocus', 'disabled', 'multiple', 'required', 'readonly', 'hidden', 'async', 'defer', 'formnovalidate',
        'checked', 'scoped', 'reversed', 'selected', 'autoplay', 'controls', 'loop', 'muted', 'seamless', 'default',
        'ismap', 'novalidate', 'open', 'typemustmatch', 'truespeed', 'itemscope', 'autocomplete', 'download',
        'draggable', 'novalidate', 'sortable', 'spellcheck'
    ]),
    // List of singular elements, e.g. elements that have no closing tag.
    singular: new Set([
        'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'wbr'
    ]),
    // Elements that require and should keep structure to their content.
    structural: new Set(['pre', 'textarea', 'code']),
};
//# sourceMappingURL=html-node.js.map