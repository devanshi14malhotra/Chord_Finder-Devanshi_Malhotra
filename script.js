document.addEventListener('DOMContentLoaded', () => {
    const instrumentSelect = document.getElementById('instrument');
    const chordSelect = document.getElementById('chord');
    const chordImage = document.getElementById('chord-image');
    
    const chordImages = {
        ukulele: {
            C: 'images/ukulele_c.jpg',
            G: 'images/ukulele_g.jpg',
            F: 'images/ukulele_f.jpg',
            Amin: 'images/ukulele_amin.jpg',
            Emin: 'images/ukulele_emin.jpg',
            D: 'images/ukulele_d.jpg',
            Bmin: 'images/ukulele_bmin.jpg',
            E: 'images/ukulele_e.jpg',
            A: 'images/ukulele_a.jpg'
        },
        piano: {
            C: 'images/piano_c.jpg',
            G: 'images/piano_g.jpg',
            F: 'images/piano_f.jpg',
            Amin: 'images/piano_amin.jpg',
            Emin: 'images/piano_emin.jpg',
            D: 'images/piano_d.jpg',
            Bmin: 'images/piano_bmin.jpg',
            E: 'images/piano_e.jpg',
            A: 'images/piano_a.jpg'
        },
        guitar: {
            C: 'images/guitar_c.jpg',
            G: 'images/guitar_g.jpg',
            F: 'images/guitar_f.jpg',
            Amin: 'images/guitar_amin.jpg',
            Emin: 'images/guitar_emin.jpg',
            D: 'images/guitar_d.jpg',
            Bmin: 'images/guitar_bmin.jpg',
            E: 'images/guitar_e.jpg',
            A: 'images/guitar_a.jpg'
        }
    };

    function updateChordDiagram() {
        const instrument = instrumentSelect.value;
        const chord = chordSelect.value;
        chordImage.src = chordImages[instrument][chord];
        chordImage.classList.add("fadeIn");
    }

    instrumentSelect.addEventListener('change', updateChordDiagram);
    chordSelect.addEventListener('change', updateChordDiagram);

    // Initial load
    updateChordDiagram();

    // Buttons for switching between instruments
    document.getElementById('ukulele-button').addEventListener('click', () => {
        instrumentSelect.value = 'ukulele';
        updateChordDiagram();
    });

    document.getElementById('piano-button').addEventListener('click', () => {
        instrumentSelect.value = 'piano';
        updateChordDiagram();
    });

    document.getElementById('guitar-button').addEventListener('click', () => {
        instrumentSelect.value = 'guitar';
        updateChordDiagram();
    });
});
