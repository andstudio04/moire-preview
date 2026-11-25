/*! Copyright (c) 2026 Moiré. All rights reserved. Copying, extracting, or reusing this code is not permitted. See the Terms of Service. */
var e=`uniform sampler2D uTextLayer;uniform float uTextReady;void mainImage(out vec4 fragColor,in vec2 _m0){if(uTextReady<0.5){fragColor=vec4(0.0);return;}vec2 _m1=_m0/max(iResolution . xy,vec2(1.0));fragColor=texture(uTextLayer,vec2(_m1 . x,1.0-_m1 . y));}
/* Copyright (c) 2026 Moire. All rights reserved. Copying, extracting, or reusing this code is not permitted. See the Terms of Service. */
`;export{e as default};