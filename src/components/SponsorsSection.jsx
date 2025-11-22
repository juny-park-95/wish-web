import React from "react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function SponsorsSection() {
    const { ref, isVisible } = useScrollAnimation(0.1);

    const sponsors = [
        "aica.png", "daedong.png", "dima.png", "gca.png", "kcon.png",
        "kwater.png", "locus.png", "marostudio.png", "nipa.png", "pluxity.png",
        "samchully.png", "sapeon.png", "snc.png", "stlogic.png", "uplus.png"
    ];

    return (
        <section className="section" style={{ background: 'var(--color-bg-secondary)', padding: '6rem 0' }}>
            <div className="container">
                <div ref={ref} className={`sponsors-content ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`}>
                    <h2 className="section-title" style={{
                        textAlign: 'center',
                        marginBottom: '4rem',
                        color: 'var(--color-text-primary)',
                        fontSize: '2rem',
                        fontWeight: '700'
                    }}>
                        Trusted Partners
                    </h2>

                    <div className="sponsors-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                        gap: '2rem',
                        alignItems: 'center',
                        justifyItems: 'center'
                    }}>
                        {sponsors.map((sponsor, index) => (
                            <div key={index} className="sponsor-item" style={{
                                width: '100%',
                                height: '100px',
                                background: 'white',
                                borderRadius: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '1.5rem',
                                transition: 'all 0.3s ease',
                                opacity: 0.9,
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = '1';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = '0.9';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                                }}
                            >
                                <img
                                    src={`/sponsors/${sponsor}`}
                                    alt={`Partner ${index + 1}`}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SponsorsSection;
