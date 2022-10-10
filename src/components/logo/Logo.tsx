import { ColorTokensTypes } from 'types';

import * as s from './logo.styles';

export type LogoProps = {
  color?: ColorTokensTypes;
  size?: number;
};

const Logo = ({ color = '$text-contrast-high', size }: LogoProps) => (
  <s.Wrapper css={{ width: size, color }}>
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 675.000000 131.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,131.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <path
          d="M10 893 c0 -451 4 -485 62 -597 18 -34 62 -90 98 -126 116 -116 248
-166 415 -157 359 19 592 362 484 712 -39 126 -150 255 -272 315 -158 78 -332
77 -489 -3 l-88 -45 0 154 0 154 -105 0 -105 0 0 -407z m683 -42 c61 -30 128
-97 157 -158 34 -71 39 -181 11 -254 -47 -124 -171 -213 -300 -213 -101 -1
-164 25 -237 98 -73 73 -99 136 -98 237 0 126 88 251 208 299 70 28 192 24
259 -9z"
        />
        <path
          d="M3560 655 l0 -645 105 0 105 0 0 138 0 138 58 57 57 57 195 -195 195
-195 132 0 c120 0 133 2 133 17 0 10 -114 132 -252 270 l-253 253 259 259
c186 186 257 264 253 275 -5 14 -27 16 -139 16 l-133 0 -252 -252 -253 -253 0
353 0 352 -105 0 -105 0 0 -645z"
        />
        <path
          d="M1630 1084 c-190 -41 -346 -189 -404 -383 -18 -62 -21 -212 -5 -281
18 -81 68 -169 136 -241 168 -177 428 -220 646 -107 34 18 65 34 70 36 4 2 7
-19 7 -47 l0 -51 105 0 105 0 0 319 c0 289 -2 325 -20 382 -58 189 -216 334
-407 374 -84 18 -148 18 -233 -1z m234 -225 c73 -27 148 -96 183 -167 56 -115
31 -271 -58 -361 -51 -51 -98 -78 -164 -96 -149 -39 -305 38 -374 184 -35 74
-37 192 -4 263 39 85 126 162 213 189 50 15 148 9 204 -12z"
        />
        <path
          d="M2440 555 l0 -545 105 0 105 0 0 318 c0 379 3 397 83 476 114 113
270 113 383 1 82 -81 84 -94 84 -472 l0 -323 105 0 105 0 0 345 c0 322 -1 350
-21 407 -93 278 -409 413 -676 289 l-62 -29 -3 36 -3 37 -102 3 -103 3 0 -546z"
        />
        <path
          d="M4983 1085 c-189 -42 -346 -187 -403 -374 -24 -77 -27 -220 -5 -300
38 -145 145 -275 279 -341 45 -22 105 -45 135 -50 76 -14 1254 -13 1323 1 211
43 387 233 420 452 25 166 -32 343 -148 460 -66 66 -117 99 -213 136 l-66 26
-630 2 c-505 2 -642 -1 -692 -12z m374 -232 c18 -7 48 -27 68 -44 l36 -32 27
26 c67 64 209 91 293 55 43 -19 116 -82 124 -108 5 -15 14 -10 58 34 89 90
214 119 337 79 66 -21 152 -98 186 -165 31 -60 43 -142 23 -150 -8 -3 -112
-23 -231 -44 -136 -24 -218 -43 -218 -50 0 -7 16 -26 35 -43 32 -27 43 -31 97
-31 70 0 134 30 158 74 7 14 19 26 25 26 21 0 110 -33 117 -44 10 -15 -31 -83
-76 -123 -124 -112 -297 -117 -428 -13 l-37 30 -3 -47 -3 -48 -80 0 -80 0 -5
200 c-3 139 -9 207 -18 223 -32 56 -125 79 -183 45 -52 -31 -59 -62 -59 -265
0 -100 -4 -189 -9 -196 -5 -9 -29 -12 -82 -10 l-74 3 -5 195 c-6 215 -13 246
-70 275 -63 33 -145 11 -177 -48 -15 -26 -19 -66 -23 -227 l-5 -195 -75 0 -75
0 -3 304 c-2 216 1 308 9 317 14 18 120 19 137 2 7 -7 12 -23 12 -36 l0 -24
30 25 c27 23 63 39 115 50 28 6 94 -4 132 -20z"
        />
        <path
          d="M6102 710 c-30 -18 -81 -104 -70 -116 5 -4 290 46 297 52 7 6 -29 47
-56 65 -39 26 -127 25 -171 -1z"
        />
      </g>
    </svg>
  </s.Wrapper>
);

export { Logo };