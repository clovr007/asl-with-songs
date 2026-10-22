/**
 * ============================================================================
 * ECHOSIGN - LESSON DATA & LOGIC (js/lessons.js)
 * All content for "We Don't Talk Anymore" ASL lesson is defined here.
 * No lesson text is hard-coded into the HTML markup.
 * ============================================================================
 */

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

  // --------------------------------------------------------------------------
  // STEP 1: LISTEN
  // --------------------------------------------------------------------------
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
        description: "The repeating chorus ('We don't talk anymore') gives you repeated practice with the core vocabulary."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // STEP 2: LEARN THE SIGNS (5 Signs from provided handshape references)
  // --------------------------------------------------------------------------
  step2: {
    stepNumber: 2,
    title: "Learn the Key Signs",
    subtitle: "Master the 5 core signs that power this song's chorus. Study each handshape and movement before putting them together.",
    signs: [
      {
        id: "we",
        word: "WE",
        label: "Standard sign",
        labelType: "standard",
        meaning: "Refers to the speaker and another person together ('you and me').",
        howTo: "With your dominant index finger pointed upward (or soft 'W' handshape), touch your right shoulder, loop forward in a smooth arc across your chest, and touch your left shoulder.",
        handshapeName: "Index Finger / Arc",
        svgPath: `
          <!-- Handshape 1: Pointing index finger curved gesture -->
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="sign-hand-svg">
            <circle cx="60" cy="60" r="54" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="4"/>
            <!-- Arc path representing shoulder-to-shoulder motion -->
            <path d="M28 82C35 48 85 48 92 82" stroke="#F27B7B" stroke-width="4" stroke-dasharray="6 6" stroke-linecap="round"/>
            <polygon points="90,75 96,84 84,85" fill="#F27B7B"/>
            <!-- Hand graphic: index pointing upward -->
            <g transform="translate(42, 28)">
              <rect x="12" y="10" width="12" height="34" rx="6" fill="#F27B7B" stroke="#2B2F7A" stroke-width="3"/>
              <rect x="22" y="24" width="10" height="22" rx="5" fill="#DC6565" stroke="#2B2F7A" stroke-width="2.5"/>
              <rect x="30" y="28" width="9" height="18" rx="4.5" fill="#DC6565" stroke="#2B2F7A" stroke-width="2.5"/>
              <path d="M6 34C6 24 12 24 16 28L16 48C16 54 12 56 6 50Z" fill="#F27B7B" stroke="#2B2F7A" stroke-width="2.5"/>
              <path d="M6 46C6 58 12 62 26 62C40 62 44 56 44 46V36" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="3"/>
            </g>
          </svg>
        `
      },
      {
        id: "talk",
        word: "TALK",
        label: "Standard sign",
        labelType: "standard",
        meaning: "To speak, converse, or verbally communicate with someone.",
        howTo: "Form a '4' handshape (four fingers spread upright, thumb tucked). Tap your index finger gently against your chin or mouth two times in a natural conversation rhythm.",
        handshapeName: "4-Finger / Chin Tap",
        svgPath: `
          <!-- Handshape 2: 4-finger spread chin tap -->
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="sign-hand-svg">
            <circle cx="60" cy="60" r="54" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="4"/>
            <!-- Tapping motion lines -->
            <path d="M82 34C88 38 90 46 88 52" stroke="#5B5FA8" stroke-width="3" stroke-linecap="round"/>
            <path d="M88 30C96 36 98 48 95 56" stroke="#5B5FA8" stroke-width="3" stroke-linecap="round"/>
            <!-- Hand graphic: 4 fingers upright -->
            <g transform="translate(32, 26)">
              <rect x="8" y="6" width="9" height="34" rx="4.5" fill="#F27B7B" stroke="#2B2F7A" stroke-width="3"/>
              <rect x="19" y="4" width="9" height="36" rx="4.5" fill="#F27B7B" stroke="#2B2F7A" stroke-width="3"/>
              <rect x="30" y="8" width="9" height="32" rx="4.5" fill="#F27B7B" stroke="#2B2F7A" stroke-width="3"/>
              <rect x="41" y="14" width="8" height="26" rx="4" fill="#F27B7B" stroke="#2B2F7A" stroke-width="3"/>
              <path d="M4 36C4 28 8 28 10 32L10 48C10 54 8 56 4 52Z" fill="#DC6565" stroke="#2B2F7A" stroke-width="2.5"/>
              <path d="M4 42C4 56 12 64 28 64C44 64 52 56 52 44V34" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="3"/>
            </g>
          </svg>
        `
      },
      {
        id: "not",
        word: "NOT",
        label: "Standard sign",
        labelType: "standard",
        meaning: "Negation, denial, or absence ('do not / don't').",
        howTo: "Make a modified 'A' fist with your thumb extended outward. Place the tip of your thumb right beneath your chin, then flick or sweep it forward while shaking your head slightly.",
        handshapeName: "Thumb Under Chin / Sweep",
        svgPath: `
          <!-- Handshape 3: Thumb under chin flicking outward -->
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="sign-hand-svg">
            <circle cx="60" cy="60" r="54" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="4"/>
            <!-- Sweep forward arrow -->
            <path d="M68 62L96 62" stroke="#F27B7B" stroke-width="4" stroke-linecap="round"/>
            <polygon points="94,56 104,62 94,68" fill="#F27B7B"/>
            <!-- Hand graphic: thumb out from fist -->
            <g transform="translate(28, 32)">
              <rect x="22" y="18" width="30" height="28" rx="8" fill="#5B5FA8" stroke="#2B2F7A" stroke-width="3"/>
              <path d="M12 28L28 20L32 30L16 38Z" fill="#F27B7B" stroke="#2B2F7A" stroke-width="3"/>
              <circle cx="12" cy="34" r="5" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="2.5"/>
              <path d="M22 36C22 48 30 52 42 52C48 52 52 48 52 42" stroke="#2B2F7A" stroke-width="3"/>
            </g>
          </svg>
        `
      },
      {
        id: "more",
        word: "MORE",
        label: "Standard sign",
        labelType: "standard",
        meaning: "Additional, continuation, or repeating (used with NOT for 'anymore').",
        howTo: "Form flattened 'O' handshapes with both hands (fingertips touching thumbs, like gentle duck bills). Bring hands together so the fingertips tap in front of your chest twice.",
        handshapeName: "Flattened 'O' / Tapping Fingertips",
        svgPath: `
          <!-- Handshape 4: Flattened O hands tapping together -->
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="sign-hand-svg">
            <circle cx="60" cy="60" r="54" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="4"/>
            <!-- Collision / meeting indicator lines -->
            <line x1="60" y1="36" x2="60" y2="28" stroke="#5B5FA8" stroke-width="3" stroke-linecap="round"/>
            <line x1="54" y1="38" x2="48" y2="32" stroke="#5B5FA8" stroke-width="3" stroke-linecap="round"/>
            <line x1="66" y1="38" x2="72" y2="32" stroke="#5B5FA8" stroke-width="3" stroke-linecap="round"/>
            <!-- Left hand tapered -->
            <path d="M26 68C24 50 38 46 56 50C58 54 56 60 52 64C42 66 32 76 26 68Z" fill="#F27B7B" stroke="#2B2F7A" stroke-width="3"/>
            <!-- Right hand tapered meeting it -->
            <path d="M94 68C96 50 82 46 64 50C62 54 64 60 68 64C78 66 88 76 94 68Z" fill="#5B5FA8" stroke="#2B2F7A" stroke-width="3"/>
          </svg>
        `
      },
      {
        id: "miss",
        word: "MISS",
        label: "Performance touch",
        labelType: "performance",
        meaning: "Emotional yearning, longing, or feeling an aching absence.",
        howTo: "Draw your dominant index finger softly across the front of your chin with an inward curling motion, or place your open palm over your heart with a subtle, melancholic head tilt.",
        handshapeName: "Chin Curl / Hand to Heart",
        svgPath: `
          <!-- Handshape 5: Longing touch across chin / heart -->
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="sign-hand-svg">
            <circle cx="60" cy="60" r="54" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="4"/>
            <!-- Emotional resonance heart icon -->
            <path d="M60 48C56 42 48 42 45 46C41 52 48 60 60 68C72 60 79 52 75 46C72 42 64 42 60 48Z" fill="#F27B7B" stroke="#2B2F7A" stroke-width="2.5"/>
            <!-- Hand gentle touch gesture -->
            <g transform="translate(36, 42)">
              <rect x="14" y="16" width="10" height="28" rx="5" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="3"/>
              <rect x="25" y="14" width="9" height="30" rx="4.5" fill="#FFF4E3" stroke="#2B2F7A" stroke-width="3"/>
              <path d="M6 34C6 26 12 26 14 30L14 46C14 52 10 54 6 48Z" fill="#5B5FA8" stroke="#2B2F7A" stroke-width="2.5"/>
            </g>
          </svg>
        `
      }
    ]
  },

  // --------------------------------------------------------------------------
  // STEP 3: PRACTICE (Section by section with start/end times, lyrics & ASL paraphrase)
  // --------------------------------------------------------------------------
  step3: {
    stepNumber: 3,
    title: "Section-by-Section Practice",
    subtitle: "Click any section below to seek and loop that specific clip. Practice signing at regular speed or dial down to 0.75x.",
    sections: [
      {
        id: "section-1",
        title: "Chorus 1 — The Hook",
        startTime: 14,
        endTime: 33,
        lyrics: "We don't talk anymore, we don't talk anymore, we don't talk anymore, like we used to do...",
        aslParaphrase: "PAST, WE TALK CONSTANT. NOW? CONVERSATION NONE. GONE. PAST WAY WE CONNECT? FINISHED.",
        signFocus: ["WE", "TALK", "NOT", "MORE"]
      },
      {
        id: "section-2",
        title: "Verse 1 — The Rumor",
        startTime: 33,
        endTime: 52,
        lyrics: "I just heard you found the one you've been looking... Looking for. I wish I would have known that wasn't me...",
        aslParaphrase: "SOMEONE TELL ME: YOU FIND NEW LOVE. I HOPE PAST I UNDERSTAND: THAT SPECIAL PERSON? NOT ME.",
        signFocus: ["HEAR", "FIND", "NOT", "ME"]
      },
      {
        id: "section-3",
        title: "Pre-Chorus — The Question",
        startTime: 52,
        endTime: 69,
        lyrics: "'Cause even after all this time I still wonder, why I can't move on just the way you did so easily...",
        aslParaphrase: "MONTHS PASS LONG, BUT MY MIND WONDER: WHY YOU FORGET EASY, BUT ME STILL HURT & STUCK?",
        signFocus: ["TIME", "WONDER", "WHY", "EASY"]
      },
      {
        id: "section-4",
        title: "Chorus 2 — The Longing",
        startTime: 69,
        endTime: 88,
        lyrics: "Don't wanna know what kind of dress you're wearing tonight... If he's holding onto you so tight...",
        aslParaphrase: "TONIGHT, YOU WEAR WHAT? I REFUSE KNOW. ANOTHER PERSON EMBRACE YOU CLOSE? HEART BREAK.",
        signFocus: ["NOT", "WANT", "KNOW", "MISS"]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // STEP 4: SIGN ALONG (Full Song Performance with Live Highlighting)
  // --------------------------------------------------------------------------
  step4: {
    stepNumber: 4,
    title: "Sign Along with Full Video",
    subtitle: "Put all the pieces together. Follow the song as sections illuminate in real-time. Don't worry about perfection—focus on rhythm and emotion!",
    completionTitle: "🎉 Lesson Complete! You Signed It!",
    completionMessage: "You've successfully learned and signed 'We Don't Talk Anymore' in ASL! You practiced five fundamental signs and synced non-manual expressions with musical timing.",
    nextActionText: "Back to Lessons Menu"
  }
};

// ============================================================================
// LESSON CONTROLLER & YOUTUBE API ORCHESTRATOR
// ============================================================================

class LessonController {
  constructor(config) {
    this.config = config;
    this.currentStep = 1;
    this.totalSteps = 4;
    this.currentSignIndex = 0;
    
    // YouTube Player reference & state
    this.player = null;
    this.isPlayerReady = false;
    this.activeSection = null;
    this.isLoopingSection = false;
    this.sectionPollInterval = null;
    this.playbackRate = 1.0;
    
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
            console.log("YouTube Player is ready for EchoSign lesson.");
          },
          onStateChange: (event) => {
            this.handlePlayerStateChange(event);
          }
        }
      });
    } catch (err) {
      console.warn("YouTube player init:", err);
    }
  }

  handlePlayerStateChange(event) {
    if (event.data === 1) { // YT.PlayerState.PLAYING
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
        if (this.currentStep > 1) {
          this.goToStep(this.currentStep - 1);
        } else {
          window.location.href = "index.html";
        }
      });
    }

    if (this.btnNext) {
      this.btnNext.addEventListener('click', () => {
        if (this.currentStep < this.totalSteps) {
          this.goToStep(this.currentStep + 1);
        } else {
          window.location.href = "index.html#how-it-works";
        }
      });
    }
  }

  goToStep(stepNumber) {
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
  // STEP 2 RENDER: LEARN THE SIGNS (5 Sign Cards Shown One At A Time)
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
            
            <!-- Video / Demonstration Placeholder Box -->
            <div class="sign-media-box">
              <div class="sign-art-container">
                ${currentSign.svgPath}
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
  }

  // --------------------------------------------------------------------------
  // STEP 3 RENDER: PRACTICE (Interactive Section Seeker, 0.75x Speed & Loop)
  // --------------------------------------------------------------------------
  renderStep3() {
    const data = this.config.step3;
    const song = this.config.song;

    if (!this.activeSection) {
      this.activeSection = data.sections[0];
    }

    this.stepContainer.innerHTML = `
      <section class="lesson-step-card animate-fade-in" aria-labelledby="step3-heading">
        <div class="step-meta-strip">
          <span class="step-tag-pill">Step 03 // Practice</span>
          <span class="step-mood-badge">Interactive Section Seeker</span>
        </div>

        <h2 id="step3-heading" class="step-card-heading">${data.title}</h2>
        <p class="step-card-lead">${data.subtitle}</p>

        <!-- Practice Player Embed & Speed Controls -->
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
                <!-- Slow 0.75x Button -->
                <button type="button" class="btn btn-secondary toolbar-btn ${this.playbackRate === 0.75 ? 'is-active' : ''}" id="btnSlowPlayback" aria-pressed="${this.playbackRate === 0.75}">
                  <span>🐢 Slow (0.75x)</span>
                </button>

                <!-- Normal 1.0x Button -->
                <button type="button" class="btn btn-secondary toolbar-btn ${this.playbackRate === 1.0 ? 'is-active' : ''}" id="btnNormalPlayback" aria-pressed="${this.playbackRate === 1.0}">
                  <span>Normal (1.0x)</span>
                </button>

                <!-- Repeat Section Toggle -->
                <button type="button" class="btn btn-primary toolbar-btn ${this.isLoopingSection ? 'is-looping' : ''}" id="btnRepeatSection" aria-pressed="${this.isLoopingSection}">
                  <span>🔁 Repeat Section</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Song Sections List -->
        <div class="sections-list-header">
          <h3>Select a Section to Practice:</h3>
          <span class="hint-text">Click to seek & isolate</span>
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
                  ▶ Play Section
                </button>
              </div>

              <h4 class="sec-title">${section.title}</h4>
              <p class="sec-lyrics"><strong>Lyrics:</strong> "${section.lyrics}"</p>
              
              <div class="sec-paraphrase-box">
                <span class="sec-para-tag">ASL Conceptual Paraphrase:</span>
                <p class="sec-para-text">${section.aslParaphrase}</p>
              </div>

              <div class="sec-tags">
                ${section.signFocus.map(sign => `<span class="focus-chip">#${sign}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;

    this.bindStep3Events(data);
  }

  bindStep3Events(data) {
    if (!this.player && window.YT && window.YT.Player) {
      this.initYTPlayer();
    }

    const sectionCards = this.stepContainer.querySelectorAll('.practice-section-card');
    sectionCards.forEach(card => {
      card.addEventListener('click', () => {
        const secId = card.getAttribute('data-section-id');
        const found = data.sections.find(s => s.id === secId);
        if (found) {
          this.activeSection = found;
          
          sectionCards.forEach(c => c.classList.remove('is-selected'));
          card.classList.add('is-selected');

          const badge = document.getElementById('activeClipName');
          if (badge) badge.textContent = found.title;

          this.seekAndPlaySection(found);
        }
      });
    });

    // Speed Controls
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

    // Repeat Section Button Toggle
    const btnRepeat = document.getElementById('btnRepeatSection');
    if (btnRepeat) {
      btnRepeat.addEventListener('click', () => {
        this.isLoopingSection = !this.isLoopingSection;
        btnRepeat.classList.toggle('is-looping', this.isLoopingSection);
        btnRepeat.setAttribute('aria-pressed', String(this.isLoopingSection));
      });
    }
  }

  seekAndPlaySection(section) {
    if (this.player && this.player.seekTo) {
      this.player.seekTo(section.startTime, true);
      this.player.playVideo();
      if (this.player.setPlaybackRate) {
        this.player.setPlaybackRate(this.playbackRate);
      }
    } else {
      console.log(`Seeking video to ${section.startTime}s for ${section.title}`);
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

  // --------------------------------------------------------------------------
  // Mandatory Credits & Cultural Disclaimers
  // --------------------------------------------------------------------------
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
