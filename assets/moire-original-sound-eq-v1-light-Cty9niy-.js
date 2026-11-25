/*! Copyright (c) 2026 Moiré. All rights reserved. Copying, extracting, or reusing this code is not permitted. See the Terms of Service. */
var e=`void mainImage(out vec4 _m0,in vec2 _m1){vec2 _m2=_m1/iResolution . xy;float _m3=sharedRgbToOklab(sharedToLinear(texture(uImage,_m2). rgb)). x;_m0=vec4(_m3,_m3,_m3,1.0);}
/* Copyright (c) 2026 Moire. All rights reserved. Copying, extracting, or reusing this code is not permitted. See the Terms of Service. */
`;export{e as default};