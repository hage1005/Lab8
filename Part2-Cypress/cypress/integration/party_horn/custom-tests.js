describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Lab8/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('change input volumn', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(75);
    });
  });

  it('change slider', () => {
    cy.get('#volume-slider').invoke('val', 75).trigger('input');
    cy.get('#volume-number').then( ($el) => {
      expect($el).to.have.value(75);
    })
  });

  it('volume of the <audio> element chaned when the slider changed', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then( ($el) => {
      expect($el).to.have.prop('volume', 0.33);
    })
  });

  it('image and sound soucrce change when select party horn', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then( ($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then( ($el) =>{
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    })
  });

  it('volumn image changes when increasing, from 0 to 1, 1 to 2, and 2 to 3', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').then( ($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg')
    });

    cy.get('#volume-slider').invoke('val', 1).trigger('input');
    cy.get('#volume-image').then( ($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
    });

    cy.get('#volume-slider').invoke('val', 34).trigger('input');
    cy.get('#volume-image').then( ($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')
    });

    cy.get('#volume-slider').invoke('val', 67).trigger('input');
    cy.get('#volume-image').then( ($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg')
    });
  });

  it('honk btn disabled when  textbox is empty or non-number', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then( ($el) => {
      expect($el).to.have.attr('disabled');
    });

    cy.get('#volume-number').clear().type('abc');
    cy.get('#honk-btn').then( ($el) => {
      expect($el).to.have.attr('disabled');
    });
  })

  it('error shown when number exceeds range', () => {
    cy.get('#volume-number').clear().type('110');
    cy.get('input:invalid').then( $el =>{
      console.log($el);
      expect($el).to.have.length(1);
    })
  })

});