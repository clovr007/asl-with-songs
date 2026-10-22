/**
 * ============================================================================
 * ECHOSIGN - MAIN JAVASCRIPT
 * Handles mobile navigation, decorative music-player interactions,
 * and beginner-friendly UI controls.
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initDecorativePlayer();
  initSpeedControls();
});

/**
 * 1. Mobile Drawer Navigation
 * Toggles the mobile navigation drawer and updates ARIA accessibility attributes.
 */
function initMobileNavigation() {
  const navToggle = document.getElementById('navToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (!navToggle || !mobileDrawer) return;

  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    const nextState = !isExpanded;

    navToggle.setAttribute('aria-expanded', String(nextState));
    mobileDrawer.classList.toggle('is-open', nextState);
  });

  // Close the drawer when pressing Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
      mobileDrawer.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });

  // Close drawer if user clicks outside
  document.addEventListener('click', (event) => {
    const isInsideNav = navToggle.contains(event.target) || mobileDrawer.contains(event.target);
    if (!isInsideNav && mobileDrawer.classList.contains('is-open')) {
      mobileDrawer.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * 2. Decorative Music Player Interaction
 * Controls the "Now Learning" player card: play/pause toggle,
 * animated equalizer bars, and a faux progress bar timer.
 */
function initDecorativePlayer() {
  const playBtn = document.getElementById('playerPlayBtn');
  const equalizer = document.getElementById('liveEqualizer');
  const progressFill = document.getElementById('playerProgressFill');
  const progressTrack = document.getElementById('playerProgressTrack');
  const timeCurrent = document.getElementById('playerTimeCurrent');
  const timeTotal = document.getElementById('playerTimeTotal');
  const playIcon = document.getElementById('playerPlayIcon');
  const pauseIcon = document.getElementById('playerPauseIcon');

  if (!playBtn) return;

  // Track playback state in seconds (simulating "Count on Me" - Bruno Mars)
  let isPlaying = true;
  let currentSeconds = 42;
  const totalSeconds = 197; // 03:17
  let playbackTimer = null;

  // Format seconds as MM:SS (e.g. 00:42)
  function formatTime(totalSec) {
    const minutes = Math.floor(totalSec / 60);
    const seconds = totalSec % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  // Update visual progress percentage and timestamp
  function updateProgress() {
    const percentage = (currentSeconds / totalSeconds) * 100;
    if (progressFill) {
      progressFill.style.width = `${percentage}%`;
    }
    if (timeCurrent) {
      timeCurrent.textContent = formatTime(currentSeconds);
    }
  }

  // Start progress ticker
  function startPlayback() {
    if (playbackTimer) clearInterval(playbackTimer);
    playbackTimer = setInterval(() => {
      currentSeconds++;
      if (currentSeconds >= totalSeconds) {
        currentSeconds = 0; // Loop back to start
      }
      updateProgress();
    }, 1000);

    if (equalizer) equalizer.classList.remove('is-paused');
    if (playIcon) playIcon.style.display = 'none';
    if (pauseIcon) pauseIcon.style.display = 'block';
    playBtn.setAttribute('aria-label', 'Pause demo song');
  }

  // Stop progress ticker
  function pausePlayback() {
    if (playbackTimer) {
      clearInterval(playbackTimer);
      playbackTimer = null;
    }

    if (equalizer) equalizer.classList.add('is-paused');
    if (playIcon) playIcon.style.display = 'block';
    if (pauseIcon) pauseIcon.style.display = 'none';
    playBtn.setAttribute('aria-label', 'Play demo song');
  }

  // Toggle play/pause on click
  playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      startPlayback();
    } else {
      pausePlayback();
    }
  });

  // Interactive scrubber click (jump to position in track)
  if (progressTrack) {
    progressTrack.addEventListener('click', (event) => {
      const rect = progressTrack.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
      currentSeconds = Math.floor(ratio * totalSeconds);
      updateProgress();
    });
  }

  // Initial state setup
  updateProgress();
  startPlayback();

  // Decorative previous / next track click feedback
  const prevBtn = document.getElementById('playerPrevBtn');
  const nextBtn = document.getElementById('playerNextBtn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentSeconds = 0;
      updateProgress();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentSeconds = Math.min(currentSeconds + 15, totalSeconds);
      updateProgress();
    });
  }
}

/**
 * 3. Learning Speed Controls
 * Allows beginners to preview ASL tempo adjustment (0.75x, 1x, 1.25x).
 */
function initSpeedControls() {
  const speedButtons = document.querySelectorAll('.speed-btn');

  speedButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      speedButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      // Visual announcement badge could be hooked here for future audio/video integration
      const speed = btn.getAttribute('data-speed');
      console.log(`EchoSign learning tempo set to: ${speed}x`);
    });
  });
}
