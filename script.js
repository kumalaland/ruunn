document.addEventListener('DOMContentLoaded', function() {
    // Create overlay container
    const overlay = document.createElement('div');
    overlay.className = 'face-overlay';
    document.body.appendChild(overlay);
    
    // Create face components
    const face = document.createElement('div');
    face.className = 'animated-face';
    overlay.appendChild(face);
    
    // Create eyes container
    const eyesContainer = document.createElement('div');
    eyesContainer.className = 'eyes-container';
    face.appendChild(eyesContainer);
    
    // Create left eye
    const leftEye = document.createElement('div');
    leftEye.className = 'eye left-eye';
    eyesContainer.appendChild(leftEye);
    
    // Create right eye
    const rightEye = document.createElement('div');
    rightEye.className = 'eye right-eye';
    eyesContainer.appendChild(rightEye);
    
    // Create mouth container
    const mouthContainer = document.createElement('div');
    mouthContainer.className = 'mouth-container';
    face.appendChild(mouthContainer);
    
    // Create mouth parts
    const mouthLeft = document.createElement('div');
    mouthLeft.className = 'mouth-part mouth-left';
    mouthContainer.appendChild(mouthLeft);
    
    const mouthCenter = document.createElement('div');
    mouthCenter.className = 'mouth-part mouth-center';
    mouthContainer.appendChild(mouthCenter);
    
    const mouthRight = document.createElement('div');
    mouthRight.className = 'mouth-part mouth-right';
    mouthContainer.appendChild(mouthRight);
    
    // Animation sequence
    setTimeout(() => {
      leftEye.classList.add('appear');
    }, 500);
    
    setTimeout(() => {
      rightEye.classList.add('appear');
    }, 1000);
    
    setTimeout(() => {
      mouthLeft.classList.add('appear');
    }, 1500);
    
    setTimeout(() => {
      mouthCenter.classList.add('appear');
    }, 2000);
    
    setTimeout(() => {
      mouthRight.classList.add('appear');
    }, 2500);
    
    // Add click event to transition to the main site
    overlay.addEventListener('click', function() {
      overlay.classList.add('fade-out');
      
      // Wait for the fade-out animation to complete
      setTimeout(() => {
        overlay.style.display = 'none';
        document.body.classList.add('show-site');
        document.body.classList.remove('loading');
      }, 1000);
    });
  });

  