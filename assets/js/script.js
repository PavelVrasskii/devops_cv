function showSection(sectionId) {
            const section = document.getElementById(sectionId);
            section.style.display = 'block';
            section.scrollIntoView({ behavior: 'smooth' });
        }

        // Initial animation
        document.querySelectorAll('.command').forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
            }, index * 300);
        });