/**
 * ============================================================================
 * ECHOSIGN - LESSON DATA & LOGIC (js/lessons.js)
 * All content for "We Don't Talk Anymore" ASL lesson is defined here.
 * Features:
 * - Clear drawing-style anatomical hand illustrations with defined fingers
 * - Animated sign movement demonstration for each sign
 * - Visual ASL Movement Studio ("Hand Video") for each separated song section
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. Drawing-Style Hand SVG Dictionary (Clear lines, defined joints & knuckles)
// ----------------------------------------------------------------------------
const HAND_SVGS = {
  we: `
    <svg viewBox="0 0 180 180" class="sign-drawing-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Spatial shoulder guide -->
      <path d="M25 150 C40 100, 140 100, 155 150" stroke="#5B5FA8" stroke-width="2.5" stroke-dasharray="5 5" fill="none" opacity="0.4"/>
      <text x="20" y="168" fill="#5B5FA8" font-size="10" font-weight="800">R. Shoulder</text>
      <text x="115" y="168" fill="#5B5FA8" font-size="10" font-weight="800">L. Shoulder</text>
      <!-- Movement Arc Arrow -->
      <path d="M45 80 Q90 45 135 80" stroke="#F27B7B" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <polygon points="135,73 144,82 132,87" fill="#F27B7B"/>
      <!-- Hand group with sweep animation -->
      <g class="animated-hand hand-motion-we">
        <!-- Wrist -->
        <path d="M74 155 L76 118 C76 114 84 112 88 112 L106 118 L110 155" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.5"/>
        <!-- Palm base -->
        <path d="M72 118 C68 102 70 88 76 78 C80 72 88 70 95 74 C102 77 106 84 108 92 C109 100 107 110 105 118 Z" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.5"/>
        <!-- Pinky curled -->
        <path d="M98 88 C104 86 109 90 108 97 C107 102 101 104 95 102" fill="#F7EAD4" stroke="#2B2F7A" stroke-width="2"/>
        <path d="M105 90 C107 94 105 98 102 100" stroke="#2B2F7A" stroke-width="1.4" fill="none"/>
        <!-- Ring curled -->
        <path d="M96 80 C103 78 107 82 106 89 C105 93 99 95 93 94" fill="#F7EAD4" stroke="#2B2F7A" stroke-width="2"/>
        <path d="M103 82 C105 86 103 90 100 92" stroke="#2B2F7A" stroke-width="1.4" fill="none"/>
        <!-- Middle curled -->
        <path d="M92 72 C99 70 104 75 102 82 C101 87 95 89 89 87" fill="#F7EAD4" stroke="#2B2F7A" stroke-width="2"/>
        <path d="M99 74 C102 78 100 82 97 84" stroke="#2B2F7A" stroke-width="1.4" fill="none"/>
        <!-- Index Finger Upright (Primary pointer) -->
        <path d="M75 76 L75 32 C75 24 86 24 86 32 L86 72" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Index Fingernail -->
        <path d="M78 29 C78 27 83 27 83 29 C83 33 78 33 78 29 Z" fill="#F27B7B" opacity="0.35" stroke="#2B2F7A" stroke-width="1.3"/>
        <line x1="77" y1="46" x2="84" y2="46" stroke="#2B2F7A" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="77" y1="58" x2="84" y2="58" stroke="#2B2F7A" stroke-width="1.5" stroke-linecap="round"/>
        <!-- Thumb crossed over middle -->
        <path d="M68 98 C65 88 72 82 82 82 C88 82 92 86 90 92 C88 96 80 100 72 100 Z" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.2"/>
        <path d="M84 84 C86 85 88 88 86 90" stroke="#2B2F7A" stroke-width="1.4" fill="none"/>
      </g>
    </svg>
  `,

  talk: `
    <svg viewBox="0 0 180 180" class="sign-drawing-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Lips/Chin guide line -->
      <path d="M30 40 C42 50 42 65 36 76 C32 84 35 92 45 96 C48 99 45 106 38 108" stroke="#5B5FA8" stroke-width="2" stroke-dasharray="4 4" fill="none" opacity="0.35"/>
      <text x="20" y="150" fill="#5B5FA8" font-size="10" font-weight="800">Lips / Chin</text>
      <!-- Sound pulse waves -->
      <path d="M52 80 C56 73 56 66 52 60" stroke="#F27B7B" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M60 86 C66 76 66 60 60 52" stroke="#F27B7B" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- 4-finger hand tapping -->
      <g class="animated-hand hand-motion-talk">
        <path d="M115 155 L108 125 C106 122 100 120 95 120 L80 155" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.5"/>
        <path d="M85 120 C78 112 78 98 84 90 C88 85 96 84 102 88 C108 92 110 102 108 118 Z" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.5"/>
        <!-- Index Finger -->
        <path d="M82 90 L68 45 C66 38 75 36 78 42 L88 84" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.3" stroke-linecap="round"/>
        <path d="M70 42 C71 39 74 39 75 41 C75 44 71 45 70 42 Z" fill="#F27B7B" opacity="0.35" stroke="#2B2F7A" stroke-width="1.2"/>
        <line x1="72" y1="56" x2="78" y2="58" stroke="#2B2F7A" stroke-width="1.4" stroke-linecap="round"/>
        <!-- Middle Finger -->
        <path d="M86 84 L80 35 C79 28 89 27 91 34 L96 82" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.3" stroke-linecap="round"/>
        <path d="M82 33 C84 31 87 31 88 33 C88 36 84 37 82 33 Z" fill="#F27B7B" opacity="0.35" stroke="#2B2F7A" stroke-width="1.2"/>
        <line x1="84" y1="48" x2="90" y2="49" stroke="#2B2F7A" stroke-width="1.4" stroke-linecap="round"/>
        <!-- Ring Finger -->
        <path d="M96 83 L96 40 C96 33 105 34 106 40 L104 84" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.3" stroke-linecap="round"/>
        <path d="M98 38 C100 36 103 36 104 38 C104 41 100 42 98 38 Z" fill="#F27B7B" opacity="0.35" stroke="#2B2F7A" stroke-width="1.2"/>
        <!-- Pinky Finger -->
        <path d="M104 85 L112 50 C113 44 122 46 120 52 L112 90" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.3" stroke-linecap="round"/>
        <!-- Tucked Thumb -->
        <path d="M85 96 C88 92 96 92 98 98 C99 104 94 108 86 106 Z" fill="#F7EAD4" stroke="#2B2F7A" stroke-width="2"/>
      </g>
    </svg>
  `,

  not: `
    <svg viewBox="0 0 180 180" class="sign-drawing-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Chin line -->
      <path d="M45 45 C45 65 55 80 75 88" stroke="#5B5FA8" stroke-width="2" stroke-dasharray="4 4" fill="none" opacity="0.4"/>
      <text x="35" y="40" fill="#5B5FA8" font-size="10" font-weight="800">Under Chin</text>
      <!-- Forward sweep arrow -->
      <path d="M85 85 Q125 75 145 95" stroke="#F27B7B" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <polygon points="146,86 154,98 140,102" fill="#F27B7B"/>
      <!-- Modified A-fist hand with thumb -->
      <g class="animated-hand hand-motion-not">
        <path d="M72 155 L75 125 C75 120 85 118 90 118 L110 125 L115 155" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.5"/>
        <path d="M74 122 C68 112 68 96 74 88 C78 82 86 80 94 82 C104 84 108 92 107 106 C106 114 100 120 92 122 Z" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.5"/>
        <!-- Knuckle rows -->
        <path d="M76 86 C80 82 88 82 90 87 C88 92 82 94 77 92" fill="#F7EAD4" stroke="#2B2F7A" stroke-width="2"/>
        <path d="M78 94 C84 90 92 90 93 96 C90 100 84 102 78 100" fill="#F7EAD4" stroke="#2B2F7A" stroke-width="2"/>
        <path d="M80 102 C86 98 94 98 95 104 C92 108 86 110 80 108" fill="#F7EAD4" stroke="#2B2F7A" stroke-width="2"/>
        <path d="M82 110 C86 106 94 106 95 112 C92 116 87 118 82 116" fill="#F7EAD4" stroke="#2B2F7A" stroke-width="2"/>
        <!-- Thumb extended upright & sweeping -->
        <path d="M68 95 C62 88 64 68 70 55 C74 48 83 48 85 55 C86 64 85 80 85 92" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M74 53 C76 50 80 50 82 53 C82 57 76 58 74 53 Z" fill="#F27B7B" opacity="0.35" stroke="#2B2F7A" stroke-width="1.3"/>
        <line x1="72" y1="68" x2="82" y2="70" stroke="#2B2F7A" stroke-width="1.4" stroke-linecap="round"/>
      </g>
    </svg>
  `,

  more: `
    <svg viewBox="0 0 200 180" class="sign-drawing-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Center tap ripples -->
      <circle cx="100" cy="80" r="14" stroke="#F27B7B" stroke-width="2" stroke-dasharray="3 3" fill="none" opacity="0.6"/>
      <circle cx="100" cy="80" r="22" stroke="#F27B7B" stroke-width="1.5" stroke-dasharray="3 3" fill="none" opacity="0.3"/>
      <text x="65" y="160" fill="#5B5FA8" font-size="10" font-weight="800">Tap Fingertips 2×</text>
      <!-- Left Hand (Tapered O) -->
      <g class="animated-hand hand-motion-more-left">
        <path d="M20 120 L38 95 C45 85 58 80 72 80 C80 80 88 84 94 88 C94 90 92 92 88 92 C80 94 72 98 62 108 L35 135 Z" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.3"/>
        <path d="M72 80 C80 78 88 82 95 86 C92 90 85 92 78 90" fill="#F7EAD4" stroke="#2B2F7A" stroke-width="2"/>
        <path d="M88 82 C91 84 91 87 88 88" stroke="#2B2F7A" stroke-width="1.3" fill="none"/>
        <path d="M55 105 C65 102 78 96 92 90 C90 95 82 102 70 106 Z" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2"/>
      </g>
      <!-- Right Hand (Tapered O) -->
      <g class="animated-hand hand-motion-more-right">
        <path d="M180 120 L162 95 C155 85 142 80 128 80 C120 80 112 84 106 88 C106 90 108 92 112 92 C120 94 128 98 138 108 L165 135 Z" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.3"/>
        <path d="M128 80 C120 78 112 82 105 86 C108 90 115 92 122 90" fill="#F7EAD4" stroke="#2B2F7A" stroke-width="2"/>
        <path d="M112 82 C109 84 109 87 112 88" stroke="#2B2F7A" stroke-width="1.3" fill="none"/>
        <path d="M145 105 C135 102 122 96 108 90 C110 95 118 102 130 106 Z" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2"/>
      </g>
    </svg>
  `,

  miss: `
    <svg viewBox="0 0 180 180" class="sign-drawing-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Heart position -->
      <path d="M50 160 C50 120 60 90 90 85 C120 90 130 120 130 160" stroke="#5B5FA8" stroke-width="2" stroke-dasharray="4 4" fill="none" opacity="0.3"/>
      <!-- Radiating heart pulses -->
      <path d="M90 70 C84 62 72 62 68 70 C62 80 72 92 90 106 C108 92 118 80 112 70 C108 62 96 62 90 70 Z" fill="#F27B7B" fill-opacity="0.18" stroke="#F27B7B" stroke-width="2"/>
      <path d="M90 75 C86 68 76 68 73 74 C68 82 76 92 90 102 C104 92 112 82 107 74 C104 68 94 68 90 75 Z" fill="#F27B7B" fill-opacity="0.4"/>
      <!-- Hand over heart -->
      <g class="animated-hand hand-motion-miss">
        <path d="M135 155 L118 115 C115 110 110 108 105 108 L125 155" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.3"/>
        <path d="M110 108 C104 98 94 92 84 92 C74 92 68 100 68 110 C68 120 76 128 90 128 C102 128 110 120 114 112 Z" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.3"/>
        <!-- Slender expressive fingers -->
        <path d="M84 92 L72 68 C70 63 76 60 80 64 L90 88" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.2"/>
        <path d="M73 65 C74 63 78 63 79 65 C78 67 75 68 73 65 Z" fill="#F27B7B" opacity="0.35" stroke="#2B2F7A" stroke-width="1.2"/>
        <path d="M90 88 L84 60 C82 55 88 53 92 56 L97 86" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.2"/>
        <path d="M85 58 C86 56 90 56 91 58 C90 60 87 61 85 58 Z" fill="#F27B7B" opacity="0.35" stroke="#2B2F7A" stroke-width="1.2"/>
        <path d="M97 86 L98 64 C98 59 104 59 106 63 L104 88" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.2"/>
        <path d="M104 88 L110 72 C111 67 117 68 116 73 L110 94" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.2"/>
        <path d="M72 108 C68 104 64 98 68 94 C72 90 76 96 78 102 Z" fill="#F7EAD4" stroke="#2B2F7A" stroke-width="2"/>
      </g>
    </svg>
  `,

  hear: `
    <svg viewBox="0 0 180 180" class="sign-drawing-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Ear reference -->
      <path d="M50 60 C42 70 42 95 55 105 C60 110 65 115 65 120" stroke="#5B5FA8" stroke-width="2" stroke-dasharray="4 4" fill="none" opacity="0.4"/>
      <text x="35" y="45" fill="#5B5FA8" font-size="10" font-weight="800">To Ear</text>
      <!-- Sound waves -->
      <path d="M35 75 C30 80 30 88 35 95" stroke="#F27B7B" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M26 68 C18 78 18 95 26 105" stroke="#F27B7B" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- Index pointing to ear -->
      <g class="animated-hand hand-motion-pulse">
        <path d="M105 155 L102 125 C100 120 92 118 85 118 L70 155" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.5"/>
        <path d="M75 118 C70 110 70 96 76 88 C82 82 90 82 96 86 C102 90 102 100 100 118 Z" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.5"/>
        <path d="M75 88 L58 55 C54 48 64 45 68 50 L84 84" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.3" stroke-linecap="round"/>
        <path d="M58 50 C59 47 62 47 63 49 C63 52 60 53 58 50 Z" fill="#F27B7B" opacity="0.35" stroke="#2B2F7A" stroke-width="1.2"/>
        <path d="M82 88 C86 85 92 85 94 90 C92 94 88 96 82 94" fill="#F7EAD4" stroke="#2B2F7A" stroke-width="2"/>
      </g>
    </svg>
  `,

  find: `
    <svg viewBox="0 0 180 180" class="sign-drawing-svg" xmlns="http://www.w3.org/2000/svg">
      <text x="50" y="155" fill="#5B5FA8" font-size="10" font-weight="800">Pinch & Pull Up</text>
      <!-- Pull-up arrow -->
      <path d="M90 120 L90 55" stroke="#F27B7B" stroke-width="3" stroke-linecap="round" fill="none"/>
      <polygon points="84,60 90,48 96,60" fill="#F27B7B"/>
      <!-- 'F' Pinch Handshape -->
      <g class="animated-hand hand-motion-pulse">
        <path d="M75 155 L78 120 C78 115 88 112 92 112 L108 120 L112 155" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.5"/>
        <path d="M74 120 C68 108 70 92 78 85 C84 80 92 80 98 84 C104 88 105 100 104 120 Z" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.5"/>
        <!-- Index & Thumb pinched circle -->
        <circle cx="78" cy="80" r="10" stroke="#2B2F7A" stroke-width="2.2" fill="#F7EAD4"/>
        <!-- 3 upright fingers (middle, ring, pinky) -->
        <path d="M88 80 L92 48 C93 42 100 42 101 48 L98 82" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.2"/>
        <path d="M98 82 L104 54 C105 48 112 48 113 54 L106 85" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.2"/>
        <path d="M106 85 L114 62 C115 56 122 56 123 62 L112 92" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.2"/>
      </g>
    </svg>
  `,

  me: `
    <svg viewBox="0 0 180 180" class="sign-drawing-svg" xmlns="http://www.w3.org/2000/svg">
      <text x="65" y="160" fill="#5B5FA8" font-size="10" font-weight="800">Point to Chest</text>
      <!-- Directional pointer to center chest -->
      <path d="M130 90 L85 90" stroke="#F27B7B" stroke-width="3" stroke-linecap="round" fill="none"/>
      <polygon points="90,84 78,90 90,96" fill="#F27B7B"/>
      <!-- Hand pointing inward -->
      <g class="animated-hand hand-motion-pulse">
        <path d="M150 115 L125 105 C120 102 118 98 118 92 L150 78" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.5"/>
        <path d="M120 92 C112 88 100 88 92 90 C85 92 84 98 88 104 C92 110 102 110 118 105 Z" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.5"/>
        <!-- Index finger pointing left -->
        <path d="M92 90 L60 90 C52 90 52 98 60 98 L92 98" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M60 92 C58 92 56 94 56 94 C56 96 58 96 60 96 Z" fill="#F27B7B" opacity="0.4" stroke="#2B2F7A" stroke-width="1.2"/>
        <!-- Folded other fingers -->
        <path d="M94 98 C96 102 102 102 104 98" stroke="#2B2F7A" stroke-width="1.8" fill="none"/>
        <path d="M98 102 C100 106 106 106 108 102" stroke="#2B2F7A" stroke-width="1.8" fill="none"/>
      </g>
    </svg>
  `,

  time: `
    <svg viewBox="0 0 180 180" class="sign-drawing-svg" xmlns="http://www.w3.org/2000/svg">
      <text x="60" y="160" fill="#5B5FA8" font-size="10" font-weight="800">Tap Watch Wrist</text>
      <!-- Wrist target circle -->
      <circle cx="85" cy="115" r="14" stroke="#F27B7B" stroke-width="2" stroke-dasharray="3 3" fill="none"/>
      <!-- Base wrist -->
      <path d="M30 115 L140 115" stroke="#2B2F7A" stroke-width="14" stroke-linecap="round" opacity="0.2"/>
      <!-- Tapping index finger from above -->
      <g class="animated-hand hand-motion-talk">
        <path d="M95 20 L95 80 C95 86 85 86 85 80 L85 20" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M88 80 C88 82 92 82 92 80" stroke="#2B2F7A" stroke-width="1.4" fill="none"/>
        <path d="M85 45 C80 50 78 60 85 70" stroke="#2B2F7A" stroke-width="2" fill="#F7EAD4"/>
      </g>
    </svg>
  `,

  wonder: `
    <svg viewBox="0 0 180 180" class="sign-drawing-svg" xmlns="http://www.w3.org/2000/svg">
      <text x="60" y="160" fill="#5B5FA8" font-size="10" font-weight="800">Circle at Temple</text>
      <!-- Circular motion ring -->
      <circle cx="90" cy="80" r="28" stroke="#F27B7B" stroke-width="2.5" stroke-dasharray="5 5" fill="none"/>
      <polygon points="115,70 124,76 118,84" fill="#F27B7B"/>
      <!-- Index finger circling -->
      <g class="animated-hand hand-motion-we">
        <path d="M85 130 L85 75 C85 68 95 68 95 75 L95 130" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M88 72 C89 70 92 70 93 72" stroke="#2B2F7A" stroke-width="1.3" fill="none"/>
      </g>
    </svg>
  `,

  why: `
    <svg viewBox="0 0 180 180" class="sign-drawing-svg" xmlns="http://www.w3.org/2000/svg">
      <text x="50" y="160" fill="#5B5FA8" font-size="10" font-weight="800">Forehead to 'Y' shape</text>
      <path d="M90 60 L130 90" stroke="#F27B7B" stroke-width="3" stroke-linecap="round" fill="none"/>
      <polygon points="128,82 138,94 122,96" fill="#F27B7B"/>
      <!-- 'Y' handshape: thumb and pinky out -->
      <g class="animated-hand hand-motion-pulse">
        <circle cx="90" cy="95" r="22" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.4"/>
        <!-- Thumb sticking left -->
        <path d="M70 95 L48 88 C44 86 44 94 48 96 L70 102" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.3"/>
        <!-- Pinky sticking right -->
        <path d="M110 95 L132 88 C136 86 136 94 132 96 L110 102" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.3"/>
      </g>
    </svg>
  `,

  easy: `
    <svg viewBox="0 0 180 180" class="sign-drawing-svg" xmlns="http://www.w3.org/2000/svg">
      <text x="60" y="160" fill="#5B5FA8" font-size="10" font-weight="800">Brush Hands Upward</text>
      <!-- Upward motion arrows -->
      <path d="M70 120 L70 65" stroke="#F27B7B" stroke-width="3" stroke-linecap="round" fill="none"/>
      <polygon points="65,70 70,58 75,70" fill="#F27B7B"/>
      <path d="M110 120 L110 65" stroke="#F27B7B" stroke-width="3" stroke-linecap="round" fill="none"/>
      <polygon points="105,70 110,58 115,70" fill="#F27B7B"/>
      <!-- Two upward brushing flat hands -->
      <g class="animated-hand hand-motion-we">
        <rect x="52" y="80" width="36" height="45" rx="10" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.3"/>
        <rect x="92" y="80" width="36" height="45" rx="10" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.3"/>
      </g>
    </svg>
  `,

  want: `
    <svg viewBox="0 0 180 180" class="sign-drawing-svg" xmlns="http://www.w3.org/2000/svg">
      <text x="55" y="160" fill="#5B5FA8" font-size="10" font-weight="800">Claw Hands Pull In</text>
      <path d="M90 60 L90 115" stroke="#F27B7B" stroke-width="3" stroke-linecap="round" fill="none"/>
      <polygon points="84,108 90,120 96,108" fill="#F27B7B"/>
      <!-- Curved cupped claw fingers -->
      <g class="animated-hand hand-motion-miss">
        <path d="M60 90 C60 70 80 65 90 70 C100 65 120 70 120 90 C120 115 105 125 90 125 C75 125 60 115 60 90 Z" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.4"/>
        <path d="M75 75 C78 82 82 82 85 75" stroke="#2B2F7A" stroke-width="2" fill="none"/>
        <path d="M95 75 C98 82 102 82 105 75" stroke="#2B2F7A" stroke-width="2" fill="none"/>
      </g>
    </svg>
  `,

  know: `
    <svg viewBox="0 0 180 180" class="sign-drawing-svg" xmlns="http://www.w3.org/2000/svg">
      <text x="55" y="160" fill="#5B5FA8" font-size="10" font-weight="800">Tap Side of Forehead</text>
      <!-- Double tap ripple -->
      <circle cx="85" cy="70" r="14" stroke="#F27B7B" stroke-width="2" stroke-dasharray="3 3" fill="none"/>
      <!-- Flat bent hand at temple -->
      <g class="animated-hand hand-motion-talk">
        <path d="M95 130 L95 85 C95 72 80 72 75 80 L75 130" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M75 82 L65 72 C60 68 70 60 76 65 L86 76" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.2"/>
      </g>
    </svg>
  `
};

// ----------------------------------------------------------------------------
// 2. Core Lesson Configuration
// ----------------------------------------------------------------------------
const LESSON_CONFIG = {
  song: {
    title: "We Don't Talk Anymore",
    artist: "Charlie Puth ft. Selena Gomez",
    youtubeId: "3AtDnEC4zak",
    bpm: "100 BPM",
    key: "E minor / G Major",
    credits: "Song by Charlie Puth ft. Selena Gomez. Video embedded from the official YouTube channel.",
    disclaimer: "Learning tool only. Not affiliated with the artists."
  },

  // STEP 1: LISTEN
  step1: {
    stepNumber: 1,
    title: "Listen & Feel the Cadence",
    moodTag: "Melancholic Tropical Pop",
    introText: "Notice the bittersweet contrast between the upbeat tropical guitar groove and the lyrics about emotional distance. In ASL, hearing this tempo helps us set a steady, rhythmic pacing for our hand movements before we add expressive facial grammar.",
    listenTips: [
      {
        icon: "🎵",
        label: "Steady 100 BPM Pulse",
        description: "The steady four-on-the-floor kick keeps your signing rhythm regular and grounded."
      },
      {
        icon: "💔",
        label: "The Emotional Arc",
        description: "The mood shifts between casual nostalgia and sharp longing. In ASL, facial expressions (non-manual markers) convey this emotion."
      },
      {
        icon: "👂",
        label: "Repetitive Phrasing",
        description: "The repeating chorus gives you continuous practice with high-frequency root vocabulary."
      }
    ]
  },

  // STEP 2: LEARN THE SIGNS (Detailed Drawing Hands + Motion Demos)
  step2: {
    stepNumber: 2,
    title: "Learn the Key Signs",
    subtitle: "Master the 5 core signs that power this song's chorus. Study each handshape, knuckle crease, and movement path.",
    signs: [
      {
        id: "we",
        word: "WE",
        label: "Standard sign",
        labelType: "standard",
        meaning: "Refers to the speaker and another person together ('you and me').",
        howTo: "With your dominant index finger pointed upright, touch your right shoulder, loop forward in a smooth arc across your chest, and touch your left shoulder.",
        handshapeName: "Index Finger / Shoulder-to-Shoulder Arc",
        svgPath: HAND_SVGS.we
      },
      {
        id: "talk",
        word: "TALK",
        label: "Standard sign",
        labelType: "standard",
        meaning: "To speak, converse, or verbally communicate with someone.",
        howTo: "Form a '4' handshape (4 upright fingers separated, thumb curled). Tap your index finger gently against your chin/lips two times in rhythm.",
        handshapeName: "4-Finger / Chin Tap",
        svgPath: HAND_SVGS.talk
      },
      {
        id: "not",
        word: "NOT",
        label: "Standard sign",
        labelType: "standard",
        meaning: "Negation, denial, or absence ('do not / don't').",
        howTo: "Make a modified 'A' fist with thumb extended outward. Place the tip of your thumb beneath your chin, then sweep it forward while shaking your head.",
        handshapeName: "Thumb Under Chin / Forward Sweep",
        svgPath: HAND_SVGS.not
      },
      {
        id: "more",
        word: "MORE",
        label: "Standard sign",
        labelType: "standard",
        meaning: "Additional, continuation, or repetition (used with NOT for 'anymore').",
        howTo: "Form flattened 'O' handshapes with both hands (fingertips touching thumbs). Bring hands together so the fingertips tap in front of your chest twice.",
        handshapeName: "Flattened 'O' / Tapping Fingertips",
        svgPath: HAND_SVGS.more
      },
      {
        id: "miss",
        word: "MISS",
        label: "Performance touch",
        labelType: "performance",
        meaning: "Emotional yearning, longing, or feeling an aching absence.",
        howTo: "Draw your dominant index finger softly across your chin with an inward curling motion, or place your open palm over your heart with a subtle melancholic head tilt.",
        handshapeName: "Chin Curl / Hand to Heart",
        svgPath: HAND_SVGS.miss
      }
    ]
  },

  // STEP 3: PRACTICE (Separated song sections with dedicated Visual Hand Movement Videos)
  step3: {
    stepNumber: 3,
    title: "Section-by-Section Practice & Hand Videos",
    subtitle: "Select any separated part of the song below. Watch the animated drawing hands demonstrate each sign in sequence, or practice along with the isolated video clip.",
    sections: [
      {
        id: "section-1",
        title: "Chorus 1 — The Hook",
        startTime: 14,
        endTime: 33,
        lyrics: "We don't talk anymore, we don't talk anymore, we don't talk anymore, like we used to do...",
        aslParaphrase: "PAST, WE TALK CONSTANT. NOW? CONVERSATION NONE. GONE. PAST WAY WE CONNECT? FINISHED.",
        signFocus: ["WE", "TALK", "NOT", "MORE"],
        signKeys: ["we", "talk", "not", "more"],
        signTips: [
          { word: "WE", tip: "Index finger sweeps right shoulder to left shoulder in a warm loop." },
          { word: "TALK", tip: "4 fingers upright, tap index finger on chin twice." },
          { word: "NOT", tip: "Thumb sweeps forward from under chin with a small head shake." },
          { word: "MORE", tip: "Flattened 'O' hands tap fingertips together in center chest." }
        ]
      },
      {
        id: "section-2",
        title: "Verse 1 — The Rumor",
        startTime: 33,
        endTime: 52,
        lyrics: "I just heard you found the one you've been looking... Looking for. I wish I would have known that wasn't me...",
        aslParaphrase: "SOMEONE TELL ME: YOU FIND NEW LOVE. I HOPE PAST I UNDERSTAND: THAT SPECIAL PERSON? NOT ME.",
        signFocus: ["HEAR", "FIND", "NOT", "ME"],
        signKeys: ["hear", "find", "not", "me"],
        signTips: [
          { word: "HEAR", tip: "Point index finger toward ear canal as sound waves arrive." },
          { word: "FIND", tip: "Thumb and index finger pinch together in 'F' shape and pull upward." },
          { word: "NOT", tip: "Thumb sweeps forward from under chin." },
          { word: "ME", tip: "Index finger points directly to center of chest." }
        ]
      },
      {
        id: "section-3",
        title: "Pre-Chorus — The Question",
        startTime: 52,
        endTime: 69,
        lyrics: "'Cause even after all this time I still wonder, why I can't move on just the way you did so easily...",
        aslParaphrase: "MONTHS PASS LONG, BUT MY MIND WONDER: WHY YOU FORGET EASY, BUT ME STILL HURT & STUCK?",
        signFocus: ["TIME", "WONDER", "WHY", "EASY"],
        signKeys: ["time", "wonder", "why", "easy"],
        signTips: [
          { word: "TIME", tip: "Index finger taps the back of your non-dominant wrist (watch face)." },
          { word: "WONDER", tip: "Index finger circles gently beside your temple/forehead." },
          { word: "WHY", tip: "Open hand at forehead pulls down into a 'Y' handshape (thumb & pinky out)." },
          { word: "EASY", tip: "Both hands brush upward twice in a light, effortless gesture." }
        ]
      },
      {
        id: "section-4",
        title: "Chorus 2 — The Longing",
        startTime: 69,
        endTime: 88,
        lyrics: "Don't wanna know what kind of dress you're wearing tonight... If he's holding onto you so tight...",
        aslParaphrase: "TONIGHT, YOU WEAR WHAT? I REFUSE KNOW. ANOTHER PERSON EMBRACE YOU CLOSE? HEART BREAK.",
        signFocus: ["NOT", "WANT", "KNOW", "MISS"],
        signKeys: ["not", "want", "know", "miss"],
        signTips: [
          { word: "NOT", tip: "Thumb sweeps forward from under chin with firm head shake." },
          { word: "WANT", tip: "Both open curved claw hands pull inward toward chest." },
          { word: "KNOW", tip: "Curved flat hand taps gently against the side of the forehead." },
          { word: "MISS", tip: "Open hand rests with feeling over heart with soft melancholic expression." }
        ]
      }
    ]
  },

  // STEP 4: SIGN ALONG
  step4: {
    stepNumber: 4,
    title: "Sign Along with Full Video",
    subtitle: "Put all the pieces together. Follow the song as sections illuminate in real-time. Focus on steady rhythm, clear handshapes, and expressive facial grammar!",
    completionTitle: "🎉 Lesson Complete! You Signed It!",
    completionMessage: "You've successfully learned and signed 'We Don't Talk Anymore' in ASL! You practiced five fundamental signs and synced non-manual expressions with musical timing.",
    nextActionText: "Back to Lessons Menu"
  }
};

// ============================================================================
// LESSON CONTROLLER & MULTI-MEDIA STUDIO ORCHESTRATOR
// ============================================================================

class LessonController {
  constructor(config) {
    this.config = config;
    this.currentStep = 1;
    this.totalSteps = 4;
    this.currentSignIndex = 0;
    
    // YouTube Player State
    this.player = null;
    this.isPlayerReady = false;
    this.activeSection = null;
    this.isLoopingSection = false;
    this.sectionPollInterval = null;
    this.playbackRate = 1.0;
    
    // Step 2 & 3 Hand Motion Studio State
    this.isMotionPaused = false;
    this.isMotionSlow = false;
    this.studioSignIndex = 0;
    this.studioCycleTimer = null;
    this.studioAutoCycle = true;

    // DOM Elements
    this.stepContainer = document.getElementById('lessonStepContainer');
    this.progressBarFill = document.getElementById('lessonProgressFill');
    this.stepIndicatorText = document.getElementById('stepIndicatorText');
    this.btnBack = document.getElementById('btnLessonBack');
    this.btnNext = document.getElementById('btnLessonNext');
    this.creditsBox = document.getElementById('lessonCreditsBox');

    this.init();
  }

  init() {
    this.renderCredits();
    this.setupNavigationButtons();
    this.setupYouTubeAPI();
    this.goToStep(1);
  }

  // --------------------------------------------------------------------------
  // YouTube IFrame Player API Setup
  // --------------------------------------------------------------------------
  setupYouTubeAPI() {
    if (window.YT && window.YT.Player) {
      this.initYTPlayer();
    } else {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        this.initYTPlayer();
      };
    }
  }

  initYTPlayer() {
    const playerTarget = document.getElementById('youtubeIframeTarget');
    if (!playerTarget) return;

    try {
      this.player = new YT.Player('youtubeIframeTarget', {
        videoId: this.config.song.youtubeId,
        playerVars: {
          autoplay: 0,
          controls: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1
        },
        events: {
          onReady: () => {
            this.isPlayerReady = true;
          },
          onStateChange: (event) => {
            this.handlePlayerStateChange(event);
          }
        }
      });
    } catch (err) {
      console.warn("YouTube iframe init note:", err);
    }
  }

  handlePlayerStateChange(event) {
    if (event.data === 1) { // PLAYING
      this.startSectionMonitor();
    } else {
      this.stopSectionMonitor();
    }
  }

  startSectionMonitor() {
    if (this.sectionPollInterval) clearInterval(this.sectionPollInterval);
    
    this.sectionPollInterval = setInterval(() => {
      if (!this.player || !this.player.getCurrentTime) return;
      const currentTime = this.player.getCurrentTime();

      // Step 3 Section Loop Handling
      if (this.currentStep === 3 && this.activeSection) {
        if (currentTime >= this.activeSection.endTime) {
          if (this.isLoopingSection) {
            this.player.seekTo(this.activeSection.startTime, true);
          } else {
            this.player.pauseVideo();
            this.player.seekTo(this.activeSection.startTime, true);
          }
        }
      }

      // Step 4 Active Section Highlighting
      if (this.currentStep === 4) {
        this.highlightActiveSongSection(currentTime);
      }
    }, 250);
  }

  stopSectionMonitor() {
    if (this.sectionPollInterval) {
      clearInterval(this.sectionPollInterval);
      this.sectionPollInterval = null;
    }
  }

  // --------------------------------------------------------------------------
  // Step Navigation & Progress Bar
  // --------------------------------------------------------------------------
  setupNavigationButtons() {
    if (this.btnBack) {
      this.btnBack.addEventListener('click', () => {
        this.clearStudioTimer();
        if (this.currentStep > 1) {
          this.goToStep(this.currentStep - 1);
        } else {
          window.location.href = "index.html";
        }
      });
    }

    if (this.btnNext) {
      this.btnNext.addEventListener('click', () => {
        this.clearStudioTimer();
        if (this.currentStep < this.totalSteps) {
          this.goToStep(this.currentStep + 1);
        } else {
          window.location.href = "index.html#how-it-works";
        }
      });
    }
  }

  goToStep(stepNumber) {
    this.clearStudioTimer();
    this.currentStep = Math.max(1, Math.min(stepNumber, this.totalSteps));

    const percent = ((this.currentStep) / this.totalSteps) * 100;
    if (this.progressBarFill) {
      this.progressBarFill.style.width = `${percent}%`;
    }
    if (this.stepIndicatorText) {
      this.stepIndicatorText.textContent = `Step ${this.currentStep} of ${this.totalSteps}`;
    }

    if (this.btnBack) {
      this.btnBack.textContent = this.currentStep === 1 ? "← Home" : "← Back";
    }
    if (this.btnNext) {
      if (this.currentStep === this.totalSteps) {
        this.btnNext.textContent = "Finish Lesson ✓";
      } else {
        this.btnNext.textContent = `Next: Step ${this.currentStep + 1} →`;
      }
    }

    this.renderCurrentStep();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderCurrentStep() {
    if (!this.stepContainer) return;

    switch (this.currentStep) {
      case 1:
        this.renderStep1();
        break;
      case 2:
        this.renderStep2();
        break;
      case 3:
        this.renderStep3();
        break;
      case 4:
        this.renderStep4();
        break;
      default:
        this.renderStep1();
    }
  }

  // --------------------------------------------------------------------------
  // STEP 1 RENDER: LISTEN
  // --------------------------------------------------------------------------
  renderStep1() {
    const data = this.config.step1;
    const song = this.config.song;

    this.stepContainer.innerHTML = `
      <section class="lesson-step-card animate-fade-in" aria-labelledby="step1-heading">
        <div class="step-meta-strip">
          <span class="step-tag-pill">Step 01 // Listen</span>
          <span class="step-mood-badge">Mood: ${data.moodTag}</span>
        </div>

        <h2 id="step1-heading" class="step-card-heading">${data.title}</h2>
        <p class="step-card-lead">${data.introText}</p>

        <!-- Media Player Container (YouTube Embed) -->
        <div class="lesson-video-box">
          <div class="video-aspect-frame">
            <iframe 
              id="youtubeIframeTarget"
              src="https://www.youtube-nocookie.com/embed/${song.youtubeId}?enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}"
              title="${song.title} - ${song.artist}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
          <div class="video-meta-bar">
            <div><strong>${song.title}</strong> — ${song.artist}</div>
            <span class="tempo-chip">${song.bpm}</span>
          </div>
        </div>

        <!-- Listening Guidance Cards -->
        <div class="listen-tips-grid">
          ${data.listenTips.map(tip => `
            <div class="listen-tip-card">
              <span class="listen-tip-icon">${tip.icon}</span>
              <div>
                <h3 class="listen-tip-title">${tip.label}</h3>
                <p class="listen-tip-desc">${tip.description}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="step-callout-hint">
          <span>💡 <strong>Quick Exercise:</strong> Close your eyes for 30 seconds and nod along to the 1-2-3-4 beat. Feeling this rhythm in your body makes signing smooth rather than robotic.</span>
        </div>
      </section>
    `;

    if (!this.player && window.YT && window.YT.Player) {
      this.initYTPlayer();
    }
  }

  // --------------------------------------------------------------------------
  // STEP 2 RENDER: LEARN THE SIGNS (Drawing Style + Motion Controls)
  // --------------------------------------------------------------------------
  renderStep2() {
    const data = this.config.step2;
    const currentSign = data.signs[this.currentSignIndex];

    this.stepContainer.innerHTML = `
      <section class="lesson-step-card animate-fade-in" aria-labelledby="step2-heading">
        <div class="step-meta-strip">
          <span class="step-tag-pill">Step 02 // Learn the signs</span>
          <span class="step-sign-counter">Sign ${this.currentSignIndex + 1} of ${data.signs.length}</span>
        </div>

        <h2 id="step2-heading" class="step-card-heading">${data.title}</h2>
        <p class="step-card-lead">${data.subtitle}</p>

        <!-- Sign Carousel Indicator Tabs -->
        <div class="sign-selector-bar" role="tablist" aria-label="Sign selection tabs">
          ${data.signs.map((sign, index) => `
            <button 
              type="button" 
              role="tab"
              aria-selected="${index === this.currentSignIndex}"
              class="sign-pill-btn ${index === this.currentSignIndex ? 'is-active' : ''}" 
              data-sign-index="${index}">
              ${sign.word}
            </button>
          `).join('')}
        </div>

        <!-- The Featured Sign Card (One at a time) -->
        <article class="featured-sign-card" aria-live="polite">
          <div class="sign-card-layout">
            
            <!-- Video / Demonstration Placeholder Box with Hand Drawing & Motion Controls -->
            <div class="sign-media-box ${this.isMotionPaused ? 'is-motion-paused' : ''} ${this.isMotionSlow ? 'is-motion-slow' : ''}" id="signMediaBox">
              <div class="sign-art-container">
                ${currentSign.svgPath}
              </div>
              
              <!-- Interactive Motion Demonstration Controls -->
              <div class="media-motion-controls">
                <button type="button" class="motion-control-btn" id="btnToggleSignMotion" aria-label="Play or pause hand motion">
                  ${this.isMotionPaused ? '▶ Play Motion' : '⏸ Pause Motion'}
                </button>
                <button type="button" class="motion-control-btn ${this.isMotionSlow ? 'is-active' : ''}" id="btnSlowSignMotion" aria-label="Slow motion toggle">
                  🐢 0.75x Slow
                </button>
              </div>

              <div class="sign-media-overlay">
                <span class="sign-shape-badge">${currentSign.handshapeName}</span>
              </div>
            </div>

            <!-- Sign Details & How-To Tip -->
            <div class="sign-info-pane">
              <div class="sign-badge-row">
                <span class="sign-type-tag tag-${currentSign.labelType}">
                  ${currentSign.label === 'Performance touch' ? '★ Performance touch' : '✓ Standard sign'}
                </span>
                <span class="sign-index-pill">${this.currentSignIndex + 1} / ${data.signs.length}</span>
              </div>

              <h3 class="sign-word-title">${currentSign.word}</h3>
              <p class="sign-meaning"><strong>Meaning:</strong> ${currentSign.meaning}</p>
              
              <div class="sign-howto-card">
                <h4 class="howto-title">
                  <span aria-hidden="true">🖐️</span>
                  <span>How to form the sign:</span>
                </h4>
                <p class="howto-text">${currentSign.howTo}</p>
              </div>

              <!-- Local Carousel Navigation: Previous / Next Sign -->
              <div class="sign-nav-deck">
                <button 
                  type="button" 
                  class="btn btn-secondary sign-prev-btn" 
                  ${this.currentSignIndex === 0 ? 'disabled' : ''}
                  aria-label="Previous sign">
                  ← Prev Sign
                </button>

                <button 
                  type="button" 
                  class="btn btn-primary sign-next-btn"
                  aria-label="${this.currentSignIndex === data.signs.length - 1 ? 'Continue to practice' : 'Next sign'}">
                  ${this.currentSignIndex === data.signs.length - 1 ? 'Go to Practice (Step 3) →' : 'Next Sign →'}
                </button>
              </div>

            </div>
          </div>
        </article>
      </section>
    `;

    // Hook up local carousel sign buttons
    const signPillButtons = this.stepContainer.querySelectorAll('.sign-pill-btn');
    signPillButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-sign-index'), 10);
        this.currentSignIndex = idx;
        this.renderStep2();
      });
    });

    const prevSignBtn = this.stepContainer.querySelector('.sign-prev-btn');
    if (prevSignBtn) {
      prevSignBtn.addEventListener('click', () => {
        if (this.currentSignIndex > 0) {
          this.currentSignIndex--;
          this.renderStep2();
        }
      });
    }

    const nextSignBtn = this.stepContainer.querySelector('.sign-next-btn');
    if (nextSignBtn) {
      nextSignBtn.addEventListener('click', () => {
        if (this.currentSignIndex < data.signs.length - 1) {
          this.currentSignIndex++;
          this.renderStep2();
        } else {
          this.goToStep(3);
        }
      });
    }

    // Motion control buttons
    const btnToggleMotion = document.getElementById('btnToggleSignMotion');
    if (btnToggleMotion) {
      btnToggleMotion.addEventListener('click', () => {
        this.isMotionPaused = !this.isMotionPaused;
        const mediaBox = document.getElementById('signMediaBox');
        if (mediaBox) {
          mediaBox.classList.toggle('is-motion-paused', this.isMotionPaused);
        }
        btnToggleMotion.textContent = this.isMotionPaused ? '▶ Play Motion' : '⏸ Pause Motion';
      });
    }

    const btnSlowMotion = document.getElementById('btnSlowSignMotion');
    if (btnSlowMotion) {
      btnSlowMotion.addEventListener('click', () => {
        this.isMotionSlow = !this.isMotionSlow;
        const mediaBox = document.getElementById('signMediaBox');
        if (mediaBox) {
          mediaBox.classList.toggle('is-motion-slow', this.isMotionSlow);
        }
        btnSlowMotion.classList.toggle('is-active', this.isMotionSlow);
      });
    }
  }

  // --------------------------------------------------------------------------
  // STEP 3 RENDER: PRACTICE (Section Hand Videos + Interactive Player)
  // --------------------------------------------------------------------------
  renderStep3() {
    const data = this.config.step3;
    const song = this.config.song;

    if (!this.activeSection) {
      this.activeSection = data.sections[0];
    }

    const currentSectionSign = this.activeSection.signTips[this.studioSignIndex] || this.activeSection.signTips[0];
    const currentSignKey = this.activeSection.signKeys[this.studioSignIndex] || this.activeSection.signKeys[0];
    const currentHandSvg = HAND_SVGS[currentSignKey] || HAND_SVGS.we;

    this.stepContainer.innerHTML = `
      <section class="lesson-step-card animate-fade-in" aria-labelledby="step3-heading">
        <div class="step-meta-strip">
          <span class="step-tag-pill">Step 03 // Practice & Hand Videos</span>
          <span class="step-mood-badge">Visual Sign Video for Each Section</span>
        </div>

        <h2 id="step3-heading" class="step-card-heading">${data.title}</h2>
        <p class="step-card-lead">${data.subtitle}</p>

        <!-- ================================================================
             NEW: ANIMATED ASL SIGN MOVEMENT STUDIO ("Video" for this section)
             ================================================================ -->
        <article class="section-motion-studio" id="sectionMotionStudio">
          <div class="studio-top-bar">
            <div class="studio-title-block">
              <span class="studio-badge">🎬 Hand Video</span>
              <span class="studio-section-name">${this.activeSection.title}</span>
            </div>
            
            <div class="toolbar-actions">
              <button type="button" class="btn btn-secondary toolbar-btn" id="btnStudioAutoCycle">
                ${this.studioAutoCycle ? '⏸ Pause Loop' : '▶ Auto Play Loop'}
              </button>
              <button type="button" class="btn btn-secondary toolbar-btn ${this.isMotionSlow ? 'is-active' : ''}" id="btnStudioSlow">
                🐢 0.75x Slow
              </button>
            </div>
          </div>

          <!-- Studio Stage: Animated Drawing Hand + Dynamic Word Cue -->
          <div class="studio-stage ${this.isMotionSlow ? 'is-motion-slow' : ''}">
            <div class="studio-hand-viewport">
              <div id="studioHandSvgContainer">
                ${currentHandSvg}
              </div>
              <span class="studio-sign-tag" id="studioSignTag">Sign: #${currentSectionSign.word}</span>
            </div>

            <div class="studio-details-pane">
              <div class="studio-lyrics-ref">
                <strong>Section Line:</strong> "${this.activeSection.lyrics}"
              </div>
              <h4 class="studio-sign-word" id="studioSignWord">${currentSectionSign.word}</h4>
              <p class="studio-sign-tip" id="studioSignTip"><strong>How to move:</strong> ${currentSectionSign.tip}</p>
              
              <div class="sec-paraphrase-box" style="margin-bottom: 0;">
                <span class="sec-para-tag">Full Section ASL Paraphrase:</span>
                <p class="sec-para-text">${this.activeSection.aslParaphrase}</p>
              </div>
            </div>
          </div>

          <!-- Sign Sequence Navigation Reel -->
          <div class="studio-reel-bar" role="tablist" aria-label="Section signs reel">
            <span class="reel-label">Sequence:</span>
            ${this.activeSection.signTips.map((item, idx) => `
              <button 
                type="button" 
                class="reel-step-btn ${idx === this.studioSignIndex ? 'is-active' : ''}" 
                data-reel-index="${idx}">
                ${idx + 1}. ${item.word}
              </button>
            `).join('')}
          </div>
        </article>

        <!-- ================================================================
             Original Practice Video & Controls Layout
             ================================================================ -->
        <div class="practice-player-layout">
          <div class="lesson-video-box">
            <div class="video-aspect-frame">
              <iframe 
                id="youtubeIframeTarget"
                src="https://www.youtube-nocookie.com/embed/${song.youtubeId}?enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}"
                title="${song.title} - Practice Player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>

            <!-- Practice Toolbar: Speed & Loop Section -->
            <div class="practice-toolbar">
              <div class="toolbar-left">
                <span class="toolbar-label">Active Clip:</span>
                <span class="active-clip-badge" id="activeClipName">${this.activeSection.title}</span>
              </div>

              <div class="toolbar-actions">
                <button type="button" class="btn btn-secondary toolbar-btn ${this.playbackRate === 0.75 ? 'is-active' : ''}" id="btnSlowPlayback" aria-pressed="${this.playbackRate === 0.75}">
                  <span>🐢 Slow (0.75x)</span>
                </button>
                <button type="button" class="btn btn-secondary toolbar-btn ${this.playbackRate === 1.0 ? 'is-active' : ''}" id="btnNormalPlayback" aria-pressed="${this.playbackRate === 1.0}">
                  <span>Normal (1.0x)</span>
                </button>
                <button type="button" class="btn btn-primary toolbar-btn ${this.isLoopingSection ? 'is-looping' : ''}" id="btnRepeatSection" aria-pressed="${this.isLoopingSection}">
                  <span>🔁 Repeat Section</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Song Sections List (With Visual Hand Thumbnails!) -->
        <div class="sections-list-header">
          <h3>Select Song Part to Switch Video & Practice:</h3>
          <span class="hint-text">Click to load hands & seek</span>
        </div>

        <div class="sections-practice-grid" role="list">
          ${data.sections.map((section) => `
            <div 
              class="practice-section-card ${this.activeSection.id === section.id ? 'is-selected' : ''}" 
              data-section-id="${section.id}"
              role="listitem">
              
              <div class="sec-card-header">
                <div class="sec-time-pill">
                  ⏱️ ${this.formatSeconds(section.startTime)} - ${this.formatSeconds(section.endTime)}
                </div>
                <button type="button" class="sec-play-btn" aria-label="Play ${section.title}">
                  🎬 Watch Hands & Play
                </button>
              </div>

              <h4 class="sec-title">${section.title}</h4>
              <p class="sec-lyrics"><strong>Lyrics:</strong> "${section.lyrics}"</p>
              
              <!-- Mini Hand Drawing Preview Row for Each Section -->
              <div class="sec-hands-preview" aria-label="Signs in this section">
                ${section.signKeys.map((key, kIdx) => `
                  <div class="preview-sign-thumb" title="${section.signFocus[kIdx]}">
                    ${HAND_SVGS[key] || HAND_SVGS.we}
                    <span class="preview-thumb-label">${section.signFocus[kIdx]}</span>
                  </div>
                `).join('')}
              </div>

              <div class="sec-paraphrase-box">
                <span class="sec-para-tag">ASL Conceptual Paraphrase:</span>
                <p class="sec-para-text">${section.aslParaphrase}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;

    this.bindStep3Events(data);
    this.startStudioCycle();
  }

  bindStep3Events(data) {
    if (!this.player && window.YT && window.YT.Player) {
      this.initYTPlayer();
    }

    // Section card click -> switch section motion studio & seek video
    const sectionCards = this.stepContainer.querySelectorAll('.practice-section-card');
    sectionCards.forEach(card => {
      card.addEventListener('click', () => {
        const secId = card.getAttribute('data-section-id');
        const found = data.sections.find(s => s.id === secId);
        if (found) {
          this.activeSection = found;
          this.studioSignIndex = 0;
          this.renderStep3();
          this.seekAndPlaySection(found);
        }
      });
    });

    // Reel buttons inside studio
    const reelBtns = this.stepContainer.querySelectorAll('.reel-step-btn');
    reelBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-reel-index'), 10);
        this.studioSignIndex = idx;
        this.updateStudioSignView();
      });
    });

    // Studio Auto Cycle Toggle
    const btnAutoCycle = document.getElementById('btnStudioAutoCycle');
    if (btnAutoCycle) {
      btnAutoCycle.addEventListener('click', () => {
        this.studioAutoCycle = !this.studioAutoCycle;
        btnAutoCycle.textContent = this.studioAutoCycle ? '⏸ Pause Loop' : '▶ Auto Play Loop';
        if (this.studioAutoCycle) {
          this.startStudioCycle();
        } else {
          this.clearStudioTimer();
        }
      });
    }

    // Studio Slow Toggle
    const btnStudioSlow = document.getElementById('btnStudioSlow');
    if (btnStudioSlow) {
      btnStudioSlow.addEventListener('click', () => {
        this.isMotionSlow = !this.isMotionSlow;
        btnStudioSlow.classList.toggle('is-active', this.isMotionSlow);
        const stage = document.querySelector('.studio-stage');
        if (stage) stage.classList.toggle('is-motion-slow', this.isMotionSlow);
      });
    }

    // Practice video controls
    const btnSlow = document.getElementById('btnSlowPlayback');
    const btnNormal = document.getElementById('btnNormalPlayback');

    if (btnSlow) {
      btnSlow.addEventListener('click', () => {
        this.playbackRate = 0.75;
        if (this.player && this.player.setPlaybackRate) {
          this.player.setPlaybackRate(0.75);
        }
        btnSlow.classList.add('is-active');
        btnSlow.setAttribute('aria-pressed', 'true');
        if (btnNormal) {
          btnNormal.classList.remove('is-active');
          btnNormal.setAttribute('aria-pressed', 'false');
        }
      });
    }

    if (btnNormal) {
      btnNormal.addEventListener('click', () => {
        this.playbackRate = 1.0;
        if (this.player && this.player.setPlaybackRate) {
          this.player.setPlaybackRate(1.0);
        }
        btnNormal.classList.add('is-active');
        btnNormal.setAttribute('aria-pressed', 'true');
        if (btnSlow) {
          btnSlow.classList.remove('is-active');
          btnSlow.setAttribute('aria-pressed', 'false');
        }
      });
    }

    const btnRepeat = document.getElementById('btnRepeatSection');
    if (btnRepeat) {
      btnRepeat.addEventListener('click', () => {
        this.isLoopingSection = !this.isLoopingSection;
        btnRepeat.classList.toggle('is-looping', this.isLoopingSection);
        btnRepeat.setAttribute('aria-pressed', String(this.isLoopingSection));
      });
    }
  }

  startStudioCycle() {
    this.clearStudioTimer();
    if (!this.studioAutoCycle || !this.activeSection) return;

    this.studioCycleTimer = setInterval(() => {
      if (!this.activeSection || !this.activeSection.signTips) return;
      this.studioSignIndex = (this.studioSignIndex + 1) % this.activeSection.signTips.length;
      this.updateStudioSignView();
    }, 2800);
  }

  clearStudioTimer() {
    if (this.studioCycleTimer) {
      clearInterval(this.studioCycleTimer);
      this.studioCycleTimer = null;
    }
  }

  updateStudioSignView() {
    if (!this.activeSection) return;
    const currentSign = this.activeSection.signTips[this.studioSignIndex];
    const currentKey = this.activeSection.signKeys[this.studioSignIndex];
    const svgCode = HAND_SVGS[currentKey] || HAND_SVGS.we;

    const svgContainer = document.getElementById('studioHandSvgContainer');
    if (svgContainer) svgContainer.innerHTML = svgCode;

    const tag = document.getElementById('studioSignTag');
    if (tag) tag.textContent = `Sign: #${currentSign.word}`;

    const word = document.getElementById('studioSignWord');
    if (word) word.textContent = currentSign.word;

    const tip = document.getElementById('studioSignTip');
    if (tip) tip.innerHTML = `<strong>How to move:</strong> ${currentSign.tip}`;

    // Update active state on reel buttons
    const reelBtns = this.stepContainer.querySelectorAll('.reel-step-btn');
    reelBtns.forEach((btn, idx) => {
      btn.classList.toggle('is-active', idx === this.studioSignIndex);
    });
  }

  seekAndPlaySection(section) {
    if (this.player && this.player.seekTo) {
      this.player.seekTo(section.startTime, true);
      this.player.playVideo();
      if (this.player.setPlaybackRate) {
        this.player.setPlaybackRate(this.playbackRate);
      }
    }
  }

  // --------------------------------------------------------------------------
  // STEP 4 RENDER: SIGN ALONG & COMPLETION CELEBRATION
  // --------------------------------------------------------------------------
  renderStep4() {
    const data = this.config.step4;
    const step3Data = this.config.step3;
    const song = this.config.song;

    this.stepContainer.innerHTML = `
      <section class="lesson-step-card animate-fade-in" aria-labelledby="step4-heading">
        <div class="step-meta-strip">
          <span class="step-tag-pill">Step 04 // Sign Along</span>
          <span class="step-mood-badge">Full Performance Mode</span>
        </div>

        <h2 id="step4-heading" class="step-card-heading">${data.title}</h2>
        <p class="step-card-lead">${data.subtitle}</p>

        <!-- Full Video Player Frame -->
        <div class="lesson-video-box">
          <div class="video-aspect-frame">
            <iframe 
              id="youtubeIframeTarget"
              src="https://www.youtube-nocookie.com/embed/${song.youtubeId}?enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}"
              title="${song.title} - Full Performance"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </div>

        <!-- Live Lyrics & ASL Teleprompter -->
        <div class="teleprompter-box">
          <div class="teleprompter-header">
            <h4>Live Sign Cue Tracker:</h4>
            <span class="live-pulse-badge">● In Sync</span>
          </div>

          <div class="teleprompter-track" id="teleprompterTrack">
            ${step3Data.sections.map(section => `
              <div class="teleprompter-row" id="prompter-${section.id}" data-start="${section.startTime}" data-end="${section.endTime}">
                <div class="prompter-time">${this.formatSeconds(section.startTime)}</div>
                <div class="prompter-content">
                  <div class="prompter-lyrics">"${section.lyrics}"</div>
                  <div class="prompter-asl">${section.aslParaphrase}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Lesson Completion Banner -->
        <div class="lesson-complete-banner" id="lessonCompleteBanner">
          <div class="complete-icon-box" aria-hidden="true">🎉</div>
          <div class="complete-content">
            <h3 class="complete-title">${data.completionTitle}</h3>
            <p class="complete-desc">${data.completionMessage}</p>
            
            <div class="complete-actions">
              <a href="index.html" class="btn btn-primary">
                <span>← ${data.nextActionText}</span>
              </a>
              <button type="button" class="btn btn-secondary" id="btnReplayLesson">
                <span>🔄 Practice Again</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    `;

    if (!this.player && window.YT && window.YT.Player) {
      this.initYTPlayer();
    }

    const replayBtn = document.getElementById('btnReplayLesson');
    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        this.goToStep(1);
      });
    }
  }

  highlightActiveSongSection(currentTime) {
    const rows = document.querySelectorAll('.teleprompter-row');
    rows.forEach(row => {
      const start = parseFloat(row.getAttribute('data-start'));
      const end = parseFloat(row.getAttribute('data-end'));
      if (currentTime >= start && currentTime <= end) {
        row.classList.add('is-current');
      } else {
        row.classList.remove('is-current');
      }
    });
  }

  renderCredits() {
    if (!this.creditsBox) return;
    this.creditsBox.innerHTML = `
      <div class="lesson-credits-inner">
        <p class="credit-line">
          <strong>Credits:</strong> ${this.config.song.credits}
        </p>
        <p class="disclaimer-line">
          <strong>Notice:</strong> ${this.config.song.disclaimer}
        </p>
      </div>
    `;
  }

  formatSeconds(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${String(s).padStart(2, '0')}`;
  }
}

// Instantiate Lesson Controller when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.echoLesson = new LessonController(LESSON_CONFIG);
});
